### `req.params`

- **`req.params`**: This is an object containing route parameters from the URL path. When you define URL parameters in a route using the colon (`:`) syntax (e.g., `/user/:id`), Express extracts the values from the URL and populates `req.params` with key-value pairs, where the key is the parameter name, and the value is the corresponding part of the URL.

> **`req.params`**：这是一个包含 URL 路径中的路由参数的对象。当你在路由中使用冒号 (`:`) 语法定义 URL 参数（例如 `/user/:id`）时，Express 会从 URL 中提取值，并将其以键值对的形式填充到 `req.params` 对象中，键是参数名，值是 URL 中对应的部分。

| Parameter | Description                                  | Example Value |
| --------- | -------------------------------------------- | ------------- |
| `id`      | The dynamic part of the URL defined by `:id` | `'123'`       |

#### Example:

```js
const express = require('express');
const app = express();

// Route with dynamic parameter
app.get('/user/:id', (req, res) => {
  const userId = req.params.id;  // Access the `id` parameter from the URL
  res.send(`User ID is: ${userId}`);
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

In this example, `req.params.id` extracts the `id` parameter from the URL (e.g., `/user/123`), and it is sent back in the response.