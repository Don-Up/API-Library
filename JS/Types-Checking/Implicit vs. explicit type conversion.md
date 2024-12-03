### Implicit vs. Explicit Type Conversion in JavaScript

<audio src="C:\Users\10691\Downloads\Type conversion.mp3"></audio>

**Type conversion** changes a value from one data type to another:

1. **Implicit Conversion (Type Coercion)**:
   - Automatically performed by JavaScript during operations.
   - E.g., `+` converts non-strings to strings, `==` performs type coercion.

2. **Explicit Conversion (Type Casting)**:
   - Manually performed by developers using functions like `String()`, `Number()`, or `Boolean()`.

#### Key Difference:
- Implicit conversion happens automatically, which can lead to unexpected results.
- Explicit conversion is controlled, making the intent clear.

> **隐式与显式类型转换**  
>
> <audio src="C:\Users\10691\Downloads\类型转换 将值从一种数据类型更.mp3"></audio>
>
> **类型转换** 将值从一种数据类型更改为另一种：  
>
> 1. **隐式转换（类型强制）**：  
>    - JavaScript 在操作中自动执行。  
>    - 如 `+` 将非字符串转换为字符串，`==` 会进行类型强制。  
> 2. **显式转换（类型转换）**：  
>    - 通过开发者使用函数手动完成，如 `String()`、`Number()` 或 `Boolean()`。  
>
> **主要区别**：  
>
> - 隐式转换是自动的，可能导致意外结果。  
> - 显式转换是可控的，意图明确。

---

### Code Examples:

#### **Implicit Conversion**
```javascript
console.log("5" + 2); // "52" (number 2 is coerced to a string)
console.log("5" - 2); // 3 (string "5" is coerced to a number)
console.log(5 == "5"); // true (type coercion happens)
```

#### **Explicit Conversion**
```javascript
console.log(String(123)); // "123" (number to string)
console.log(Number("456")); // 456 (string to number)
console.log(Boolean(0)); // false (number to boolean)
```

---

### Key Notes:
1. Implicit conversion can result in **unexpected behavior**; prefer strict equality (`===`) to avoid it.  
2. Explicit conversion improves **code clarity** and avoids unintended outcomes.  
3. Always validate input types explicitly when handling critical operations.