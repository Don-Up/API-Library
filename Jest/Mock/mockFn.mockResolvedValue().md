### mockFn.mockResolvedValue()

- **`mockFn.mockResolvedValue()`**: Configures the mock function to return a resolved promise with a specific value. Useful for simulating async functions.

> **`mockFn.mockResolvedValue()`**：将模拟函数配置为返回一个解析为指定值的 promise，适用于模拟异步函数。

```js
test('mock async function resolves with specific value', async () => {
  const mockFunc = jest.fn().mockResolvedValue('Success');  // Always resolves with 'Success'

  await expect(mockFunc()).resolves.toBe('Success');  // Passes: mockFunc resolves to 'Success'
});
```

`mockFn.mockResolvedValue()` is useful for testing async functions that return a resolved promise with a predetermined value.