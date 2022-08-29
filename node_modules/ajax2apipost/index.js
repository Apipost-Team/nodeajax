const _ = require('lodash'),
    apipostTools = require('apipost-tools'),
    uuid = require('uuid');
// apipostRequest = require('apipost-send');

function ajaxPara2Apipost(request) {
    const obj = {};
    // target_id
    _.set(obj, 'target_id', uuid.v4());

    // url
    if (_.has(request, 'url') && _.isString(request.url)) {
        _.set(obj, 'url', request.url);
        _.set(obj, 'request.url', request.url);
    }

    // method
    if (_.has(request, 'type') && _.isString(request.type)) {
        _.set(obj, 'method', request.type);
    } else if (_.has(request, 'method') && _.isString(request.method)) {
        _.set(obj, 'method', request.method);
    }

    // headers
    const headers = [];
    if (_.has(request, 'contentType') && _.isString(request.contentType)) {
        headers.push({
            is_checked: 1,
            key: 'content-type',
            value: request.contentType,
        });
    }

    if (_.has(request, 'headers') && _.isPlainObject(request.headers)) {
        _.forEach(request.headers, (value, key) => {
            headers.push({
                is_checked: 1,
                key,
                value,
            });
        });
    }
    _.set(obj, 'request.header.parameter', headers);

    // query
    _.set(obj, 'request.query.parameter', []);

    // body
    if (_.has(request, 'data')) {
        // form-data
        if (_.isObject(request.data) && request.data instanceof FormData) {
            _.set(obj, 'request.body.mode', 'form-data');

            const body = [];
            for (const [key, value] of request.data.entries()) {
                body.push({
                    is_checked: 1,
                    key,
                    value,
                });
            }

            _.set(obj, 'request.body.parameter', body);
            _.set(obj, 'request.body.raw', '');
        }

        // urlencoded
        if (_.isPlainObject(request.data)) {
            _.set(obj, 'request.body.mode', 'urlencoded');

            const body = [];
            _.forEach(request.data, (value, key) => {
                body.push({
                    is_checked: 1,
                    key,
                    value,
                });
            });

            _.set(obj, 'request.body.parameter', body);
            _.set(obj, 'request.body.raw', '');
        }

        // raw
        if (_.isString(request.data)) {
            if (apipostTools.isJson5(request.data)) {
                _.set(obj, 'request.body.mode', 'json');
            } else if (apipostTools.isXml(request.data)) {
                _.set(obj, 'request.body.mode', 'xml');
            } else if (apipostTools.isHtml(request.data)) {
                _.set(obj, 'request.body.mode', 'html');
            } else {
                try {
                    eval(request.data);
                    _.set(obj, 'request.body.mode', 'javascript');
                } catch (e) {
                    _.set(obj, 'request.body.mode', 'plain');
                }
            }
            _.set(obj, 'request.body.parameter', []);
            _.set(obj, 'request.body.raw', request.data);
        }
    } else {
        _.set(obj, 'request.body.mode', 'none');
        _.set(obj, 'request.body.parameter', []);
        _.set(obj, 'request.body.raw', '');
    }

    // auth
    _.set(obj, 'request.auth.type', 'noauth');

    return obj;
}

module.exports = ajaxPara2Apipost;
module.exports.ajaxPara2Apipost = ajaxPara2Apipost;
