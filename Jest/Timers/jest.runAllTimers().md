### jest.runAllTimers()

- **`jest.runAllTimers()`**: Executes all pending timers (e.g., `setTimeout`, `setInterval`) in the queue immediately, regardless of their delay.

- <audio src="../../../../Downloads/__`jest.runAllT.mp3"></audio>

> **`jest.runAllTimers()`**：立即执行所有等待中的计时器（如 `setTimeout` 和 `setInterval`），无论延迟时间。
>
> <audio src="../../../../Downloads/`jest.runAllTim.mp3"></audio>

```js
test('run all timers immediately', () => {
  jest.useFakeTimers();  // Activate fake timers

  const mockFunc = jest.fn();
  setTimeout(mockFunc, 1000);  // Schedule function to be called after 1 second

  jest.runAllTimers();  // Runs all timers immediately

  expect(mockFunc).toHaveBeenCalled();  // Passes: mockFunc is called immediately
});
```

<audio src="../../../../Downloads/这段代码展示了如何使用`jes (1).mp3"></audio>

`jest.runAllTimers()` is useful for fast-tracking the execution of all scheduled timers, making it easier to test time-based behavior without waiting.

