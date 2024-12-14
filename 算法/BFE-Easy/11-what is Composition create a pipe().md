## [11. what is Composition? create a pipe() | BFE.dev - prepare for Front-End job interviews.](https://bigfrontend.dev/problem/what-is-composition-create-a-pipe)

这道题要求实现一个 `pipe` 函数，用于将多个函数组合起来，形成一个新的函数。`pipe` 接收一个函数数组 `funcs` 作为参数，并返回一个新的函数，该函数接收一个初始值 `arg`，然后将其作为输入依次传递给 `funcs` 数组中的每个函数，最终返回计算结果。例如，如果函数数组为 `[times(2), plus(3), times(4)]`，通过 `pipe` 组合后，生成的新函数会执行 `((x * 2) + 3) * 4`。

<audio src="..\..\mp3\这道题要求实现一个管道函数，用.mp3"></audio>

```js
/**
 * @param {Array<(arg: any) => any>} funcs 
 * @return {(arg: any) => any}
 */
function pipe(funcs) {
  return function(arg) {
    return funcs.reduce((result, func) => {
      return func.call(this, result);
    }, arg);
  };
}
```

<audio src="..\..\mp3\解题方案使用了函数式编程的思想.mp3"></audio>