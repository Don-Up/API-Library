### Error Handling in `async/await`

<audio src="C:\Users\10691\Downloads\Error handling .mp3"></audio>

Error handling in `async/await` is primarily done using **`try...catch`** blocks. When `await` is used, if the promise it is waiting for rejects, an error is thrown and can be caught in the `catch` block. This makes error handling in asynchronous code more readable and manageable compared to `.catch()` in promise chains.

Key points:  
1. Use **`try...catch`** to handle errors inside `async` functions.  
2. Handle errors globally if necessary by wrapping the `async` call in a `try...catch`.  
3. Combine `try...catch` with custom error handling logic for more robust applications.  
4. Use `.catch()` on the returned promise if you prefer not to handle errors inside the `async` function.

> **`async/await` 中的错误处理**：
>
> <audio src="C:\Users\10691\Downloads\在 `async_await`.mp3"></audio>
>
> 在 `async/await` 中，错误处理主要通过 **`try...catch`** 实现。如果 `await` 等待的 Promise 被拒绝，会抛出错误，可在 `catch` 块中捕获。这使得异步代码的错误处理更易读、更易管理。  
> 关键点：  
>
> 1. 使用 **`try...catch`** 在 `async` 函数内部捕获错误。  
> 2. 如有需要，可通过 `try...catch` 包装 `async` 调用，实现全局错误处理。  
> 3. 结合自定义错误处理逻辑，增强程序的健壮性。  
> 4. 如果不想在内部捕获错误，可在返回的 Promise 上使用 `.catch()`。

---

### Code Examples:

<audio src="C:\Users\10691\Downloads\这段代码展示了如何在 asyn.mp3"></audio>

#### **Basic Error Handling with `try...catch`**
```javascript
async function fetchData() {
  try {
    const data = await Promise.reject("Fetch failed!");
    console.log(data); // Skipped
  } catch (error) {
    console.error("Error:", error); // "Error: Fetch failed!"
  }
}
fetchData();
```

#### **Error Propagation**
```javascript
async function fetchData() {
  const data = await Promise.reject("Fetch failed!");
  return data; // This will throw an error
}

async function main() {
  try {
    await fetchData();
  } catch (error) {
    console.error("Caught in main:", error); // "Caught in main: Fetch failed!"
  }
}
main();
```

#### **Global Error Handling**
```javascript
async function fetchData() {
  const data = await Promise.reject("Fetch failed!");
  return data;
}

fetchData()
  .then((data) => console.log(data))
  .catch((error) => console.error("Global Error Handler:", error));
// "Global Error Handler: Fetch failed!"
```

#### **Handling Multiple Errors**
```javascript
async function fetchData1() {
  return Promise.reject("Error in fetchData1");
}

async function fetchData2() {
  return Promise.reject("Error in fetchData2");
}

async function main() {
  try {
    const data1 = await fetchData1();
    const data2 = await fetchData2();
  } catch (error) {
    console.error("Error occurred:", error); // First error caught: "Error in fetchData1"
  }
}
main();
```

---

### Key Notes:
1. Use **`try...catch`** for inline and scoped error handling.  
2. Errors propagate up the call stack, so catch them at the appropriate level.  
3. Use **global `.catch()`** for unhandled errors if necessary.  
4. Be mindful of where errors occur in the chain of `await` calls.