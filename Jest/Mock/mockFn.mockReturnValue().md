### mockFn.mockReturnValue()

- **`mockFn.mockReturnValue()`**: Configures the mock function to always return a specific value whenever it is called.

- <audio src="..\..\mp3\__`mockFn.mockR (4).mp3"></audio>

> **`mockFn.mockReturnValue()`**：将模拟函数配置为每次调用时始终返回指定的值。
>
> <audio src="..\..\mp3\mockFn.mockRetu.mp3"></audio>

```js
test('mock function returns a specific value', () => {
  const mockFunc = jest.fn().mockReturnValue(42);  // Always returns 42

  expect(mockFunc()).toBe(42);  // Passes: mockFunc returns 42
  expect(mockFunc()).toBe(42);  // Passes: mockFunc still returns 42
});
```

<audio src="..\..\mp3\这段代码演示了如何使用 Jes (2).mp3"></audio>

`mockFn.mockReturnValue()` is useful for simulating a consistent return value from a mock function in tests.

<audio src="..\..\mp3\`mockFn.mockRet.mp3"></audio>