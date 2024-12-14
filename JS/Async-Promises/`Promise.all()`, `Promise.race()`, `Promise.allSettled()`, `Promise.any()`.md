### `Promise.all()`, `Promise.race()`, `Promise.allSettled()`, and `Promise.any()` in JavaScript

<audio src="..\..\mp3\These methods h.mp3"></audio>

These methods handle multiple promises concurrently:

1. **`Promise.all()`**: Resolves when **all promises resolve**; rejects if any promise fails. Useful for waiting for all tasks to complete.  
2. **`Promise.race()`**: Resolves/rejects as soon as the **first promise** resolves/rejects. Useful for timeout or fastest-result scenarios.  
3. **`Promise.allSettled()`**: Waits for all promises to settle (resolve or reject) and returns their results as an array of objects. Useful when you want results for all promises, regardless of failure.  
4. **`Promise.any()`**: Resolves when **any promise resolves**; rejects only if all promises fail. Useful for getting the first successful result.

> **`Promise.all()`、`Promise.race()`、`Promise.allSettled()` 和 `Promise.any()`**：
>
>   <audio src="..\..\mp3\这些方法用于同时处理多个 Pr.mp3"></audio>
> 这些方法用于同时处理多个 Promise：  
>
> 1. **`Promise.all()`**：当**所有 Promise 都成功**时解析；若有一个失败，则立即拒绝。适合等待所有任务完成。  
> 2. **`Promise.race()`**：第一个**完成的 Promise**（无论成功或失败）即决定结果。适合超时或最快结果场景。  
> 3. **`Promise.allSettled()`**：等待所有 Promise 完成（无论成功或失败），返回每个 Promise 的结果数组。适合需要所有结果的场景。  
> 4. **`Promise.any()`**：**任意一个 Promise 成功**时解析；若所有失败，则拒绝。适合获取第一个成功结果的场景。

---

### Code Examples:

<audio src="..\..\mp3\这段代码展示了 JavaScr (17).mp3"></audio>

#### **`Promise.all()`**
```javascript
const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = Promise.reject("Error!");

Promise.all([p1, p2, p3])
  .then((results) => console.log(results)) // Skipped
  .catch((error) => console.error(error)); // "Error!" (rejects on first failure)
```

#### **`Promise.race()`**
```javascript
const p1 = new Promise((resolve) => setTimeout(() => resolve("P1 resolved"), 1000));
const p2 = new Promise((resolve) => setTimeout(() => resolve("P2 resolved"), 500));

Promise.race([p1, p2]).then((result) => console.log(result)); // "P2 resolved" (first to resolve)
```

#### **`Promise.allSettled()`**
```javascript
const p1 = Promise.resolve("Success!");
const p2 = Promise.reject("Failed!");
const p3 = Promise.resolve("Another success!");

Promise.allSettled([p1, p2, p3]).then((results) => console.log(results));
// [
//   { status: "fulfilled", value: "Success!" },
//   { status: "rejected", reason: "Failed!" },
//   { status: "fulfilled", value: "Another success!" }
// ]
```

#### **`Promise.any()`**
```javascript
const p1 = Promise.reject("Error 1");
const p2 = Promise.reject("Error 2");
const p3 = Promise.resolve("Success!");

Promise.any([p1, p2, p3])
  .then((result) => console.log(result)) // "Success!" (first resolved promise)
  .catch((error) => console.error(error.errors)); // Skipped, as one promise resolved
```

---

### Key Notes:
1. **`Promise.all()`** is strict: all must resolve.  
2. **`Promise.race()`** is fastest: first to resolve/reject wins.  
3. **`Promise.allSettled()`** is forgiving: collects all results.  
4. **`Promise.any()`** focuses on success: one resolve is enough.