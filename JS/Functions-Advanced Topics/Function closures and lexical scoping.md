### Function Closures and Lexical Scoping in JavaScript

<audio src="C:\Users\10691\Downloads\A __closure__ i.mp3"></audio>

A **closure** is formed when a function "remembers" variables from its **lexical scope** (the scope in which it was declared) even after the outer function has executed. Closures allow functions to access variables from their parent scope.  

**Lexical Scoping**: JavaScript determines the scope of a variable based on its location in the code (at declaration time), not at runtime.

> **函数闭包和词法作用域**：
>
> <audio src="C:\Users\10691\Downloads\闭包是在函数执行完后，内部函数.mp3"></audio>
>
> **闭包**是在函数执行完后，内部函数仍然“记住”其**词法作用域**中的变量的现象。闭包使函数可以访问其外部作用域中的变量。  
> **词法作用域**：JavaScript 根据变量声明的位置来决定其作用域，而不是根据运行时的位置。

---

### Code Examples:

<audio src="C:\Users\10691\Downloads\这段代码展示了 JavaScr (7).mp3"></audio>

#### **Basic Closure**
```javascript
function outer() {
  let count = 0; // Lexical scope
  return function inner() {
    count++; // Closure: remembers `count` from outer()
    console.log(count);
  };
}

const increment = outer();
increment(); // 1
increment(); // 2
increment(); // 3
```

#### **Lexical Scoping**
```javascript
function outerFunction() {
  let outerVar = "I am outer!";
  function innerFunction() {
    console.log(outerVar); // Accesses variable from lexical scope
  }
  innerFunction();
}

outerFunction(); // "I am outer!"
```

#### **Practical Use Case: Private Variables**
```javascript
function createCounter() {
  let count = 0; // Private variable
  return {
    increment: () => ++count,
    decrement: () => --count,
    getCount: () => count,
  };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.getCount()); // 2
console.log(counter.decrement()); // 1
```

---

### Key Notes:
1. **Closures** allow private variables and encapsulation.
2. **Lexical scoping** ensures inner functions "remember" parent variables.
3. Use closures carefully to avoid excessive memory usage or unintended behavior.