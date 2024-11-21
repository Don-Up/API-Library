### `app.locals`

- **`app.locals`**: An object available within the entire Express app to store variables or data that can be accessed in templates or throughout the app. These variables are application-scoped and persist throughout the app's lifecycle. Commonly used for global data like app settings or helper functions that can be used in views.

> **`app.locals`**：Express 应用中可用的对象，用于存储全局变量或数据，供模板或应用程序的各个部分访问。这些变量是应用范围的，并在应用程序的生命周期内保持不变。通常用于存储全局数据或帮助函数，供视图使用。

#### Example:

```js
const express = require('express');
const app = express();

// Set a global variable
app.locals.siteTitle = 'My Awesome Website';

// Define a route
app.get('/', (req, res) => {
  res.send(`<h1>Welcome to ${app.locals.siteTitle}</h1>`);
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

In this example, `app.locals.siteTitle` is set globally. It can be accessed in any route or view, allowing you to manage site-wide data easily.