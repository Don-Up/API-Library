### Array Methods in JavaScript

1. **`map`**:
   - Transforms each element in an array and returns a new array.
   - **Example**: `[1, 2, 3].map(x => x * 2)` → `[2, 4, 6]`.

2. **`filter`**:
   - Returns a new array with elements passing a condition.
   - **Example**: `[1, 2, 3].filter(x => x > 1)` → `[2, 3]`.

3. **`reduce`**:
   - Reduces an array to a single value by applying a callback.
   - **Example**: `[1, 2, 3].reduce((sum, x) => sum + x, 0)` → `6`.

4. **`forEach`**:
   - Iterates over an array, executing a function for each element (no return value).
   - **Example**: `[1, 2, 3].forEach(x => console.log(x))`.

5. **`find`**:
   - Returns the first element matching a condition.
   - **Example**: `[1, 2, 3].find(x => x > 1)` → `2`.

6. **`sort`**:
   - Sorts elements in place based on a comparison function.
   - **Example**: `[3, 1, 2].sort((a, b) => a - b)` → `[1, 2, 3]`.

7. **`splice`**:
   - Modifies an array by adding/removing elements.
   - **Example**: `arr.splice(1, 1, 'new')` → inserts `'new'`.

> **数组方法：`map`、`filter`、`reduce`、`forEach`、`find`、`sort`、`splice`**  
> 1. **`map`**：对每个元素进行转换，返回新数组。  
>    **例**：`[1, 2, 3].map(x => x * 2)` → `[2, 4, 6]`。  
> 2. **`filter`**：返回满足条件的元素的新数组。  
>    **例**：`[1, 2, 3].filter(x => x > 1)` → `[2, 3]`。  
> 3. **`reduce`**：将数组归约为单个值。  
>    **例**：`[1, 2, 3].reduce((sum, x) => sum + x, 0)` → `6`。  
> 4. **`forEach`**：对每个元素执行函数，无返回值。  
>    **例**：`[1, 2, 3].forEach(x => console.log(x))`。  
> 5. **`find`**：返回第一个满足条件的元素。  
>    **例**：`[1, 2, 3].find(x => x > 1)` → `2`。  
> 6. **`sort`**：根据比较函数排序数组（原地操作）。  
>    **例**：`[3, 1, 2].sort((a, b) => a - b)` → `[1, 2, 3]`。  
> 7. **`splice`**：通过添加/删除元素修改数组。  
>    **例**：`arr.splice(1, 1, 'new')` → 插入 `'new'`。

---

### Code Examples:

<audio src="C:\Users\10691\Downloads\`map`用于对数组的每个元素 (1).mp3"></audio>

#### **Using `map`**
```javascript
const numbers = [1, 2, 3];
const doubled = numbers.map(x => x * 2);
console.log(doubled); // [2, 4, 6]
```

#### **Using `filter`**
```javascript
const filtered = numbers.filter(x => x > 1);
console.log(filtered); // [2, 3]
```

#### **Using `reduce`**
```javascript
const sum = numbers.reduce((acc, x) => acc + x, 0);
console.log(sum); // 6
```

#### **Using `forEach`**
```javascript
numbers.forEach(x => console.log(x)); // Logs: 1, 2, 3
```

#### **Using `find`**
```javascript
const found = numbers.find(x => x > 1);
console.log(found); // 2
```

#### **Using `sort`**
```javascript
const sorted = [3, 1, 2].sort((a, b) => a - b);
console.log(sorted); // [1, 2, 3]
```

#### **Using `splice`**
```javascript
const arr = [1, 2, 3];
arr.splice(1, 1, 'new'); // Removes 1 element at index 1 and inserts 'new'
console.log(arr); // [1, 'new', 3]
```

---

### Key Notes:

<audio src="C:\Users\10691\Downloads\1. __`map`__, _.mp3"></audio>

1. **`map`**, **`filter`**, and **`reduce`** return new arrays/values, while **`forEach`** does not.  
2. **`sort`** modifies the original array, so use caution.  
3. **`splice`** is destructive, altering the original array directly.