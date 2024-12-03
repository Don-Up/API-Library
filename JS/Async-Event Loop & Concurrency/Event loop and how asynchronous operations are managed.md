### Event Loop and How Asynchronous Operations Are Managed in JavaScript

<audio src="C:\Users\10691\Downloads\JavaScript uses.mp3"></audio>

JavaScript uses the **event loop** to handle asynchronous operations while remaining single-threaded. It allows non-blocking execution by delegating asynchronous tasks (e.g., `setTimeout`, `fetch`) to the browser or Node.js runtime.

1. **Call Stack**: Executes synchronous code in a Last In, First Out (LIFO) manner.  
2. **Web APIs**: Asynchronous operations (e.g., timers, HTTP requests) are sent to the browser's Web APIs.  
3. **Task Queue**: Once an async task completes, its callback is added to the **task queue** (also called the **macro-task queue**, e.g., `setTimeout`).  
4. **Microtasks**: Promises and `queueMicrotask` callbacks go to the **microtask queue**, which has higher priority than the task queue.  
5. **Event Loop**: Continuously checks if the call stack is empty. If so, it first processes all microtasks and then executes one task from the task queue.

This process ensures smooth execution of asynchronous code without blocking the main thread.

> **事件循环和异步操作管理**：
>
> <audio src="C:\Users\10691\Downloads\JavaScript 使用 事.mp3"></audio>
>
> JavaScript 使用 **事件循环** 来管理异步操作，同时保持单线程。它通过将异步任务（如 `setTimeout`、`fetch`）委托给浏览器或 Node.js 运行时，支持非阻塞执行。  
>
> 1. **调用栈**：以后进先出（LIFO）的方式执行同步代码。  
> 2. **Web APIs**：异步操作（如定时器、HTTP 请求）被发送到浏览器的 Web API。  
> 3. **任务队列**：异步任务完成后，其回调被添加到**任务队列**（宏任务队列，如 `setTimeout`）。  
> 4. **微任务**：Promise 和 `queueMicrotask` 回调进入**微任务队列**，优先级高于任务队列。  
> 5. **事件循环**：持续监测调用栈是否为空，先处理所有微任务，再执行任务队列中的一个任务。  

---

### Code Example:

#### **Event Loop in Action**

<audio src="C:\Users\10691\Downloads\在这个示例中，JavaScri.mp3"></audio>

```javascript
console.log("Start");

setTimeout(() => {
  console.log("setTimeout"); // Macro-task (task queue)
}, 0);

Promise.resolve().then(() => {
  console.log("Promise"); // Micro-task (microtask queue)
});

console.log("End");

// Output:
// Start
// End
// Promise (microtasks processed before tasks)
// setTimeout
```

#### **Order of Execution with Multiple Queues**

<audio src="C:\Users\10691\Downloads\在这个示例中，JavaScri (1).mp3"></audio>

```javascript
console.log("Start");

setTimeout(() => console.log("Macro-task"), 0); // Task queue
Promise.resolve().then(() => console.log("Micro-task 1")); // Microtask queue
Promise.resolve().then(() => console.log("Micro-task 2")); // Microtask queue

console.log("End");

// Output:
// Start
// End
// Micro-task 1
// Micro-task 2
// Macro-task
```

---

### Key Notes:
1. **Microtasks** (e.g., `Promise.then`) have higher priority than **macro-tasks** (e.g., `setTimeout`).  
2. The **event loop** processes the call stack, microtasks, and task queue in that order.  
3. Async operations like I/O, timers, and HTTP requests are managed by the runtime and added to the appropriate queue.  
4. This model ensures non-blocking, responsive performance in JavaScript.