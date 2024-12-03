### Iterating Arrays in JavaScript

<audio src="C:\Users\10691\Downloads\`for` Loop_ A t.mp3"></audio>

1. **`for` Loop**:
   - A traditional loop with full control over iteration (index-based).
   - Suitable for cases where indices are required.

2. **`forEach`**:
   - Iterates over each element of an array.
   - Executes a callback for each element (no early exit, no return).

3. **`for...of`**:
   - Iterates directly over array **values** (not indices).
   - Cleaner syntax for iterating through iterable objects like arrays.

> **遍历数组 (`for`, `forEach`, `for...of`)**  
>
> <audio src="C:\Users\10691\Downloads\`for` 循环：  传统循环.mp3"></audio>
>
> 1. **`for` 循环**：  
>    - 传统循环，提供对索引的完全控制。  
>    - 适用于需要访问索引的场景。  
> 2. **`forEach`**：  
>    - 遍历数组的每个元素。  
>    - 为每个元素执行回调函数（不能提前退出、无返回值）。  
> 3. **`for...of`**：  
>    - 直接迭代数组的**值**（不访问索引）。  
>    - 语法简洁，适合遍历可迭代对象。

---

### Code Examples:

<audio src="C:\Users\10691\Downloads\在`for`循环中，可以通过显.mp3"></audio>

#### **`for` Loop**
```javascript
const arr = [10, 20, 30];
for (let i = 0; i < arr.length; i++) {
  console.log(`Index: ${i}, Value: ${arr[i]}`);
}
// Output: Index: 0, Value: 10 ... Index: 2, Value: 30
```

#### **`forEach`**
```javascript
arr.forEach((value, index) => {
  console.log(`Index: ${index}, Value: ${value}`);
});
// Output: Same as above
```

#### **`for...of`**
```javascript
for (const value of arr) {
  console.log(`Value: ${value}`);
}
// Output: Value: 10 ... Value: 30
```

---

### Key Notes:

<audio src="C:\Users\10691\Downloads\1. Use __`for`_.mp3"></audio>

1. Use **`for`** for index-based operations.  
2. Use **`forEach`** for simple iteration (no early exit).  
3. Use **`for...of`** for cleaner syntax when only values are needed.