### jest.fn()

- **`jest.fn()`**: Creates a mock function in Jest, allowing you to track calls, arguments, return values, and more. It’s used for spying or simulating function behavior in tests.

- <audio src="C:\Users\10691\Downloads\__`jest.fn()`__.mp3"></audio>

> **`jest.fn()`**：在 Jest 中创建一个模拟函数，用于跟踪调用次数、参数、返回值等，常用于测试中的函数模拟或间谍函数。
>
> <audio src="C:\Users\10691\Downloads\`jest.fn()`：在 J.mp3"></audio>

```js
test('tracks calls to the mock function', () => {
  const mockFunc = jest.fn();  // Create a mock function

  mockFunc('hello');
  mockFunc('world');

  expect(mockFunc).toHaveBeenCalledTimes(2);  // Passes: function was called twice
  expect(mockFunc).toHaveBeenCalledWith('hello');  // Passes: first call was with 'hello'
  expect(mockFunc).toHaveBeenCalledWith('world');  // Passes: second call was with 'world'
});
```

`jest.fn()` is useful for testing how functions are called and their behavior without needing a real implementation.