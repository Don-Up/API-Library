### Iterating Over `Set` and `Map`

<audio src="..\..\mp3\1. __`Set` Iter.mp3"></audio>

1. **`Set` Iteration**:
   - Use `for...of` or `.forEach()` to iterate over values.
   - Iteration order is insertion order.
   - Methods: `values()`, `keys()` (same as `values()`), `entries()` (value as both key and value).

2. **`Map` Iteration**:
   - Use `for...of` or `.forEach()` to iterate over key-value pairs.
   - Methods: `keys()`, `values()`, `entries()` (key-value pairs).

> **遍历 `Set` 和 `Map`**  
>
> <audio src="..\..\mp3\`Set` 的遍历 ：  使用.mp3"></audio>
>
> 1. **`Set` 的遍历**：  
>    - 使用 `for...of` 或 `.forEach()` 遍历**值**。  
>    - 遍历顺序为**插入**顺序。  
>    - 方法：`values()`、`keys()`（与 `values()` 相同）、`entries()`（值作为键和值返回）。  
> 2. **`Map` 的遍历**：  
>    - 使用 `for...of` 或 `.forEach()` 遍历**键值对**。  
>    - 方法：`keys()`、`values()`、`entries()`（返回键值对）。

---

### Code Examples:

<audio src="..\..\mp3\这段代码展示了如何迭代`Set.mp3"></audio>

#### **Iterating Over `Set`**
```javascript
const mySet = new Set([1, 2, 3]);
for (const value of mySet) {
  console.log(value); // 1, 2, 3
}

mySet.forEach(value => console.log(value)); // 1, 2, 3

// Using entries()
for (const entry of mySet.entries()) {
  console.log(entry); // [1, 1], [2, 2], [3, 3]
}
```

#### **Iterating Over `Map`**

```javascript
const myMap = new Map([
  ["a", 1],
  ["b", 2],
]);
for (const [key, value] of myMap) {
  console.log(key, value); // "a" 1, "b" 2
}

myMap.forEach((value, key) => console.log(key, value)); // "a" 1, "b" 2

// Using keys() and values()
for (const key of myMap.keys()) {
  console.log(key); // "a", "b"
}
for (const value of myMap.values()) {
  console.log(value); // 1, 2
}
```

---

### Key Notes:

<audio src="..\..\mp3\1. __`Set`___ U.mp3"></audio>

1. **`Set`**: Use `values()` or `entries()` for iteration.  
2. **`Map`**: Use `keys()`, `values()`, or `entries()` for specific iterations.  
3. Both support `for...of` and `.forEach()` for clean iteration.