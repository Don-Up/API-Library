## [109. implement `Math.pow()` | BFE.dev - prepare for Front-End job interviews.](https://bigfrontend.dev/problem/implement-Math-pow)

这道题要求实现一个自定义的 `Math.pow()` 函数，用于计算一个数 `a` 的 `b` 次幂，其中 `b` 为整数。输入是两个参数 `a`（基数）和 `b`（幂），输出是一个数字，表示 `a` 的 `b` 次幂。如果 `b` 为负数，返回其倒数；如果 `b` 为 0，则结果为 1。

解题方案使用递归实现快速幂算法（Exponentiation by Squaring），其核心思想是将幂次计算分解为更小的问题，从而减少计算次数。首先处理特殊情况：如果 `b == 0`，返回 1（任何数的 0 次幂为 1）；如果 `b == 1`，返回 `a`；如果 `b == -1`，返回 `1/a`，表示倒数。对于其他情况，若 `b` 是偶数，则将其分解为两个相同的子问题 `pow(a, b/2)`，结果为 `res * res`，这样只需计算一次子问题再平方即可；若 `b` 是奇数，则将其分解为 `a * pow(a, b-1)`，其中 `pow(a, b-1)` 会进一步递归。通过这种方法，幂次计算的时间复杂度从 O(b) 降低到 O(log b)，非常高效。递归的空间复杂度为 O(log b)，因递归调用栈深度与幂次的对数成正比。这种方法简单高效，适用于整数次幂的计算。

```js
/**
 * @param {number} base
 * @param {number} power - integer
 * @return {number}
 */
var pow = function(a, b) {
    if(b == 0) return 1;
    if(b == 1) return a;
    if(b == -1) return 1/a;
    if(b%2 == 0){
        let res = pow(a,b/2);
        return res*res;
    }else{
        return a*pow(a,b-1)
    }
};
```

