### `res.end()`

- **`res.end([data], [encoding])`**: This method ends the response process. It can optionally send `data` as the response body before closing the connection. Unlike `res.send()`, `res.end()` does not set any headers or status codes unless explicitly done beforehand. It is often used to terminate the response without sending a body or after streaming data.

> **`res.end([data], [encoding])`**：此方法用于结束响应流程。它可以在关闭连接前可选地发送 `data` 作为响应体。与 `res.send()` 不同，`res.end()` 不会自动设置任何头信息或状态码，除非在之前手动设置。该方法通常用于不发送主体时结束响应，或用于流式传输后结束响应。

| Parameter  | Description                           | Example Argument |
| ---------- | ------------------------------------- | ---------------- |
| `data`     | (Optional) Data to send before ending | `'Goodbye!'`     |
| `encoding` | (Optional) Character encoding         | `'utf-8'`        |

#### Example:

```js
const express = require('express');
const app = express();

// End the response without data
app.get('/end-no-data', (req, res) => {
  res.status(200);
  res.end();  // Ends response without body
});

// End the response with data
app.get('/end-with-data', (req, res) => {
  res.end('Goodbye!');  // Ends response with a message
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

In this example, `res.end()` is used to terminate the response, once without sending data and once with a message (`"Goodbye!"`).