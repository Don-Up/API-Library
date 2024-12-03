### Call Stack and Task Queue in JavaScript

<audio src="C:\Users\10691\Downloads\JavaScript is s.mp3"></audio>

JavaScript is single-threaded, meaning it can execute only one task at a time. The **call stack** and **task queue** are essential components of JavaScript's concurrency model:

1. **Call Stack**: This is where function calls are managed. When a function is invoked, it is pushed onto the call stack. Once it finishes execution, it is popped off. The call stack handles synchronous code.

2. **Task Queue**: The task queue holds asynchronous tasks (e.g., `setTimeout`, `fetch`) that are waiting to execute. After the call stack is empty, the event loop moves tasks from the queue to the stack for execution.

**Event Loop**: Continuously monitors the call stack and task queue. If the stack is empty, it pushes tasks from the queue to the stack.

> **调用栈和任务队列**：
>
> <audio src="C:\Users\10691\Downloads\JavaScript 是单线程.mp3"></audio>
>
> JavaScript 是单线程的，只能一次执行一个任务。**调用栈**和**任务队列**是其并发模型的核心：  
>
> 1. **调用栈**：管理函数调用。函数被调用时压入栈中，执行完成后弹出。它处理同步代码。  
> 2. **任务队列**：存储等待执行的异步任务（如 `setTimeout`、`fetch`）。当调用栈为空时，事件循环将任务从队列移动到栈中执行。  
> **事件循环**：持续监控调用栈和任务队列，确保异步任务在调用栈空闲时执行。

---

### Code Example:

<audio src="C:\Users\10691\Downloads\这段代码展示了 JavaScr (19).mp3"></audio>

#### **Call Stack and Task Queue**
```javascript
console.log("Start"); // Synchronous, added to call stack

setTimeout(() => {
  console.log("Timeout callback"); // Asynchronous, added to task queue
}, 0);

console.log("End"); // Synchronous, added to call stack

// Output order:
// 1. "Start" (call stack)
// 2. "End" (call stack)
// 3. "Timeout callback" (task queue, executed after call stack is empty)
```

#### **Event Loop in Action**
```javascript
function first() {
  console.log("First");
}

function second() {
  console.log("Second");
  setTimeout(() => console.log("Async Second"), 0);
}

function third() {
  console.log("Third");
}

first(); // Executes immediately
second(); // Executes immediately, schedules async task
third(); // Executes immediately

// Output:
// First
// Second
// Third
// Async Second (from task queue after call stack is empty)
```

---

### Key Notes:
1. The **call stack** handles synchronous tasks, executing them in a Last In, First Out (LIFO) order.  
2. Asynchronous tasks are placed in the **task queue**, waiting for the call stack to be empty.  
3. The **event loop** ensures smooth execution by transferring tasks to the stack.  
4. Understanding this model helps debug and optimize JavaScript performance.