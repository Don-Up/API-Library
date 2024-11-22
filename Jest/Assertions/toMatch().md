### expect().toMatch()

- **`expect().toMatch()`**: Asserts that a string matches a given regular expression or substring. It’s useful for checking patterns or partial matches within strings.

> **`expect().toMatch()`**：断言字符串匹配给定的**正则表达式**或**子字符串**，适合检查字符串中的**模式**或**部分**匹配。

```js
test('checks string match', () => {
  const message = 'Hello, Jest!';
  
  expect(message).toMatch(/Jest/);  // Passes: 'Jest' is in the string
  expect(message).toMatch('Hello'); // Passes: 'Hello' is a substring
});
```

`expect().toMatch()` is ideal for validating patterns, substrings, or regular expressions in strings.