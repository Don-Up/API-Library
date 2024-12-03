## [145. most frequently occurring character | BFE.dev - prepare for Front-End job interviews.](https://bigfrontend.dev/problem/most-frequently-occurring-character)

这道题要求实现一个函数 `count`，用于找出字符串中出现频率最高的字符。如果存在多个频率相同的字符，则返回这些字符组成的数组；否则返回单个字符。输入是一个非空字符串，输出是一个字符或字符数组。

解题方案分为两步：首先，遍历字符串，用一个 `Map` 数据结构记录每个字符的出现次数（键为字符，值为频率）。接着，通过 `Math.max` 找出 `Map` 中最大的频率值，并再次遍历 `Map`，将所有频率等于最大值的字符加入结果数组。如果结果数组中只有一个元素，则返回该元素；否则返回整个数组。时间复杂度为 O(n)，因为需要两次遍历字符串（一次构建频率表，一次查找最大频率和对应字符）；空间复杂度为 O(k)，其中 `k` 是字符串中不同字符的数量，因为 `Map` 的大小与不同字符的总数有关。这种实现逻辑清晰，代码简洁，性能高效，适用于解决字符频率统计问题。

```js
function count(str){
  const map = new Map();
  const result = [];
  for(const char of str) {
    map.set(char, (map.get(char) || 0) + 1);
  }
  const max = Math.max(...map.values());
  for(const [key, value] of map) {
    if(value === max) {
      result.push(key);
    }
  }
  return result.length === 1 ? result[0] : result;
}
```

