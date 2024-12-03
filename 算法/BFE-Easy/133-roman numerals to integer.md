## [133. roman numerals to integer | BFE.dev - prepare for Front-End job interviews.](https://bigfrontend.dev/problem/roman-numerals-to-integer)

这道题要求实现一个函数 `romanToInteger`，将代表罗马数字的字符串转换为对应的整数。罗马数字由固定的七种符号组成，每个符号有特定的值（如 `I = 1`, `V = 5`, `X = 10` 等），并遵循特定规则：从左到右，数字按照从大到小排列；如果右侧符号的值比左侧大，则需要从总和中减去左侧符号的值（即减法规则，例如 `IV = 4`）；否则直接相加。输入是一个有效的罗马数字字符串，输出是对应的整数。

解题方案基于从右到左的遍历，结合减法规则进行计算。首先，用一个 `Map` 保存罗马字符及其对应的整数值，用于快速查找。将输入字符串反转后逐字符处理，维护一个变量 `prev` 表示上一个处理的字符值。对于每个字符，获取其对应的整数值 `value`，然后与 `prev` 比较：如果当前值大于等于 `prev`，说明是加法情况，将 `value` 加入总和；否则是减法情况，将 `value` 从总和中减去。每次更新总和后，更新 `prev` 为当前值，以便下一次比较。最终返回累加的总和。这种方法时间复杂度为 O(n)，因为只需遍历字符串一次；空间复杂度为 O(1)，因只使用了少量变量。此实现逻辑清晰，直接遵循罗马数字的规则，适合高效处理任意有效输入。

```js
/**
 * @param {string} str - roman numeral string
 * @returns {number} integer
 */
function romanToInteger(str) {
  const numerals = new Map([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ])
  
  const backwards = str.split('').reverse()
  
  let prev = 0;
  return backwards.reduce((sum, char) => {
    const value = numerals.get(char) 
    sum = sum + ((value >= prev) ? value : -value)
    prev = value
    
    return sum
  }, 0)
}
```

