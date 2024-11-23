### `express.static(root, [options])`

- **`express.static(root, [options])`**: This middleware serves static files (like images, CSS, JavaScript) from the specified `root` directory. It allows you to serve assets directly without defining routes. The `options` parameter can customize behavior, such as setting cache control, handling hidden files, or specifying a fallback extension.

- <audio src="../../../../Downloads/__`express.stat.mp3"></audio>

> **`express.static(root, [options])`**：此中间件用于从指定的 `root` 目录提供静态文件（如图片、CSS、JavaScript）。它允许你直接提供资源文件，而无需定义路由。`options` 参数可以自定义行为，例如设置缓存控制、处理隐藏文件或指定备用扩展名。
>
> <audio src="../../../../Downloads/`express.static.mp3"></audio>

| Parameter | Description                          | Example Value                    |
| --------- | ------------------------------------ | -------------------------------- |
| `root`    | Directory to serve static files from | `path.join(__dirname, 'public')` |
| `options` | (Optional) Configuration options     | `{ maxAge: '1d' }`               |

#### Example:

<audio src="../../../../Downloads/_`express.stati.mp3"></audio>

```js
const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Start the server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

 In this example, `express.static()` serves files from the `public` directory. If a file like `/public/style.css` exists, it can be accessed directly via `/style.css`.