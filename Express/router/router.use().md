### `router.use()`

- **`router.use([path], middleware)`**: This method is used to apply middleware functions to the router. It can be used for all HTTP methods and routes, or constrained to a specific path. Middleware functions can modify the request, response, or end the request-response cycle. If no `path` is specified, the middleware is applied to all routes handled by the router.

- <audio src="..\..\mp3\__`router.use([.mp3"></audio>

> **`router.use([path], middleware)`**：此方法用于将中间件函数应用于路由器。它可以处理所有 HTTP 方法和路由，或限制在特定路径上。中间件函数可以修改请求、响应，或结束请求-响应周期。如果未指定 `path`，则中间件将应用于路由器处理的所有路径。
>
> <audio src="..\..\mp3\`router.use([pa.mp3"></audio>

| Parameter    | Description                             | Example Value                 |
| ------------ | --------------------------------------- | ----------------------------- |
| `path`       | (Optional) Path to limit the middleware | `'/user'`                     |
| `middleware` | Function to handle requests/responses   | `(req, res, next) => { ... }` |

#### Example:

<audio src="..\..\mp3\`router.use()` .mp3"></audio>

```js
const express = require('express');
const router = express.Router();

// Middleware applied to all routes
router.use((req, res, next) => {
  console.log('Time:', Date.now());
  next();  // Pass control to the next handler
});

// Middleware applied only to /user routes
router.use('/user', (req, res, next) => {
  console.log('User route accessed');
  next();
});

// Define a route
router.get('/user', (req, res) => {
  res.send('User page');
});

// Export the router
module.exports = router;
```

In this example, `router.use()` applies a middleware that logs the request time for all routes, and another middleware specifically for `/user` routes that logs when the user route is accessed.