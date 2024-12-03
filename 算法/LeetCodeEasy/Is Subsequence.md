## [392. 判断子序列 - 力扣（LeetCode）](https://leetcode.cn/problems/is-subsequence/description/?envType=study-plan-v2&envId=top-interview-150)

这道题要求判断字符串 s 是否为字符串 t 的子序列。子序列的定义是通过从原字符串中删除某些字符（可以不删除任何字符）而形成的新字符串，且剩余字符的相对顺序必须保持一致。例如，"abc" 是 "ahbgdc" 的子序列，而 "aec" 则不是。函数接收两个字符串 s 和 t 作为输入，并返回一个布尔值，表示 s 是否是 t 的子序列。

<audio src="C:\Users\10691\Downloads\这道题要求判断字符串 s 是否.mp3"></audio>

```js
/**
* @param {string} s
* @param {string} t
* @return {boolean}
* s = "abc", t = "ahbgdc"
*/
var isSubsequence = function(s, t) {
  let sIndex = 0;
  
  // Traverse through string `t`
  for (let char of t) {
    if (char === s[sIndex]) {
      sIndex++;  // Move to the next character in `s`
    }
    // If we've matched all characters in `s`, return true
    if (sIndex === s.length) {
      return true;
    }
  }
  
  // If we reach the end of `t` and haven't matched all characters, return false
  return sIndex === s.length;
};
```

<audio src="C:\Users\10691\Downloads\解题方案采用了双指针的思想，利.mp3"></audio>