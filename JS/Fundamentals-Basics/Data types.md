### JavaScript Primitive Data Types

JavaScript has **7 primitive data types**:

<audio src="..\..\mp3\String_ Represe.mp3"></audio>

1. **`string`**: Represents text (e.g., `"hello"`).
2. **`number`**: Represents integers and floating-point numbers (e.g., `42`, `3.14`).
3. **`boolean`**: Represents `true` or `false`.
4. **`null`**: Represents the intentional absence of value.
5. **`undefined`**: A variable declared but not assigned a value.
6. **`symbol`**: A unique and immutable value, often used as object keys.
7. **`bigint`**: Represents integers larger than `Number.MAX_SAFE_INTEGER`.

These types are **immutable** (except `bigint` and `symbol`) and compared by value.

> JavaScript 有 **7 种原始数据类型**：
>
> <audio src="..\..\mp3\`string`：表示文本（如.mp3"></audio>
>
> 1. **`string`**：表示文本（如 `"hello"`）。
> 2. **`number`**：表示整数和浮点数（如 `42`，`3.14`）。
> 3. **`boolean`**：表示布尔值，即 `true` 或 `false`。
> 4. **`null`**：表示有意的空值。
> 5. **`undefined`**：表示声明变量但未赋值。
> 6. **`symbol`**：表示唯一且不可变的值，常用于对象键。
> 7. **`bigint`**：表示大于 `Number.MAX_SAFE_INTEGER` 的整数。

---

#### Code Examples:

```javascript
// String
let str = "Hello, world!";
console.log(typeof str); // "string"

// Number
let num = 42;
console.log(typeof num); // "number"

// Boolean
let isTrue = true;
console.log(typeof isTrue); // "boolean"

// Null
let emptyValue = null;
console.log(typeof emptyValue); // "object" (JavaScript quirk)

// Undefined
let notAssigned;
console.log(typeof notAssigned); // "undefined"

// Symbol
let sym = Symbol("unique");
console.log(typeof sym); // "symbol"

// BigInt
let bigIntNum = 1234567890123456789012345678901234567890n;
console.log(typeof bigIntNum); // "bigint"
```

---

### Key Notes:
1. **`null`** is a primitive, but `typeof null` returns `"object"` (historical bug).
2. **`bigint`** is denoted by appending `n` to a number.
3. **`symbol`** values are unique and ensure no collisions when used as keys.