### Higher-Order Functions in JavaScript

<audio src="C:\Users\10691\Downloads\A __higher-orde.mp3"></audio>

A **higher-order function** is a function that either:  
1. **Takes another function as an argument**, or  
2. **Returns a function as its result**.  

Examples include `map`, `filter`, `reduce`, and custom functions. Higher-order functions enable functional programming by allowing abstraction and reusability of logic.

> **高阶函数**：
>
> <audio src="C:\Users\10691\Downloads\高阶函数是指以下两种函数：1..mp3"></audio>
>
> **高阶函数**是指以下两种函数：
>
> 1. **将函数作为参数**传递。  
> 2. **返回一个函数**作为结果。  
> 常见高阶函数包括 `map`、`filter`、`reduce`，它们支持函数式编程，提升代码的抽象性和可复用性。

---

### Code Examples:

<audio src="C:\Users\10691\Downloads\这段代码展示了高阶函数在 Ja.mp3"></audio>

#### **Higher-Order Function Taking a Function as Argument**
```javascript
function greet(name, formatter) {
  return formatter(name);
}

function toUpperCase(str) {
  return str.toUpperCase();
}

console.log(greet("Alice", toUpperCase)); // "ALICE"
console.log(greet("Bob", (name) => `Hello, ${name}`)); // "Hello, Bob"
```

#### **Higher-Order Function Returning a Function**
```javascript
function multiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = multiplier(2);
console.log(double(5)); // 10

const triple = multiplier(3);
console.log(triple(5)); // 15
```

#### **Built-In Higher-Order Functions**
```javascript
const numbers = [1, 2, 3, 4, 5];

// Using map
const doubled = numbers.map((num) => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// Using filter
const even = numbers.filter((num) => num % 2 === 0);
console.log(even); // [2, 4]

// Using reduce
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); // 15
```

---

### Key Notes:
1. Higher-order functions enhance modularity, reusability, and readability.
2. Common use cases include callbacks, functional array operations, and function composition.