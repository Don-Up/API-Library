### Key-Value Pairs of Objects in JavaScript

<audio src="C:\Users\10691\Downloads\1. __Objects__ .mp3"></audio>

1. **Objects** store data as **key-value pairs**.
   - Keys are strings or symbols.
   - Values can be any data type.

2. **Accessing Key-Value Pairs**:
   - **`Object.keys(obj)`**: Returns an array of keys.
   - **`Object.values(obj)`**: Returns an array of values.
   - **`Object.entries(obj)`**: Returns an array of `[key, value]` pairs.

3. Use `for...in` for iterating keys or `Object.entries()` for keys and values.

> **对象的键值对**  
>
> <audio src="C:\Users\10691\Downloads\1, 对象通过键值对存储数据：.mp3"></audio>
>
> 1. **对象**通过**键值对**存储数据：  
>    - 键是字符串或符号，值可以是任意类型。  
> 2. **访问键值对**：  
>    - **`Object.keys(obj)`**：返回键数组。  
>    - **`Object.values(obj)`**：返回值数组。  
>    - **`Object.entries(obj)`**：返回 `[键, 值]` 数组。  
> 3. 使用 `for...in` 遍历键，或使用 `Object.entries()` 遍历键值对。

---

### Code Examples:

<audio src="C:\Users\10691\Downloads\这段代码展示了如何操作和遍历对.mp3"></audio>

#### **Accessing Keys, Values, Entries**
```javascript
const obj = { name: "Alice", age: 25, city: "New York" };

console.log(Object.keys(obj)); // ["name", "age", "city"]
console.log(Object.values(obj)); // ["Alice", 25, "New York"]
console.log(Object.entries(obj)); // [["name", "Alice"], ["age", 25], ["city", "New York"]]
```

#### **Iterating with `for...in`**
```javascript
for (const key in obj) {
  console.log(`${key}: ${obj[key]}`);
}
// Output: "name: Alice", "age: 25", "city: New York"
```

#### **Using `Object.entries()`**
```javascript
Object.entries(obj).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});
// Output: Same as above
```

---

### Key Notes:

<audio src="C:\Users\10691\Downloads\1. Use __`Objec.mp3"></audio>

1. Use **`Object.keys`**, **`Object.values`**, and **`Object.entries`** for **structured data extraction**(结构化数据提取).  
2. Use **`for...in`** carefully—filters like `hasOwnProperty()` may be needed to avoid inherited properties.