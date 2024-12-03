## [242. 有效的字母异位词 - 力扣（LeetCode）](https://leetcode.cn/problems/valid-anagram/?envType=study-plan-v2&envId=top-interview-150)

这道题要求判断两个字符串 s 和 t 是否是字母异位词。字母异位词的定义是两个字符串包含相同的字符及其相同的频次，但字符顺序可以不同。例如，"anagram" 和 "nagaram" 是异位词，而 "rat" 和 "car" 则不是。函数 isAnagram 输入两个字符串 s 和 t，返回一个布尔值，true 表示它们是异位词，false 表示不是。

<audio src="C:\Users\10691\Downloads\这道题要求判断两个字符串 s  (1).mp3"></audio>

```js
/**
 * Valid Anagram
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false
    const table = {}
    for(let char of s){
        if(!table[char]){
            table[char] = 1
        } else {
            table[char]++
        }
    }

    for(let char of t){
        if(!table[char]){
            return false
        } else {
            table[char]--
        }
    }

    return true 
};
```

<audio src="C:\Users\10691\Downloads\解题方案通过哈希表记录字符频次.mp3"></audio>