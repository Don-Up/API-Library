## [6. implement basic debounce() | BFE.dev - prepare for Front-End job interviews.](https://bigfrontend.dev/problem/implement-basic-debounce)

这道题要求实现一个基本的 `debounce` 函数，用于限制高频调用函数的执行频率。`debounce` 接收两个参数：一个函数 `func` 和延迟时间 `wait`（毫秒），返回一个经过防抖处理后的新函数。防抖的机制是，只有在指定时间 `wait` 内没有重复调用时，才会执行 `func`。例如，如果在连续调用中，时间间隔小于 `wait`，则会不断延迟 `func` 的执行，直到最后一次调用后的 `wait` 毫秒才真正执行。

<audio src="..\..\mp3\这道题要求实现一个基本的 di.mp3"></audio>

```js
/**
 * @param {(...args: any[]) => any} func
 * @param {number} wait
 * @returns {(...args: any[]) => any}
 */
function debounce(func, wait) {
  let cancel = null;
  return (args) => {
    clearTimeout(cancel);
    cancel = setTimeout(() => func(...args), wait);
  };
}
```

<audio src="..\..\mp3\解题方案通过使用闭包和setT.mp3"></audio>