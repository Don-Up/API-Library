### `res.json(obj)`

- **`res.json(obj)`**: This method sends a JSON response to the client. It automatically converts the JavaScript object or array passed as `obj` into a JSON string and sets the `Content-Type` header to `application/json`. It also ensures proper formatting and escaping of the JSON data. Like `res.send()`, it ends the response once called.

- <audio src="../../../../Downloads/__`res.json(obj.mp3"></audio>

> **`res.json(obj)`**：此方法用于向客户端发送 JSON 响应。它会自动将传入的 JavaScript 对象或数组转换为 JSON 字符串，并将 `Content-Type` 头设置为 `application/json`。调用后将结束响应过程。
>
> <audio src="../../../../Downloads/`res.json(obj)`.mp3"></audio>

#### Example:

<audio src="../../../../Downloads/在这段代码中，`res.jso.mp3"></audio>

```js
const express = require('express');
const app = express();

// Send a JSON response
app.get('/user', (req, res) => {
  res.json({ id: 1, name: 'John Doe', age: 30 });
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

In this example, `res.json()` sends a JSON object to the client, and the `Content-Type` is automatically set to `application/json`.