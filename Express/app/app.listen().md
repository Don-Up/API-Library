### `app.listen()`

- **`app.listen()`**: This method is used to make the Express app listen for incoming connections on a specified port and optional hostname. It starts the HTTP server and can take a callback function that runs once the server begins listening. Commonly used to launch the server after defining routes and middleware.

> **`app.listen()`**：此方法用于让 Express 应用监听指定端口和可选的主机名上的传入连接。它启动 HTTP 服务器，并可以接受回调函数，在服务器开始监听时执行。通常用于在定义路由和中间件后启动服务器。

#### Example:

```js
const express = require('express');
const app = express();

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```

In this example, `app.listen(3000)` starts the Express app on port 3000, and the callback logs a message when the server is ready to handle requests.