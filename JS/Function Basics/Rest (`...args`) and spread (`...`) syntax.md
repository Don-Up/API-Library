### Rest (`...args`) and Spread (`...`) Syntax in JavaScript

The **`...` operator** serves two purposes:  

<audio src="..\..\mp3\__Rest Syntax__.mp3"></audio>

1. **Rest Syntax**: Collects multiple arguments into a single array. It is used in function parameters to handle a variable number of arguments.  
2. **Spread Syntax**: Expands an array, object, or iterable into individual elements. It is often used to copy or merge arrays/objects.  

> **Rest (`...args`) 和 Spread (`...`) 语法**：
> 1. **Rest 语法**：将多个参数收集为一个数组，常用于函数参数处理可变数量的参数。  
> 2. **Spread 语法**：将数组、对象或可迭代对象展开为单独的元素，常用于复制或合并数组/对象。

---

### Code Examples:

<audio src="..\..\mp3\这段代码展示了 JavaScr (5).mp3"></audio>

#### **Rest Syntax**
```javascript
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(4, 5, 6, 7)); // 22
```

#### **Spread Syntax with Arrays**
```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, ...arr1];
console.log(arr2); // [4, 5, 1, 2, 3]

// Spread in function calls
const numbers = [10, 20, 30];
console.log(Math.max(...numbers)); // 30
```

#### **Spread Syntax with Objects**
```javascript
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };
console.log(obj2); // { a: 1, b: 2, c: 3 }

// Merging objects
const obj3 = { d: 4 };
const mergedObj = { ...obj1, ...obj3 };
console.log(mergedObj); // { a: 1, b: 2, d: 4 }
```

---

### Key Notes:
1. **Rest (`...args`)** works only in function parameters.
2. **Spread (`...`)** works in arrays, objects, and function calls.
3. Rest gathers, while spread expands.