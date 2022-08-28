<p align="center">
  <a href="https://www.apipost.cn/" target="_blank">
    <img alt="A-Design Logo" width="360" src="https://img.cdn.apipost.cn/cdn/opensource/apipost-opensource.svg" />
  </a>
</p>

# 🚀 ajax2apipost
Convert common jquery Ajax parameter formats to Apipost standard parameter formats.
## Install

```
$ npm install ajax2apipost
```

##  Usage
### render
```javascript
const ajaxPara2Apipost = require('ajax2apipost');

let json = ajaxPara2Apipost({
    url: "https://echo.apipost.cn/get.php",
    data: JSON.stringify({ "id": { title: "大三大四的" } }),
    type: "POST",
    headers: { "X-Test-Header": "test-value", Accept: "application/json; charset=utf-8" },
    contentType: "application/json"
})

console.log(json)

/*
{
    "target_id": "ad14d85c-6f22-4ba6-a9c8-3283bd05acdd",
    "url": "https://echo.apipost.cn/get.php",
    "request": {
        "url": "https://echo.apipost.cn/get.php",
        "header": {
            "parameter": [
                {
                    "is_checked": 1,
                    "key": "content-type",
                    "value": "application/json"
                },
                {
                    "is_checked": 1,
                    "key": "X-Test-Header",
                    "value": "test-value"
                },
                {
                    "is_checked": 1,
                    "key": "Accept",
                    "value": "application/json; charset=utf-8"
                }
            ]
        },
        "query": {
            "parameter": [
                
            ]
        },
        "body": {
            "mode": "json",
            "parameter": [
                
            ],
            "raw": "{\"id\":{\"title\":\"大三大四的\"}}"
        },
        "auth": {
            "type": "noauth"
        }
    },
    "method": "POST"
}
*/
```
