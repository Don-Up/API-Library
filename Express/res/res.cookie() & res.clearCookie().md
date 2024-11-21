### `res.cookie()` and `res.clearCookie()`

- **`res.cookie(name, value, [options])`**: This method is used to set a cookie on the client. The `name` is the cookie's key, `value` is the data, and `options` can define properties like `maxAge`, `httpOnly`, and `secure`.

- **`res.clearCookie(name, [options])`**: This method clears a cookie by setting its expiration date in the past.

> **`res.cookie(name, value, [options])` 和 `res.clearCookie(name, [options])`**：`res.cookie()` 用于在客户端设置 cookie，`name` 是 cookie 的键，`value` 是数据，`options` 可以定义 `maxAge`、`httpOnly`、`secure` 等属性。`res.clearCookie()` 通过将过期时间设置为过去的时间来清除 cookie。

| Parameter | Description                              | Example Argument                    |
| --------- | ---------------------------------------- | ----------------------------------- |
| `name`    | The name of the cookie                   | `'sessionId'`                       |
| `value`   | The value of the cookie                  | `'12345'`                           |
| `options` | (Optional) Options for cookie properties | `{ httpOnly: true, maxAge: 60000 }` |

#### Example:

```js
const express = require('express');
const app = express();

// Set a cookie
app.get('/set-cookie', (req, res) => {
  res.cookie('sessionId', '12345', { httpOnly: true, maxAge: 60000 });
  res.send('Cookie has been set');
});

// Clear the cookie
app.get('/clear-cookie', (req, res) => {
  res.clearCookie('sessionId');
  res.send('Cookie has been cleared');
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

In this example, `res.cookie()` sets a `sessionId` cookie, and `res.clearCookie()` removes it. The cookie is marked as `httpOnly` for security.