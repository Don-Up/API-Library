## [141. implement btoa() | BFE.dev - prepare for Front-End job interviews.](https://bigfrontend.dev/problem/implement-btoa)

这道题要求实现一个自定义的 `myBtoa` 函数，将输入的二进制字符串（由 ASCII 字符组成）转为 Base64 编码字符串。Base64 编码的规则是将输入字符串按照每 3 个字节（24 位）分组，每组分为 4 个 6 位的块（每个块对应一个 Base64 字符）。不足 3 个字节时，使用 `=` 进行填充，最终生成只包含 `A-Z`、`a-z`、`0-9`、`+`、`/` 和 `=` 的字符串。输入是一个有效的 ASCII 字符串，输出是其 Base64 编码后的字符串。

解题方案如下：首先，定义 Base64 对应的字符表 `base64table`，用于将 6 位二进制块映射为 Base64 字符。然后，将输入字符串每次切分 3 个字符作为一组（24 位），对于每组字符，通过 `charCodeAt` 获取每个字符的 ASCII 值，并将其转换为 8 位二进制字符串，拼接成 24 位的二进制数据。接着，将这 24 位数据分割为 4 个 6 位的块，每个块通过 `parseInt` 转为整数，再从 `base64table` 中找到对应的字符。对于不足 3 字节的组，用 `=` 填充至 4 个 Base64 字符。最后，将每组编码后的字符拼接成最终结果。整个过程时间复杂度为 O(n)，其中 `n` 是输入字符串的长度，因为每个字符都被访问一次。这种实现严格按照 Base64 编码规则，逻辑清晰，且无依赖于内置的 `btoa` 方法。

```js
/**
* @param {string} str - binary string
* @returns {string}
*/
function myBtoa(str) {
  let result = '';
  const base64table = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  // keep slicing by 3 character
  while (str.length > 0) {
    const buffer = [];
    const first3 = str.slice(0, 3);
    str = str.slice(3);
    let bits = '';
    for (let char of first3) {
      bits += char.charCodeAt(0).toString(2).padStart(8, '0');
    }
    // keep slicing 6 bits
    while (bits.length > 0) {
      const first6 = bits.slice(0, 6).padEnd(6, '0');
      bits = bits.slice(6);
      const char = base64table[parseInt(first6, 2)];
      buffer.push(char);
    }
    // add the padding
    if (buffer.length < 4) {
      buffer.push('='.repeat(4 - buffer.length));
    }
    result += buffer.join('');
  }
  return result;
}
```

