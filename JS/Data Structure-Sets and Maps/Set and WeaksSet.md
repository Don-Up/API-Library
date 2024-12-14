### Set and WeakSet in JavaScript

<audio src="..\..\mp3\`Set`_ A collec.mp3"></audio>

1. **`Set`**:
   - A collection of **unique values** (no duplicates).
   - Can store any type of value (primitives, objects).
   - Methods: `add()`, `delete()`, `has()`, `size`.
   - Iterates with `forEach` or `for...of`.

2. **`WeakSet`**:
   - Stores **weakly-referenced objects only** (no primitives).
   - Objects are garbage-collected if no other reference exists.
   - Methods: `add()`, `delete()`, `has()` (no size or iteration).

> **`Set` 和 `WeakSet`**  
>
> <audio src="..\..\mp3\`Set`：  存储唯一值的集.mp3"></audio>
>
> 1. **`Set`**：  
>    - 存储**唯一值**的集合（无重复）。  
>    - 可以存储任意类型（原始值、对象）。  
>    - 方法：`add()`、`delete()`、`has()`、`size`。  
>    - 可用 `forEach` 或 `for...of` 遍历。  
> 2. **`WeakSet`**：  
>    - 仅存储**弱引用对象**（不支持原始值）。  
>    - 如果没有其他引用，对象将被垃圾回收。  
>    - 方法：`add()`、`delete()`、`has()`（无 `size` 或迭代功能）。

---

### Code Examples:

<audio src="..\..\mp3\这段代码展示了`Set`和`W.mp3"></audio>

#### **Using `Set`**
```javascript
const mySet = new Set();
mySet.add(1);
mySet.add(1); // Duplicate ignored
mySet.add({ key: "value" });
console.log(mySet.has(1)); // true
console.log(mySet.size); // 2
mySet.forEach(value => console.log(value)); // 1, { key: "value" }
```

#### **Using `WeakSet`**
```javascript
const obj1 = { key: "value1" };
const obj2 = { key: "value2" };

const myWeakSet = new WeakSet();
myWeakSet.add(obj1);
myWeakSet.add(obj2);
console.log(myWeakSet.has(obj1)); // true
myWeakSet.delete(obj1);
console.log(myWeakSet.has(obj1)); // false

// No iteration or size available in WeakSet
```

---

### Key Notes:

<audio src="..\..\mp3\1. __`Set`__ is.mp3"></audio>

1. **`Set`** is iterable, while **`WeakSet`** is not.  
2. **`WeakSet`** is memory-efficient for temporary object storage.  
3. Avoid **`WeakSet`** for value types or when iteration is needed.