---
title: 浏览器
layout: "doc"
createTime: "2024-02-16"
next: false
---

## 同源策略

同源策略是浏览器的一项安全策略，即**浏览器的行为**。用于限制一个网页文档或脚本如何与另一个源的资源进行交互。**同源指的是协议（HTTPS/HTTP）、域名（Domain）和端口号（Port）都相同的情况**。同源策略的主要目的是防止恶意网站通过跨站点脚本攻击（XSS）或跨站点请求伪造（CSRF）等方式，获取用户的敏感信息或对用户进行攻击。

同源策略会带来以下影响：

1. 限制跨域资源的访问：浏览器会阻止页面中的 JavaScript 代码从不同源的服务器上获取数据，这意味着无法通过 AJAX 请求获取不同源的数据。
2. Cookie、LocalStorage 和 IndexDB 限制：浏览器不允许页面读取或设置不同源的 Cookie、LocalStorage 和 IndexDB。
3. 限制跨域的 DOM 操作：无法直接操作不同源页面的 DOM 元素。

针对这些限制，可以通过以下技术解决方案来克服同源策略的影响：

1. JSONP（JSON with Padding）：利用 script 标签的跨域特性，通过动态创建 script 标签来获取跨域数据。
2. CORS（Cross-Origin Resource Sharing）：在服务器端设置响应头，允许跨域请求。
3. 代理：通过服务器端代理来转发跨域请求，将跨域请求变为同域请求。
4. WebSocket：使用 WebSocket 协议进行跨域通信。
