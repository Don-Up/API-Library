## [37. implement Binary Search (unique) | BFE.dev - prepare for Front-End job interviews.](https://bigfrontend.dev/problem/implement-Binary-Search-Unique)

这道题要求实现一个二分查找算法，用于在一个升序且元素唯一的数组中查找目标值 `target` 的索引。如果找到目标值，则返回其对应的索引；如果没有找到，则返回 -1。输入包括一个升序唯一的整数数组 `arr` 和一个整数 `target`，输出为整数类型的索引或 -1。

<audio src="C:\Users\10691\Downloads\这道题要求实现一个二分查找算法.mp3"></audio>

```js

/**
 * @param {number[]} arr - ascending unique array
 * @param {number} target
 * @return {number}
 */
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    }
    if (arr[mid] < target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
}
```

<audio src="C:\Users\10691\Downloads\解题方案通过二分查找的思想实现.mp3"></audio>