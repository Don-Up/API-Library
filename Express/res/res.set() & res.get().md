### `res.set(field, [value])` and `res.get(field)`

- **`res.set(field, [value])`**: This method sets the `HTTP` response header. If only `field` is provided as an object, it sets multiple headers at once. If both `field` and `value` are provided, it sets a single header.

- **`res.get(field)`**: This method retrieves the value of a specific response header that has been set.

- <audio src="..\..\mp3\- __`res.set(fi.mp3"></audio>

> **`res.set(field, [value])` 和 `res.get(field)`**：`res.set()` 用于设置 HTTP 响应头。当仅提供 `field` 作为对象时，可以一次设置多个头部。提供 `field` 和 `value` 时设置单个头部。`res.get()` 用于获取已设置的响应头的值。
>
> <audio src="..\..\mp3\`res.set(field,.mp3"></audio>

| Parameter | Description                        | Example Argument                    |
| --------- | ---------------------------------- | ----------------------------------- |
| `field`   | The name of the header field       | `'Content-Type'`, `'Custom-Header'` |
| `value`   | (Optional) The header value to set | `'application/json'`, `'12345'`     |

#### Example:

<audio src="..\..\mp3\在这段代码中，`res.set.mp3"></audio>

```js
const express = require('express');
const app = express();

// Set a custom header
app.get('/set-header', (req, res) => {
  res.set('Custom-Header', '12345');
  res.send('Header is set');
});

// Get a header value
app.get('/get-header', (req, res) => {
  res.set('Custom-Header', '12345');
  const headerValue = res.get('Custom-Header');
  res.send(`Custom-Header is: ${headerValue}`);
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

In this example, `res.set()` sets a custom header, and `res.get()` retrieves and sends it back in the response.