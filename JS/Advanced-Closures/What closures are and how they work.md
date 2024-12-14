### Closures in JavaScript

<audio src="..\..\mp3\A closure is a .mp3"></audio>

A **closure** is a function that "remembers" the variables from its **outer scope** even after the outer function has executed. Closures are created when a function is defined inside another function and accesses variables from the outer scope.

#### **How Closures Work**:
1. Inner functions have access to:
   - Their own variables.
   - Variables of the outer function.
   - Global variables.
2. The outer function's variables are preserved in memory by the closure, even after the function exits.

> **闭包**  
>
> <audio src="..\..\mp3\闭包是一个函数，即使外部函数已.mp3"></audio>
>
> **闭包** 是一个函数，即使外部函数已经执行结束，它仍然“记住”其 **外部作用域** 中的变量。  
>
> #### **闭包的工作原理**：  
> 1. 内部函数可以访问：  
>    - 它自己的变量。  
>    - 外部函数的变量。  
>    - 全局变量。  
> 2. 外部函数的变量通过闭包保存在内存中，即使外部函数已退出。

---

### Code Example:

#### **Basic Closure**
```javascript
function outerFunction() {
  let outerVariable = "I'm from the outer scope";

  function innerFunction() {
    console.log(outerVariable); // Accesses outerVariable
  }

  return innerFunction;
}

const closure = outerFunction(); // outerFunction is executed
closure(); // Logs: "I'm from the outer scope"
```

#### **Closure with State**
```javascript
function counter() {
  let count = 0;

  return function () {
    count++; // `count` is preserved in memory
    console.log(count);
  };
}

const increment = counter();
increment(); // Logs: 1
increment(); // Logs: 2
```

---

### Key Notes:
1. **Closures** are useful for data encapsulation and maintaining state.  
2. Variables in closures are preserved in memory, which can lead to **memory leaks** if not handled properly.  
3. Closures are heavily used in callbacks, event handlers, and functional programming.