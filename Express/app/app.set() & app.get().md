### `app.set()` and `app.get()`

- **`app.set(name, value)`**: This method sets application-level settings, such as the view engine, port, or custom settings. These settings can be retrieved later using `app.get(name)`.

- **`app.get(name)`**: Retrieves the value of the setting set by `app.set()`.

> **`app.set(name, value)` 和 `app.get(name)`**：`app.set()` 用于设置应用级别的配置，如视图引擎、端口或自定义设置。通过 `app.get(name)` 可以获取之前设置的值。

#### Example:

```js
const express = require('express');
const app = express();

// Set application settings
app.set('view engine', 'pug');  // Setting view engine
app.set('port', 3000);          // Setting custom port

// Retrieve application settings
const viewEngine = app.get('view engine'); // 'pug'
const port = app.get('port');              // 3000

console.log(`View engine: ${viewEngine}`);
console.log(`App running on port: ${port}`);

// Start server using the port setting
app.listen(app.get('port'), () => {
  console.log(`Server running on port ${app.get('port')}`);
});
```

In this example, `app.set()` configures the view engine and port, and `app.get()` retrieves these values for use in the application.