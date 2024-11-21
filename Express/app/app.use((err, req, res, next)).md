### `app.use((err, req, res, next))`

- **`app.use((err, req, res, next))`**: This is an error-handling middleware in Express. It captures any errors passed to `next(err)` or thrown during request processing. The error-handling middleware has four parameters: `err`, `req`, `res`, and `next`. Use this middleware to handle errors, send error responses, or log them. It must be defined after all other routes and middleware.

> **`app.use((err, req, res, next))`**：这是 Express 中的错误处理中间件。它捕获通过 `next(err)` 传递的错误或请求处理过程中抛出的错误。该中间件有四个参数：`err`、`req`、`res` 和 `next`。你可以使用它来处理错误、发送错误响应或记录错误。它必须定义在所有其他路由和中间件之后。

| Parameter | Description                                 | Example Value        |
| --------- | ------------------------------------------- | -------------------- |
| `err`     | The error object                            | `new Error('Error')` |
| `req`     | The request object                          | `req`                |
| `res`     | The response object                         | `res`                |
| `next`    | Function to pass control to next middleware | `next`               |

#### Example:

```js
const express = require('express');
const app = express();

// A route that causes an error
app.get('/error', (req, res, next) => {
  const err = new Error('Something went wrong!');
  next(err);  // Pass the error to the error-handling middleware
});

// Error-handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);  // Log the error
  res.status(500).send('Internal Server Error');
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

In this example, `app.use((err, req, res, next))` catches any error thrown by the `/error` route and sends a `500 Internal Server Error` response.