## [1. implement curry() | BFE.dev - prepare for Front-End job interviews.](https://bigfrontend.dev/problem/implement-curry)

<audio src="..\..\mp3\这道题要求实现一个`curry.mp3"></audio>

这道题要求实现一个`curry`函数，它接受一个普通函数作为参数并返回一个柯里化后的函数。柯里化（Currying）是一种将多参数函数转换为一系列嵌套的一元函数的技术，使函数可以通过多次调用逐步传递参数。柯里化后的函数既可以一次性传递所有参数调用，也可以分多次传递部分参数后再调用，最终返回与原函数相同的结果。

<audio src="..\..\mp3\解题方案通过递归实现了柯里化。.mp3"></audio>

```js
/**
 * @param { (...args: any[]) => any } fn
 * @returns { (...args: any[]) => any }
 */
function curry(fn) {
  return function curryInner(...args) {
    if (args.length >= fn.length) return fn(...args);
    return (...args2) => curryInner(...args, ...args2);
  };
}
```