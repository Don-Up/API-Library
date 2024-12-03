## [138. Intersection of two sorted arrays | BFE.dev - prepare for Front-End job interviews.](https://bigfrontend.dev/problem/intersection-of-two0-sorted-Arrays)

这道题要求实现一个函数 `intersect`，用来找出两个有序整数数组中共有的元素。输入是两个升序排列的数组 `arr1` 和 `arr2`，输出是一个数组，包含两个数组中都存在的元素，允许重复（即如果某个数字在两个数组中出现多次，则结果中也需要包含相应次数）。返回结果的顺序可以任意。

解题方案采用双指针法，利用输入数组的有序性实现高效的交集计算。初始化两个指针 `p1` 和 `p2` 分别指向两个数组的起始位置，同时维护一个结果数组 `result`。在遍历过程中，比较两个指针指向的元素：如果两者相等，将该元素加入结果数组，并同时移动两个指针；如果第一个数组的当前元素小于第二个数组的当前元素，说明当前元素只可能在第一个数组中出现一次，因此移动第一个指针；反之则移动第二个指针。通过这种方式，能够在一次线性遍历中完成交集计算。算法的时间复杂度为 O(n + m)，其中 `n` 和 `m` 分别是两个数组的长度，因为每个数组的每个元素最多只访问一次；空间复杂度为 O(k)，其中 `k` 是结果数组的长度。该方法充分利用了数组的有序性，逻辑清晰且性能高效，适合处理包含重复元素的交集问题。

```js
/**
 * @param {number[]} arr1 - integers
 * @param {number[]} arr2 - integers
 * @returns {number[]}
 */
function intersect(arr1, arr2) {
  let p1 = 0
  let p2 = 0
  let result = []
  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] === arr2[p2]) {
      result.push(arr1[p1])
      p1 += 1
      p2 += 1
    } else {
      if (arr1[p1] < arr2[p2]) {
        p1 += 1
      } else {
        p2 += 1
      }
    }
  }
  return result
}
```

