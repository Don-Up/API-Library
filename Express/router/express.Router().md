### `express.Router()`

- **`express.Router()`**: This is a function used to create modular, mountable route handlers in Express. It allows you to define routes separately and then use them as middleware in your main app. This helps organize routes into smaller modules, improving code maintainability and readability.

> **`express.Router()`**：这是一个用于在 Express 中**创建模块化、可挂载的路由处理程序**的函数。它允许你在独立模块中定义路由，然后在主应用中作为中间件使用。这有助于将路由划分为更小的模块，从而提高代码的可维护性和可读性。

#### Example:

```js
const express = require('express');
const app = express();
const router = express.Router();  // Create a new router

// Define routes in the router
router.get('/user/:id', (req, res) => {
  res.send(`User ID: ${req.params.id}`);
});

// Use the router in the main app
app.use('/api', router);

// Start the server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

In this example, `express.Router()` is used to create a router that handles `/api/user/:id` routes, which is then mounted on the main app at the `/api` path.