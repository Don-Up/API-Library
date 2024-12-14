## [88. 合并两个有序数组 - 力扣（LeetCode）](https://leetcode.cn/problems/merge-sorted-array/submissions/547856789/?envType=study-plan-v2&envId=top-interview-150)

### 题干

这道题要求将两个已排序的整数数组 nums1 和 nums2 合并成一个非递减顺序的数组，并将合并的结果存储在 nums1 中。为了满足需求，nums1 的长度为 m + n，其中前 m 个元素是有效数据，最后的 n 个元素为0的占位符，供合并时使用。nums2 的长度为 n，包含所有有效数据。关键点是实现原地合并，不能创建新的数组，因此需要在 nums1 的数组空间内完成合并操作，最终数组仍然按非递减顺序排列。

<audio src="..\..\mp3\这道题要求将两个已排序的整数数.mp3"></audio>

### 解题

<audio src="..\..\mp3\这段代码实现了一个高效的双指针.mp3"></audio>

<audio src="..\..\mp3\算法从两个数组的末尾开始比较元.mp3"></audio>

<audio src="..\..\mp3\如果`nums2`还有剩余元素.mp3"></audio>

```js
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let i = m-1
    let j = n-1
    let k = m + n -1

    while(i>=0 && j>=0){
        if(nums1[i]>nums2[j]){
            nums1[k--] = nums1[i--]
        } else {
            nums1[k--] = nums2[j--]
        }
    }

    while(j>=0){
        nums1[k--] = nums2[j--]
    }
};
```

