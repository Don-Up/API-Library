### expect().toBe()

- **`expect().toBe()`**: Asserts that the received value is strictly equal (using `===`) to the expected value. It checks both the value and the type.

> **`expect().toBe()`**：断言接收到的值严格等于（使用 `===`）预期值，检查值和类型是否相同。

```js
test('checks strict equality', () => {
  const result = 5;
  expect(result).toBe(5);  // Passes because both value and type match
  expect(result).not.toBe('5');  // Fails because the type is different ('5' is a string)
});
```

`expect().toBe()` is ideal for primitive values like numbers or strings, ensuring strict equality.