### `res.send(body)`

- **`res.send(body)`**: This method sends the HTTP response to the client. The `body` can be a string, JSON object, buffer, or an array. It automatically sets the `Content-Type` header based on the type of the `body`. If no status code is set, it defaults to `200 OK`. It also ends the response process once called.

> **`res.send(body)`**：此方法用于向客户端发送 HTTP 响应。`body` 可以是字符串、JSON 对象、缓冲区或数组。它会根据 `body` 的类型自动设置 `Content-Type` 头。如果没有设置状态码，默认状态码为 `200 OK`。调用后将结束响应流程。

#### Example:

```js
const express = require('express');
const app = express();

// String response
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// JSON response
app.get('/json', (req, res) => {
  res.send({ message: 'Hello, JSON!' });
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

In this example, `res.send()` is used to send a string and a JSON response, with the `Content-Type` automatically set to `text/html` and `application/json`, respectively.