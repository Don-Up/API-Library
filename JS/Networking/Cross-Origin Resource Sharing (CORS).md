### Cross-Origin Resource Sharing (CORS)

<audio src="..\..\mp3\CORS is a secur.mp3"></audio>

**CORS** is a security mechanism enforced by browsers to control how resources are shared between different origins (protocol + domain + port). By default, browsers block cross-origin requests to protect users. 

To allow cross-origin requests, the server must send specific HTTP headers (e.g., `Access-Control-Allow-Origin`) to grant permission. CORS is commonly used in APIs to handle requests from different domains.

**Common Headers**:  

- `Access-Control-Allow-Origin`: Specifies allowed origins.  
- `Access-Control-Allow-Methods`: Specifies allowed HTTP methods (e.g., `GET`, `POST`).  

> **跨域资源共享 (CORS)**  
>
> <audio src="..\..\mp3\CORS 是一种由浏览器强制执.mp3"></audio>
>
> **CORS** 是一种由浏览器强制执行的安全机制，用于控制不同源之间的资源共享（协议 + 域名 + 端口）。默认情况下，浏览器会阻止跨源请求以保护用户安全。  
> 为了允许跨域请求，服务器需要通过特定的 HTTP 头（如 `Access-Control-Allow-Origin`）授予权限。CORS 常用于 API，以处理来自不同域的请求。  
> **常用头信息**：  
>
> - `Access-Control-Allow-Origin`：指定允许的来源。  
> - `Access-Control-Allow-Methods`：指定允许的 HTTP 方法（如 `GET`、`POST`）。

---

### Code Examples:

#### **CORS Configuration in Node.js (Express)**

<audio src="..\..\mp3\这段代码展示了如何使用`Exp.mp3"></audio>

```javascript
const express = require("express");
const cors = require("cors");
const app = express();

// Allow all origins
app.use(cors());

// Allow specific origins
// app.use(cors({ origin: "https://example.com" }));

app.get("/data", (req, res) => {
  res.json({ message: "CORS-enabled response" });
});

app.listen(3000, () => console.log("Server running on port 3000"));
```

#### **CORS Headers in Response**

<audio src="..\..\mp3\这段HTTP响应头展示了跨域资.mp3"></audio>

```http
HTTP/1.1 200 OK
Access-Control-Allow-Origin: https://example.com
Access-Control-Allow-Methods: GET, POST, PUT
Access-Control-Allow-Headers: Content-Type
```

#### **CORS Preflight(预检) Request**
For methods like `POST` or custom headers, browsers send a **preflight request** using the `OPTIONS` method to check server permissions.

<audio src="..\..\mp3\这段代码展示了如何处理跨域预检.mp3"></audio>

```javascript
app.options("/data", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.sendStatus(204); // No content
});
```

---

### Key Notes:

<audio src="..\..\mp3\1.  __CORS__ is.mp3"></audio>

1. **CORS** is enforced by browsers, not servers.  
2. The server must include appropriate headers in its response to enable cross-origin requests.  
3. Use libraries like **`cors`** in Node.js to simplify CORS setup.