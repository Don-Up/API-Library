### `app.use([path], middleware)`

- **`app.use([path], middleware)`**: This method mounts middleware functions to the Express application. If a `path` is provided, the middleware is executed only for requests to that path. If no `path` is specified, the middleware applies to **all** requests. Middleware functions can modify the `req` and `res` objects or end the request-response cycle.

> **`app.use([path], middleware)`**：此方法将中间件函数挂载到 Express 应用。如果提供了路径，只有该路径的请求才会执行中间件。如果未指定路径，中间件将应用于所有请求。中间件可以修改 `req` 和 `res` 对象或结束请求响应周期。

#### Example:

```js
const express = require('express');
const app = express();

// Global middleware (applies to all routes)
app.use((req, res, next) => {
  console.log('Request received:', req.method, req.path);
  next(); // Pass control to the next middleware
});

// Middleware for a specific path
app.use('/admin', (req, res, next) => {
  console.log('Admin area accessed');
  next();
});

// Define a route
app.get('/', (req, res) => {
  res.send('Home Page');
});

// Admin route
app.get('/admin', (req, res) => {
  res.send('Admin Page');
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

In this example, the first `app.use` is global middleware that logs every request, while the second applies only to the `/admin` path.