### Microtasks vs. Macrotasks in JavaScript

<audio src="..\..\mp3\In JavaScript,  (1).mp3"></audio>

In JavaScript, **microtasks** and **macrotasks** are two types of tasks in the event loop that manage asynchronous operations. They differ in execution priority and timing:

1. **Microtasks**:
   - Include `Promise.then()`, `catch()`, `finally()`, and `queueMicrotask()`.
   - Have **higher priority** than macrotasks.
   - Are executed immediately after the current operation completes and the call stack is empty, but before any macrotasks.

2. **Macrotasks**:
   - Include `setTimeout`, `setInterval`, `setImmediate` (Node.js), and I/O operations.
   - Executed **after all microtasks** in the current iteration of the event loop.

The event loop processes tasks in this order:  
1. Check the **call stack** for synchronous code.  
2. Execute all **microtasks** in the microtask queue.  
3. Execute one **macrotask** from the macrotask queue.  
4. Repeat.

> **微任务和宏任务**：
>
> <audio src="..\..\mp3\在 JavaScript 中，.mp3"></audio>
>
> 在 JavaScript 中，**微任务**和**宏任务**是事件循环中管理异步操作的两类任务，它们的区别在于执行优先级和时机：  
>
> 1. **微任务**：
>   - 包括 `Promise.then()`、`catch()`、`finally()` 和 `queueMicrotask()`。
>   - 优先级**高于宏任务**。
>   - 在当前操作完成并清空调用栈后立即执行，但在任何宏任务之前执行。  
> 2. **宏任务**：
>   - 包括 `setTimeout`、`setInterval`、`setImmediate`（Node.js）和 I/O 操作。
>   - 在当前循环的所有微任务执行完毕后执行。  
> 事件循环处理任务的顺序：  
> 1. 检查**调用栈**并执行同步代码。  
> 2. 执行微任务队列中的所有任务。  
> 3. 执行宏任务队列中的一个任务。  
> 4. 重复上述步骤。

---

### Code Example:

#### **Microtasks vs. Macrotasks Execution Order**
```javascript
console.log("Start");

setTimeout(() => {
  console.log("Macrotask: setTimeout");
}, 0); // Macrotask

Promise.resolve().then(() => {
  console.log("Microtask: Promise");
}); // Microtask

console.log("End");

// Output:
// Start
// End
// Microtask: Promise (processed before macrotask)
// Macrotask: setTimeout
```

#### **Multiple Microtasks and Macrotasks**
```javascript
console.log("Start");

setTimeout(() => {
  console.log("Macrotask 1: setTimeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Microtask 1: Promise");
  Promise.resolve().then(() => {
    console.log("Microtask 2: Nested Promise");
  });
});

setTimeout(() => {
  console.log("Macrotask 2: setTimeout");
}, 0);

console.log("End");

// Output:
// Start
// End
// Microtask 1: Promise
// Microtask 2: Nested Promise
// Macrotask 1: setTimeout
// Macrotask 2: setTimeout
```

---

### Key Notes:
1. **Microtasks** always execute before **macrotasks** in the same event loop iteration.  
2. Adding new microtasks during the execution of a microtask delays macrotasks further.  
3. Understanding the difference ensures better control over asynchronous behavior and performance.