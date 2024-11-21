### `req.is()`

- **`req.is(type)`**: This method checks if the incoming request's `Content-Type` header matches the specified MIME type. It can take a full MIME type (e.g., `'application/json'`) or a shorthand (e.g., `'json'`). If the request matches the specified type, it returns `true`; otherwise, it returns `false`.

> **`req.is(type)`**：此方法用于检查传入请求的 `Content-Type` 头是否与指定的 MIME 类型匹配。它可以接受完整的 MIME 类型（如 `'application/json'`）或简写（如 `'json'`）。如果请求匹配指定类型，则返回 `true`；否则返回 `false`。

| Parameter | Description                                 | Example Value                  |
| --------- | ------------------------------------------- | ------------------------------ |
| `type`    | The MIME type or shorthand to check against | `'application/json'`, `'json'` |

#### Example:

```js
const express = require('express');
const app = express();

// Middleware to check content type
app.post('/upload', (req, res) => {
  if (req.is('json')) {
    res.send('Received JSON data');
  } else {
    res.status(400).send('Expected JSON');
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

In this example, `req.is('json')` checks if the incoming request's `Content-Type` is JSON. If the check fails, a `400` error is returned.