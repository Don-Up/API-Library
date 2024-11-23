### `router.get()` & `router.post()`

- **`router.get(path, callback)`**: Defines a route handler for `GET` requests to a specific path. It responds when a client makes a `GET` request to that path.
  
- **`router.post(path, callback)`**: Defines a route handler for `POST` requests to a specific path. It responds when a client submits data via a `POST` request.

- <audio src="../../../../Downloads/- __`router.get.mp3"></audio>

> **`router.get(path, callback)` 和 `router.post(path, callback)`**：`router.get()` 用于处理客户端对指定路径的 `GET` 请求，`router.post()` 用于处理 `POST` 请求。`GET` 请求通常用于获取数据，而 `POST` 请求用于提交数据。
>
> <audio src="../../../../Downloads/`router.get(pat.mp3"></audio>

| Parameter  | Description                             | Example Value        |
| ---------- | --------------------------------------- | -------------------- |
| `path`     | The URL path to match                   | `'/user'`            |
| `callback` | Function to handle the request/response | `function(req, res)` |

#### Example:

<audio src="../../../../Downloads/在这段代码中，`router..mp3"></audio>

```js
const express = require('express');
const router = express.Router();

// Handle GET request
router.get('/user', (req, res) => {
  res.send('GET request to /user');
});

// Handle POST request
router.post('/user', (req, res) => {
  res.send('POST request to /user');
});

// Export the router
module.exports = router;
```

In this example, `router.get()` handles a `GET` request, and `router.post()` handles a `POST` request, both for the `/user` path.