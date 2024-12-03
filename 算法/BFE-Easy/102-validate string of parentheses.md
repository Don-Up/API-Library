## [102. validate string of parentheses | BFE.dev - prepare for Front-End job interviews.](https://bigfrontend.dev/problem/validate-parenthesis)

这道题要求判断一个由括号（包括圆括号 `()`、方括号 `[]` 和花括号 `{}`）组成的字符串是否是有效的。一个字符串是有效的，当且仅当括号按正确顺序完全配对。输入是一个字符串 `str`，输出是一个布尔值，`true` 表示括号有效，`false` 表示括号无效。

解题方案使用了栈数据结构来检查括号的匹配性。首先，快速排除奇数长度的字符串，因为它们必然无法完全配对。然后初始化一个空栈和一个映射对象 `bracketMap`，将右括号映射到对应的左括号。遍历字符串中的每个字符：若是左括号（`(`、`[`、`{`），将其压入栈中；若是右括号，则检查栈顶元素是否与其匹配（通过 `bracketMap` 判断）。如果栈顶元素不匹配或栈为空，则返回 `false`（表示括号未正确配对）。遍历结束后，若栈仍不为空，说明还有未匹配的左括号，也返回 `false`；否则返回 `true`。这种方法的时间复杂度为 O(n)，因为每个字符只被入栈和出栈一次；空间复杂度为 O(n)，因为最坏情况下栈可能存储所有字符。此方法高效且容易理解，非常适合处理括号匹配问题。



```js

/**
 * @param {string} str
 * @return {boolean} 
 */
function validate(str) {
  if(str.length % 2 !== 0) return false;
  const stack = [];
  const bracketMap = {
    "}": "{",
    ")" : "(",
    "]" : "[",
  }
  for(let i=0; i<str.length; i++){
    if(["(", "[", "{"].includes(str[i])) stack.push(str[i]);
    else if(stack.pop() !== bracketMap[str[i]]) return false;
  }
  return !stack.length;
}
```

