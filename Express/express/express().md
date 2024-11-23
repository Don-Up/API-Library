### `express()`

- **`express()`**: This function initializes an Express application. It returns an instance of an Express app, which is used to set up middleware, define routes, and handle incoming HTTP requests and responses. The `express()` function is the starting point for building an Express server.

- <audio src="..\..\mp3\__`express`___ .mp3"></audio>

> **`express()`**：此函数用于初始化一个 Express 应用，并返回一个 Express 应用实例。你可以使用这个实例来配置中间件、定义路由以及处理 HTTP 请求和响应。`express()` 是构建 Express 服务器的起点。
>
> <audio src="..\..\mp3\`express()`：此函数.mp3"></audio>

#### Example:

<audio src="..\..\mp3\这段代码的重点是 expres (1).mp3"></audio>

```js
const express = require('express');
const app = express(); // Initialize an Express application

// Define a basic route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```

In this example, `express()` creates the app, which listens for requests and serves responses on defined routes (e.g., `/`).