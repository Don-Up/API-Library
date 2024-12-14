### Module Pattern in JavaScript

<audio src="..\..\mp3\Definition_  A .mp3"></audio>

1. **Definition**:  
   - A design pattern used to encapsulate code and create private/public variables and methods.
   - Uses **IIFE (Immediately Invoked Function Expression)** or **ES Modules** to achieve modularity.

2. **Features**:  
   - Encapsulates implementation details.  
   - Provides a clean public API.  
   - Prevents global namespace pollution.

3. **Modern Alternative**:  
   - Use **ES Modules** (`import/export`) for better structure and reusability.

> **模块模式**  
>
> <audio src="..\..\mp3\定义,  一种设计模式，用于封.mp3"></audio>
>
> 1. **定义**：  
>    - 一种设计模式，用于封装代码并创建私有/公共变量和方法。  
>    - 使用 **IIFE（立即执行函数表达式）** 或 **ES 模块**实现模块化。  
> 2. **特点**：  
>    - 封装实现细节。  
>    - 提供干净的公共 API。  
>    - 避免全局命名空间污染。  
> 3. **现代替代方案**：  
>    - 使用 **ES 模块**（`import/export`）实现更好结构和重用性。

---

### Code Examples:

#### **Classic Module Pattern with IIFE**

<audio src="..\..\mp3\这段代码展示了模块模式的使用，.mp3"></audio>

```javascript
const myModule = (function () {
  // Private variables and methods
  let privateVar = "I am private";
  function privateMethod() {
    console.log(privateVar);
  }

  // Public API
  return {
    publicMethod: function () {
      console.log("Accessing private method:");
      privateMethod();
    },
  };
})();

myModule.publicMethod(); // "Accessing private method: I am private"
// myModule.privateMethod(); // Error: privateMethod is not defined
```

#### **Modern ES Module**

<audio src="..\..\mp3\这段代码展示了如何使用ES模块.mp3"></audio>

```javascript
// myModule.js
const privateVar = "I am private";
function privateMethod() {
  console.log(privateVar);
}
export function publicMethod() {
  console.log("Accessing private method:");
  privateMethod();
}

// main.js
import { publicMethod } from "./myModule.js";
publicMethod(); // "Accessing private method: I am private"
```

---

### Key Notes:

<audio src="..\..\mp3\1. __IIFE__ pro.mp3"></audio>

1. **IIFE** provides closures for encapsulation in older environments.  
2. **ES Modules** (`import/export`) are the recommended approach for modular code.  
3. Both patterns help organize code and avoid global scope pollution.