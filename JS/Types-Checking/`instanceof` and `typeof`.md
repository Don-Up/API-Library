### `instanceof` vs. `typeof` in JavaScript

<audio src="..\..\mp3\`type of`_    -.mp3"></audio>

1. **`typeof`**:
   - Returns a string indicating the **primitive type** (e.g., `"string"`, `"number"`, `"boolean"`, etc.) or `"object"` for non-primitives.
   - Useful for checking **basic data types**.

2. **`instanceof`**:
   - Checks if an object is an instance of a specific **constructor** or **class**.
   - Useful for verifying object inheritance and custom types.

#### Key Difference:
- **`typeof`** is for basic types or function checks.
- **`instanceof`** is for object inheritance and type hierarchy.

> **`instanceof` 和 `typeof`**  
>
> <audio src="..\..\mp3\`type of`：     .mp3"></audio>
>
> 1. **`typeof`**：  
>    - 返回值的**基本类型**字符串（如 `"string"`、`"number"`、`"boolean"` 等）或 `"object"` 表示引用类型。  
>    - 用于检查**基本数据类型**。  
> 2. **`instanceof`**：  
>    - 检查对象是否是特定**构造函数**或**类**的实例。  
>    - 用于验证对象继承关系和自定义类型。  
>
> **主要区别**：  
>
> - **`typeof`** 用于检查基本数据类型。  
> - **`instanceof`** 用于检查引用类型的继承关系。

---

### Code Examples:

#### **Using `typeof`**
```javascript
console.log(typeof "Hello"); // "string"
console.log(typeof 42); // "number"
console.log(typeof true); // "boolean"
console.log(typeof {}); // "object"
console.log(typeof null); // "object" (quirk in JavaScript)
console.log(typeof undefined); // "undefined"
console.log(typeof function () {}); // "function"
```

#### **Using `instanceof`**
```javascript
class Animal {}
class Dog extends Animal {}

const myDog = new Dog();

console.log(myDog instanceof Dog); // true
console.log(myDog instanceof Animal); // true
console.log(myDog instanceof Object); // true
console.log([] instanceof Array); // true
console.log([] instanceof Object); // true
```

---

### Key Notes:
1. **`typeof null`** is `"object"` due to a JavaScript quirk. Use `null === null` for null checks.  
2. **`instanceof`** checks inheritance, but it won't work across different JavaScript environments (e.g., iframes).  
3. Use **`typeof`** for primitives and **`instanceof`** for objects and classes.