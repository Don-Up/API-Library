### Function Declarations vs. Function Expressions in JavaScript

<audio src="..\..\mp3\- __Function De.mp3"></audio>

- **Function Declarations**: A named function defined using the `function` keyword. It is **hoisted**, meaning it can be called before its definition in the code.

- **Function Expressions**: A function assigned to a variable, either named or anonymous. It is **not hoisted**, so it cannot be called before its definition.

> **函数声明与函数表达式**：
>
> <audio src="..\..\mp3\- 函数声明：使用 `func.mp3"></audio>
>
> - **函数声明**：使用 `function` 关键字定义的命名函数。**会被提升**，因此可以在定义之前调用。
> - **函数表达式**：将函数赋值给变量，函数可以是匿名或命名的。**不会被提升**，因此在定义之前无法调用。

---

### Code Examples:

<audio src="..\..\mp3\这段代码展示了函数声明和函数表.mp3"></audio>

#### **Function Declaration**
```javascript
// Function Declaration
console.log(add(2, 3)); // 5 (hoisted)

function add(a, b) {
  return a + b;
}
```

#### **Function Expression**
```javascript
// Function Expression
console.log(subtract(5, 2)); // Error: Cannot access 'subtract' before initialization

const subtract = function (a, b) {
  return a - b;
};

console.log(subtract(5, 2)); // 3
```

---

### Key Notes:
1. **Hoisting**: Function declarations are hoisted, but function expressions are not.
2. Use **expressions** when you need functions as variables (e.g., callbacks).
3. Both allow defining reusable logic, but declarations are better for globally accessible functions.