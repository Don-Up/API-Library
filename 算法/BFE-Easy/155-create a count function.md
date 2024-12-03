## [155. create a count function | BFE.dev - prepare for Front-End job interviews.](https://bigfrontend.dev/problem/count-function)

这道题要求实现一个函数 `count`，每次调用时返回它被调用的次数，并且提供一个 `reset` 方法，用于将调用计数清零。输入是对函数的调用，输出是调用次数（从 1 开始）。当调用 `count.reset()` 后，计数器应被重置为初始状态。

解题方案通过使用闭包来保存调用次数的私有变量 `num`，确保其不会被外部直接修改。首先，将计数变量 `num` 初始化为 0。然后，定义一个函数 `func`，每次调用时对 `num` 自增并返回新的计数值。为了支持重置功能，在 `func` 上挂载一个 `reset` 方法，该方法将 `num` 重置为 0。最后，将 `func` 返回作为 `count` 函数。这种实现方式利用了闭包的特性，将计数变量封装在函数内部，避免外部直接访问，同时通过 `reset` 方法提供特定的操作接口。这种设计逻辑清晰，时间复杂度为 O(1)，空间复杂度也为 O(1)，是实现计数器功能的简洁高效方案。

```js
const count = (() => {
  let num = 0;
  const func = () => ++num;
  func.reset = () => num = 0;
  return func;
})();
```

