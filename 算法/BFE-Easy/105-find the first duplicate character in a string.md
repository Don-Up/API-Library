## [105. find the first duplicate character in a string | BFE.dev - prepare for Front-End job interviews.](https://bigfrontend.dev/problem/find-the-first-duplicate-character-in-a-string)

这道题要求编写一个函数 `firstDuplicate`，用于查找字符串中第一个重复出现的字符。如果字符串中没有重复的字符，则返回 `null`。输入是一个字符串 `str`，输出是第一个重复字符（字符串类型）或者 `null`。

解题方案使用了一个哈希表（对象 `obj`）来记录每个字符是否已经出现过。遍历字符串的每个字符时，检查该字符是否已经存在于哈希表中：如果存在，说明该字符是第一个重复出现的字符，立即返回；如果不存在，将该字符记录到哈希表中，标记为已出现。遍历结束后，如果没有遇到重复字符，则返回 `null`。这种方法的时间复杂度为 O(n)，因为遍历字符串只需一次；空间复杂度为 O(k)，其中 `k` 是字符集的大小（最坏情况下所有字符都需要记录）。这种方法已是最优解，进一步优化的空间复杂度通常需要以时间换空间（如排序或嵌套循环），反而不如当前方法高效。

```js
/**
 * @param {string} str
 * @return {string | null}
 */
function firstDuplicate(str) {
  const obj = {};
  for(let i of str){
    if(obj[i]) return i;
    obj[i] = true;
  }
  return null
}
```

