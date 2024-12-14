### IIFE (Immediately Invoked Function Expression)

<audio src="..\..\mp3\An __IIFE__ is .mp3"></audio>

An **IIFE** is a JavaScript function that is **executed immediately after it is defined**. It is written as a function expression enclosed in parentheses, followed by `()` to invoke it.  

IIFEs are used to:
1. **Avoid polluting the global scope** by creating a private scope.
2. Execute code immediately, especially for initialization tasks.

Syntax: `(function() { /* code */ })();`

> **IIFE（立即执行函数表达式）**：
>
> <audio src="..\..\mp3\IIFE 是在定义后立即执行的.mp3"></audio>
>
> **IIFE** 是在定义后立即执行的 JavaScript 函数。它以括号包裹的函数表达式形式书写，后面紧跟 `()` 调用它。  
> **用途**：  
>
> 1. **避免污染全局作用域**，通过创建私有作用域。  
> 2. 立即执行代码，常用于初始化任务。  

---

### Code Examples:

<audio src="..\..\mp3\这段代码展示了立即执行函数表达.mp3"></audio>

#### **Basic IIFE**
```javascript
(function () {
  console.log("IIFE executed!"); // "IIFE executed!"
})();
```

#### **IIFE with Parameters**
```javascript
(function (name) {
  console.log(`Hello, ${name}!`); // "Hello, Alice!"
})("Alice");
```

#### **IIFE to Create Private Scope**
```javascript
const counter = (function () {
  let count = 0; // Private variable
  return {
    increment: () => ++count,
    getCount: () => count,
  };
})();

console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.getCount()); // 2
```

---

### Key Notes:
1. IIFEs are useful for creating **isolated scopes**.
2. They help avoid **global variable conflicts**.
3. Common in **module patterns** and older JavaScript code before ES6 modules.