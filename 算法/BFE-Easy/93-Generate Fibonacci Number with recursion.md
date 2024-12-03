## [93. Generate Fibonacci Number with recursion | BFE.dev - prepare for Front-End job interviews.](https://bigfrontend.dev/problem/Generate-Fibonacci-Number-with-recursion)

这道题要求实现一个函数 `fib(n)` 来计算第 `n` 个斐波那契数。斐波那契数列的定义为：`fib(0) = 0`，`fib(1) = 1`，对于 `n > 1` 的情况，`fib(n) = fib(n-1) + fib(n-2)`。虽然递归是常见的实现方式，但直接使用递归会导致指数级的时间复杂度，从而在较大输入时（如 `fib(1000)`）导致计算时间过长甚至浏览器卡死。题目要求改进方案，使其能处理大数，但仍需使用递归。

改进方案采用了**递归加记忆化（Memoization）**的方式，通过缓存中间结果来避免重复计算。我们引入一个对象 `m` 作为缓存，用于存储已经计算过的斐波那契数值。每次递归时，先检查 `m` 中是否已经存在目标值 `fib(n)`，如果已存在则直接返回缓存值；如果不存在，则递归计算 `fib(n-1)` 和 `fib(n-2)` 并将结果存入缓存中。通过这种方法，函数只会计算每个斐波那契数一次，时间复杂度从原来的 O(2^n) 降低到 O(n)，空间复杂度为 O(n)（用于存储缓存和递归栈）。最终实现简单高效，既满足了递归的要求，又能处理大数输入。

```js
const fib = (n, m = { 0: 0, 1: 1 }) => m[n] ??= fib(n - 1, m) + fib(n - 2, m)
```

