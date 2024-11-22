### jest.useFakeTimers()

- **`jest.useFakeTimers()`**: Replaces real timers with mock timers, allowing you to control and manipulate time-based functions like `setTimeout`, `setInterval`, and `Date`.

- <audio src="../../../../Downloads/__`jest.useFake.mp3"></audio>

> **`jest.useFakeTimers()`**：用模拟计时器替换真实计时器，允许控制和操作诸如 `setTimeout`、`setInterval` 和 `Date` 等基于时间的函数。
>
> <audio src="../../../../Downloads/`jest.useFakeTi.mp3"></audio>

```js
test('using fake timers to test setTimeout', () => {
  jest.useFakeTimers();  // Activate fake timers
  
  const mockFunc = jest.fn();
  setTimeout(mockFunc, 1000);  // Schedule function to be called after 1 second

  jest.advanceTimersByTime(1000);  // Fast-forward time by 1 second

  expect(mockFunc).toHaveBeenCalled();  // Passes: mockFunc is called after advancing time
});
```

<audio src="../../../../Downloads/这段代码展示了如何使用 Jes (2).mp3"></audio>

`jest.useFakeTimers()` is useful for testing time-related code, as you can control the timing without waiting for real time to pass.