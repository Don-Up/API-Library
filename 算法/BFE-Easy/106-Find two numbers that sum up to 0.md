## [106. Find two numbers that sum up to 0 | BFE.dev - prepare for Front-End job interviews.](https://bigfrontend.dev/problem/Find-two-numbers-that-sum-up-to-0)

这道题要求在一个整数数组中找到两个数，它们的和为 0，并返回它们的索引。如果存在多个符合条件的数对，返回任意一个即可；如果没有找到，则返回 `null`。输入是一个整数数组 `arr`，输出是一个数组，包含两个整数的索引，或者返回 `null`。

解题方案使用了哈希表（`Map`）来高效查找数组中的元素。首先遍历数组，将每个数及其索引存入哈希表 `numberMap` 中，这样可以快速判断某个数是否存在于数组中。接着，再次遍历数组，对于每个数 `arr[i]`，检查它的相反数 `-arr[i]` 是否存在于哈希表中。如果存在，说明当前数和它的相反数相加为 0，直接返回它们的索引 `[i, numberMap.get(-arr[i])]`。如果遍历结束后仍未找到符合条件的数对，则返回 `null`。这种方法的时间复杂度为 O(n)，因为只需要两次线性遍历数组；空间复杂度为 O(n)，因为哈希表需要存储数组中的元素及其索引。该方法高效且易于实现，非常适合解决查找和的问题。

```js
/**
 * @param {number[]} arr
 * @return {number[]}
 */
function findTwo(arr) {
  let numberMap = new Map()
  for(let i in arr){
    numberMap.set(arr[i], i)
  }
  for(let i in arr){
    if(numberMap.has(-arr[i])) return [i, numberMap.get(-arr[i])]
  }
  return null
}
console.log(findTwo([1,2,3,4]))
```

