### `router.route()`

- **`router.route(path)`**: This method allows you to define multiple HTTP methods (e.g., `GET`, `POST`, `PUT`, `DELETE`) for a single route path, using method chaining. It helps organize route handlers for the same path more cleanly, avoiding repetitive code.

- <audio src="../../../../Downloads/__`router.route.mp3"></audio>

> **`router.route(path)`**：该方法允许你为单一路径定义多个 HTTP 方法（如 `GET`、`POST`、`PUT`、`DELETE`），并通过链式调用进行组织。它有助于更清晰地组织相同路径的路由处理程序，避免代码重复。
>
> <audio src="../../../../Downloads/router.route(pa.mp3"></audio>

| Parameter | Description              | Example Value |
| --------- | ------------------------ | ------------- |
| `path`    | The route path to handle | `'/user'`     |

#### Example:

<audio src="../../../../Downloads/`router.route().mp3"></audio>

```js
const express = require('express');
const router = express.Router();

// Define multiple methods for the '/user' route
router.route('/user')
  .get((req, res) => {
    res.send('GET request to /user');
  })
  .post((req, res) => {
    res.send('POST request to /user');
  });

// Export the router
module.exports = router;
```

In this example, `router.route('/user')` handles both `GET` and `POST` requests for the `/user` route. This structure keeps the code organized by grouping multiple methods for the same route.