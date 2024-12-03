### Regular Expressions (Regex) in JavaScript

**Regular Expressions (Regex)** are patterns used for matching text. JavaScript provides the `RegExp` object and regex literal syntax (`/pattern/`) for creating and using regex. They are commonly used for string validation, searching, and replacing.

**Key Features**:  
1. **Flags**:  
   - `g` (global), `i` (case-insensitive), `m` (multi-line).  
2. **Pattern Matching**:  
   - `.` (any character), `\d` (digit), `\w` (word), `\s` (whitespace).  
3. **Quantifiers**:  
   - `*`, `+`, `?`, `{min,max}`.  

**Methods**:  
- `test()`, `exec()` for regex.  
- `match()`, `replace()` for strings.

> **JavaScript 中的正则表达式（Regex）**  
> **正则表达式（Regex）** 是用于匹配文本的模式。JavaScript 提供了 `RegExp` 对象和正则表达式字面量（`/pattern/`）来创建和使用正则。它们常用于字符串验证、搜索和替换。  
> **主要特点**：  
> 1. **标志（Flags）**：  
>    - `g`（全局），`i`（忽略大小写），`m`（多行）。  
> 2. **模式匹配**：  
>    - `.`（任意字符），`\d`（数字），`\w`（单词），`\s`（空白）。  
> 3. **量词（Quantifiers）**：  
>    - `*`，`+`，`?`，`{min,max}`。  
>    **常用方法**：  
> - `test()`、`exec()` 用于正则对象。  
> - `match()`、`replace()` 用于字符串。

---

### Code Examples:

#### **Basic Matching**
```javascript
const regex = /hello/i; // Case-insensitive match
console.log(regex.test("Hello World")); // Output: true
```

#### **Using Flags**
```javascript
const text = "JavaScript is great. JavaScript is powerful.";
const regex = /JavaScript/g; // Global match
console.log(text.match(regex)); // Output: ["JavaScript", "JavaScript"]
```

#### **Pattern Matching**
```javascript
const regex = /\d+/; // Match one or more digits
console.log("Order 1234".match(regex)); // Output: ["1234"]
```

#### **Replacing Text**
```javascript
const text = "I love cats.";
const regex = /cats/;
console.log(text.replace(regex, "dogs")); // Output: "I love dogs."
```

#### **Using `exec()`**
```javascript
const regex = /(\d+)-(\d+)/;
const result = regex.exec("Phone: 123-456");
console.log(result[1]); // Output: 123 (first captured group)
console.log(result[2]); // Output: 456 (second captured group)
```

---

### Key Notes:
1. Use **flags** like `g` and `i` for global and case-insensitive matches.  
2. **Special characters** like `\d` (digits) and `\w` (alphanumeric) simplify matching patterns.  
3. Regex is powerful but can be complex—use tools like [regex101](https://regex101.com/) for testing patterns.