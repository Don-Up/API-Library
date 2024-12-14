### `try`, `catch`, `finally` in JavaScript

<audio src="..\..\mp3\The `try catch .mp3"></audio>

The **`try...catch...finally`** statement is used for error handling in JavaScript:

1. **`try`**:
   - Contains the code to be executed.
   - If an error occurs, it immediately jumps to the `catch` block.

2. **`catch`**:
   - Handles the error.
   - Receives the error object, which contains details about the error.

3. **`finally`** (optional):
   - Executes code after `try` and `catch`, regardless of the outcome.
   - Useful for cleanup tasks.

> **`try`、`catch`、`finally`**  
> **`try...catch...finally`** 用于 JavaScript 的错误处理：  
>
> <audio src="..\..\mp3\`try`：  包含需要执行的.mp3"></audio>
>
> 1. **`try`**：  
>    - 包含需要执行的代码。  
>    - 如果发生错误，会立即跳转到 `catch` 块。  
> 2. **`catch`**：  
>    - 处理错误。  
>    - 接收一个错误对象，包含错误的详情。  
> 3. **`finally`**（可选）：  
>    - 无论是否发生错误，都会在 `try` 和 `catch` 后执行。  
>    - 常用于清理任务。

---

### Code Example:

#### **Basic `try...catch`**
```javascript
try {
  const result = 10 / 0; // No error, but result is Infinity
  console.log(result);
  JSON.parse("{ invalid JSON }"); // Throws an error
} catch (error) {
  console.error("An error occurred:", error.message); // Handles the error
}
```

#### **`try...catch...finally`**
```javascript
function readFile() {
  try {
    console.log("Opening file...");
    throw new Error("File not found!"); // Simulates an error
  } catch (error) {
    console.error("Error:", error.message); // Logs the error
  } finally {
    console.log("Closing file..."); // Always executes
  }
}

readFile();
```

---

### Key Notes:
1. **`catch`** is optional but must follow `try`.  
2. **`finally`** always executes, even if no error occurs or a `return` is used in `try`/`catch`.  
3. Always use `try...catch` for error-prone code like API calls, parsing, or file operations.