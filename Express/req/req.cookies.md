### `req.cookies`

- **`req.cookies`**: This object contains cookies sent by the client in the `Cookie` header. To access `req.cookies`, you must use middleware like `cookie-parser` to parse the cookies. Each cookie is stored as a key-value pair in `req.cookies`, where the key is the cookie name, and the value is its content.

> **`req.cookies`**：此对象**包含客户端通过 `Cookie` 头发送的 cookie**。要访问 `req.cookies`，需要使用中间件（如 `cookie-parser`）来解析 cookie。每个 cookie 作为键值对存储在 `req.cookies` 中，键是 cookie 的名称，值是其内容。

| Parameter   | Description                        | Example Value |
| ----------- | ---------------------------------- | ------------- |
| `sessionId` | A cookie representing a session ID | `'abc123'`    |
| `username`  | A cookie storing the username      | `'john_doe'`  |

#### Example:

```js
const express = require('express');
const cookieParser = require('cookie-parser');  // Import cookie-parser middleware
const app = express();

// Use cookie-parser middleware
app.use(cookieParser());

// Route to access cookies
app.get('/cookies', (req, res) => {
  const sessionId = req.cookies.sessionId;  // Access 'sessionId' cookie
  res.send(`Session ID: ${sessionId}`);
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```

In this example, `req.cookies.sessionId` accesses the `sessionId` cookie sent by the client, after parsing with `cookie-parser`.