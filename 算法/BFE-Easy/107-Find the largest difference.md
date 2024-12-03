## [107. Find the largest difference | BFE.dev - prepare for Front-End job interviews.](https://bigfrontend.dev/problem/Find-the-largest-difference)

这道题要求计算一个数组中任意两数之间的最大差值，使用公式 `Math.abs(a - b)`。输入是一个整数数组 `arr`，输出是一个整数，表示数组中两数差值的最大值。如果数组长度小于 2，则返回 `0`（因为无法计算差值）。

解题方案的核心思想是利用数组中最小值和最大值的差值，因为它们之间的绝对差值一定是最大的。因此，遍历数组一次即可同时找到最小值 `min` 和最大值 `max`。然后返回它们的绝对差值。实现中，先检查数组长度是否小于 2，是则直接返回 `0`；否则初始化 `min` 为正无穷，`max` 为负无穷，并通过循环更新 `min` 和 `max`。遍历结束后，计算并返回 `Math.abs(max - min)`。这种方法的时间复杂度为 O(n)，因为数组只需遍历一次；空间复杂度为 O(1)，因为只使用了常量级的额外变量。这是计算最大差值问题的最优解法，简单高效。

```js
/**
 * @param {number[]} arr
 * @return {number}
 */
function largestDiff(arr) {
  if(arr.length < 2) return 0;
  let min = Infinity;
  let max = -Infinity;
  for(let i= 0 ;i< arr.length;i++) {
    min = Math.min(arr[i], min);
    max = Math.max(arr[i], max);
  }
  return Math.abs(min-max);
}
```

