### Map and WeakMap in JavaScript

<audio src="..\..\mp3\1. `Map`_    - .mp3"></audio>

1. **`Map`**:
   - A collection of **key-value pairs** where keys can be any type (objects or primitives).
   - Maintains insertion order.
   - Methods: `set()`, `get()`, `delete()`, `has()`, `size`.
   - Iterable with `forEach`, `for...of`.

2. **`WeakMap`**:
   - A collection of **key-value pairs** where keys must be **objects**.
   - Keys are weakly referenced and garbage-collected when no other references exist.
   - Methods: `set()`, `get()`, `delete()`, `has()` (no size or iteration).

> **`Map` 和 `WeakMap`**  
>
> <audio src="..\..\mp3\Outline`Map`：  .mp3"></audio>
>
> 1. **`Map`**：  
>    - 存储**键值对**，键可以是任意类型（对象或原始值）。  
>    - 保持插入顺序。  
>    - 方法：`set()`、`get()`、`delete()`、`has()`、`size`。  
>    - 可通过 `forEach` 或 `for...of` 遍历。  
> 2. **`WeakMap`**：  
>    - 存储**键值对**，键必须是**对象**。  
>    - 键是弱引用，无其他引用时会被垃圾回收。  
>    - 方法：`set()`、`get()`、`delete()`、`has()`（无 `size` 或迭代功能）。

---

### Code Examples:

<audio src="..\..\mp3\这段代码展示了`Map`和`W.mp3"></audio>

#### **Using `Map`**
```javascript
const myMap = new Map();
myMap.set("name", "Alice");
myMap.set({ id: 1 }, "Object Key");
console.log(myMap.get("name")); // "Alice"
console.log(myMap.size); // 2
myMap.forEach((value, key) => console.log(key, value)); 
// Logs: "name Alice", { id: 1 } "Object Key"
```

#### **Using `WeakMap`**
```javascript
const obj = { id: 1 };
const myWeakMap = new WeakMap();
myWeakMap.set(obj, "Object Value");
console.log(myWeakMap.get(obj)); // "Object Value"
myWeakMap.delete(obj); // Removes the key-value pair
console.log(myWeakMap.has(obj)); // false

// WeakMap has no iteration or size
```

---

### Key Notes:

<audio src="..\..\mp3\1. __`Map`__ is.mp3"></audio>

1. **`Map`** is iterable, while **`WeakMap`** is not.  
2. Use **`WeakMap`** for temporary storage tied to object lifetimes.  
3. Avoid **`WeakMap`** for primitive keys or when iteration is required.