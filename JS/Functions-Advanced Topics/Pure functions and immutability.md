### Pure Functions and Immutability in JavaScript

<audio src="..\..\mp3\A __pure functi.mp3"></audio>

A **pure function** is a function that:  
1. **Has no side effects**: It doesn’t modify variables outside its scope.  
2. **Always returns the same output** for the same input.  

**Immutability** means data cannot be changed after creation. Instead, new data is created for any updates, ensuring original data remains untouched. Together, they are key principles of functional programming.

> **纯函数和不可变性**：
>
> <audio src="..\..\mp3\纯函数：  1, 无副作用：不.mp3"></audio>
>
> **纯函数**：  
>
> 1. **无副作用**：不会修改作用域外的变量。  
> 2. **相同输入返回相同输出**。  
> **不可变性**：数据一旦创建就不能被更改，更新数据时会创建新的数据，保证原数据不被修改。它们是函数式编程的核心原则。

---

### Code Examples:

<audio src="..\..\mp3\这段代码展示了纯函数、非纯函数.mp3"></audio>

#### **Pure Function Example**
```javascript
// Pure function: no side effects, same output for same input
function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // 5
console.log(add(2, 3)); // 5 (same input, same output)
```

#### **Impure Function Example**
```javascript
let count = 0; // External variable

function increment() {
  count++; // Modifies external state (side effect)
  return count;
}

console.log(increment()); // 1
console.log(increment()); // 2 (different result for same call)
```

#### **Immutability Example**
```javascript
// Immutable update
const array = [1, 2, 3];
const newArray = [...array, 4]; // Creates a new array
console.log(array); // [1, 2, 3] (unchanged)
console.log(newArray); // [1, 2, 3, 4]

// Immutable object
const obj = { a: 1, b: 2 };
const newObj = { ...obj, b: 3 }; // New object with updated property
console.log(obj); // { a: 1, b: 2 } (unchanged)
console.log(newObj); // { a: 1, b: 3 }
```

---

### Key Notes:
1. Pure functions ensure predictability and easier testing.
2. Immutability avoids unintended side effects and improves state management.
3. Use techniques like `spread operator`, `map`, `filter` for immutability.