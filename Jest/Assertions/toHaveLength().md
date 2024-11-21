### expect().toHaveLength()

- **`expect().toHaveLength()`**: Asserts that an object (like an array, string, or iterable) has a specific length.

> **`expect().toHaveLength()`**：断言对象（如数组、字符串或可迭代对象）具有特定长度。

```js
test('checks array length', () => {
  const fruits = ['apple', 'banana', 'orange'];
  
  expect(fruits).toHaveLength(3);  // Passes: array has 3 elements
});

test('checks string length', () => {
  const word = 'hello';
  
  expect(word).toHaveLength(5);    // Passes: string has 5 characters
});
```

`expect().toHaveLength()` is useful for validating the length of arrays, strings, or other iterable objects.