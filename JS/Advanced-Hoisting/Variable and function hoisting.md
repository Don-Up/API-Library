### Variable and Function Hoisting in JavaScript

<audio src="..\..\mp3\__Hoisting__ is.mp3"></audio>

**Hoisting** is JavaScript's behavior of moving declarations to the top of their scope during the compilation phase.

1. **Variable Hoisting**:
   - Variables declared with **`var`** are hoisted and initialized as `undefined`.
   - Variables declared with **`let`** and **`const`** are hoisted but remain in the **Temporal Dead Zone (TDZ)** until initialization.

2. **Function Hoisting**:
   - **Function declarations** are fully hoisted, meaning they can be called before their definition.
   - **Function expressions** (using `var`, `let`, or `const`) are treated like variables and are not callable before their definition.

> **变量和函数提升**  
>
> <audio src="..\..\mp3\在 JavaScript 中， (2).mp3"></audio>
>
> 在 JavaScript 中，**提升** 是指在编译阶段将变量和函数声明移动到其作用域顶部的行为。  
>
> 1. **变量提升**：  
>    - 使用 **`var`** 声明的变量被提升并初始化为 `undefined`。  
>    - 使用 **`let`** 和 **`const`** 声明的变量被提升，但会处于 **暂时性死区（TDZ）**。  
> 2. **函数提升**：  
>    - **函数声明** 完全被提升，可以在定义前调用。  
>    - **函数表达式** 提升时视为变量，定义前不可调用。

---

### Code Examples:

<audio src="..\..\mp3\这段代码展示了JavaScri (2).mp3"></audio>

#### **Variable Hoisting**
```javascript
console.log(a); // Logs: undefined (hoisted, but not initialized)
var a = 10;

console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 20;

console.log(c); // ReferenceError: Cannot access 'c' before initialization
const c = 30;
```

#### **Function Declaration Hoisting**
```javascript
sayHello(); // Logs: "Hello, world!" (fully hoisted)

function sayHello() {
  console.log("Hello, world!");
}
```

#### **Function Expression Hoisting**
```javascript
// console.log(sayHi); // Logs: undefined (hoisted as a variable)
var sayHi = function () {
  console.log("Hi!");
};

// console.log(greet); // ReferenceError: Cannot access 'greet' before initialization
let greet = function () {
  console.log("Greetings!");
};
```

---

### Key Notes:
1. Function declarations are **fully hoisted**, while function expressions behave like variables.  
2. **`var`** variables are hoisted with `undefined`, while **`let`** and **`const`** are hoisted but remain in the TDZ.  
3. Always declare variables and functions before using them for clarity and best practices.