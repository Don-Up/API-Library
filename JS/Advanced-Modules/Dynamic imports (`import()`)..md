### Dynamic Imports in JavaScript

<audio src="..\..\mp3\Dynamic imports.mp3"></audio>

**Dynamic imports** allow you to load modules dynamically at runtime using the **`import()`** function. Unlike static imports, which are resolved at compile time, dynamic imports return a **Promise** and can be used conditionally or asynchronously.

#### Benefits:
1. **Code Splitting**: Load modules only when needed, reducing initial load time.
2. **Lazy Loading**: Import modules dynamically based on user actions or conditions.

Dynamic imports are supported in ES6 and are particularly useful in modern web applications with bundlers like Webpack.

> **动态导入**  
>
> <audio src="..\..\mp3\动态导入 使用 `import.mp3"></audio>
>
> **动态导入** 使用 **`import()`** 函数在运行时动态加载模块。与静态导入不同，动态导入返回一个 **Promise**，可以在条件满足时或异步加载时使用。  
>
> #### 优势：  
> 1. **代码分割**：仅在需要时加载模块，减少初始加载时间。  
> 2. **延迟加载**：根据用户操作或条件动态导入模块。  
>
> 动态导入在 ES6 中受支持，适用于现代使用 Webpack 等工具构建的 Web 应用。

---

### Code Examples:

<audio src="..\..\mp3\这段代码展示了JavaScri (3).mp3"></audio>

#### **Basic Dynamic Import**
```javascript
// Dynamically load a module
import('./math.js')
  .then((math) => {
    console.log(math.add(2, 3)); // Use imported module
  })
  .catch((error) => {
    console.error("Failed to load module:", error);
  });
```

---

#### **Example with Conditions**
```javascript
const loadMathModule = async () => {
  if (true) { // Example condition
    const math = await import('./math.js'); // Load dynamically
    console.log(math.add(5, 7)); // Logs: 12
  }
};

loadMathModule();
```

---

#### **Lazy Loading in Event Handlers**
```javascript
document.querySelector('#loadButton').addEventListener('click', async () => {
  const { greet } = await import('./greet.js'); // Load module on demand
  console.log(greet("Alice")); // Logs: "Hello, Alice!"
});
```

---

### Key Notes:

<audio src="..\..\mp3\1. __`import`__.mp3"></audio>

1. **`import()`** returns a **Promise** that resolves with the module object.  
2. Ideal for **code splitting** and **lazy loading** in large applications.  
3. Supported in modern browsers and tools like Webpack for bundling.