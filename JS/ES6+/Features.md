### ES6+ Features in JavaScript

ES6 (ECMAScript 2015) and later versions introduced powerful features to enhance JavaScript’s readability, maintainability, and performance. Here are key features:

<audio src="C:\Users\10691\Downloads\1.  Let and Con.mp3"></audio>

1. **Let and Const**:  
   - `let` and `const` replace `var` for block-scoped variables.  
   - `const` is used for variables that won’t be reassigned.  

2. **Arrow Functions**:  
   - Shorter syntax for functions, with lexical `this` binding.  

3. **Template Literals**:  
   - Use backticks (`) for strings with embedded expressions (`${expression}`).

4. **Destructuring**:  
   - Extract values from arrays or objects into variables easily.

5. **Spread and Rest Operators**:  
   - `...` is used to expand arrays/objects or collect function arguments.

6. **Default Parameters**:  
   - Define default values for function parameters.

7. **Modules**:  
   - `import` and `export` enable modular programming.

8. **Promises and Async/Await**:  
   - Simplify asynchronous programming.

9. **Classes**:  
   - Cleaner syntax for object-oriented programming.

10. **Optional Chaining (`?.`)**:  
    - Safely access deeply nested properties.

11. **Nullish Coalescing (`??`)**:  
    - Provide a default value for `null` or `undefined`.

> **ES6+ 特性**  
> ES6（ECMAScript 2015）及后续版本为 JavaScript 引入了强大的功能，提高了代码的可读性、可维护性和性能。  
>
> <audio src="C:\Users\10691\Downloads\Let 和 Const：  `.mp3"></audio>
>
> 1. **Let 和 Const**：  
>    - `let` 和 `const` 替代 `var`，具有块级作用域。  
>    - `const` 用于声明不可重新赋值的变量。  
> 2. **箭头函数**：  
>    - 更短的函数语法，且 `this` 绑定到定义时的上下文。  
> 3. **模板字符串**：  
>    - 使用反引号（`）创建字符串，支持嵌入表达式（`${expression}`）。  
> 4. **解构赋值**：  
>    - 从数组或对象中提取值到变量中。  
> 5. **扩展符和剩余参数**：  
>    - `...` 用于展开数组/对象或收集函数参数。  
> 6. **默认参数**：  
>    - 为函数参数定义默认值。  
> 7. **模块化**：  
>    - `import` 和 `export` 支持模块化编程。  
> 8. **Promises 和 Async/Await**：  
>    - 简化异步编程。  
> 9. **类**：  
>    - 提供更清晰的面向对象语法。  
> 10. **可选链（`?.`）**：  
>     - 安全访问深层嵌套属性。  
> 11. **空值合并运算符（`??`）**：  
>     - 为 `null` 或 `undefined` 提供默认值。

---

### Code Examples:

#### **Let and Const**
```javascript
let x = 10;
x = 20; // Allowed

const y = 30;
// y = 40; // Error: Assignment to constant variable
```

#### **Arrow Functions**
```javascript
const add = (a, b) => a + b; // Shorter syntax
console.log(add(5, 10)); // 15
```

#### **Template Literals**
```javascript
const name = "Alice";
console.log(`Hello, ${name}!`); // Hello, Alice!
```

#### **Destructuring**
```javascript
const user = { name: "Alice", age: 25 };
const { name, age } = user; // Extract values
console.log(name, age); // Alice 25
```

#### **Spread Operator**
```javascript
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4]; // [1, 2, 3, 4]
```

#### **Rest Operator**
```javascript
const sum = (...nums) => nums.reduce((a, b) => a + b, 0);
console.log(sum(1, 2, 3)); // 6
```

#### **Default Parameters**
```javascript
function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}
greet(); // Hello, Guest!
```

#### **Modules**
```javascript
// math.js
export const add = (a, b) => a + b;

// main.js
import { add } from "./math.js";
console.log(add(10, 20)); // 30
```

#### **Promises and Async/Await**
```javascript
const fetchData = () => Promise.resolve("Data");
async function getData() {
  const data = await fetchData();
  console.log(data); // Data
}
getData();
```

#### **Optional Chaining**
```javascript
const user = { profile: { name: "Alice" } };
console.log(user.profile?.name); // Alice
console.log(user.address?.city); // undefined
```

#### **Nullish Coalescing**
```javascript
const value = null;
console.log(value ?? "Default"); // Default
```

---

### Key Notes:
1. ES6+ features improve code clarity and maintainability.  
2. Use modern tools like Babel to ensure compatibility with older browsers.  
3. Modular programming with `import/export` is a core feature for scalable applications.