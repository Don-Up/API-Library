### `for...of` vs `for...in` in JavaScript

<audio src="C:\Users\10691\Downloads\- __`for of`___.mp3"></audio>

- **`for...of`**: Iterates over **iterable objects** (e.g., arrays, strings, maps, sets). It retrieves the **values** of the iterable, making it ideal for working with arrays or collections.  
- **`for...in`**: Iterates over the **enumerable properties** (keys) of an object. It works on arrays too but retrieves **keys** (indices), not values. It's primarily used for objects.

> **总结**：
>
> <audio src="C:\Users\10691\Downloads\for...of：用于遍历可迭.mp3"></audio>
>
> - **`for...of`**：遍历**可迭代对象**（如数组、字符串、Map、Set），返回的是**值**。
> - **`for...in`**：遍历**对象的可枚举属性**，返回的是**键**（包括数组索引）。适用于对象属性迭代。

---

### Code Examples:

<audio src="C:\Users\10691\Downloads\这段代码展示了 JavaScr (2).mp3"></audio>

#### **`for...of` Example**
```javascript
// Iterates over values
const array = [10, 20, 30];
for (const value of array) {
  console.log(value); // 10, 20, 30
}

// Iterates over characters in a string
const str = "hello";
for (const char of str) {
  console.log(char); // h, e, l, l, o
}
```

#### **`for...in` Example**
```javascript
// Iterates over object keys
const obj = { name: "Alice", age: 25 };
for (const key in obj) {
  console.log(key, obj[key]); // name Alice, age 25
}

// Iterates over array indices
const array = ["a", "b", "c"];
for (const index in array) {
  console.log(index, array[index]); // 0 a, 1 b, 2 c
}
```

---

### Key Notes:
1. **`for...of`** works with iterable objects (e.g., arrays, strings, maps, sets) but not plain objects.
2. **`for...in`** is for object properties but can also iterate array indices (not recommended for arrays).
3. Avoid using `for...in` on arrays if you need values; use `for...of` instead.