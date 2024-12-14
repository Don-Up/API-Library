## [28. implement clearAllTimeout() | BFE.dev - prepare for Front-End job interviews.](https://bigfrontend.dev/problem/implement-clearAllTimeout)

这道题要求实现一个 `clearAllTimeout` 函数，用于清除所有通过 `window.setTimeout` 创建的定时器。通常情况下，每次调用 `setTimeout` 都会返回一个唯一的定时器 ID，我们可以通过 `clearTimeout` 取消指定的定时器。而 `clearAllTimeout` 的功能是无需知道定时器 ID 的具体值，直接清除所有已设置的定时器。这种功能在页面跳转或需要取消所有定时任务时非常有用。

<audio src="..\..\mp3\这道题要求实现一个 clear.mp3"></audio>

```js
/**
 * cancel all timer from window.setTimeout
 */
function clearAllTimeout() {
  // your code here
  let id = setTimeout(null, 0);
  while (id >= 0) {
    window.clearTimeout(id);
    id--;
  }
}
```

<audio src="..\..\mp3\解题方案通过调用 setTim.mp3"></audio>