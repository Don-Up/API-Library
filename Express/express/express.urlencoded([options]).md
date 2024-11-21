### `express.urlencoded([options])`

- **`express.urlencoded([options])`**: This middleware parses incoming requests with URL-encoded payloads, typically from HTML form submissions (`application/x-www-form-urlencoded`). It populates `req.body` with the parsed data. The `options` parameter can customize behavior, such as limiting payload size or using extended mode to parse complex objects.

> **`express.urlencoded([options])`**：此中间件用于解析带有 URL 编码负载的传入请求，通常来自 HTML 表单提交（`application/x-www-form-urlencoded`）。它将解析后的数据填充到 `req.body` 中。`options` 参数可用于自定义行为，例如限制负载大小或使用扩展模式解析复杂对象。

| Parameter | Description                                 | Example Value        |
| --------- | ------------------------------------------- | -------------------- |
| `options` | (Optional) Middleware configuration options | `{ extended: true }` |

#### Example:

```js
const express = require('express');
const app = express();

// Use express.urlencoded to parse URL-encoded payloads
app.use(express.urlencoded({ extended: true }));  // Allows for rich objects and arrays

app.post('/submit', (req, res) => {
  console.log(req.body);  // Access parsed form data
  res.send('Form data received');
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

In this example, `express.urlencoded()` parses form submissions, storing the parsed data in `req.body`. The `{ extended: true }` option allows for more complex objects.