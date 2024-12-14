### `Object.keys()`, `Object.values()`, `Object.entries()` in JavaScript

<audio src="..\..\mp3\These methods a.mp3"></audio>

These methods are used to extract specific data from objects:  

1. **`Object.keys()`**: Returns an array of the object's property names (keys).  
2. **`Object.values()`**: Returns an array of the object's property values.  
3. **`Object.entries()`**: Returns an array of key-value pairs as `[key, value]` sub-arrays.  

These methods are useful for iterating over objects or converting them into arrays for further manipulation.

> **`Object.keys()`、`Object.values()` 和 `Object.entries()`**：
>
> <audio src="..\..\mp3\_这些方法用于提取对象中的特定.mp3"></audio>
>
> 这些方法用于提取对象中的特定数据：  
>
> 1. **`Object.keys()`**：返回包含对象属性名（键）的数组。  
> 2. **`Object.values()`**：返回包含对象属性值的数组。  
> 3. **`Object.entries()`**：返回包含键值对的二维数组，每个元素是 `[键, 值]`。  
> 它们常用于对象的遍历或转换为数组以便进一步操作。

---

### Code Examples:

<audio src="..\..\mp3\这段代码展示了 JavaScr (15).mp3"></audio>

#### **`Object.keys()`**
```javascript
const obj = { name: "Alice", age: 25, city: "New York" };
console.log(Object.keys(obj)); 
// ["name", "age", "city"] (array of keys)
```

#### **`Object.values()`**
```javascript
const obj = { name: "Alice", age: 25, city: "New York" };
console.log(Object.values(obj)); 
// ["Alice", 25, "New York"] (array of values)
```

#### **`Object.entries()`**
```javascript
const obj = { name: "Alice", age: 25, city: "New York" };
console.log(Object.entries(obj)); 
// [["name", "Alice"], ["age", 25], ["city", "New York"]] (array of key-value pairs)
```

#### **Using `Object.keys()` with Iteration**
```javascript
const obj = { name: "Bob", age: 30 };
Object.keys(obj).forEach((key) => {
  console.log(`${key}: ${obj[key]}`);
});
// Output:
// "name: Bob"
// "age: 30"
```

#### **Converting Object to Map with `Object.entries()`**
```javascript
const obj = { a: 1, b: 2 };
const map = new Map(Object.entries(obj));
console.log(map); 
// Map { 'a' => 1, 'b' => 2 }
```

---

### Key Notes:
1. `Object.keys()` and `Object.values()` return arrays, while `Object.entries()` returns an array of `[key, value]` pairs.  
2. Useful for object iteration, mapping, and data transformation.  
3. `Object.entries()` is helpful for creating maps or reconstructing objects.