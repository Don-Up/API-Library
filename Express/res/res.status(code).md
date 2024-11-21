### `res.status(code)`

- **`res.status(code)`**: This method sets the HTTP status code for the response. It is used to specify the result of an HTTP request, such as `200` for success, `404` for not found, or `500` for a server error. It can be chained with other response methods like `res.send()` or `res.json()` to send the status along with the response body.

> **`res.status(code)`**：此方法用于设置 HTTP 响应的状态码。可以指定 HTTP 请求的结果，比如 `200` 表示成功，`404` 表示未找到，`500` 表示服务器错误。可以与 `res.send()` 或 `res.json()` 等方法链式调用，一起发送状态码和响应数据。

#### Example:

```js
const express = require('express');
const app = express();

// Route with a 404 status code
app.get('/not-found', (req, res) => {
  res.status(404).send('Page not found');
});

// Route with a 200 status code and JSON response
app.get('/success', (req, res) => {
  res.status(200).json({ message: 'Success!' });
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

In this example, `res.status(404)` sends a "Not Found" response, and `res.status(200)` sends a success message with a `200 OK` status.