### `express-validator` Middleware  

**`express-validator`** is a middleware for validating and sanitizing incoming request data in Express.js applications. It provides a set of methods to validate fields in `req.body`, `req.query`, or `req.params` and ensures the data meets specified criteria.  

1. **Use Case**:  
   - Validate user input (e.g., emails, passwords) in forms or APIs.  

2. **Key Features**:  
   - Supports built-in validators (e.g., `isEmail`, `isLength`).  
   - Sanitizes input to prevent malicious data.  
   - Provides error handling for invalid inputs.  

3. **Installation**:  
   - Install via `npm install express-validator`.  

> **express-validator 中间件**  
>
> <audio src="C:\Users\10691\Downloads\`express-valida.mp3"></audio>
>
> **`express-validator`** 是一个用于在 Express.js 应用中验证和清理传入请求数据的中间件。它提供了一组方法，用于验证 `req.body`、`req.query` 或 `req.params` 中的字段，并确保数据符合指定的条件。  
>
> 1. **使用场景**：  
>    - 验证表单或 API 中用户输入的数据（如邮箱、密码）。  
> 2. **主要功能**：  
>    - 支持内置验证器（如 `isEmail`、`isLength`）。  
>    - 清理输入数据以防止恶意数据注入。  
>    - 提供无效输入的错误处理。  
> 3. **安装方法**：  
>    - 通过 `npm install express-validator` 安装。  

---

### Code Examples:

#### **Installing the Middleware**
```bash
npm install express-validator
```

---

#### **Basic Usage (Validation and Error Handling)**

<audio src="C:\Users\10691\Downloads\这段代码使用 `express.mp3"></audio>

```javascript
const express = require('express');
const { body, validationResult } = require('express-validator');

const app = express();
app.use(express.json()); // Parse JSON body

// Route with validation rules
app.post(
  '/register',
  [
    body('email').isEmail().withMessage('Invalid email format'), // Validate email
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'), // Validate password
  ],
  (req, res) => {
    const errors = validationResult(req); // Check for validation errors
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() }); // Return errors if validation fails
    }
    res.send('User registered successfully!');
  }
);

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
```

---

#### **Sanitizing Input**

<audio src="C:\Users\10691\Downloads\这段代码使用 `express (1).mp3"></audio>

```javascript
const { body } = require('express-validator');

app.post(
  '/submit',
  [
    body('username').trim().escape(), // Remove extra spaces and escape special characters
    body('email').normalizeEmail(),  // Normalize email (e.g., convert to lowercase)
  ],
  (req, res) => {
    res.send('Input sanitized and processed!');
  }
);
```

---

#### **Custom Validators**

<audio src="C:\Users\10691\Downloads\这段代码使用 `express (2).mp3"></audio>

```javascript
const { body } = require('express-validator');

app.post(
  '/custom',
  [
    body('age')
      .custom((value) => {
        if (value < 18) {
          throw new Error('You must be at least 18 years old');
        }
        return true; // Validation passed
      })
      .withMessage('Invalid age'),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    res.send('Custom validation passed!');
  }
);
```

---

### Key Notes:  
1. **ValidationResult**: Use `validationResult(req)` to collect and handle validation errors.  
2. **Built-in Validators**: Wide range of validators like `isEmail`, `isNumeric`, `isLength`, etc.  
3. **Chaining**: Chain multiple validation and sanitization methods for a single field.  

#### Example of Error Formatting:

<audio src="C:\Users\10691\Downloads\这段代码展示了如何使用 `ex (1).mp3"></audio>

```javascript
const { validationResult } = require('express-validator');

app.post('/data', (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array().map((err) => ({
        field: err.param,
        message: err.msg,
      })),
    });
  }
  res.send('Data validated!');
});
```