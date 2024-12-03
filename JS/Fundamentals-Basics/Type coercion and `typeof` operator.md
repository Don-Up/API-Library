### Type Coercion and `typeof` Operator in JavaScript

<audio src="C:\Users\10691\Downloads\Type coercion_ .mp3"></audio>

**Type coercion**: JavaScript converts data types automatically during operations.  

- **Implicit Coercion**: Happens automatically (e.g., `"5" + 1 → "51"`).  
- **Explicit Coercion**: Manually convert types using functions like `Number()`, `String()`, `Boolean()`.

**`typeof` operator**: Used to check the type of a variable. It returns a string indicating the data type (`"string"`, `"number"`, etc.). Special cases:  
- `typeof null` → `"object"` (historical bug).  
- `typeof NaN` → `"number"`.  

> **类型强制转换和 `typeof` 运算符**：
>
> <audio src="C:\Users\10691\Downloads\类型强制转换是 JavaScr.mp3"></audio>
>
> **类型强制转换**是 JavaScript 在操作中自动或手动转换数据类型：
>
> - **隐式转换**：自动发生（如 `"5" + 1 → "51"`）。
> - **显式转换**：使用 `Number()`、`String()` 等函数手动转换。
> **`typeof` 运算符**：返回变量的类型字符串，如 `"string"`、`"number"`。特殊情况：  
> - `typeof null` → `"object"`（历史遗留问题）。  
> - `typeof NaN` → `"number"`。

---

#### Code Examples:

<audio src="C:\Users\10691\Downloads\这段代码展示了 JavaScr.mp3"></audio>

```javascript
// Type Coercion
console.log("5" + 1); // Implicit: "51" (string concatenation)
console.log("5" - 1); // Implicit: 4 (string to number)
console.log(Boolean(0)); // Explicit: false (0 coerced to boolean)

// typeof Operator
console.log(typeof "hello"); // "string"
console.log(typeof 42); // "number"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" (quirk)
console.log(typeof NaN); // "number"
console.log(typeof Symbol("id")); // "symbol"
console.log(typeof BigInt(123)); // "bigint"
```

---

### Key Notes:
1. Implicit coercion can lead to unexpected results (e.g., `"5" - "2"` → `3`).
2. Explicit coercion ensures predictable type conversion.
3. **`typeof null`** is `"object"` due to a legacy bug in JavaScript.