### Avoiding Memory Leaks in JavaScript

<audio src="..\..\mp3\1.  Definition. (3).mp3"></audio>

1. **Definition**:  
   - A **memory leak** occurs when allocated memory is no longer needed but is not released.  
   - Common causes: unused references, event listeners, timers, and closures.

2. **Prevention Tips**:  
   - **Remove event listeners** when no longer needed.  
   - **Clear timers/intervals** with `clearInterval` or `clearTimeout`.  
   - Avoid **global variables** that persist in memory.  
   - Use **WeakMap** or **WeakSet** for objects to allow garbage collection.

> **避免内存泄漏**  
>
> <audio src="..\..\mp3\定义：  内存泄漏是指分配的内.mp3"></audio>
>
> 1. **定义**：  
>    - **内存泄漏**是指分配的内存不再需要但未释放。  
>    - 常见原因：未使用的引用、事件监听器、定时器和闭包。  
> 2. **预防技巧**：  
>    - **移除事件监听器**：在不需要时清理。  
>    - **清除定时器/间隔**：使用 `clearInterval` 或 `clearTimeout`。  
>    - 避免使用**全局变量**，避免持久占用内存。  
>    - 使用 **WeakMap** 或 **WeakSet** 存储对象，以允许垃圾回收。

---

### Code Examples:

#### **Removing Event Listeners**
```javascript
const button = document.getElementById("myButton");

function handleClick() {
  console.log("Button clicked!");
}

button.addEventListener("click", handleClick);

// Remove listener when no longer needed
button.removeEventListener("click", handleClick);
```

#### **Clearing Timers**
```javascript
let intervalId = setInterval(() => {
  console.log("Interval running");
}, 1000);

// Clear interval to prevent memory leak
clearInterval(intervalId);
```

#### **Using WeakMap to Prevent Leaks**
```javascript
const cache = new WeakMap();

function storeData(obj, data) {
  cache.set(obj, data); // Object will not prevent garbage collection
}

let user = { name: "Alice" };
storeData(user, { age: 25 });

// When `user` is set to null, it will be garbage collected
user = null;
```

---

### Key Notes:
1. Always **clean up event listeners** and **timers** when no longer needed.  
2. Use **WeakMap/WeakSet** for objects to avoid strong references.  
3. Avoid **global variables** to reduce memory persistence.