### ES6 Modules

<audio src="C:\Users\10691\Downloads\ES6 modules ena.mp3"></audio>

**ES6 modules** enable modular code by allowing you to export and import functionality across files. They use **`import`** and **`export`** keywords. Each file is treated as a module with its own scope.

1. **Export**:
   - **Named Export**: Export multiple values by name.
   - **Default Export**: Export a single default value.

2. **Import**:
   - Use `import` to bring in exported values.  
   - Named imports must match their exported names, while default imports can be renamed.

Modules are loaded asynchronously and run in strict mode by default.

> **ES6 模块**  
>
> <audio src="C:\Users\10691\Downloads\ES6 模块 通过 `impo.mp3"></audio>
>
> **ES6 模块** 通过 **`import`** 和 **`export`** 关键字，实现跨文件的模块化代码。每个文件是一个独立的模块，具有自己的作用域。  
>
> 1. **导出**：  
>    - **命名导出**：按名称导出多个值。  
>    - **默认导出**：导出单一默认值。  
> 2. **导入**：  
>    - 使用 `import` 导入模块。**命名导入**名称需与导出名称一致，而**默认导入**可以重命名。  
>
> 模块**异步**加载，默认运行在**严格模式**下。

---

### Code Examples:

<audio src="C:\Users\10691\Downloads\这段代码展示了JavaScri (4).mp3"></audio>

#### **Named Export and Import**
**`math.js`** (module file):
```javascript
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
```

**`main.js`**:

```javascript
import { add, subtract } from './math.js';

console.log(add(2, 3)); // Logs: 5
console.log(subtract(5, 2)); // Logs: 3
```

---

#### **Default Export and Import**
**`greet.js`**:
```javascript
export default function greet(name) {
  return `Hello, ${name}!`;
}
```

**`main.js`**:
```javascript
import greet from './greet.js';

console.log(greet("Alice")); // Logs: "Hello, Alice!"
```

---

### Key Notes:

<audio src="C:\Users\10691\Downloads\1. Use __`expor.mp3"></audio>

1. Use **`export`** for reusable components and **`import`** to access them in other files.  
2. **Named exports** allow exporting multiple values, while **default exports** are used for a single main value.  
3. Modules must be served via HTTP/HTTPS for browsers (e.g., in **`<script type="module">`**).