### Creating and Chaining Promises in JavaScript

<audio src="C:\Users\10691\Downloads\A __promise__ r.mp3"></audio>

A **promise** represents a value that may be available now, later, or never. Promises are created using the `Promise` constructor, which takes a function with `resolve` and `reject` callbacks.  

**Chaining Promises** allows sequential execution of asynchronous tasks by returning a new promise in `.then()`. Errors in a chain can be caught using `.catch()`.

> **创建和链式调用 Promise**：
>
> <audio src="C:\Users\10691\Downloads\Promise 表示一个可能现.mp3"></audio>
>
> **Promise** 表示一个可能现在、稍后或永远不可用的值。使用 `Promise` 构造函数创建 Promise，传入一个包含 `resolve` 和 `reject` 回调的函数。  
> **Promise 链式调用**通过在 `.then()` 中返回一个新 Promise 实现异步任务的顺序执行。链中的错误可通过 `.catch()` 捕获。

---

### Code Examples:



#### **Creating a Promise**
```javascript
const myPromise = new Promise((resolve, reject) => {
  const success = true;
  if (success) {
    resolve("Task completed!");
  } else {
    reject("Task failed!");
  }
});

myPromise
  .then((result) => console.log(result)) // "Task completed!"
  .catch((error) => console.error(error));
```

#### **Chaining Promises**
```javascript
const fetchData = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve("Data fetched"), 1000);
  });

fetchData()
  .then((result) => {
    console.log(result); // "Data fetched"
    return "Processing data...";
  })
  .then((message) => {
    console.log(message); // "Processing data..."
    return "Data processed!";
  })
  .then((finalResult) => console.log(finalResult)) // "Data processed!"
  .catch((error) => console.error(error));
```

#### **Error Handling in Chains**

<audio src="C:\Users\10691\Downloads\这段代码展示了 JavaScr (16).mp3"></audio>

```javascript
const promiseChain = new Promise((resolve, reject) => {
  reject("Something went wrong!");
});

promiseChain
  .then((result) => console.log(result)) // Skipped due to rejection
  .catch((error) => console.error(error)) // "Something went wrong!"
  .finally(() => console.log("Cleanup complete.")); // Always runs
```

---

### Key Notes:
1. Promises simplify asynchronous tasks compared to callbacks.  
2. Use **`.then()`** to chain tasks sequentially, passing results forward.  
3. Handle errors with **`.catch()`** and perform cleanup with **`.finally()`**.  
4. Promises are ideal for managing complex async workflows.