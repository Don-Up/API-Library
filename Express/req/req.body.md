### `req.body`

- **`req.body`**: This object contains data sent in the body of an HTTP request, typically in a POST or PUT request. To access `req.body`, middleware like `express.json()` or `express.urlencoded()` must be used to parse incoming JSON or URL-encoded data. It allows you to handle form data, JSON payloads, etc., submitted by the client.

- <audio src="..\..\mp3\`req.body`_ Thi.mp3"></audio>

> **`req.body`**：此对象**包含通过 HTTP 请求主体发送的数据**，通常在 POST 或 PUT 请求中使用。要访问 `req.body`，需要使用中间件（如 `express.json()` 或 `express.urlencoded()`）来解析传入的 JSON 或 URL 编码数据。它允许你处理客户端提交的表单数据、JSON 数据等。
>
> <audio src="..\..\mp3\`req.body`：此对象包.mp3"></audio>

| Parameter | Description                       | Example Value |
| --------- | --------------------------------- | ------------- |
| `name`    | Field from POST body (e.g., form) | `'John Doe'`  |
| `age`     | Field from POST body (e.g., form) | `30`          |

#### Example:

<audio src="..\..\mp3\在这段代码中，`req.bod.mp3"></audio>

```js
const express = require('express');
const app = express();

// Middleware to parse JSON body
app.use(express.json());

// Route to handle POST request
app.post('/user', (req, res) => {
  const { name, age } = req.body;  // Access data from request body
  res.send(`User: ${name}, Age: ${age}`);
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

In this example, `req.body` is used to access the `name` and `age` fields from the JSON payload of a POST request.