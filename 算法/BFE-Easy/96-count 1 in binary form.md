## [96. count "1" in binary form | BFE.dev - prepare for Front-End job interviews.](https://bigfrontend.dev/problem/how-many-1s-in-binary)

这道题要求计算一个整数的二进制表示中 `1` 的个数。例如，整数 `1` 的二进制表示为 `"1"`，有 1 个 `1`；整数 `257799` 的二进制表示为 `"111110111100000111"`，有 12 个 `1`。输入是一个整数 `num`，输出是一个整数，表示二进制中 `1` 的个数。

解题方案使用了 **Brian Kernighan 算法** 的高效方法。观察到一个性质：`num & (num - 1)` 可以将 `num` 的最低位的 `1` 直接消除。例如，`num = 10 (1010)`，`num - 1 = 9 (1001)`，`num & (num - 1) = 8 (1000)`，最低位的 `1` 就被移除了。基于这一性质，我们可以通过不断对 `num` 执行 `num &= (num - 1)` 操作，每次消除一个 `1`，同时更新计数器 `count`。当 `num` 变为 `0` 时，说明所有的 `1` 都被消除了，因此循环结束，返回 `count`。这种方法的时间复杂度为 O(k)，其中 k 是 `num` 的二进制中 `1` 的个数。相比按位逐一检查的方法，这种方法在二进制中 `1` 的个数较少时效率更高，且实现简洁优雅。

```js
/**
 * @param {number} num - integer
 * @return {number} count of 1 bit
 */
function countOne(num) {
  let count;
  for (count = 0; num !== 0; ++count){
     num &= num -1; 
  }
  return count;
}
```

