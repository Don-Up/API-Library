### Lexical Scoping and the Scope Chain in JavaScript

<audio src="C:\Users\10691\Downloads\Lexical scoping.mp3"></audio>

**Lexical scoping** means a variable's scope is determined by its position in the source code. Inner functions can access variables declared in their outer functions (or parent scopes), even after the outer function has executed.

The **scope chain** is the mechanism by which JavaScript resolves variable access. If a variable isn’t found in the current scope, JavaScript looks in the outer (parent) scope, continuing up to the global scope.

> **词法作用域和作用域链**  
>
> <audio src="C:\Users\10691\Downloads\词法作用域 指变量的作用域由其.mp3"></audio>
>
> **词法作用域** 指变量的作用域由其在源代码中的位置决定。内部函数可以访问外部函数（或父作用域）中声明的变量，即使外部函数已执行完毕。  
> **作用域链** 是 JavaScript 查找变量的机制。如果在当前作用域找不到变量，JavaScript 会向外层作用域查找，直到全局作用域。

---

### Code Example:

<audio src="C:\Users\10691\Downloads\这段代码展示了JavaScri (6).mp3"></audio>

#### **Lexical Scoping**
```javascript
function outer() {
  let outerVar = "I'm from outer";

  function inner() {
    console.log(outerVar); // Inner function accesses outerVar
  }

  return inner;
}

const innerFn = outer();
innerFn(); // Logs: "I'm from outer"
```

#### **Scope Chain**
```javascript
let globalVar = "I'm global";

function outer() {
  let outerVar = "I'm outer";

  function inner() {
    let innerVar = "I'm inner";

    // Resolves variables from inner to outer to global
    console.log(innerVar); // Logs: "I'm inner"
    console.log(outerVar); // Logs: "I'm outer"
    console.log(globalVar); // Logs: "I'm global"
  }

  inner();
}

outer();
```

---

### Key Notes:

<audio src="C:\Users\10691\Downloads\1. __Lexical sc.mp3"></audio>

1. **Lexical scoping** ensures predictable variable access based on code structure, not runtime.  
2. The **scope chain** allows nested functions to access variables from outer scopes.  
3. If no variable is found anywhere in the chain, a `ReferenceError` occurs.