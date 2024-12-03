### How `async` and `await` Work in JavaScript

<audio src="C:\Users\10691\Downloads\__`async`__ and.mp3"></audio>

**`async`** and **`await`** simplify working with promises, making asynchronous code look and behave like synchronous code.  

1. **`async`**: Declares a function that always returns a promise.  
2. **`await`**: Pauses execution of the `async` function until the promise resolves, then returns the resolved value. If the promise rejects, it throws an error, which can be caught with `try...catch`.

**`await`** can only be used inside `async` functions and allows chaining of asynchronous operations in a readable manner.

> **`async` 和 `await` 工作原理**：
>
> <audio src="C:\Users\10691\Downloads\`async` 和 `awai.mp3"></audio>
>
> **`async`** 和 **`await`** 简化了 Promise 的使用，让异步代码看起来像同步代码：  
>
> 1. **`async`**：声明一个总是返回 Promise 的函数。  
> 2. **`await`**：暂停 `async` 函数的执行，直到 Promise 解决，然后返回结果。如果 Promise 被拒绝，则抛出错误，可用 `try...catch` 捕获。  
> **`await`** 只能在 `async` 函数中使用，使异步操作更易读。

---

### Code Examples:

<audio src="C:\Users\10691\Downloads\这段代码展示了 JavaScr (18).mp3"></audio>

#### **Basic `async` and `await`**
```javascript
async function fetchData() {
  const data = await Promise.resolve("Data fetched!");
  console.log(data); // "Data fetched!"
}
fetchData();
```

#### **Error Handling with `try...catch`**
```javascript
async function fetchData() {
  try {
    const data = await Promise.reject("Fetch failed!");
    console.log(data); // Skipped
  } catch (error) {
    console.error(error); // "Fetch failed!"
  }
}
fetchData();
```

#### **Chaining Asynchronous Calls**
```javascript
async function process() {
  const step1 = await Promise.resolve("Step 1 completed");
  console.log(step1);

  const step2 = await Promise.resolve("Step 2 completed");
  console.log(step2);

  return "All steps completed!";
}

process().then((result) => console.log(result));
// Output:
// Step 1 completed
// Step 2 completed
// All steps completed!
```

---

### Key Notes:
1. **`async`** always returns a promise, even if no `await` is used.  
2. **`await`** pauses execution until the promise resolves/rejects.  
3. Use **`try...catch`** for error handling in `async` functions.  
4. Improves readability and avoids deeply nested `.then()` chains.