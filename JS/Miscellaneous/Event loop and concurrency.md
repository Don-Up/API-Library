### Event Loop and Concurrency

<audio src="..\..\mp3\The event loop .mp3"></audio>

The **event loop** is a mechanism in JavaScript that handles concurrency and asynchronous operations. JavaScript is **single-threaded**, meaning it executes one task at a time. However, with the **event loop**, it can handle **non-blocking tasks** (e.g., `setTimeout`, `fetch`).

**How It Works**:  
1. Synchronous code runs on the main thread.  
2. Asynchronous tasks (e.g., timers, I/O) are sent to the **task queue**.  
3. The event loop continuously checks the queue and processes tasks when the call stack is empty.

This enables concurrency without multithreading.

> **事件循环与并发**  
>
> <audio src="..\..\mp3\事件循环（Event Loop.mp3"></audio>
>
> **事件循环（Event Loop）** 是 JavaScript 中用于处理并发和异步操作的机制。JavaScript 是 **单线程** 的，即一次只能执行一个任务。但借助 **事件循环**，它可以处理 **非阻塞任务**（如 `setTimeout`、`fetch`）。  
> **工作流程**：  
>
> 1. 同步代码在主线程上运行。  
> 2. 异步任务（如定时器、I/O）被放入 **任务队列**。  
> 3. 事件循环不断检查任务队列，当调用栈为空时处理任务。  
> 这使得 JavaScript 在单线程中实现并发。

---

### Code Example:

<audio src="..\..\mp3\这段代码展示了JavaScri (9).mp3"></audio>

#### **Event Loop in Action**
```javascript
console.log("Start"); // Synchronous task

setTimeout(() => {
  console.log("Timeout callback"); // Asynchronous task
}, 1000);

Promise.resolve().then(() => console.log("Promise resolved")); // Microtask

console.log("End"); // Synchronous task
```

**Output**:

```
Start
End
Promise resolved
Timeout callback
```

---

### Key Notes:

<audio src="..\..\mp3\1. __Microtasks.mp3"></audio>

1. **Microtasks** (e.g., Promises) are prioritized over **macrotasks** (e.g., `setTimeout`).  
2. The **event loop** ensures non-blocking I/O and asynchronous behavior in JavaScript.  
3. Concurrency is achieved via task queues, not multithreading.