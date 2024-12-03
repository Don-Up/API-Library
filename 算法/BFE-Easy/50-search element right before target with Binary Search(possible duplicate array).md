## [50. search element right before target with Binary Search(possible duplicate array) | BFE.dev - prepare for Front-End job interviews.](https://bigfrontend.dev/problem/search-element-right-before-target-with-Binary-Search-possible-duplicate-array)

这道题要求在一个升序数组（可能包含重复元素）中找到目标值 `target` 的第一个出现位置的前一个元素。如果目标值的第一个出现位置存在且有一个前驱元素，则返回该前驱元素；如果目标值不存在，或者其前面没有元素，则返回 `undefined`。输入是一个升序数组 `arr` 和目标值 `target`，输出是目标值前一个元素的值，或者 `undefined`。

<audio src="C:\Users\10691\Downloads\这道题要求在一个升序数组（可能.mp3"></audio>

This problem requires finding the element right before the first appearance of a target value in a sorted ascending array, which may contain duplicates. If the target value exists and has a preceding element, return that preceding element. If the target value is not found or there is no preceding element (e.g., the target is the first element), return `undefined`. The input is a sorted array `arr` and a target value `target`, and the output is the value of the element before the target or `undefined`.

<audio src="C:\Users\10691\Downloads\This problem re.mp3"></audio>

```js
/**
 * @param {number[]} arr - ascending array with duplicates
 * @param {number} target
 * @return {number}
 */
function elementBefore(arr, target){
  let left = 0, right = arr.length - 1;
  while (left <= right) {
    const mid = (left + right) >> 1;
    if (arr[mid] >= target) right = mid - 1;
    else left = mid + 1;
  }
  return arr[right];
}
```

<audio src="C:\Users\10691\Downloads\解题方案使用二分查找的思想来高.mp3"></audio>

The solution uses the binary search technique to efficiently locate the predecessor of the target value. Two pointers, `left` and `right`, are initialized to the start and end of the array. In each iteration, the midpoint `mid` is calculated. If `arr[mid]` is greater than or equal to the target, this means the target could be in the left half of the array, so `right` is updated to `mid - 1`. Otherwise, `left` is updated to `mid + 1` to continue searching in the right half. After the loop, the `right` pointer will point to the index immediately before the first occurrence of the target value. Finally, return `arr[right]`. If the `right` pointer is out of bounds (e.g., `right < 0`), return `undefined`. This approach has a time complexity of O(log n) and a space complexity of O(1), making it an efficient solution.