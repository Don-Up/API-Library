### Combining Promises with `async/await`

<audio src="C:\Users\10691\Downloads\You can combine.mp3"></audio>

You can combine multiple promises with **`async/await`** to handle concurrent or sequential asynchronous tasks in a more readable way:

1. **Sequential Execution**: Use `await` for each promise one after another. This ensures that each task completes before the next one starts.  
2. **Concurrent Execution**: Use `Promise.all()` with `await` to run multiple promises concurrently and wait for all of them to resolve.  
3. **Error Handling**: Use `try...catch` to handle errors in either sequential or concurrent tasks. You can catch errors from individual promises or an entire group of promises.

Combining promises with `async/await` provides flexibility and readability, making complex workflows easier to manage.

> **结合 `async/await` 和 Promise**：
>
> <audio src="C:\Users\10691\Downloads\可以通过 `async_awa.mp3"></audio>
>
> 可以通过 **`async/await`** 结合多个 Promise，处理并发或顺序的异步任务：  
>
> 1. **顺序执行**：对每个 Promise 使用 `await`，依次完成任务，前一个任务完成后再执行下一个任务。  
> 2. **并发执行**：使用 `Promise.all()` 和 `await` 同时运行多个 Promise，并等待所有任务完成。  
> 3. **错误处理**：使用 `try...catch` 捕获顺序或并发任务中的错误，既可以处理单个 Promise 的错误，也可以处理整个任务组的错误。  
> 使用 `async/await` 结合 Promise，可提升代码的可读性和灵活性，便于管理复杂流程。

---

### Code Examples:

<audio src="C:\Users\10691\Downloads\这段代码展示了在 JavaSc (1).mp3"></audio>

#### **Sequential Execution**
```javascript
async function sequentialPromises() {
  const firstResult = await Promise.resolve("First task complete");
  console.log(firstResult); // "First task complete"

  const secondResult = await Promise.resolve("Second task complete");
  console.log(secondResult); // "Second task complete"
}

sequentialPromises();
```

#### **Concurrent Execution with `Promise.all()`**
```javascript
async function concurrentPromises() {
  const promises = [
    Promise.resolve("Task 1 complete"),
    Promise.resolve("Task 2 complete"),
    Promise.resolve("Task 3 complete"),
  ];

  const results = await Promise.all(promises);
  console.log(results); // ["Task 1 complete", "Task 2 complete", "Task 3 complete"]
}

concurrentPromises();
```

#### **Error Handling in Concurrent Execution**
```javascript
async function concurrentWithErrorHandling() {
  const promises = [
    Promise.resolve("Task 1 complete"),
    Promise.reject("Task 2 failed"),
    Promise.resolve("Task 3 complete"),
  ];

  try {
    const results = await Promise.all(promises);
    console.log(results); // Skipped due to rejection in Task 2
  } catch (error) {
    console.error("Error:", error); // "Error: Task 2 failed"
  }
}

concurrentWithErrorHandling();
```

#### **Using `Promise.allSettled()` for Resilient Handling**
```javascript
async function allSettledExample() {
  const promises = [
    Promise.resolve("Task 1 complete"),
    Promise.reject("Task 2 failed"),
    Promise.resolve("Task 3 complete"),
  ];

  const results = await Promise.allSettled(promises);
  console.log(results);
  // [
  //   { status: "fulfilled", value: "Task 1 complete" },
  //   { status: "rejected", reason: "Task 2 failed" },
  //   { status: "fulfilled", value: "Task 3 complete" }
  // ]
}

allSettledExample();
```

---

### Key Notes:
1. Use **sequential execution** when tasks depend on each other.  
2. Use **concurrent execution** for independent tasks to improve performance.  
3. Combine `Promise.all()` or `Promise.allSettled()` with `await` for handling multiple promises.  
4. Wrap in `try...catch` to handle errors effectively, especially in concurrent workflows.