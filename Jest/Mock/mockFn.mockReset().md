### mockFn.mockReset()

- **`mockFn.mockReset()`**: Resets all information stored in the mock function (call count, arguments, results) and also removes any custom implementations or return values.

- <audio src="C:\Users\10691\Downloads\__`mockFn.mockR (1).mp3"></audio>

> **`mockFn.mockReset()`**：重置模拟函数的所有信息（调用次数、参数、结果），并移除任何自定义实现或返回值。
>
> <audio src="C:\Users\10691\Downloads\`mockFn.mockRes.mp3"></audio>

```js
test('reset mock function', () => {
  const mockFunc = jest.fn().mockReturnValue(42);

  mockFunc();
  expect(mockFunc).toHaveBeenCalledTimes(1);  // Passes: called once
  expect(mockFunc()).toBe(42);                // Passes: returns 42

  mockFunc.mockReset();  // Resets call history and implementation

  expect(mockFunc).not.toHaveBeenCalled();    // Passes: call history is reset
  expect(mockFunc()).toBeUndefined();         // Passes: returns undefined (default behavior after reset)
});
```

<audio src="C:\Users\10691\Downloads\这段代码演示了如何使用 Jes.mp3"></audio>

`mockFn.mockReset()` is useful for resetting both the **call history** and the **mock’s implementation**, ensuring a clean slate for subsequent tests.

<audio src="C:\Users\10691\Downloads\`mockFn.mockRes (1).mp3"></audio>

