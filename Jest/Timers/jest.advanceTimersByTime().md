### jest.advanceTimersByTime()

- **`jest.advanceTimersByTime()`**: Moves the fake timers forward by a specified amount of time, triggering any timers that would have been called during that period.

- <audio src="..\..\mp3/__`jest.advance.mp3"></audio>

> **`jest.advanceTimersByTime()`**：将模拟计时器前进指定时间，触发在该时间段内应调用的所有计时器。
>
> <audio src="..\..\mp3/`jest.advanceTi.mp3"></audio>

```js
test('advance timers by a specific time', () => {
  jest.useFakeTimers();  // Activate fake timers

  const mockFunc = jest.fn();
  setTimeout(mockFunc, 2000);  // Schedule function to be called after 2 seconds

  jest.advanceTimersByTime(1000);  // Move time forward by 1 second
  expect(mockFunc).not.toHaveBeenCalled();  // Passes: not called yet

  jest.advanceTimersByTime(1000);  // Move time forward by another 1 second
  expect(mockFunc).toHaveBeenCalled();  // Passes: called after 2 seconds
});
```

<audio src="..\..\mp3/这段代码展示了如何使用 Jes (1).mp3"></audio>

`jest.advanceTimersByTime()` is useful for testing code that depends on timers without waiting for real time to pass.