## [120. create `isPrime()` | BFE.dev - prepare for Front-End job interviews.](https://bigfrontend.dev/problem/isPrime)

这道题要求实现一个函数 `isPrime`，用于判断一个正整数是否为质数（即大于 1 且只能被 1 和自身整除的自然数）。输入是一个正整数 `num`，输出是一个布尔值，`true` 表示该数是质数，`false` 表示不是质数。题目还要求分析实现的时间复杂度，并优化比较次数。

解题方案通过逐步优化减少不必要的比较次数。首先，任何小于等于 1 的数不是质数，直接返回 `false`。然后观察到，质数的因子必然小于等于其平方根，因此只需检查从 2 到 `sqrt(num)` 的所有整数是否能整除 `num`，若存在任何能整除的数，则返回 `false`；否则返回 `true`。这种方法的时间复杂度为 O(√n)，因为最多需要检查平方根范围内的整数。进一步优化可以减少检查的数字范围：例如，2 是唯一的偶数质数，可以直接排除所有偶数后只检查奇数；或者在检查奇数时跳过 3 的倍数等。这些优化可以减少常数倍的计算量，但时间复杂度仍为 O(√n)。完整实现简单高效，同时涵盖了质数的基本定义和优化思想。

```js

/**
 * @param {number} num - positive integer
 */
function isPrime(num) {
  if(num === 1) return false;
  const max = Math.round(Math.sqrt(num));
  
  for(let i=2; i<=max; i++){
    if(num % i === 0) return false;
  }
  return true;
}
```

