## [48. search first index with Binary Search(possible duplicate array) | BFE.dev - prepare for Front-End job interviews.](https://bigfrontend.dev/problem/search-first-index-with-Binary-Search-duplicate-array)

这道题要求实现一个二分查找算法，用于在一个升序数组（可能包含重复元素）中找到目标值 `target` 的第一个索引。如果目标值存在，返回其第一个出现位置的索引；如果不存在，返回 -1。输入包括一个升序数组 `arr` 和目标值 `target`，输出是一个整数，表示目标值的第一个索引或 -1。

<audio src="C:\Users\10691\Downloads\这道题要求实现一个二分查找算法 (1).mp3"></audio>

```js
/**
 * @param {number[]} arr - ascending array with duplicates
 * @param {number} target
 * @return {number}
 */
function firstIndex(arr, target){
  let left = 0, right = arr.length - 1;
  while (left < right) {
    const mid = (left + right) >> 1;
    if (arr[mid] >= target) right = mid;
    else left = mid + 1;
  }
  return arr[left] === target ? left : -1;
}
```

<audio src="C:\Users\10691\Downloads\解题方案基于二分查找的思想进行.mp3"></audio>

```js
    const mid = (left + right) >> 1;
```

在代码中，`const mid = (left + right) >> 1;` 是用来计算二分查找的中间索引 `mid` 的一部分。这里的 `>> 1` 是位运算符，表示将 `(left + right)` 的值向右移一位，等效于将这个值除以 2 并取整。

具体来说：

1. **位运算右移 `>>`**：
   - `x >> 1` 将数字 `x` 的二进制表示整体向右移动一位，相当于对 `x` 进行整数除以 2 的操作。
   - 例如，`6 >> 1` 相当于 `6 / 2 = 3`。

2. **为什么用 `>> 1` 而不是 `/ 2`**：
   - `>> 1` 是一种常见的性能优化，因为位运算比普通的除法运算更快（尽管在现代 JavaScript 引擎中差距很小，但仍是一种惯例）。
   - 另外，位运算会自动向下取整，而 `/ 2` 需要显式调用 `Math.floor()` 来取整。在这里，`>> 1` 的结果直接是一个整数，因此非常适合用于索引计算。

3. **在二分查找中的作用**：
   - 二分查找需要在 `left` 和 `right` 的范围内找到中间位置，`(left + right) / 2` 是计算中间索引的标准公式。但因为索引必须是整数，不能有小数，因此直接用 `>> 1` 可以快速得到一个整型结果，避免额外的取整操作。

**总结**：`const mid = (left + right) >> 1;` 是二分查找中计算中间索引的一种高效写法，利用位运算实现了 `(left + right) // 2` 的功能，是计算中点索引的优化写法，兼顾性能和简洁性。