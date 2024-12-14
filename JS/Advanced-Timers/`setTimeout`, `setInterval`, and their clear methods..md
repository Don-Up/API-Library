### `setTimeout`, `setInterval`, and Their Clear Methods

<audio src="..\..\mp3\1.  __`setTimeo.mp3"></audio>

1. **`setTimeout`**:
   - Executes a function after a specified delay (in milliseconds).
   - Use **`clearTimeout`** to cancel a scheduled timeout.

2. **`setInterval`**:
   - Repeatedly executes a function at a fixed interval (in milliseconds).
   - Use **`clearInterval`** to stop a running interval.

Both methods return an identifier (`timeoutId` or `intervalId`) used to clear them.

> **`setTimeout`、`setInterval` 及其清除方法**  
>
> <audio src="..\..\mp3\`setTimeout`：  .mp3"></audio>
>
> 1. **`setTimeout`**：  
>    - 在指定延迟（毫秒）后执行一次函数。  
>    - 使用 **`clearTimeout`** 取消定时任务。  
> 2. **`setInterval`**：  
>    - 按固定时间间隔（毫秒）重复执行函数。  
>    - 使用 **`clearInterval`** 停止任务。  
>    两者返回一个标识符（`timeoutId` 或 `intervalId`），用于清除任务。

---

### Code Examples:

#### **Using `setTimeout`**
```javascript
const timeoutId = setTimeout(() => {
  console.log("This runs after 2 seconds.");
}, 2000);

// Clear the timeout
clearTimeout(timeoutId); // Cancels the timeout before it executes
```

---

#### **Using `setInterval`**
```javascript
const intervalId = setInterval(() => {
  console.log("This runs every 1 second.");
}, 1000);

// Stop the interval after 5 seconds
setTimeout(() => {
  clearInterval(intervalId); // Stops the interval
  console.log("Interval cleared.");
}, 5000);
```

---

### Key Notes:

<audio src="..\..\mp3\1.  Use __`setT.mp3"></audio>

1. Use **`setTimeout`** for one-time delays and **`setInterval`** for repeated tasks.  
2. Always store the returned ID to clear timers when needed.  
3. Clearing timers prevents unnecessary execution and improves performance.