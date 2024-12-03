## [121. A number sequence | BFE.dev - prepare for Front-End job interviews.](https://bigfrontend.dev/problem/A-number-sequence)

这道题要求实现一个函数 `getNthNum(n)`，用于生成并返回“外观和描述数列”（Look-and-say sequence）的第 `n` 项。数列从 `'1'` 开始，每一项通过描述上一项的数字组成：例如，第一项是 `'1'`，描述为“一个 1”，所以第二项是 `'11'`；第二项描述为“两个 1”，所以第三项是 `'21'`；依次类推。输入是一个正整数 `n`，表示需要返回数列的第 `n` 项，输出是一个字符串。

解题方案采用迭代的方式生成数列。初始值设为字符串 `'1'`，然后进行 `n-1` 次迭代，每次根据当前字符串生成下一项。生成规则是按字符遍历当前字符串，用一个计数器 `count` 统计连续相同字符的数量。当遇到不同字符或字符串结束时，将 `count` 和当前字符拼接到新字符串中，然后重置计数器。完成本次迭代后，用新字符串更新当前字符串，继续下一轮迭代。最终返回生成的第 `n` 项字符串。该方法的时间复杂度取决于字符串长度和迭代次数。由于字符串长度随着迭代呈指数增长，总时间复杂度大约为 O(2^n)。尽管数列增长较快，算法本身逻辑清晰且易于实现，适用于中小范围的输入。

```js
/**
 * @param {number} n - integer
 * @returns {string}
 */
function getNthNum(n) {
  let str = "1";
  n -= 1;
  while (n--) {
    let strNum = "";
    for (let i = 0; i < str.length; i++) {
      let count = 1;
      while (str[i] === str[i+1] && i < str.length) {
        count += 1;
        i++;
      }
      strNum += count + str[i];
    }
    str = strNum;
  }
  return str;
}
```

