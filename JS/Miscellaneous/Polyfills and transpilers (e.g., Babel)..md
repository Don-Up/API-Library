### Polyfills and Transpilers (e.g., Babel)

<audio src="..\..\mp3\Polyfills_  Pro.mp3"></audio>

1. **Polyfills**:  
   - Provide missing features in older environments by adding fallback implementations (e.g., `Promise`, `fetch`).  
   - Typically added via libraries like **`core-js`** or **`polyfill.io`**.

2. **Transpilers**:  
   - Convert modern JavaScript (e.g., ES6+) into backward-compatible syntax for older browsers.  
   - **Babel** is a popular transpiler that compiles modern code to ES5.

**Purpose**: Ensure compatibility across environments, enabling developers to use the latest features.

> **Polyfills 和 Transpilers（如 Babel）**  
>
> <audio src="..\..\mp3\Polyfills：     .mp3"></audio>
>
> 1. **Polyfills**：  
>    - 为旧环境提供缺失功能的回退实现（如 `Promise`、`fetch`）。  
>    - 通常通过 **`core-js`** 或 **`polyfill.io`** 等库添加。  
> 2. **Transpilers**：  
>    - 将现代 JavaScript（如 ES6+）转换为向后兼容的语法，以支持旧浏览器。  
>    - **Babel** 是一个流行的转译器，将代码编译为 ES5。  
>    **目的**：确保跨环境兼容性，使开发者能够使用最新特性。

---

### Code Examples:

#### **Using a Polyfill**

<audio src="..\..\mp3\这段代码展示了如何为旧环境添加.mp3"></audio>

```javascript
// Add a polyfill for Promise in older environments
if (!window.Promise) {
  console.log("Adding Promise polyfill...");
  window.Promise = require("es6-promise").Promise;
}

// Now you can safely use Promise
Promise.resolve("Polyfill works!").then(console.log);
```

#### **Using Babel (via CLI)**

<audio src="..\..\mp3\这段代码展示了如何使用Babe.mp3"></audio>

1. Install Babel:
   ```bash
   npm install --save-dev @babel/core @babel/cli @babel/preset-env
   ```

2. Create a **`.babelrc`** file:
   ```json
   {
     "presets": ["@babel/preset-env"]
   }
   ```

3. Transpile code:
   ```bash
   npx babel src --out-dir dist
   ```

#### **ES6+ Code (Before Transpiling)**
```javascript
const greet = (name = "Guest") => `Hello, ${name}!`;
console.log(greet());
```

#### **ES5 Code (After Babel Transpiling)**
```javascript
"use strict";

var greet = function greet() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Guest";
  return "Hello, " + name + "!";
};
console.log(greet());
```

---

### Key Notes:

<audio src="..\..\mp3\1. Use __polyfi.mp3"></audio>

1. Use **polyfills** for missing features and **Babel** to ensure modern code runs in older environments.  
2. Babel + **`@babel/preset-env`** targets specific browsers based on your configuration.  
3. Polyfills and transpilers are essential for supporting legacy browsers while using modern JavaScript.