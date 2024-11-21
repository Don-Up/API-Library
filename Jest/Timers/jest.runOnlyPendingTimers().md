### jest.runOnlyPendingTimers()

- **`jest.runOnlyPendingTimers()`**: Executes only the currently pending timers (e.g., `setTimeout`, `setInterval`) without advancing the clock, leaving future timers intact.

> **`jest.runOnlyPendingTimers()`**：仅执行当前待处理的计时器（如 `setTimeout` 和 `setInterval`），而不推进时间，未来的计时器保持不变。

```js
test('run only pending timers', () => {
  jest.useFakeTimers();  // Activate fake timers

  const mockFunc = jest.fn();
  setTimeout(mockFunc, 1000);  // Schedule function to be called after 1 second
  setTimeout(mockFunc, 2000);  // Another one for 2 seconds later

  jest.runOnlyPendingTimers();  // Runs the first pending timer (1 second)

  expect(mockFunc).toHaveBeenCalledTimes(1);  // Passes: first timer executed
});
```

`jest.runOnlyPendingTimers()` is useful for running currently scheduled timers without affecting those set for future execution.