### Custom Errors with `Error` Objects

<audio src="..\..\mp3\In JavaScript,  (2).mp3"></audio>

In JavaScript, you can create custom errors by extending the built-in **`Error`** class. This allows you to define meaningful error types for specific scenarios.

1. **Create a Custom Error**:
   - Extend the `Error` class.
   - Set a custom name and message.

2. **Throw and Catch Custom Errors**:
   - Use `throw` with your custom error.
   - Handle it using `try...catch`.

Custom errors improve error identification and debugging by providing detailed, domain-specific error messages.

> **使用 `Error` 对象创建自定义错误**  
>
> <audio src="..\..\mp3\在 JavaScript 中， (1).mp3"></audio>
>
> 在 JavaScript 中，可以通过扩展内置的 **`Error`** 类来创建自定义错误，用于特定场景：  
>
> 1. **创建自定义错误**：  
>    - 扩展 `Error` 类。  
>    - 设置自定义名称和消息。  
> 2. **抛出和捕获自定义错误**：  
>    - 使用 `throw` 抛出自定义错误。  
>    - 使用 `try...catch` 捕获并处理错误。  
>
> 自定义错误通过提供详细的错误信息来改善错误识别和调试。

---

### Code Examples:

#### **Creating a Custom Error**
```javascript
class ValidationError extends Error {
  constructor(message) {
    super(message); // Call the parent `Error` constructor
    this.name = "ValidationError"; // Custom error name
  }
}

function validateAge(age) {
  if (age < 18) {
    throw new ValidationError("Age must be at least 18.");
  }
  return "Age is valid.";
}

try {
  console.log(validateAge(16)); // Throws ValidationError
} catch (error) {
  console.error(`${error.name}: ${error.message}`); // Logs: ValidationError: Age must be at least 18.
}
```

---

#### **Customizing Built-In Errors**
```javascript
class DatabaseError extends Error {
  constructor(message, errorCode) {
    super(message);
    this.name = "DatabaseError";
    this.code = errorCode; // Add custom properties
  }
}

try {
  throw new DatabaseError("Database connection failed", 500);
} catch (error) {
  console.error(`${error.name} (${error.code}): ${error.message}`);
  // Logs: DatabaseError (500): Database connection failed
}
```

---

### Key Notes:
1. Use `super()` to call the `Error` constructor and initialize the error message.  
2. Add custom properties to provide more context (e.g., `code`, `details`).  
3. Custom errors make error handling more structured and meaningful in large applications.