## [87. longest substring with unique characters | BFE.dev - prepare for Front-End job interviews.](https://bigfrontend.dev/problem/longest-substring-with-unique-characters)

这道题要求找到一个字符串中最长的无重复字符的子串。如果存在多个最长子串，返回任意一个即可。输入为一个字符串 `str`，输出为一个字符串，表示最长的无重复字符子串。

<audio src="C:\Users\10691\Downloads\这道题要求找到一个字符串中最长.mp3"></audio>

```js
/**
 * @param {string} str
 * @return {string}
 */
function longestUniqueSubstr(string) {
  // Steps:
  // 1. Initiate hashtable which will be mapping letters to their last seen indices
  // 2. Initiate variable storing longest string indices
  // 3. Initiate variable storing startIdx of non-duplicated string
  // 4. For loop string
  // 5. If char was already seen, update startIdx to next letter after last seen to exclude it, can't be lower index than current startIndex 
  // as it would mean that there are other duplicates -> look at c here: clementiscap
  // 6. if current longest smaller than new longest, update it
  // 7. update hash table with new letter to index mapping
  // 8. return substring
  const lastSeen = {}
  let longest = [ 0, 1]
  let startIdx = 0
  for(let i = 0; i < string.length; i++) {
    const char = string[i]
    if(char in lastSeen && lastSeen[char] + 1 > startIdx) {
      startIdx = lastSeen[char] + 1
    }
    if(longest[1] - longest[0] < i + 1 - startIdx) {
      longest = [startIdx, i + 1]
    }
    lastSeen[char] = i
  }
  return string.slice(longest[0], longest[1])
}
```

<audio src="C:\Users\10691\Downloads\解决方案使用滑动窗口和哈希表的.mp3"></audio>