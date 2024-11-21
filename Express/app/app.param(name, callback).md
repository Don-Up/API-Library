### `app.param(name, callback)`

- **`app.param(name, callback)`**: This method is used to define middleware that is executed **automatically** whenever a specific route parameter (e.g., `:id`) is present in the URL. It allows you to pre-process route parameters, such as validating or modifying them before the route handler is executed.

> **`app.param(name, callback)`**：此方法用于定义中间件，当 URL 中存在特定路由参数（例如 `:id`）时，自动执行。它允许你在执行路由处理程序之前，预处理、验证或修改这些参数。

#### Example:

```js
const express = require('express');
const app = express();

// Middleware to process the 'id' param
app.param('id', (req, res, next, id) => {
  console.log(`Processing ID: ${id}`);
  req.user = { id: id, name: 'John Doe' }; // Simulating user lookup
  next(); // Pass control to the next middleware
});

// Route using the 'id' param
app.get('/user/:id', (req, res) => {
  res.send(`User ID: ${req.user.id}, Name: ${req.user.name}`);
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

In this example, `app.param('id', ...)` middleware runs whenever the `:id` parameter is in the route, allowing you to process the `id` before the route handler runs.