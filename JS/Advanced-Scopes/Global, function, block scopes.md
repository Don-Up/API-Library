### Scopes in JavaScript: Global, Function, and Block

<audio src="..\..\mp3\Scope determine.mp3"></audio>

**Scope** determines the accessibility of variables in JavaScript. There are three main types:

1. **Global Scope**:
   - Variables declared outside any function or block are globally accessible.
   - Accessible anywhere in the script.

2. **Function Scope**:
   - Variables declared with `var` inside a function are accessible only within that function.

3. **Block Scope**:
   - Variables declared with `let` or `const` inside a block (`{}`) are accessible only within that block.

> **JavaScript 中的作用域：全局、函数、块作用域**  
>
>   <audio src="..\..\mp3\作用域 决定了变量的可访问性，.mp3"></audio>
>
> **作用域** 决定了变量的可访问性，有以下三种类型：
>
> 1. **全局作用域**：在任何函数或块外声明的变量，可以在整个脚本中访问。  
> 2. **函数作用域**：用 `var` 声明的变量只能在函数内部访问。  
> 3. **块作用域**：用 `let` 或 `const` 声明的变量只能在块 `{}` 内访问。

---

### Code Examples:

<audio src="..\..\mp3\这段代码展示了JavaScri (5).mp3"></audio>

#### **Global Scope**
```javascript
let globalVar = "I am global";

function accessGlobal() {
  console.log(globalVar); // Accessible here
}
accessGlobal();
console.log(globalVar); // Accessible here too
```

#### **Function Scope**
```javascript
function myFunction() {
  var functionVar = "I am in function scope";
  console.log(functionVar); // Accessible here
}
// console.log(functionVar); // Error: functionVar is not defined
```

#### **Block Scope**
```javascript
if (true) {
  let blockVar = "I am in block scope";
  console.log(blockVar); // Accessible here
}
// console.log(blockVar); // Error: blockVar is not defined
```

---

### Key Notes:

<audio src="..\..\mp3\1. __Global var.mp3"></audio>

1. **Global variables** can lead to conflicts; avoid overusing them.  
2. Use **`let`** and **`const`** for block-scoped variables to prevent issues with re-declaration.  
3. **Function scope** is limited to the function body, while **block scope** is more granular.