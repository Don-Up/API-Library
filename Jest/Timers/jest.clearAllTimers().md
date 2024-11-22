### jest.clearAllTimers()

- **`jest.clearAllTimers()`**: Clears all active timers (e.g., `setTimeout`, `setInterval`) that have been scheduled, preventing them from executing.

- <audio src="../../../../Downloads/`jest.clearAllT (1).mp3"></audio>

> **`jest.clearAllTimers()`**：清除所有已调度的计时器（如 `setTimeout` 和 `setInterval`），防止它们执行。
>
> <audio src="../../../../Downloads/`jest.clearAllT.mp3"></audio>

```js
test('clears all scheduled timers', () => {
  jest.useFakeTimers();  // Activate fake timers

  const mockFunc = jest.fn();
  setTimeout(mockFunc, 1000);  // Schedule function to be called after 1 second

  jest.clearAllTimers();  // Clears all timers before they run

  jest.advanceTimersByTime(1000);  // Advance time by 1 second
  expect(mockFunc).not.toHaveBeenCalled();  // Passes: mockFunc was never called
});
```

<audio src="../../../../Downloads/这段代码展示了如何使用`jes.mp3"></audio>

`jest.clearAllTimers()` is useful for canceling all pending timers, ensuring they won't execute during the test.