### expect().toContain()

- **`expect().toContain()`**: Asserts that an array or string contains a specific item or substring. Useful for checking if arrays include elements or if strings contain substrings.

> **`expect().toContain()`**：断言数组或字符串包含指定的元素或子字符串，常用于检查数组是否包含特定元素或字符串是否包含子字符串。

```js
test('checks if array contains an item', () => {
  const fruits = ['apple', 'banana', 'orange'];
  
  expect(fruits).toContain('banana');  // Passes: 'banana' is in the array
});

test('checks if string contains a substring', () => {
  const phrase = 'Hello, world!';
  
  expect(phrase).toContain('world');   // Passes: 'world' is in the string
});
```

`expect().toContain()` is helpful for validating array elements or verifying substring presence in strings.