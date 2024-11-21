### `req.get()`

- **`req.get(field)`**: This method retrieves the value of a specific HTTP request header by its name. It is case-insensitive and can be used to access request headers like `Content-Type`, `Authorization`, or custom headers. If the header is not found, it returns `undefined`.

> **`req.get(field)`**：此方法用于按名称获取指定的 HTTP 请求头的值。它对大小写不敏感，常用于访问 `Content-Type`、`Authorization` 等请求头。如果请求头不存在，会返回 `undefined`。

| Parameter | Description                        | Example Value    |
| --------- | ---------------------------------- | ---------------- |
| `field`   | The name of the header to retrieve | `'Content-Type'` |

#### Example:

```js
const express = require('express');
const app = express();

// Route to display a specific request header
app.get('/', (req, res) => {
  const contentType = req.get('Content-Type');  // Access the 'Content-Type' header
  const userAgent = req.get('User-Agent');      // Access the 'User-Agent' header
  res.send(`Content-Type: ${contentType || 'not set'}, User-Agent: ${userAgent}`);
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

In this example, `req.get('Content-Type')` and `req.get('User-Agent')` retrieve the respective headers from the request made by the client. If the header is missing, it returns `undefined`.