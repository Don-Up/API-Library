### `body-parser` Middleware  

**`body-parser`** is a middleware in Express.js used to parse incoming request bodies before they are handled by route handlers. It parses data like JSON, URL-encoded forms, or raw text, making it accessible via `req.body`.  

1. **Use Case**:  
   - Extract data from HTTP POST or PUT requests.  

2. **Key Functions**:  
   - `bodyParser.json()`: Parses JSON payloads.  
   - `bodyParser.urlencoded()`: Parses URL-encoded form data.  

3. **Note**:  
   - From Express 4.16+, `body-parser` is built into Express and can be replaced with `express.json()` and `express.urlencoded()`.

> **body-parser 中间件**  
> **`body-parser`** 是 Express.js 中的一个中间件，用于在路由处理程序处理请求之前解析传入的请求体。它可以解析 JSON、URL 编码的表单数据或原始文本，并将其作为 `req.body` 访问。  
> 1. **使用场景**：  
>    - 从 HTTP POST 或 PUT 请求中提取数据。  
> 2. **主要功能**：  
>    - `bodyParser.json()`：解析 JSON 数据。  
>    - `bodyParser.urlencoded()`：解析 URL 编码的表单数据。  
> 3. **注意**：  
>    - 从 Express 4.16+ 开始，`body-parser` 已内置，可用 `express.json()` 和 `express.urlencoded()` 替代。  

---

### Code Examples:

#### **Installing `body-parser`**
```bash
npm install body-parser
```

#### **Basic Usage**

<audio src="..\..\mp3\这段代码展示了如何使用 `bo.mp3"></audio>

```javascript
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Parse JSON payloads
app.use(bodyParser.json());

// Parse URL-encoded form data
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/submit', (req, res) => {
  console.log(req.body); // Access parsed data
  res.send('Data received!');
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
```

---

#### **Built-In Express Alternative**
```javascript
const express = require('express');
const app = express();

// Use built-in middleware from Express 4.16+
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/submit', (req, res) => {
  console.log(req.body); // Access parsed data
  res.send('Data received!');
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
```

---

### Key Notes:  
1. **JSON Parsing**: Use `bodyParser.json()` for APIs sending JSON payloads.  
2. **Form Data**: Use `bodyParser.urlencoded()` for HTML form submissions.  
3. **Deprecation**: Prefer `express.json()` and `express.urlencoded()` for new projects.

## Others

在较新的版本的 Express 中（4.16.0 及之后），Express 已经内置了 `express.json()` 和 `express.urlencoded()` 方法，用于解析 JSON 和 URL 编码的请求体。因此，如果你使用的是这些内置方法，就**不需要再单独引入和使用 `body-parser`**。

### 区别和关系：

1. **`body-parser` 的功能**
   - `body-parser` 是一个早期的中间件，用于解析请求体内容，支持 JSON、URL 编码数据等。
   - 它曾是 Express 的默认工具，但在 4.16.0 之后被拆分，Express 内置了类似功能。
2. **`express.json()` 和 `express.urlencoded()` 的功能**
   - `express.json()` 是内置中间件，用于解析 JSON 格式的请求体，相当于 `body-parser.json()`。
   - `express.urlencoded()` 是内置中间件，用于解析 `application/x-www-form-urlencoded` 格式的数据，相当于 `body-parser.urlencoded()`。

### 是否有必要使用 `body-parser`：

- **推荐使用 Express 内置方法**
  Express 内置的 `express.json()` 和 `express.urlencoded()` 功能等效于 `body-parser` 的功能，因此在 4.16.0 之后，可以直接使用内置方法，而不需要再安装和引入 `body-parser`。