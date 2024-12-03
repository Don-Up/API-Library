## [163. integer to roman numerals | BFE.dev - prepare for Front-End job interviews.](https://bigfrontend.dev/problem/integer-to-roman)

这道题要求实现一个函数 `integerToRoman`，将输入的整数转换为对应的罗马数字表示。罗马数字由固定的七个符号（I, V, X, L, C, D, M）和特定规则构成，其中包括减法表示法（如 4 表示为 IV 而不是 IIII）。输入是一个整数，范围在有效罗马数字表示范围内（1 到 3999），输出是一个字符串，表示该整数对应的罗马数字。

解题方案基于贪心算法，从高位到低位依次构造罗马数字。首先定义一个查找表 `lookup`，按从大到小的顺序排列所有可能的符号及其对应的数值（包括减法表示法如 CM 和 IV）。然后递归或迭代地从查找表中找到当前数字可以表示的最大符号，减去该符号对应的值并将符号添加到结果字符串中，直到输入的数字减为 0 为止。上述方法确保每次尽量用大的符号表示，从而符合罗马数字的构造规则。时间复杂度为 O(n)，其中 n 是数字大小的位数，因为查找表的长度固定；空间复杂度为 O(1)，只需要存储结果字符串和临时变量。此方法简单高效，能够正确处理所有合法输入。

```js
const lookup = [
  { symbol: 'M', value: 1000 },
  { symbol: 'CM', value: 900 },
  { symbol: 'D', value: 500 },
  { symbol: 'CD', value: 400 },
  { symbol: 'C', value: 100 },
  { symbol: 'XC', value: 90 },
  { symbol: 'L', value: 50 },
  { symbol: 'XL', value: 40 },
  { symbol: 'X', value: 10 },
  { symbol: 'IX', value: 9 },
  { symbol: 'V', value: 5 },
  { symbol: 'IV', value: 4 },
  { symbol: 'I', value: 1 },
]

/**
 * @param {number} integer
 * @returns {string} str - roman numeral string
 */
const integerToRoman = (num, res = '') => {
  if (num > 0) {
    const { symbol, value } = lookup.find(({ value }) => num >= value)
    return integerToRoman(num - value, `${res}${symbol}`)
  }
  return res
}
```

