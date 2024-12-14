## [205. 同构字符串 - 力扣（LeetCode）](https://leetcode.cn/problems/isomorphic-strings/?envType=study-plan-v2&envId=top-interview-150)

这道题要求判断两个字符串 s 和 t 是否是同构的。如果可以通过将字符串 s 中的字符按照一对一的映射关系替换为字符串 t 的字符，并且这种映射是唯一的且有序的, 那么这两个字符串就是同构的。例如，"egg" 和 "add" 是同构的，而 "foo" 和 "bar" 不是。

<audio src="..\..\mp3\这道题要求判断两个字符串 s .mp3"></audio>

```js
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const hashTable = {}
    const charArray = []
    for (let i = 0; i < s.length; i++) {
        if(!hashTable[s[i]]){
            if(!charArray.includes(t[i])){
                hashTable[s[i]] = t[i]
                charArray.push(t[i])
            } else {
                return false
            }
        } else {
            if(hashTable[s[i]] !== t[i]){
                return false
            }
        }
    }
    return true
};
```

<audio src="..\..\mp3\解题方案通过使用哈希表和一个数.mp3"></audio>