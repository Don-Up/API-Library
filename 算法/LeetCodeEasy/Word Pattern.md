## [290. 单词规律 - 力扣（LeetCode）](https://leetcode.cn/problems/word-pattern/?envType=study-plan-v2&envId=top-interview-150)

这道题要求判断一个字符串 s 是否遵循一个给定的模式 pattern。这里的“遵循”指的是，模式中的每个字符与字符串中的单词之间必须存在一一对应的双射关系，即每个字符只能映射到一个唯一的单词，每个单词也只能映射到一个唯一的字符。函数 wordPattern 接收两个参数：字符串 pattern 和字符串 s，返回一个布尔值，表明 s*(dog cat cat dog)* 是否符合 pattern*(abba)*。

<audio src="..\..\mp3\这道题要求判断一个字符串 s .mp3"></audio>

```js
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const sArray = s.split(" ")
    if(sArray.length !== pattern.length){
        return false
    }
    const hashTable = {}
    const addedSElements = []
    for (let i = 0; i < pattern.length; i++) {
        if(!hashTable[pattern[i]]){
            if(addedSElements.includes(sArray[i])){
                return false
            } else {
                hashTable[pattern[i]] = sArray[i]
                addedSElements.push(sArray[i])
            }
        } else {
            if(hashTable[pattern[i]] !== sArray[i]){
                return false
            }
        }
    }
    return true
};
```

<audio src="..\..\mp3\解题方案通过哈希表和数组实现双.mp3"></audio>