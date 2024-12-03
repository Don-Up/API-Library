### Deep Cloning Techniques in JavaScript

<audio src="C:\Users\10691\Downloads\__Deep cloning_.mp3"></audio>

**Deep cloning** creates a full copy of an object, including all nested objects and arrays, ensuring the original object is unaffected by changes to the clone. Common techniques include:  

1. **`structuredClone()`** (modern, supports most types).  
2. **JSON Methods**: `JSON.parse(JSON.stringify(obj)` (simpler, but loses functions, `undefined`, symbols).  
3. **Libraries**: `lodash.cloneDeep()` for robust cloning.  
4. **Recursive Custom Function**: Manually iterate and copy properties.

> **深拷贝技术**：
>
> <audio src="C:\Users\10691\Downloads\深拷贝会完整复制对象，包括所有.mp3"></audio>
>
> **深拷贝**会完整复制对象，包括所有嵌套对象和数组，确保原对象与副本互不影响。常见方法有：  
>
> 1. **`structuredClone()`**（现代方法，支持大多数类型）。  
> 2. **JSON 方法**：`JSON.parse(JSON.stringify(obj)`（简单，但会丢失函数、`undefined`、符号等）。  
> 3. **库**：如 `lodash.cloneDeep()` 提供强大的深拷贝功能。  
> 4. **递归自定义函数**：手动迭代并复制属性。

---

### Code Examples:

<audio src="C:\Users\10691\Downloads\这段代码展示了深拷贝对象的不同.mp3"></audio>

#### **Using `structuredClone` (Best for Modern Use)**
```javascript
const obj = { name: "Alice", nested: { age: 25 } };
const clone = structuredClone(obj);
clone.nested.age = 30;

console.log(obj.nested.age); // 25 (original unaffected)
console.log(clone.nested.age); // 30
```

#### **Using JSON Methods (Simple, but Limited)**
```javascript
const obj = { name: "Alice", nested: { age: 25 } };
const clone = JSON.parse(JSON.stringify(obj));
clone.nested.age = 30;

console.log(obj.nested.age); // 25
console.log(clone.nested.age); // 30
```

#### **Using Lodash (`cloneDeep`)**
```javascript
const _ = require("lodash");
const obj = { name: "Alice", nested: { age: 25 } };
const clone = _.cloneDeep(obj);

clone.nested.age = 30;
console.log(obj.nested.age); // 25
console.log(clone.nested.age); // 30
```

#### **Custom Recursive Function**
```javascript
function deepClone(obj) {
  if (obj === null || typeof obj !== "object") return obj;
  const clone = Array.isArray(obj) ? [] : {};
  for (const key in obj) {
    clone[key] = deepClone(obj[key]); // Recursively copy properties
  }
  return clone;
}

const obj = { name: "Alice", nested: { age: 25 } };
const clone = deepClone(obj);
clone.nested.age = 30;

console.log(obj.nested.age); // 25
console.log(clone.nested.age); // 30
```

---

### Key Notes:
1. **`structuredClone`** is the most reliable modern method.  
2. JSON methods are quick but do not handle non-serializable values.
3. Use libraries like **Lodash** for robust and tested solutions.  
4. Custom recursive functions provide full control but require careful implementation.