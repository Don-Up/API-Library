### Deep Cloning Objects in JavaScript

<audio src="C:\Users\10691\Downloads\__Deep Cloning_ (1).mp3"></audio>

1. **Deep Cloning**:
   - Creates a new object with completely independent copies of all nested properties.
   - Modifications do not affect the original object.

2. **Methods**:
   - **`JSON.parse(JSON.stringify(obj)`**:
     - Easy, but fails for functions, `undefined`, or circular references.
   - **Recursive Functions**:
     - Handles all data types but requires custom implementation.
   - **Libraries**:
     - Use tools like Lodash (`_.cloneDeep`) for robust cloning.

> **深拷贝对象**  
>
> <audio src="C:\Users\10691\Downloads\深拷贝：  创建一个新对象，所.mp3"></audio>
>
> 1. **深拷贝**：  
>    - 创建一个新对象，所有嵌套属性独立复制，与原对象无关联。  
>    - 修改副本不会影响原始对象。  
> 2. **常用方法**：  
>    - **`JSON.parse(JSON.stringify(obj)`**：简单，但无法处理函数、`undefined` 或循环引用。  
>    - **递归函数**：支持所有类型，但需手动实现。  
>    - **库函数**：使用 Lodash 的 `_.cloneDeep` 等工具实现更强大的深拷贝。

---

### Code Examples:

<audio src="C:\Users\10691\Downloads\第一种方法使用`JASON.p.mp3"></audio>

#### **Using `JSON.parse(JSON.stringify())`**
```javascript
const obj = { name: "Alice", nested: { age: 25 } };
const deepClone = JSON.parse(JSON.stringify(obj));
deepClone.nested.age = 30;
console.log(obj.nested.age); // 25 (original remains unchanged)
```

#### **Using Recursive Function**
```javascript
function deepClone(obj) {
  if (obj === null || typeof obj !== "object") return obj;
  const clone = Array.isArray(obj) ? [] : {};
  for (const key in obj) {
    clone[key] = deepClone(obj[key]);
  }
  return clone;
}

const obj = { name: "Alice", nested: { age: 25 } };
const deepCloneObj = deepClone(obj);
deepCloneObj.nested.age = 30;
console.log(obj.nested.age); // 25
```

#### **Using Lodash**
```javascript
const _ = require("lodash");
const obj = { name: "Alice", nested: { age: 25 } };
const deepClone = _.cloneDeep(obj);
deepClone.nested.age = 30;
console.log(obj.nested.age); // 25
```

---

### Key Notes:

<audio src="C:\Users\10691\Downloads\1. __`JASON` me.mp3"></audio>

1. **`JSON` method** is simple but limited.  
2. **Recursive functions** provide flexibility but require effort.  
3. Use **libraries** for handling complex cases.