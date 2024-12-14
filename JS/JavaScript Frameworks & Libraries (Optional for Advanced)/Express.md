### Express

<audio src="..\..\mp3\__Express__ is .mp3"></audio>

**Express** is a minimalist web framework for **Node.js** used to build web applications and APIs. It provides tools for handling HTTP requests, routing, and middleware, making server-side development faster and more flexible. Express is unopinionated, meaning it allows developers to structure applications as they prefer.

**Key Features**:  
- Simplifies request/response handling.  
- Supports middleware for request processing.  
- Built-in routing system for defining API endpoints.  
- Extensible with plugins and custom logic.

> **Express**  
>
> <audio src="..\..\mp3\Express 是一个用于 N.mp3"></audio>
>
> **Express** 是一个用于 **Node.js** 的极简 Web 框架，用于构建 Web 应用程序和 API。它提供了处理 HTTP 请求、路由和中间件的工具，使服务端开发更快、更灵活。Express 是非约束性的，允许开发者自由组织应用结构。  
> **主要特点**：  
>
> - 简化请求/响应处理。  
> - 支持中间件，用于请求处理。  
> - 内置路由系统，用于定义 API 端点。  
> - 可扩展，支持插件和自定义逻辑。

---

### Code Examples:

<audio src="..\..\mp3\这段代码展示了如何使用Expr.mp3"></audio>

#### **Basic Express Server**
```javascript
const express = require("express");
const app = express();

// Define a route
app.get("/", (req, res) => {
  res.send("Hello, Express!"); // Send response
});

// Start the server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
```

#### **Handling Multiple Routes**
```javascript
app.get("/users", (req, res) => {
  res.json([{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }]); // Respond with JSON
});

app.post("/users", (req, res) => {
  res.send("User created"); // Handle POST requests
});
```

#### **Using Middleware**
```javascript
// Middleware to log requests
app.use((req, res, next) => {
  console.log(`${req.method} request to ${req.url}`);
  next(); // Pass control to the next middleware
});

// Route
app.get("/", (req, res) => {
  res.send("Middleware in action!");
});
```

---

### Key Notes:

<audio src="..\..\mp3\1. __Middleware.mp3"></audio>

1. **Middleware** processes requests before they reach routes (e.g., logging, authentication).  
2. Use **`app.get`**, **`app.post`**, etc., to define route handlers.  
3. Express is lightweight and can be combined with libraries like **Mongoose** for databases or **CORS** for cross-origin requests.