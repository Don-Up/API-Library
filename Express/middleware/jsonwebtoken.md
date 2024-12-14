### `jsonwebtoken` Middleware  

**`jsonwebtoken`** is a library that helps create and verify JSON Web Tokens (JWT), a secure mechanism for authenticating users and sharing information between parties. JWTs are signed using a secret or a public/private key pair to ensure the data's integrity. It's commonly used for stateless authentication in APIs.  

1. **Use Case**:  
   - Authenticate users and authorize access to protected routes.  

2. **Key Features**:  
   - Token encoding and decoding.  
   - Verifies token validity and expiration.  

3. **Installation**:  
   - Install via `npm install jsonwebtoken`.  

> **jsonwebtoken 中间件**  
>
> <audio src="..\..\mp3\`jason webtoken.mp3"></audio>
>
> **`jsonwebtoken`** 是一个用于创建和验证 JSON Web Token (JWT) 的库。JWT 是一种安全机制，用于验证用户身份并在双方之间共享信息。JWT 使用密钥或公私钥对进行签名，以确保数据的完整性。它通常用于 API 的无状态认证。  
>
> 1. **使用场景**：  
>    - 验证用户身份并授权访问受保护的路由。  
> 2. **主要功能**：  
>    - 编码和解码令牌。  
>    - 验证令牌的有效性和过期时间。  
> 3. **安装方法**：  
>    - 通过 `npm install jsonwebtoken` 安装。  
>
> > JSON Web Token (JWT) 是一种开放标准（RFC 7519），用于在各方之间安全地传输信息。它由三部分组成：**Header**（头部，说明算法和类型）、**Payload**（负载，包含声明信息）、**Signature**（签名，验证数据完整性）。JWT 以点分隔的字符串表示，信息通常使用 Base64 编码。常用于身份验证和信息交换，因其自包含性，可减少对服务器存储的依赖。
> >
> > <audio src="..\..\mp3\jason  Web Toke.mp3"></audio>

---

### Code Examples:

#### **Installing the Library**
```bash
npm install jsonwebtoken
```

---

#### **Generating a JWT**

<audio src="..\..\mp3\这段代码展示了如何使用 `ja.mp3"></audio>

```javascript
const jwt = require('jsonwebtoken');

const secretKey = 'mySecretKey';

// Generate a token (e.g., after user login)
const token = jwt.sign({ userId: 123, role: 'admin' }, secretKey, { expiresIn: '1h' });
console.log(`Generated Token: ${token}`);
```

---

#### **Verifying a JWT**

<audio src="..\..\mp3\这段代码展示了如何使用 `ja (1).mp3"></audio>

```javascript
const token = 'your.jwt.token.here';

try {
  const decoded = jwt.verify(token, secretKey); // Verify the token
  console.log('Decoded Token:', decoded);
} catch (err) {
  console.error('Invalid or expired token:', err.message);
}
```

---

#### **Middleware for Protected Routes**

<audio src="..\..\mp3\这段代码展示了如何在 Expr.mp3"></audio>

```javascript
const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
const secretKey = 'mySecretKey';

// Middleware to verify JWT
const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(' ')[1]; // Extract token from "Bearer <token>"

    jwt.verify(token, secretKey, (err, user) => {
      if (err) {
        return res.status(403).send('Invalid or expired token');
      }
      req.user = user; // Attach decoded token data to request
      next();
    });
  } else {
    res.status(401).send('Authorization header missing');
  }
};

// Protected route
app.get('/protected', authenticateJWT, (req, res) => {
  res.send(`Welcome, User ${req.user.userId}!`);
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
```

---

#### **Token Expiration Example**

<audio src="..\..\mp3\这段代码展示了如何生成一个短有.mp3"></audio>

```javascript
// Generate a token with a 10-second expiration
const shortLivedToken = jwt.sign({ userId: 123 }, secretKey, { expiresIn: '10s' });

setTimeout(() => {
  try {
    jwt.verify(shortLivedToken, secretKey);
    console.log('Token is still valid');
  } catch (err) {
    console.error('Token expired:', err.message);
  }
}, 15000); // Check after 15 seconds
```

---

### Key Notes:  
1. **Stateless Authentication**: JWTs are stateless, meaning no session data is stored on the server.  
2. **Expiration**: Always set an expiration (`expiresIn`) to prevent token misuse.  
3. **Security**: Keep the secret key private and rotate it periodically to enhance security.  

#### Example of Refresh Token Logic:
```javascript
// Refresh token endpoint
app.post('/refresh', (req, res) => {
  const refreshToken = req.body.refreshToken;
  if (!refreshToken) return res.status(401).send('Refresh token missing');

  // Verify and issue a new token
  try {
    jwt.verify(refreshToken, secretKey);
    const newToken = jwt.sign({ userId: 123 }, secretKey, { expiresIn: '1h' });
    res.json({ token: newToken });
  } catch (err) {
    res.status(403).send('Invalid refresh token');
  }
});
```