### `cookie-parser` Middleware  

**`cookie-parser`** is a middleware for Express.js that parses cookies from the `Cookie` header of incoming HTTP requests. It makes cookies easily accessible via `req.cookies` (for plain cookies) and `req.signedCookies` (for signed cookies). Signed cookies use a secret or key to ensure data integrity.  

1. **Use Case**:  
   - Retrieve and manipulate cookies in web applications.  

2. **Key Features**:  
   - Decodes cookies automatically.  
   - Supports signed cookies for added security.  

3. **Installation**:  
   - Install via `npm install cookie-parser`.  

> **cookie-parser 中间件**  
>
> <audio src="C:\Users\10691\Downloads\`cookie-parser`.mp3"></audio>
>
> **`cookie-parser`** 是 Express.js 的一个中间件，用于从传入 HTTP 请求的 `Cookie` 头解析 cookie。解析后的 cookie 可以通过 `req.cookies`（普通 cookie）和 `req.signedCookies`（签名的 cookie）访问。签名的 cookie 使用密钥确保数据完整性。  
>
> 1. **使用场景**：  
>    - 在 Web 应用中获取和操作 cookie。  
> 2. **主要功能**：  
>    - 自动解码 cookie。  
>    - 支持签名 cookie 以增强安全性。  
> 3. **安装**：  
>    - 通过 `npm install cookie-parser` 安装。  

---

### Code Examples:

#### **Installing the Middleware**
```bash
npm install cookie-parser
```

#### **Basic Usage**

<audio src="C:\Users\10691\Downloads\这段代码展示了如何使用 `co.mp3"></audio>

```javascript
const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

// Initialize cookie-parser
app.use(cookieParser());

app.get('/', (req, res) => {
  // Log cookies from the request
  console.log(req.cookies);

  // Set a cookie
  res.cookie('username', 'JohnDoe').send('Cookie has been set!');
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
```

---

#### **Using Signed Cookies**

<audio src="C:\Users\10691\Downloads\这段代码展示了如何使用 `co (1).mp3"></audio>

```javascript
const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

// Initialize cookie-parser with a secret for signed cookies
app.use(cookieParser('mySecretKey'));

app.get('/set-signed', (req, res) => {
  // Set a signed cookie
  res.cookie('authToken', '12345', { signed: true }).send('Signed cookie set!');
});

app.get('/read-signed', (req, res) => {
  // Access signed cookies
  console.log(req.signedCookies);
  res.send(`Signed Cookies: ${JSON.stringify(req.signedCookies)}`);
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
```

---

### Key Notes:  
1. **Accessing Cookies**: Use `req.cookies` for regular cookies and `req.signedCookies` for signed cookies.  
2. **Setting Cookies**: Use `res.cookie()` to set cookies with options like `maxAge`, `httpOnly`, or `secure`.  
3. **Signed Cookies**: Ensure sensitive data is not tampered with by using a secret key.  

#### Example with Cookie Options:
```javascript
res.cookie('sessionId', 'abc123', { httpOnly: true, secure: true, maxAge: 3600000 });
```