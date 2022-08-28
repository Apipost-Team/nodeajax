<p align="center">
  <a href="https://adesign.apipost.cn/" target="_blank">
    <img alt="A-Design Logo" width="360" src="https://img.cdn.apipost.cn/cdn/opensource/apipost-opensource.svg" />
  </a>
</p>

apipost-send 是一个适用于 Node.js 的人性化的 HTTP 请求库

# 安装

```shell
npm i apipost-send
```

# 基础使用
需引入：

```js
import ASend from 'apipost-send';
let apiPostSend=new ASend(Options);
apiPostSend.request(apiPostApiJson).then((data)=>{
  console.log("success",data);
}).catch(err=>{
  console.log('error',err);
});
```

## Options type:Object

| *参数* | *类型* | *默认值* | *参数描述* |
| --- | --- | :---: | :---: |
| maxrequstloop | Number | 5 | 最大重定向次数 |
| followRedirect | Number | true | 是否允许重定向 1 允许 -1 不允许 |
| timeout | Number | 0 | 接口超时时间 |
| proxy | object | {} | 代理对象 |
| proxyAuth | string | username:password | 代理账号密码 |
| https | Object | {} | 证书相关 |

```js
https 默认
{ 
  "rejectUnauthorized": -1, // 忽略错误证书 1 -1
  "certificateAuthority": '', // ca证书地址
  "certificate": '', // 客户端证书地址
  "key": '', //客户端证书私钥文件地址
  "pfx": '', // pfx 证书地址
  "passphrase": '' // 私钥密码
}
```

# 开源协议

apipost-send 遵循 [MIT 协议](https://github.com/Apipost-Team/apipost-send)。
