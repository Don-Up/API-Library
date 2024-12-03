### Loose (`==`) vs. Strict Equality (`===`) in JavaScript

<audio src="C:\Users\10691\Downloads\1. Loose Equali.mp3"></audio>

1. **Loose Equality (`==`)**:
   - Compares two values **after type coercion**.
   - Converts different types to the same type before comparing.
   - May lead to unexpected results due to implicit conversion.

2. **Strict Equality (`===`)**:
   - Compares two values **without type coercion**.
   - Values must have the same type and value to be considered equal.
   - Safer and more predictable.

#### Key Difference:
- `==` allows type conversion, while `===` does not.

> **宽松相等 (`==`) 与严格相等 (`===`)**  
>
> <audio src="C:\Users\10691\Downloads\宽松相等：     - 在比较.mp3"></audio>
>
> 1. **宽松相等 (`==`)**：  
>    - 在比较前会进行**类型强制转换**。  
>    - 不同类型的值会被转换成相同类型后再比较。  
>    - 可能导致意外结果。  
> 2. **严格相等 (`===`)**：  
>    - 不进行**类型强制**，直接比较值和类型。  
>    - 只有值和类型完全相同时才返回 `true`，更安全且可预测。  
>
> **主要区别**：`==` 允许类型转换，而 `===` 不允许。

---

### Code Examples:

#### **Loose Equality (`==`)**
```javascript
console.log(5 == "5"); // true (string "5" is coerced to number 5)
console.log(false == 0); // true (false is coerced to 0)
console.log(null == undefined); // true (special case)
```

#### **Strict Equality (`===`)**
```javascript
console.log(5 === "5"); // false (different types)
console.log(false === 0); // false (different types)
console.log(null === undefined); // false (different types)
```

---

### Key Notes:
1. Use **`===`** for better type safety and to avoid unintended results.  
2. **`==`** should only be used when type coercion is explicitly desired.  
3. Avoid `==` for `null` and `undefined` checks; prefer `===` instead.