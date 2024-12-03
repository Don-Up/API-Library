## [27. 移除元素 - 力扣（LeetCode）](https://leetcode.cn/problems/remove-element/description/?envType=study-plan-v2&envId=top-interview-150)

<audio src="C:\Users\10691\Downloads\这道题的要求是从整数数组 `n.mp3"></audio>

这道题的要求是从整数数组 `nums` 中移除所有值等于 `val` 的元素，并在原数组内完成此操作（即不能创建新的数组）。元素的顺序可以被改变，不需要保持原有顺序。最终需要返回数组中不等于 `val` 的元素个数 `k`，并且确保数组的前 `k` 个位置存放的是不等于 `val` 的元素。

<audio src="C:\Users\10691\Downloads\遍历数组时用指针 k 来记录当.mp3"></audio>

```js
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let k = 0
    for(num of nums){
        if(num !== val){
            nums[k++]=num
        }
    }
    return k
};
```

