### mockFn.mockResolvedValue()

- **`mockFn.mockResolvedValue()`**: Configures the mock function to return a resolved promise with a specific value. Useful for simulating async functions.

- <audio src="C:\Users\10691\Downloads\__`mockFn.mockR (2).mp3"></audio>

> **`mockFn.mockResolvedValue()`**：将模拟函数配置为返回一个解析为指定值的 promise，适用于模拟异步函数。
>
> <audio src="C:\Users\10691\Downloads\`mockFn.mockRes (2).mp3"></audio>

```js
test('mock async function resolves with specific value', async () => {
  const mockFunc = jest.fn().mockResolvedValue('Success');  // Always resolves with 'Success'

  await expect(mockFunc()).resolves.toBe('Success');  // Passes: mockFunc resolves to 'Success'
});
```

<audio src="C:\Users\10691\Downloads\这段代码演示了如何使用 Jes (1).mp3"></audio>

`mockFn.mockResolvedValue()` is useful for testing async functions that return a resolved promise with a **predetermined** value.

<audio src="C:\Users\10691\Downloads\`mockFn.mockRes (3).mp3"></audio>