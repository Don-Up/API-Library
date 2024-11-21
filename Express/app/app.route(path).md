### `app.route(path)`

- **`app.route(path)`**: This method allows you to define multiple HTTP methods (like GET, POST, PUT, etc.) for a single path, using a chainable interface. It helps avoid repeating the path for different methods and keeps the route definitions clean and organized.

> **`app.route(path)`**：此方法允许你为单一路径定义多个 HTTP 方法（如 GET、POST、PUT 等），并提供链式接口。这可以避免为不同方法重复定义路径，使路由定义更简洁和组织良好。

#### Example:

```js
const express = require('express');
const app = express();

// Chain GET and POST methods for the '/user' path
app.route('/user')
  .get((req, res) => {
    res.send('Get a user');
  })
  .post((req, res) => {
    res.send('Create a user');
  });

// Start the server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

In this example, `app.route('/user')` defines both GET and POST methods for the `/user` path, making the code more readable and structured.