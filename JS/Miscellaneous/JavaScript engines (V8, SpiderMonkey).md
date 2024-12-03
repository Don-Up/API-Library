### JavaScript Engines (V8, SpiderMonkey)

<audio src="C:\Users\10691\Downloads\JavaScript engi.mp3"></audio>

JavaScript engines execute JavaScript code in browsers or environments. **V8** and **SpiderMonkey** are two popular engines:

1. **V8**:  
   - Created by Google, used in **Chrome** and **Node.js**.  
   - Known for its speed, Just-In-Time compilation, and garbage collection.  

2. **SpiderMonkey**:  
   - Developed by Mozilla, used in **Firefox**.  
   - First JavaScript engine, supports advanced features like WebAssembly.  

Both engines parse, compile, and optimize JavaScript code, converting it into machine code for execution.

> **JavaScript 引擎（V8 和 SpiderMonkey）**
>
>   <audio src="C:\Users\10691\Downloads\JavaScript 引擎负责.mp3"></audio>
> JavaScript 引擎负责执行 JavaScript 代码，常见的有 **V8** 和 **SpiderMonkey**：  
>
> 1. **V8**：  
>    - 由 Google 开发，用于 **Chrome** 和 **Node.js**。  
>    - 以速度快、JIT 编译和垃圾回收机制著称。  
> 2. **SpiderMonkey**：  
>    - 由 Mozilla 开发，用于 **Firefox**。  
>    - 是第一个 JavaScript 引擎，支持 WebAssembly 等高级功能。  
>    两者将 JavaScript 解析、编译为机器码并优化执行。

---

### Code Example:

#### **JavaScript Code Executed by Engines**
```javascript
// This code runs on any JavaScript engine (V8, SpiderMonkey, etc.)
const greet = name => `Hello, ${name}!`;
console.log(greet("World")); // Output: Hello, World!
```

---

### Key Notes:

<audio src="C:\Users\10691\Downloads\1. __V8__ power.mp3"></audio>

1. **V8** powers server-side JavaScript (Node.js) and Chrome.  
2. **SpiderMonkey** excels in standard compliance and Firefox features.  
3. Both engines use **JIT compilation** for optimized performance.