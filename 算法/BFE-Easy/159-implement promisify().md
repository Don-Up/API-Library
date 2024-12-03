## [159. implement promisify() | BFE.dev - prepare for Front-End job interviews.](https://bigfrontend.dev/problem/promisify)

这道题要求实现一个 `promisify` 函数，用于将传统的基于回调的异步函数（即最后一个参数是 error-first 回调的形式）转换为返回 `Promise` 的函数。`promisify` 的目标是简化异步代码，使其可以与现代 `async/await` 或 `Promise` 链式调用的方式兼容。输入是一个接受回调的函数 `func`，输出是一个返回 `Promise` 的新函数。

解题方案如下：`promisify` 返回一个新函数，该函数接受与原函数相同的参数，但最后不需要再传入回调函数。内部通过创建一个 `Promise` 实例来包装原函数的异步逻辑。在 `Promise` 的执行器函数中，调用原函数 `func`，并将所有参数和一个新的回调函数传入。这个新的回调函数会接收 `error` 和 `data` 参数：如果 `error` 存在（即发生错误），调用 `Promise` 的 `reject` 方法；否则调用 `resolve` 方法，将 `data` 作为结果传递出去。通过这种方式，`promisify` 将基于回调的异步操作封装成了现代 `Promise` 风格。时间复杂度为 O(1)，因为只对函数执行一次封装；空间复杂度为 O(1)，仅增加少量的闭包开销。这种方法逻辑清晰，适用于将传统异步代码迁移到现代 JavaScript 异步模式中。

```js
/**
 * @param {(...args) => void} func
 * @returns {(...args) => Promise<any}
 */
function promisify(func) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      func.call(this, ...args, (error, data) => {
        if (error) {
          reject(error)
        } else {
          resolve(data)
        }
      })
    })
  }
}

```

