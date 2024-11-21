### `req.headers`

- **`req.headers`**: This object contains the headers sent by the client in the HTTP request. Headers provide metadata such as content type, user agent, or authorization information. These key-value pairs can be accessed directly from `req.headers` to retrieve specific header values. All header names are case-insensitive.

> **`req.headers`**：此对象包含客户端在 HTTP 请求中发送的头信息。头信息提供了元数据，例如内容类型、用户代理或授权信息。这些键值对可以通过 `req.headers` 直接访问，以获取特定的头信息值。所有头名称对大小写不敏感。

| Parameter      | Description                          | Example Value        |
| -------------- | ------------------------------------ | -------------------- |
| `content-type` | Specifies the media type of the body | `'application/json'` |
| `user-agent`   | Identifies the client software       | `'Mozilla/5.0'`      |

#### Example:

```js
const express = require('express');
const app = express();

// Route to output request headers
app.get('/headers', (req, res) => {
  const contentType = req.headers['content-type'];  // Access specific header
  const userAgent = req.headers['user-agent'];      // Access user-agent header
  res.send(`Content-Type: ${contentType}, User-Agent: ${userAgent}`);
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

In this example, `req.headers['content-type']` and `req.headers['user-agent']` retrieve the respective headers sent by the client in the request.