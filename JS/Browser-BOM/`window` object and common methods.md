### The `window` Object in BOM

<audio src="C:\Users\10691\Downloads\The `window` ob.mp3"></audio>

The **`window` object** is the global object in the Browser Object Model (BOM). It represents the browser window/tab and provides methods, properties, and events to interact with it.

#### **Common Methods**:
1. **`alert(message)`**: Displays an alert box.  
2. **`confirm(message)`**: Displays a confirmation dialog, returning `true`/`false`.  
3. **`prompt(message, default)`**: Displays a dialog to accept user input.  
4. **`setTimeout(callback, delay)`**: Executes a function after a delay.  
5. **`setInterval(callback, interval)`**: Executes a function repeatedly at intervals.  
6. **`open(url, target)`**: Opens a new browser tab or window.  

> **BOM 中的 `window` 对象**  
>
> <audio src="C:\Users\10691\Downloads\`window` 对象 是浏览.mp3"></audio>
>
> **`window` 对象** 是浏览器对象模型中的全局对象，表示浏览器窗口或选项卡，并提供方法、属性和事件以与之交互。  
>
> #### **常见方法**：
> 1. **`alert(message)`**：显示警告框。  
> 2. **`confirm(message)`**：显示确认对话框，返回 `true` 或 `false`。  
> 3. **`prompt(message, default)`**：显示输入框，接受用户输入。  
> 4. **`setTimeout(callback, delay)`**：延迟后执行函数。  
> 5. **`setInterval(callback, interval)`**：以固定间隔重复执行函数。  
> 6. **`open(url, target)`**：打开新浏览器标签或窗口。

---

### Code Examples:

#### **Basic Dialogs**
```javascript
window.alert("Hello, World!"); // Displays an alert box
const isConfirmed = window.confirm("Do you agree?"); // Returns true/false
const userInput = window.prompt("Enter your name:", "Guest"); // Returns user input or null
console.log(isConfirmed, userInput);
```

#### **Timers: setTimeout and setInterval**
```javascript
// Executes after 2 seconds
setTimeout(() => {
  console.log("This runs after 2 seconds");
}, 2000);

// Executes every 1 second
const intervalId = setInterval(() => {
  console.log("This runs every second");
}, 1000);

// Stops the interval after 5 seconds
setTimeout(() => clearInterval(intervalId), 5000);
```

#### **Open a New Tab**
```javascript
window.open("https://example.com", "_blank"); // Opens a new tab
```

---

### Key Notes:

<audio src="C:\Users\10691\Downloads\1. The __`windo.mp3"></audio>

1. The **`window` object** is implicit; you can omit `window.` (e.g., use `alert()` directly).  
2. Be cautious with **`alert`**, **`confirm`**, and **`prompt`**, as they block execution.  
3. Use **`setTimeout`** and **`setInterval`** for asynchronous tasks but clean them up to avoid memory leaks.