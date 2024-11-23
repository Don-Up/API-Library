### `req.method`

- **`req.method`**: This property contains the HTTP method used in the request, such as `GET`, `POST`, `PUT`, `DELETE`, etc. It helps determine what kind of action the client is requesting, allowing the server to handle the request appropriately depending on the method used.

- <audio src="../../../../Downloads/__`req.method`_.mp3"></audio>

> **`req.method`**：此属性**包含请求中使用的 HTTP 方法**，例如 `GET`、`POST`、`PUT`、`DELETE` 等。它用于确定客户端请求的操作类型，帮助服务器根据使用的方法来处理请求。
>
> <audio src="../../../../Downloads/`req.method`：此属.mp3"></audio>

| Parameter | Description                     | Example Value |
| --------- | ------------------------------- | ------------- |
| `method`  | HTTP method used in the request | `'GET'`       |

#### Example:

<audio src="../../../../Downloads/在这段代码中，`req.met.mp3"></audio>

```js
const express = require('express');
const app = express();

// Route to check the HTTP method used
app.all('/method-check', (req, res) => {
  const method = req.method;  // Access the HTTP method
  res.send(`HTTP method used: ${method}`);
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

In this example, `req.method` returns the method used in the request (e.g., `GET`, `POST`) and sends it back in the response. The `app.all()` method handles requests with any HTTP method.