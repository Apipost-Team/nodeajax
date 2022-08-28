const ajaxPara2Apipost = require('ajax2apipost'),
    _ = require("lodash"),
    extTools = require('apipost-tools'),
    JSON5 = require('json5'),
    apipostRequest = require('apipost-send');

function nodeAjax(options) {
    let _target = ajaxPara2Apipost(options);
    let request = new apipostRequest({});

    request.request(_target).then((data) => {
        if (_.isObject(data) && data.status == "success" && _.has(data, 'data.response.rawBody')) {
            let res = data.data.response.rawBody;
            if (extTools.isJson5(data.data.response.rawBody)) {
                res = JSON5.parse(data.data.response.rawBody);
            }

            if (_.has(options, 'success') && _.isFunction(options.success)) {
                options.success(res, 'success', null);
            }

            if (_.has(options, 'complete') && _.isFunction(options.complete)) {
                options.complete(null, 'success');
            }
        }
    }).catch(err => {
        if (_.has(options, 'error') && _.isFunction(options.error)) {
            options.error(null, 'error', err);
        }

        if (_.has(options, 'complete') && _.isFunction(options.complete)) {
            options.complete(null, 'success');
        }
    });
}

module.exports = nodeAjax;
module.exports.nodeAjax = nodeAjax;