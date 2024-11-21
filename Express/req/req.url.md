### `req.url`

- **`req.url`**: This property contains the full URL path of the request, including the path and query string (if any). It represents the part of the URL that comes after the domain. You can use it to inspect or manipulate the requested path or query parameters.

> **`req.url`**：此属性**包含请求的完整 URL 路径**，包括路径和查询字符串（如果有）。它表示在域名之后的 URL 部分。你可以使用它来检查或处理请求的路径或查询参数。

| Parameter | Description                        | Example Value         |
| --------- | ---------------------------------- | --------------------- |
| `url`     | The full URL path and query string | `'/search?term=node'` |

#### Example:

```js
const express = require('express');
const app = express();

// Route to display the requested URL
app.get('*', (req, res) => {
  const url = req.url;  // Access the full URL path
  res.send(`Requested URL: ${url}`);
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

In this example, `req.url` captures and returns the full URL path (including any query parameters) requested by the client. For instance, accessing `/search?term=node` would display `Requested URL: /search?term=node`.