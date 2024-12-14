## [88. 合并两个有序数组 - 力扣（LeetCode）](https://leetcode.cn/problems/merge-sorted-array/description/?envType=study-plan-v2&envId=top-interview-150)

这道题要求编写一个函数isPalindrome，用于判断输入的字符串s是否是回文。回文的定义是正读和反读都相同。在判断时，需要忽略字符串中的非字母的数字字符，同时对字母不区分大小写。最终返回一个布尔值，表明字符串是否为回文。

<audio src="..\..\mp3\这道题要求编写一个函数isPa.mp3"></audio>

```js
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    // AUDIO 1
    let processedS = []
    for(let char of s){
        if(/^[a-zA-Z]$/.test(char) || !isNaN(parseInt(char))){
            processedS.push(char.toLowerCase())
        }
    }
    // AUDIO 2
    let start = 0
    let end = processedS.length-1
    while (start < end){
        if(processedS[start]!==processedS[end]){
            return false
        }
        start++
        end--
    }
    return true
};
```

<audio src="..\..\mp3\解题方案的核心是将字符串预处理.mp3"></audio>

<audio src="..\..\mp3\接着，使用双指针方法从数组两端.mp3"></audio>