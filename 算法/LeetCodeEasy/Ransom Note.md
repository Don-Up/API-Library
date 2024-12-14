## [383. 赎金信 - 力扣（LeetCode）](https://leetcode.cn/problems/ransom-note/description/?envType=study-plan-v2&envId=top-interview-150)

这道题要求判断字符串 ransomNote 是否可以通过字符串 magazine 中的字母构造而成。每个字母在 magazine 中只能使用一次，因此需要检查 ransomNote 中每个字母是否在 magazine 中存在足够的数量。

<audio src="..\..\mp3\这道题要求判断字符串 rans.mp3"></audio>

```js
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = function(ransomNote, magazine) {
    const hashTable = {}

    for (const letter of magazine) {
        if(hashTable[letter]){
            hashTable[letter]++
        } else {
            hashTable[letter] = 1
        }
    }

    for (const letter of ransomNote) {
        if(!hashTable[letter]){
            return false
        } else {
            hashTable[letter]--
        }
    }

    return true; 
};
```

<audio src="..\..\mp3\解题方案通过使用哈希表（对象）.mp3"></audio>