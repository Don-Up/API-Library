## [165. remove characters | BFE.dev - prepare for Front-End job interviews.](https://bigfrontend.dev/problem/remove-characters)

这道题要求实现一个函数 `removeChars`，用于从只包含字符 `a`、`b` 和 `c` 的字符串中，移除所有的字符 `b` 和子字符串 `ac`。输入是一个字符串 `input`，输出是移除所有符合条件的字符或子字符串后的字符串。

解题方案使用了栈结构来处理字符串逐字符遍历的逻辑。具体来说，遍历字符串的每个字符时：1）如果当前字符是 `c` 且栈顶元素是 `a`，说明形成了 `ac` 子字符串，因此将栈顶的 `a` 出栈，不将 `c` 入栈，从而移除了 `ac`；2）如果当前字符是 `b`，直接跳过，不入栈；3）其他情况下，将当前字符入栈。通过栈的特性，能够有效处理相邻字符关系，最终栈中保留的就是移除所有 `b` 和 `ac` 后的字符。最后将栈中的字符拼接成字符串返回。时间复杂度为 O(n)，因为遍历字符串一次且每个字符的栈操作是 O(1)；空间复杂度为 O(n)，用于存储栈。此方法高效且逻辑清晰，适用于处理类似的字符匹配和移除问题。

```js
function removeChars(input) {
    const stack = []

    for (let i = 0; i < input.length; i++) {
        const character = input[i]
        if (stack.length && character === 'c' && stack[stack.length - 1] === 'a') {
        	stack.pop()
        } else if (character !== 'b') {
        	stack.push(character)
        }
    }

    return stack.join('')
}
```

