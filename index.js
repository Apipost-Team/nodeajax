const ajaxPara2Apipost = require("ajax-apipost"),
  _ = require("lodash"),
  extTools = require("apipost-tools"),
  JSON5 = require("json5"),
  apipostRequest = require("apipost-send");

async function nodeAjax(options) {
  if (typeof arguments[1] === "function" && _.isString(arguments[0])) {
    options = {
      url: arguments[0],
      method: "GET",
      success: arguments[1],
      data: {},
    };
  }
  const _target = ajaxPara2Apipost(options);
  const request = new apipostRequest({
    timeout:
      _.isNumber(options.timeout) && options.timeout >= 0
        ? options.timeout
        : 5000,
  });

  await request
    .request(_target)
    .then((data) => {
      if (
        _.isObject(data) &&
        data.status == "success" &&
        _.has(data, "data.response.rawBody")
      ) {
        let res = data.data.response.rawBody;
        let ext = {
          cookies: data.data.response["cookies"],
          headers: data.data.response["headers"],
        };
        if (extTools.isJson5(data.data.response.rawBody)) {
          res = JSON5.parse(data.data.response.rawBody);
        }

        if (_.has(options, "success") && _.isFunction(options.success)) {
          options.success(res, "success", null, ext);
        }

        if (_.has(options, "complete") && _.isFunction(options.complete)) {
          options.complete(null, "success");
        }
      }
    })
    .catch((err) => {
      if (_.has(options, "error") && _.isFunction(options.error)) {
        options.error(null, "error", err);
      }

      if (_.has(options, "complete") && _.isFunction(options.complete)) {
        options.complete(null, "error");
      }
    });
}

module.exports = nodeAjax;
module.exports.nodeAjax = nodeAjax;
