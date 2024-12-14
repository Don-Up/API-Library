### Truthy and Falsy Values in JavaScript

<audio src="..\..\mp3\In JavaScript, .mp3"></audio>

In JavaScript, values are classified as **truthy** or **falsy** when evaluated in a boolean context (e.g., `if` conditions).  

- **Falsy Values**: Values that evaluate to `false`:  
  `false`, `0`, `-0`, `0n` (BigInt zero), `""` (empty string), `null`, `undefined`, `NaN`.  

- **Truthy Values**: Everything else, including:  
  Non-empty strings, non-zero numbers, arrays, objects, and `true`.  

These concepts are critical for conditional logic and implicit type coercion.

> **JavaScript 的真值和假值**：  
>
> <audio src="..\..\mp3\在布尔上下文中（如 if 条件.mp3"></audio>
>
> 在布尔上下文中（如 `if` 条件），值会被分类为**真值**或**假值**。
>
> - **假值**：会被评估为 `false` 的值：
>   `false`、`0`、`-0`、`0n`（BigInt 零）、`""`（空字符串）、`null`、`undefined`、`NaN`。  
>
> - **真值**：其他所有值，包括非空字符串、非零数字、数组、对象、`true`。

---

#### Code Examples:

<audio src="..\..\mp3\这段代码展示了 JavaScr (1).mp3"></audio>

```javascript
// Falsy Examples
if (!false) console.log("Falsy: false");
if (!0) console.log("Falsy: 0");
if (!"") console.log('Falsy: ""'); // Empty string
if (!null) console.log("Falsy: null");
if (!undefined) console.log("Falsy: undefined");
if (!NaN) console.log("Falsy: NaN");

// Truthy Examples
if ("hello") console.log('Truthy: "hello"'); // Non-empty string
if (42) console.log("Truthy: 42"); // Non-zero number
if ([]) console.log("Truthy: []"); // Empty array
if ({}) console.log("Truthy: {}"); // Empty object
if (true) console.log("Truthy: true");
```

---

### Key Notes:
1. **Falsy values** are limited to a small set; everything else is **truthy**.
2. Arrays and objects are **always truthy**, even if empty.
3. Use `Boolean(value)` to explicitly check truthy/falsy status.