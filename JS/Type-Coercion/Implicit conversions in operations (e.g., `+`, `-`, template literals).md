### Implicit Conversions in Operations

<audio src="..\..\mp3\JavaScript perf.mp3"></audio>

JavaScript performs **implicit type conversions** (type coercion) during operations:

1. **Addition (`+`)**:
   - If one operand is a string, both are converted to strings and concatenated.
   - Otherwise, operands are converted to numbers.

2. **Subtraction (`-`), Multiplication (`*`), Division (`/`)**:
   - Operands are converted to numbers.

3. **Template Literals**:
   - Converts embedded expressions into strings using `.toString()`.

Implicit conversions can lead to unexpected results, so explicit type conversion is recommended for clarity.

> **操作中的隐式类型转换**  
>
> <audio src="..\..\mp3\JavaScript 在操作中.mp3"></audio>
>
> JavaScript 在操作中会进行**隐式类型转换**（类型强制）：  
>
> 1. **加法（`+`）**：  
>    - 如果一个操作数是字符串，其它操作数会被转换为字符串并拼接。  
>    - 否则，操作数会被转换为数字后相加。  
> 2. **减法（`-`）、乘法（`*`）、除法（`/`）**：  
>    - 操作数会被转换为数字。  
> 3. **模板字符串**：  
>    - 嵌入的表达式通过 `.toString()` 转换为字符串。  
>
> 隐式转换可能导致意外结果，因此推荐使用显式转换以提高代码可读性。

---

### Code Examples:

#### **Addition (`+`)**
```javascript
console.log(5 + "5"); // "55" (number 5 is coerced to string)
console.log("Hello" + true); // "Hellotrue" (boolean coerced to string)
console.log(5 + 5); // 10 (both are numbers)
```

#### **Subtraction (`-`)**
```javascript
console.log("10" - 5); // 5 (string "10" coerced to number)
console.log("abc" - 5); // NaN (string "abc" cannot be converted)
```

#### **Template Literals**
```javascript
const name = "Alice";
const age = 25;
console.log(`Name: ${name}, Age: ${age}`); // "Name: Alice, Age: 25"
```

---

### Key Notes:
1. **`+`** can act as concatenation or addition, depending on operand types.  
2. Other operators (`-`, `*`, `/`) convert operands to numbers.  
3. Template literals always convert embedded expressions to strings.