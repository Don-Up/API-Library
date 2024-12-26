## [159. implement promisify() | BFE.dev - prepare for Front-End job interviews.](https://bigfrontend.dev/problem/promisify)

这道题要求实现一个 `promisify` 函数，用于将传统的基于回调的异步函数（即最后一个参数是 error-first 回调的形式）转换为返回 `Promise` 的函数。`promisify` 的目标是简化异步代码，使其可以与现代 `async/await` 或 `Promise` 链式调用的方式兼容。输入是一个接受回调的函数 `func`，输出是一个返回 `Promise` 的新函数。

### **讲解内容**

#### 1. **函数 `promisify` 的目的**

- `promisify` 函数用于将传统的基于 **回调函数** 的异步操作（即最后一个参数是回调函数的形式）转换为基于 **Promise** 的异步操作。
- 转换后的函数可以直接使用现代的 **`Promise` 链式调用**（如 `.then`、`.catch`），或结合 **`async/await`** 使用，从而简化异步代码的可读性和维护性。
  
---

#### 2. **传统回调函数的模式**

- **传统异步函数**通常遵循以下模式：
  - 函数的最后一个参数是一个 **error-first 回调函数**，回调函数的签名通常是 `(error, data) => { ... }`。
  - 如果操作成功，`error` 是 `null` 或未定义，`data` 包含结果。
  - 如果操作失败，`error` 包含错误信息，`data` 通常是未定义的。

**例如**:
```javascript
function readFile(filePath, callback) {
  // callback 的签名是 (error, data)
  fs.readFile(filePath, 'utf-8', (error, data) => {
    if (error) {
      callback(error);
    } else {
      callback(null, data);
    }
  });
}
```

---

#### 3. **`promisify` 的核心逻辑**

- **目的**: 将上述传统回调函数转换为返回 `Promise` 的函数。
- **实现步骤**:
  1. 返回一个新函数，该函数会接受任意数量的参数（`...args`）。
  2. 在新函数中，返回一个 `Promise` 实例。
  3. 在 `Promise` 的执行器函数中（即 `new Promise((resolve, reject) => { ... })`）：
     - 调用原始的回调函数 `func`，并在参数最后添加一个新的回调函数 `(error, data)`。
     - 如果 `error` 存在，则调用 `reject(error)`。
     - 如果 `error` 不存在，则调用 `resolve(data)`。

---

### **带有注释的完整代码**

```javascript
/**
 * 将传统的基于回调的异步函数转换为返回 Promise 的函数
 * @param {(...args: any[]) => void} func - 需要转换的回调函数
 * @returns {(...args: any[]) => Promise<any>} - 返回 Promise 的新函数
 */
function promisify(func) {
  return function (...args) {
    // 返回一个新的函数，并且返回 Promise
    return new Promise((resolve, reject) => {
      // 调用原始函数，添加一个回调函数作为最后一个参数
      func.call(this, ...args, (error, data) => {
        if (error) {
          // 如果回调的第一个参数是错误，调用 reject
          reject(error);
        } else {
          // 如果没有错误，调用 resolve
          resolve(data);
        }
      });
    });
  };
}
```

---

### **逐步执行示例**

#### 示例 1: 将 `setTimeout` 转换为 `Promise`

**原始函数**:
```javascript
function delay(ms, callback) {
  setTimeout(() => {
    callback(null, `Waited for ${ms} milliseconds`);
  }, ms);
}
```

**转换后的函数**:
```javascript
const delayPromise = promisify(delay);

// 使用 Promise 调用
delayPromise(1000).then(console.log).catch(console.error);

// 使用 async/await 调用
(async () => {
  try {
    const result = await delayPromise(1000);
    console.log(result); // 输出: Waited for 1000 milliseconds
  } catch (error) {
    console.error(error);
  }
})();
```

---

#### 示例 2: 将 Node.js 的 `fs.readFile` 转换为 `Promise`

**原始函数**:
```javascript
const fs = require('fs');

// fs.readFile 是一个传统的回调函数
fs.readFile('./example.txt', 'utf-8', (error, data) => {
  if (error) {
    console.error(error);
  } else {
    console.log(data);
  }
});
```

**转换后的函数**:
```javascript
const readFilePromise = promisify(fs.readFile);

// 使用 Promise 调用
readFilePromise('./example.txt', 'utf-8')
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

// 使用 async/await 调用
(async () => {
  try {
    const data = await readFilePromise('./example.txt', 'utf-8');
    console.log(data);
  } catch (error) {
    console.error(error);
  }
})();
```

---

### **注意事项**

1. **`this` 的绑定**:
   - 如果原始函数依赖于 `this`（例如是某个对象的方法），在调用 `func` 时需要正确地绑定 `this`。
   - 使用 `func.call(this, ...args, callback)` 是为了确保新函数能够正确继承原始函数的上下文。

2. **支持多参数回调**:
   - 如果回调函数返回多个结果，可以扩展 `resolve` 的逻辑，例如将所有结果作为数组返回：
     ```javascript
     func.call(this, ...args, (error, ...results) => {
       if (error) {
         reject(error);
       } else {
         resolve(results);
       }
     });
     ```

---

### **时间和空间复杂度分析**

1. **时间复杂度**:
   - `promisify` 只是对原始函数进行包装，实际的执行时间取决于原始函数的复杂度，因此时间复杂度与原始函数一致。

2. **空间复杂度**:
   - 包装后的新函数只是增加了一个闭包，额外的空间开销是常数级，即 **O(1)**。

---

### **总结**

- `promisify` 将传统回调函数转换为现代 `Promise` 风格函数，极大简化了异步操作的代码结构。
- 转换后的函数可以无缝结合 `async/await` 使用，提高代码的可读性和可维护性。
- 函数实现简洁，兼容性强，非常适用于 Node.js 或其他使用回调的异步环境。

