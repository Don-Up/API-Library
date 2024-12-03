## [31. implement async helper - `race()` | BFE.dev - prepare for Front-End job interviews.](https://bigfrontend.dev/problem/implement-async-helper-race)

这道题要求实现一个异步函数辅助工具 `race()`，其行为类似于 `Promise.race()`。不同于 `parallel()` 需要等待所有异步函数完成，`race()` 的特性是当任意一个异步函数完成或出错时，就立刻触发回调，而忽略其他异步函数的结果或错误。`race()` 接收一个异步函数数组 `funcs`，每个异步函数的接口为 `(callback, data) => void`，返回一个新的函数。该新函数会接收一个回调 `callback`，并在任意一个异步函数完成或出错时调用 `callback`，只传递第一个完成的结果或错误。

<audio src="C:\Users\10691\Downloads\这道题要求实现一个异步函数辅助.mp3"></audio>

```js
/*
type Callback = (error: Error, data: any) => void
type AsyncFunc = (
   callback: Callback,
   data: any
) => void
*/
/**
 * @param {AsyncFunc[]} funcs
 * @return {(callback: Callback) => void}
 */
function race(funcs){
  let finished = false;
  return function(callback) {
    const callbackWrapper = (...args) => {
      if(finished) return;
      callback(...args);
      finished = true;
    }
    for(const func of funcs) {
      func(callbackWrapper);
    }
  } 
}
```

<audio src="C:\Users\10691\Downloads\解题方案通过闭包和标志变量确保.mp3"></audio>