### Nested Objects and Destructuring in JavaScript

<audio src="C:\Users\10691\Downloads\Nested Objects_.mp3"></audio>

1. **Nested Objects**:
   - Objects can contain other objects as values, forming a hierarchy.
   - Example: `{ user: { name: "Alice", age: 25 } }`.

2. **Destructuring**:
   - Extract values from objects into variables using a concise syntax.
   - Can handle nested objects by matching their structure.

3. **Default Values**:
   - Provide fallback values during destructuring if a property is `undefined`.

> **嵌套对象与对象解构**  
>
> <audio src="C:\Users\10691\Downloads\嵌套对象：  对象的值可以是其.mp3"></audio>
>
> 1. **嵌套对象**：  
>    - 对象的值可以是其他对象，形成层级结构。  
>    - 示例：`{ user: { name: "Alice", age: 25 } }`。  
> 2. **解构**：  
>    - 使用简洁语法从对象中提取值到变量中。  
>    - 支持根据嵌套对象结构进行解构。  
> 3. **默认值**：  
>    - 解构时为属性设置默认值，防止 `undefined`。

---

### Code Examples:

<audio src="C:\Users\10691\Downloads\这段代码展示了如何操作和解构嵌.mp3"></audio>

#### **Nested Objects**
```javascript
const data = {
  user: {
    name: "Alice",
    age: 25,
    address: { city: "New York", zip: 10001 },
  },
};
```

#### **Destructuring Nested Objects**
```javascript
const {
  user: { name, age, address: { city, zip } },
} = data;

console.log(name); // "Alice"
console.log(city); // "New York"
```

#### **Default Values**
```javascript
const { user: { phone = "N/A" } } = data;
console.log(phone); // "N/A" (because `phone` is undefined)
```

---

### Key Notes:

<audio src="C:\Users\10691\Downloads\1. Match the st.mp3"></audio>

1. Match the structure of the object during destructuring.  
2. Use default values to handle missing properties.  
3. Destructuring simplifies accessing deeply nested properties.