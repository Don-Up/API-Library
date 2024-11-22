### mockFn.mockClear()

- **`mockFn.mockClear()`**: Resets all information stored in the mock function, such as call count, arguments, and results, but keeps the mock’s implementation intact.

- <audio src="C:\Users\10691\Downloads\__`mockFn.mockC.mp3"></audio>

> **`mockFn.mockClear()`**：重置模拟函数的所有信息，如调用次数、参数和结果，但保留其实现。
>
> <audio src="C:\Users\10691\Downloads\`mockFn.mockCle.mp3"></audio>

```js
test('clear mock function call history', () => {
  const mockFunc = jest.fn();

  mockFunc('first call');
  expect(mockFunc).toHaveBeenCalledTimes(1);  // Passes: called once

  mockFunc.mockClear();  // Clears call history

  expect(mockFunc).not.toHaveBeenCalled();  // Passes: call history is cleared
});
```

`mockFn.mockClear()` is useful for resetting the call history of a mock function between tests without changing its implementation.