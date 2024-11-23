### `res.redirect()`

- **`res.redirect()`**: This method redirects the client to a different URL. It can take a status code (optional) and a URL as arguments. By default, the status code is `302` (Found), which indicates a temporary redirect. You can also specify other status codes like `301` (Moved Permanently) for permanent redirects.

- <audio src="../../../../Downloads/__`res.redirect.mp3"></audio>

> **`res.redirect()`**：此方法将客户端重定向到另一个 URL。它接受一个状态码（可选）和一个 URL 作为参数。默认状态码是 `302`，表示临时重定向。你也可以使用 `301` 等其他状态码来进行永久重定向。
>
> <audio src="../../../../Downloads/`res.redirect().mp3"></audio>

| Parameter | Description                                  | Example Argument        |
| --------- | -------------------------------------------- | ----------------------- |
| `status`  | (Optional) HTTP status code for the redirect | `301`                   |
| `url`     | The URL to redirect to                       | `'https://example.com'` |

#### Example:

<audio src="../../../../Downloads/在这段代码中，`res.red.mp3"></audio>

```js
const express = require('express');
const app = express();

// 302 (default) temporary redirect
app.get('/temp', (req, res) => {
  res.redirect('https://example.com');
});

// 301 permanent redirect
app.get('/permanent', (req, res) => {
  res.redirect(301, 'https://example.com');
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

In this example, `res.redirect()` is used for both a temporary `302` redirect and a permanent `301` redirect.