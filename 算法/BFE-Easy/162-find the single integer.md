## [162. find the single integer | BFE.dev - prepare for Front-End job interviews.](https://bigfrontend.dev/problem/find-the-single-integer)

这道题要求实现一个函数 `findSingle`，用来从一个整数数组中找出唯一只出现一次的数字，其他数字都恰好出现两次。输入是一个整数数组 `arr`，输出是那个只出现一次的数字。

解题方案利用了 XOR（异或）运算的性质：1）对相同的数进行异或运算结果为 0；2）对任意数与 0 进行异或运算结果为该数本身；3）异或运算满足交换律和结合律。因此，通过遍历数组并对每个数进行异或操作，所有出现两次的数字会相互抵消为 0，最终只剩下那个只出现一次的数字。代码实现中可以使用 `Array.prototype.reduce` 方法，将数组中的所有数字通过异或操作累积起来，最终返回累积结果即是目标数字。这种方法的时间复杂度为 O(n)，因为只需遍历数组一次；空间复杂度为 O(1)，因为只使用了一个变量来存储结果。该算法高效且简洁，已经是最优解，无法进一步优化。

```js
/**
 * @param {number[]} arr
 * @returns number
 */
// function findSingle(arr) {
//   let res = 0
//   arr.forEach( num => res ^= num )
//   return res
// }

function findSingle(arr) {
  return arr.reduce((acc, cur) => acc ^= cur, 0)
}
```

