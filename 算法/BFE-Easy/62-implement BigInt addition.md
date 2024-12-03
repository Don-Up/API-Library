## [62. implement BigInt addition | BFE.dev - prepare for Front-End job interviews.](https://bigfrontend.dev/problem/add-BigInt-string)

这道题要求实现一个大整数相加的函数 `add`，输入是两个非负整数的字符串形式，输出是它们的和的字符串表示。不能直接使用 JavaScript 的 `BigInt`，需要通过手动模拟逐位相加的方式来实现大整数的加法运算。输入参数为两个字符串 `num1` 和 `num2`，返回值是表示相加结果的字符串。

<audio src="C:\Users\10691\Downloads\这道题要求实现一个大整数相加的.mp3"></audio>

```js

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
function add(num1, num2) {
  let a = num1.split('')
  let b = num2.split('')
  let carry = 0
  let result = ''
  while (a.length || b.length || carry) {
    const sum = parseInt(a.pop()||0) + parseInt(b.pop()||0) + carry
    carry = Math.floor(sum / 10)
    result = `${sum % 10}${result}`
  }
  return result
}
```

<audio src="C:\Users\10691\Downloads\解决方案通过模拟手动竖式加法来.mp3"></audio>