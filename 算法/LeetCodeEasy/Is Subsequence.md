## [392. 判断子序列 - 力扣（LeetCode）](https://leetcode.cn/problems/is-subsequence/description/?envType=study-plan-v2&envId=top-interview-150)

这道题要求判断字符串 s 是否为字符串 t 的子序列。子序列的定义是通过从原字符串中删除某些字符（可以不删除任何字符）而形成的新字符串，且剩余字符的相对顺序必须保持一致。例如，"abc" 是 "ahbgdc" 的子序列，而 "aec" 则不是。函数接收两个字符串 s 和 t 作为输入，并返回一个布尔值，表示 s 是否是 t 的子序列。

<audio src="..\..\mp3\这道题要求判断字符串 s 是否.mp3"></audio>

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

<audio src="..\..\mp3\解题方案采用了双指针的思想，利.mp3"></audio>

<audio src="../..\..\mp3\Define two poin.mp3"></audio>

### 修正前后的对比

1. **问题 1**: *Define double points: using a pointer `sIndex` to iterate over `s`, the other implicit pointer iterates over each character in `t` by using `for-of`.*
    **问题描述**: 术语不准确，“double points” 应改为“双指针”，且句式略显生硬。
    **修正前**: *Define double points: using a pointer `sIndex` to iterate over `s`, the other implicit pointer iterates over each character in `t` by using `for-of`.*
    **修正后**: *Define two pointers: use a pointer `sIndex` to iterate over `s` and an implicit pointer to iterate through each character in `t` using a `for-of` loop.*
2. **问题 2**: *If the current character equals `s[sIndex]`, meaning the matched character is found, `sIndex` move a step forward.*
    **问题描述**: 时态错误，“move” 应为第三人称单数形式。
    **修正前**: *If the current character equals `s[sIndex]`, meaning the matched character is found, `sIndex` move a step forward.*
    **修正后**: *If the current character equals `s[sIndex]`, meaning the matched character is found, `sIndex` moves a step forward.*
3. **问题 3**: *When the loop is over, `sIndex` still doesn't reach the end of `s`, meaning there are unmatched characters in `s`, thus returning `false`.*
    **问题描述**: 句式略显繁琐，逻辑更清晰的表达方式是分解原因与结果。
    **修正前**: *When the loop is over, `sIndex` still doesn't reach the end of `s`, meaning there are unmatched characters in `s`, thus returning `false`.*
    **修正后**: *If the loop completes and `sIndex` hasn't reached the end of `s`, it means there are unmatched characters in `s`. In this case, return `false`.*
4. **问题 4**: *Just need to perform traversal once.*
    **问题描述**: 句式不完整，应改为正式完整表达。
    **修正前**: *Just need to perform traversal once.*
    **修正后**: *This requires only a single traversal.*

------

### 修正后的版本

1. **定义双指针**：
   使用一个指针 `sIndex` 来遍历字符串 `s`，另一个隐式指针遍历字符串 `t` 的每个字符（通过 for-of 循环实现）。
2. **遍历 `t`**：
   在循环中，对 `t` 的每个字符进行检查：
   - 如果当前字符等于 `s[sIndex]`，说明找到匹配的字符，`sIndex` 向前移动一位。
   - 如果 `sIndex` 到达了字符串 `s` 的末尾，说明 `s` 的所有字符在 `t` 中都能按照顺序找到，此时返回 `true`。
3. **循环结束后检查**：
   如果循环结束时 `sIndex` 仍未到达 `s` 的末尾，说明 `s` 中还有未匹配的字符，因此返回 `false`。

**算法复杂度**：

- 时间复杂度：O(n)，其中 n 是字符串 `t` 的长度。只需一次遍历。
- 空间复杂度：O(1)，不需要额外的存储空间。

1. **Define two pointers**: Use a pointer `sIndex` to iterate over `s` and an implicit pointer to iterate through each character in `t` using a `for-of` loop.
2. **Traverse `t`**:
    In the loop, check each character in `t`:
   1. If the current character equals `s[sIndex]`, meaning the matched character is found, `sIndex` moves a step forward.
   2. If `sIndex` reaches the end of `s`, it means all characters of `s` can be found in `t`. In this case, return `true`.
3. **Check after the loop**:
    If the loop completes and `sIndex` hasn't reached the end of `s`, it means there are unmatched characters in `s`. In this case, return `false`.

**Algorithm Complexity**:

- *Time complexity*: O(n), where n is the length of `t`. This requires only a single traversal.
- *Space complexity*: O(1), as no extra storage space is needed.





