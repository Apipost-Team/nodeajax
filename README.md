<p align="center">
  <a href="https://www.apipost.cn/" target="_blank">
    <img alt="A-Design Logo" width="360" src="https://img.cdn.apipost.cn/cdn/opensource/apipost-opensource.svg" />
  </a>
</p>

# 🚀 nodeajax
Implementing Ajax request of jQuery with node without cross-domain.
## Install

```
$ npm install ajax-for-node
```

##  Usage
```javascript
const nodeAjax = require('ajax-for-node');

var formData = new FormData();
formData.append("username", "Groucho");
formData.append("accountnum", 123456);

nodeAjax({
    url: "https://echo.apipost.cn/get.php",
    data: formData,
    type: "POST",
    processData: false,
    contentType: false,
    success: function (data, status, xhr) {
        console.log(data, status, xhr)
    },
    error: function (xhr, status, error) {
        console.log(xhr, status, error)
    },
    complete: function (xhr, status) {
        console.log(xhr, status)
    }
});
```
