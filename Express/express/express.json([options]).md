### `express.json([options])`

- **`express.json([options])`**: This middleware parses incoming requests with JSON payloads and is based on `body-parser`. It parses the `application/json` content-type and populates `req.body` with the resulting JSON object. The `options` argument can configure features like limiting the size of the JSON body or handling errors.

> **`express.json([options])`**：此中间件用于解析带有 JSON 负载的传入请求，基于 `body-parser`。它解析 `application/json` 类型的内容，并将结果 JSON 对象填充到 `req.body` 中。`options` 参数可以配置功能，例如限制 JSON 体的大小或处理错误。

| Parameter | Description                                 | Example Value      |
| --------- | ------------------------------------------- | ------------------ |
| `options` | (Optional) Middleware configuration options | `{ limit: '1mb' }` |

#### Example:

```js
const express = require('express');
const app = express();

// Use express.json to parse incoming JSON requests
app.use(express.json({ limit: '1mb' }));  // Limit JSON body size to 1MB

app.post('/data', (req, res) => {
  console.log(req.body);  // Access parsed JSON body
  res.send('JSON data received');
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

In this example, `express.json()` parses the incoming JSON request body, and the parsed data is available in `req.body`. The `limit` option restricts the body size to 1MB.