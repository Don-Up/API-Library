## [81. merge sorted arrays | BFE.dev - prepare for Front-End job interviews.](https://bigfrontend.dev/problem/merge-sorted-arrays)

这道题要求实现一个 `merge` 函数，用于合并多个已排序的非递减整数数组，最终返回一个合并后的非递减排序数组。输入是一个二维数组 `arrList`，其中每个子数组都是排序好的整数数组；输出是一个一维数组，包含所有子数组元素，且保持排序状态。

<audio src="C:\Users\10691\Downloads\这道题要求实现一个merge函.mp3"></audio>

```js
/**
 * @param {number[][]} arrList
 * non-descending integer array
 * @return {number[]} 
 */
function merge2Lists(arr1, arr2) {
    let [i, j] = [0, 0];
    let res = []
    while (i < arr1.length || j < arr2.length) {
      if (i >= arr1.length || arr1[i] > arr2[j]) {
        res.push(arr2[j]);
        j++;
      } else {
        res.push(arr1[i]);
        i++;
      }
    }
    return res;
}
function merge(arrList) {
  if (arrList.length === 0) return [];
  if (arrList.length === 1) return arrList[0];
  if (arrList.length === 2) return merge2Lists(arrList[0], arrList[1]);
  let mid = Math.floor(arrList.length / 2)
  let left = merge(arrList.slice(0, mid));
  let right = merge(arrList.slice(mid, arrList.length));
  return merge2Lists(left, right);
}
```

<audio src="C:\Users\10691\Downloads\解题方案基于分治法和归并排序的.mp3"></audio>