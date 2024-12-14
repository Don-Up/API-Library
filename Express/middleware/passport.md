### `passport` Middleware  

**`passport`** is an authentication middleware for Node.js that integrates seamlessly with Express.js. It provides a flexible framework for implementing authentication strategies, such as local authentication (username/password) or third-party authentication (e.g., Google, Facebook, GitHub).  

1. **Use Case**:  
   - Authenticate users in web applications.  

2. **Key Features**:  
   - Use predefined or custom strategies.  
   - Supports session-based or token-based authentication.  
   - Stores user information in `req.user` after authentication.  

3. **Installation**:  
   - Install via `npm install passport`.  

> **passport 中间件**  
>
> <audio src="..\..\mp3\`passport` 是一个用.mp3"></audio>
>
> **`passport`** 是一个用于 Node.js 的认证中间件，与 Express.js 无缝集成。它提供了一个灵活的框架，用于实现多种认证策略，例如本地认证（用户名/密码）或第三方认证（如 Google、Facebook、GitHub）。  
>
> 1. **使用场景**：  
>    - 在 Web 应用中认证用户。  
> 2. **主要功能**：  
>    - 使用预定义的或自定义的认证策略。  
>    - 支持基于会话或令牌的认证。  
>    - 认证后将用户信息存储在 `req.user` 中。  
> 3. **安装方法**：  
>    - 通过 `npm install passport` 安装。  

---

### Code Examples:

#### **Installing Passport**
```bash
npm install passport
npm install passport-local express-session
```

#### **Basic Usage with Local Strategy**

<audio src="..\..\mp3\这段代码展示了如何使用 `pa.mp3"></audio>

```javascript
const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Configure session middleware
app.use(require('express-session')({ secret: 'mySecret', resave: false, saveUninitialized: false }));

// Initialize passport and session
app.use(passport.initialize());
app.use(passport.session());

// Mock user database
const users = [{ id: 1, username: 'test', password: '1234' }];

// Configure local strategy
passport.use(
  new LocalStrategy((username, password, done) => {
    const user = users.find((u) => u.username === username && u.password === password);
    if (!user) return done(null, false, { message: 'Invalid credentials' });
    return done(null, user);
  })
);

// Serialize and deserialize user
passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser((id, done) => {
  const user = users.find((u) => u.id === id);
  done(null, user);
});

// Login route
app.post('/login', passport.authenticate('local', { failureRedirect: '/login-failed' }), (req, res) => {
  res.send('Logged in successfully!');
});

// Protected route
app.get('/protected', (req, res) => {
  if (!req.isAuthenticated()) return res.status(401).send('Access denied');
  res.send(`Welcome, ${req.user.username}`);
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
```

---

#### **Logout Route**
```javascript
app.get('/logout', (req, res) => {
  req.logout((err) => {
    if (err) return next(err);
    res.send('Logged out successfully!');
  });
});
```

---

### Key Notes:  
1. **Strategies**: Passport supports multiple strategies (e.g., `passport-local`, `passport-jwt`, `passport-google-oauth`).  
2. **Session Management**: Passport integrates with Express sessions to persist login states.  
3. **Error Handling**: Use `failureRedirect` or custom error handling for failed authentication.  

#### Example with Custom Callback:
```javascript
app.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) return next(err);
    if (!user) return res.status(401).send(info.message);
    req.logIn(user, (err) => {
      if (err) return next(err);
      res.send('Logged in successfully!');
    });
  })(req, res, next);
});
```