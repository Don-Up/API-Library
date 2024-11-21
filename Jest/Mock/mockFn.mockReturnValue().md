### mockFn.mockReturnValue()

- **`mockFn.mockReturnValue()`**: Configures the mock function to always return a specific value whenever it is called.

> **`mockFn.mockReturnValue()`**：将模拟函数配置为每次调用时始终返回指定的值。

```js
test('mock function returns a specific value', () => {
  const mockFunc = jest.fn().mockReturnValue(42);  // Always returns 42

  expect(mockFunc()).toBe(42);  // Passes: mockFunc returns 42
  expect(mockFunc()).toBe(42);  // Passes: mockFunc still returns 42
});
```

`mockFn.mockReturnValue()` is useful for simulating a consistent return value from a mock function in tests.