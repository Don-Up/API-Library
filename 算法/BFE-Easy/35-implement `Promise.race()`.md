## [35. implement `Promise.race()` | BFE.dev - prepare for Front-End job interviews.](https://bigfrontend.dev/problem/implement-Promise-race)

这道题要求实现一个 `race` 函数，其行为与 `Promise.race()` 相同。`Promise.race()` 接收一个由多个 `Promise` 组成的数组，返回一个新的 `Promise`。当数组中的任意一个 `Promise` 变为已解决（fulfilled）或被拒绝（rejected）时，`race` 返回的 `Promise` 就会以第一个完成的 `Promise` 的状态和结果进行解析或拒绝。简单来说，`Promise.race()` 会将第一个完成的 `Promise` 的结果或错误传递给返回的 `Promise`。

<audio src="C:\Users\10691\Downloads\这道题要求实现一个race函数.mp3"></audio>

```js
/**
 * @param {Array<Promise>} promises
 * @return {Promise}
 */
function race(promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      promise.then(resolve, reject);
    });
  });
}
```

<audio src="C:\Users\10691\Downloads\解题方案通过创建一个新的Pro.mp3"></audio>