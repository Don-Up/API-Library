### mockFn.mockRejectedValue()

- **`mockFn.mockRejectedValue()`**: Configures the mock function to return a rejected promise with a specific error or value. Useful for simulating async functions that fail.

> **`mockFn.mockRejectedValue()`**：将模拟函数配置为返回一个被拒绝的 promise，且包含特定的错误或值，适用于模拟失败的异步函数。

```js
test('mock async function rejects with specific error', async () => {
  const mockFunc = jest.fn().mockRejectedValue(new Error('Failure'));  // Always rejects with 'Failure'

  await expect(mockFunc()).rejects.toThrow('Failure');  // Passes: mockFunc rejects with the error 'Failure'
});
```

`mockFn.mockRejectedValue()` is useful for testing async functions that fail and return a rejected promise with a specified error or value.