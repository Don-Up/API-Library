### JSON Parsing and Stringifying

**JSON (JavaScript Object Notation)** is a lightweight data format for exchanging data. JavaScript provides two primary methods for handling JSON:

1. **`JSON.parse()`**: Converts a JSON string into a JavaScript object.  
2. **`JSON.stringify()`**: Converts a JavaScript object into a JSON string.

**Use Cases**:  
- Parsing JSON responses from APIs.  
- Stringifying objects for data storage or transmission.

> **JSON 解析与字符串化**  
> **JSON（JavaScript 对象表示法）** 是一种轻量级的数据交换格式。JavaScript 提供两个主要方法处理 JSON：  
> 1. **`JSON.parse()`**：将 JSON 字符串转换为 JavaScript 对象。  
> 2. **`JSON.stringify()`**：将 JavaScript 对象转换为 JSON 字符串。  
> **应用场景**：  
> - 解析来自 API 的 JSON 响应。  
> - 将对象转换为字符串以便存储或传输。

---

### Code Example:

#### **Parsing JSON (`JSON.parse`)**
```javascript
const jsonString = '{"name": "Alice", "age": 25}';
const obj = JSON.parse(jsonString); // Convert to JavaScript object
console.log(obj.name); // Output: Alice
console.log(obj.age);  // Output: 25
```

#### **Stringifying Object (`JSON.stringify`)**
```javascript
const obj = { name: "Alice", age: 25 };
const jsonString = JSON.stringify(obj); // Convert to JSON string
console.log(jsonString); // Output: {"name":"Alice","age":25}
```

#### **Handling Errors**
```javascript
try {
  const invalidJson = '{"name": "Alice", "age": }'; // Malformed JSON
  const obj = JSON.parse(invalidJson);
} catch (error) {
  console.error("JSON parsing error:", error.message); // Handle parsing error
}
```

---

### Key Notes:
1. Use `JSON.parse()` for deserialization and `JSON.stringify()` for serialization.  
2. Ensure JSON strings are valid (e.g., keys and values must be properly quoted).  
3. Handle errors when parsing malformed JSON.