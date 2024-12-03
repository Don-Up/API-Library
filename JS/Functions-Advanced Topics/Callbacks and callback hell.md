### Callbacks and Callback Hell in JavaScript

<audio src="C:\Users\10691\Downloads\A __callback__ .mp3"></audio>

A **callback** is a function passed as an argument to another function and executed after the completion of that function. Callbacks are widely used in asynchronous operations like fetching data or reading files.  

**Callback Hell** occurs when multiple nested callbacks make the code hard to read and maintain, often referred to as "pyramid of doom." It can be mitigated using **Promises** or **`async/await`**.

> **回调函数和回调地狱**：
>
> <audio src="C:\Users\10691\Downloads\回掉函数是作为参数传递给另一个.mp3"></audio>
>
> **回调函数**是作为参数传递给另一个函数，并在该函数执行完成后调用的函数。回调函数常用于异步操作（如获取数据或文件读取）。  
> **回调地狱**：当多层嵌套回调使代码难以阅读和维护时，就会出现“回调地狱”。可以通过 **Promise** 或 **`async/await`** 解决。

---

### Code Examples:

<audio src="C:\Users\10691\Downloads\这段代码展示了 JavaScr (6).mp3"></audio>

#### **Basic Callback**
```javascript
function fetchData(callback) {
  setTimeout(() => {
    callback("Data fetched!");
  }, 1000);
}

fetchData((message) => {
  console.log(message); // "Data fetched!" (after 1 second)
});
```

#### **Callback Hell (Pyramid of Doom)**
```javascript
setTimeout(() => {
  console.log("Task 1 completed");
  setTimeout(() => {
    console.log("Task 2 completed");
    setTimeout(() => {
      console.log("Task 3 completed");
    }, 1000);
  }, 1000);
}, 1000);
```

#### **Solving Callback Hell with Promises**
```javascript
function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

wait(1000)
  .then(() => {
    console.log("Task 1 completed");
    return wait(1000);
  })
  .then(() => {
    console.log("Task 2 completed");
    return wait(1000);
  })
  .then(() => {
    console.log("Task 3 completed");
  });
```

---

### Key Notes:
1. **Callbacks** are foundational for asynchronous JavaScript.
2. **Callback Hell** makes debugging and maintaining code difficult.
3. Use **Promises** or **`async/await`** to write cleaner asynchronous code.