### mockFn.mockImplementation()

- **`mockFn.mockImplementation()`**: Configures the mock function to use a custom implementation when it is called. This allows you to define specific behavior for the mock.

> **`mockFn.mockImplementation()`**：配置模拟函数使用自定义实现，当函数被调用时执行指定的行为。

```js
test('mock function with custom implementation', () => {
  const mockFunc = jest.fn().mockImplementation((x) => x * 2);  // Doubles the input

  expect(mockFunc(5)).toBe(10);  // Passes: 5 * 2 = 10
  expect(mockFunc(3)).toBe(6);   // Passes: 3 * 2 = 6
});
```

`mockFn.mockImplementation()` is useful for defining custom behavior in mock functions, especially when different logic is needed during testing.