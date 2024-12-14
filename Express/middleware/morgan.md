### `morgan` Middleware  

**`morgan`** is an HTTP request logger middleware for Express.js. It logs details about incoming HTTP requests (e.g., method, URL, status code, response time) to the console or a file. This is useful for debugging and monitoring web applications.  

1. **Use Case**:  
   - Log HTTP requests for development or production environments.  

2. **Formats**:  
   - Predefined formats like `dev`, `combined`, `common`, `short`, etc.  
   - Custom formats for specific logging needs.  

3. **Installation**:  
   - Install via `npm install morgan`.  

> **morgan 中间件**  
>
> <audio src="..\..\mp3\`morgan` 是 Expr.mp3"></audio>
>
> **`morgan`** 是 Express.js 的一个 HTTP 请求日志记录中间件。它会将传入 HTTP 请求的详细信息（如方法、URL、状态码、响应时间）记录到控制台或文件中，对调试和监控 Web 应用非常有用。  
>
> 1. **使用场景**：  
>    - 在开发或生产环境中记录 HTTP 请求日志。  
> 2. **日志格式**：  
>    - 内置格式如 `dev`、`combined`、`common`、`short` 等。  
>    - 支持自定义格式以满足特定需求。  
> 3. **安装方法**：  
>    - 通过 `npm install morgan` 安装。  

---

### Code Examples:

#### **Installing the Middleware**
```bash
npm install morgan
```

#### **Basic Usage**
```javascript
const express = require('express');
const morgan = require('morgan');

const app = express();

// Use 'dev' format for detailed logs during development
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('Hello, Morgan!');
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
```

---

#### **Predefined Formats**
```javascript
// Use 'combined' format for detailed logs in production (includes IP, user agent, etc.)
app.use(morgan('combined'));
```

---

#### **Custom Logging Format**
```javascript
app.use(
  morgan(':method :url :status :res[content-length] - :response-time ms')
);

// Example log: GET / 200 123 - 5.123 ms
```

---

#### **Write Logs to a File**
```javascript
const fs = require('fs');
const path = require('path');
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });

// Use morgan to log requests to a file
app.use(morgan('combined', { stream: accessLogStream }));
```

---

### Key Notes:  
1. **Formats**: Use `dev` for detailed logs during development and `combined` for production environments.  
2. **Custom Formats**: Customize logs to include specific request/response details.  
3. **File Logging**: Use a writable stream to log requests into files for long-term storage and analysis.  

#### Example with Conditional Logging:
```javascript
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev')); // Use detailed logs in development
} else {
  app.use(morgan('combined')); // Use concise logs in production
}
```