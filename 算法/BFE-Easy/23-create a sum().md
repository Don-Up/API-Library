## [23. create a sum() | BFE.dev - prepare for Front-End job interviews.](https://bigfrontend.dev/problem/create-a-sum)

这道题要求实现一个 `sum` 函数，支持链式调用来累加多个数值。`sum` 的返回值是一个函数，该函数可以继续接受一个数作为参数并返回新的函数，直到没有参数传入时，最终返回累加的值。举例来说，`sum(1)(2)(3)` 应返回 `6`，而 `sum(1)(2) == 3` 应该返回 `true`，这需要实现函数的链式调用，并在需要时返回正确的累加结果。

<audio src="..\..\mp3\这道题要求实现一个 sum 函.mp3"></audio>

```js
/**
 * @param {number} num
 */
function sum(num) {
  const func = function(num2) {
    return num2 ? sum(num + num2) : num;
  };

  func.valueOf = () => num;
  return func;
}
```

<audio src="..\..\mp3\解题方案通过闭包和重写函数的 .mp3"></audio>