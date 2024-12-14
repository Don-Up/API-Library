### `var`, `let`, and `const` in JavaScript

<audio src="..\..\mp3\1. __`var`___ F.mp3"></audio>

1. **`var`**: Function-scoped, hoisted but initialized as `undefined`. Accessible before declaration. Can be redeclared.
2. **`let`**: Block-scoped, hoisted but not initialized (in **Temporal Dead Zone**). Cannot be accessed before declaration. No redeclaration within the same scope.
3. **`const`**: Block-scoped, hoisted but not initialized (in **Temporal Dead Zone**). Must be initialized during declaration. Immutable binding (value can change for objects/arrays).

#### **Key Points**

<audio src="..\..\mp3\- __Hoisting___.mp3"></audio>

- **Hoisting**: Variables are moved to the top of their scope during compilation.
- **Temporal Dead Zone (TDZ)**: Time between variable hoisting and initialization where accessing `let`/`const` throws an error.

> **`var`、`let` 和 `const`**：
>
> <audio src="..\..\mp3\`var`：函数作用域，提升后.mp3"></audio>
>
> 1. **`var`**：函数作用域，提升后初始化为 `undefined`，声明前可访问，可重复声明。
> 2. **`let`**：块作用域，提升但未初始化（**暂时性死区**），声明前不可访问，同作用域内不可重复声明。
> 3. **`const`**：块作用域，提升但未初始化（**暂时性死区**），声明时必须赋值，绑定不可更改（对象/数组内容可变）。

---

#### Code Examples:

<audio src="..\..\mp3\在这段代码中，展示了 Java.mp3"></audio>

```javascript
// Example of var
console.log(a); // undefined (hoisted but initialized as undefined)
var a = 10;
console.log(a); // 10

// Example of let
console.log(b); // Error: Cannot access 'b' before initialization (TDZ)
let b = 20;
console.log(b); // 20

// Example of const
console.log(c); // Error: Cannot access 'c' before initialization (TDZ)
const c = 30;
console.log(c); // 30

// const with objects
const obj = { key: 1 };
obj.key = 2; // Allowed (mutable object)
console.log(obj); // { key: 2 }
```

#### Key Observations:
1. **`var`**: Hoisted and initialized as `undefined`.
2. **`let`/`const`**: Hoisted but in **Temporal Dead Zone (TDZ)** until declared.
3. **`const`**: Cannot be reassigned but allows mutation of objects/arrays.