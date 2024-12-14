## [54. flatten Thunk | BFE.dev - prepare for Front-End job interviews.](https://bigfrontend.dev/problem/flatten-Thunk)

这道题要求实现一个 `flattenThunk` 函数，用于将嵌套的 `Thunk`（函数链）展开并执行，最终返回最底层的结果。`Thunk` 是一个函数，它接受一个回调函数 `Callback` 作为参数，并在异步操作完成时调用该回调。`Callback` 的参数包括 `error` 和 `result`，而 `result` 可以是普通数据，也可以是另一个 `Thunk`。题目希望通过 `flattenThunk` 将这些嵌套的 `Thunk` 链连起来，使得调用 `flattenThunk` 后能够最终解析出最底层的结果。例如，`func3` 链接到 `func2`，`func2` 链接到 `func1`，最终返回结果 `'ok'`。

<audio src="..\..\mp3\这道题要求实现一个`flatt.mp3"></audio>

```js
/**
 * @param {Thunk} thunk
 * @return {Thunk}
 */
function flattenThunk(thunk) {
  // your code here
  return function(cb){
    function wrapper(err, res){
      typeof res === 'function' ? res(wrapper) : cb(err, res);
    }
    thunk(wrapper)
  }
}
```

<audio src="..\..\mp3\解题方案通过递归掉用和包装回掉.mp3"></audio>