### CommonJS: `require` and `module.exports`

<audio src="C:\Users\10691\Downloads\CommonJS is the.mp3"></audio>

**CommonJS** is the module system used in Node.js. It allows modular code by using **`require`** to import modules and **`module.exports`** to export functionality.

1. **Export**:
   - **`module.exports`** is used to export values (objects, functions, etc.).
   - **`exports`** is an alias for `module.exports`.

2. **Import**:
   - Use **`require`** to import a module.

CommonJS modules are synchronous and work in environments like Node.js but are not natively supported in browsers without bundlers like Webpack.

> **CommonJS: `require` 和 `module.exports`**  
>
> <audio src="C:\Users\10691\Downloads\CommonJS 是 Node.mp3"></audio>
>
> **CommonJS** 是 Node.js 使用的模块系统。通过 **`require`** 导入模块，使用 **`module.exports`** 导出功能。  
>
> 1. **导出**：  
>    - 使用 **`module.exports`** 导出值（对象、函数等）。  
>    - **`exports`** 是 **`module.exports`** 的别名。  
> 2. **导入**：  
>    - 使用 **`require`** 导入模块。  
>    CommonJS 模块是同步的，适用于 Node.js 环境，但浏览器需使用如 Webpack 的打包工具支持。

---

### Code Examples:

#### **Exporting with `module.exports`**
**`math.js`**:
```javascript
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

// Export functions
module.exports = {
  add,
  subtract,
};
```

#### **Importing with `require`**
**`main.js`**:
```javascript
const math = require('./math.js');

console.log(math.add(2, 3)); // Logs: 5
console.log(math.subtract(5, 2)); // Logs: 3
```

---

#### **Using `exports` (Alias of `module.exports`)**
**`greet.js`**:
```javascript
exports.greet = function (name) {
  return `Hello, ${name}!`;
};
```

**`main.js`**:
```javascript
const greetModule = require('./greet.js');

console.log(greetModule.greet("Alice")); // Logs: "Hello, Alice!"
```

---

### Key Notes:

<audio src="C:\Users\10691\Downloads\1. __`module ex.mp3"></audio>

1. **`module.exports`** is the actual object exported; **`exports`** is a shorthand for it.  
2. CommonJS modules are synchronous and best suited for server-side environments like Node.js.  
3. For browser compatibility, use bundlers or switch to ES6 modules.