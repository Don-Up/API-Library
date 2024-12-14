### Promise Error Handling with `.catch()`

<audio src="..\..\mp3\The __`.catch`_.mp3"></audio>

The **`.catch()`** method handles errors in a promise chain. If a promise is rejected (via `reject()` or a thrown error), `.catch()` is triggered. It ensures the error is caught, preventing unhandled promise rejections.  

Errors can occur at any point in the chain; `.catch()` captures them and stops further propagation. For multiple `.then()`, one `.catch()` at the end is sufficient.

> **Promise 的 `.catch()` 错误处理**：
>
> <audio src="..\..\mp3\`.catch()` 方法用于.mp3"></audio>
>
> **`.catch()`** 方法用于处理 Promise 链中的错误。当 Promise 被拒绝（通过 `reject()` 或抛出错误）时，`.catch()` 会被触发。  
> 它确保错误被捕获，避免未处理的 Promise 拒绝。  
> 无论错误发生在链中的哪个位置，最后的 `.catch()` 都能捕获并停止传播。

---

### Code Examples:

<audio src="..\..\mp3\这段代码展示了在 JavaSc.mp3"></audio>

#### **Handling Rejections**
```javascript
const myPromise = new Promise((resolve, reject) => {
  reject("Something went wrong!");
});

myPromise
  .then((result) => console.log(result)) // Skipped due to rejection
  .catch((error) => console.error(error)); // "Something went wrong!"
```

#### **Catching Errors in a Chain**
```javascript
const fetchData = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject("Fetch failed!"), 1000);
  });

fetchData()
  .then((data) => console.log(data)) // Skipped
  .then(() => console.log("Processing data")) // Skipped
  .catch((error) => console.error(error)); // "Fetch failed!"
```

#### **Catching Thrown Errors**
```javascript
const processData = () =>
  new Promise((resolve) => {
    resolve("Data processed!");
  });

processData()
  .then(() => {
    throw new Error("An error occurred during processing!");
  })
  .catch((error) => console.error(error.message)); // "An error occurred during processing!"
```

#### **Using `.finally()` for Cleanup**
```javascript
const myPromise = new Promise((resolve, reject) => {
  reject("Task failed!");
});

myPromise
  .catch((error) => console.error(error)) // "Task failed!"
  .finally(() => console.log("Cleanup complete.")); // Always executes
```

---

### Key Notes:
1. Use `.catch()` to handle errors in a promise chain.  
2. `.catch()` can handle rejections or thrown errors.  
3. Place `.catch()` at the end of the chain to catch all errors.  
4. Use `.finally()` for cleanup tasks, regardless of success or failure.