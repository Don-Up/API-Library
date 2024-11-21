### `req.query`

- **`req.query`**: This is an object that contains the URL query parameters sent in an HTTP GET request. Query parameters are the key-value pairs appended to the URL after a `?` (e.g., `/search?term=node&limit=10`). Express automatically parses these parameters and stores them in `req.query`, where each key corresponds to a parameter name and its value to the parameter's value.

> **`req.query`**：这是一个对象，包含通过 HTTP GET 请求发送的 URL 查询参数。查询参数是附加在 URL 中 `?` 后面的键值对（例如 `/search?term=node&limit=10`）。Express 会自动解析这些参数并将它们存储在 `req.query` 对象中，键是参数名，值是对应的参数值。

| Parameter | Description                            | Example Value |
| --------- | -------------------------------------- | ------------- |
| `term`    | The search term from the query string  | `'node'`      |
| `limit`   | The result limit from the query string | `'10'`        |

#### Example:

```js
const express = require('express');
const app = express();

// Route with query parameters
app.get('/search', (req, res) => {
  const searchTerm = req.query.term;  // Access the 'term' query parameter
  const limit = req.query.limit;      // Access the 'limit' query parameter
  res.send(`Searching for: ${searchTerm} with limit: ${limit}`);
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

In this example, `req.query.term` and `req.query.limit` extract the query parameters from the URL `/search?term=node&limit=10`.