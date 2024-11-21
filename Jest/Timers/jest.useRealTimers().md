### jest.useRealTimers()

- **`jest.useRealTimers()`**: Switches from fake timers back to real timers, allowing asynchronous code to run normally without Jest's timer mocks.

> **`jest.useRealTimers()`**：从模拟计时器切换回真实计时器，允许异步代码正常运行，而不使用 Jest 的计时器模拟。

```js
test('switch back to real timers', () => {
  jest.useFakeTimers();  // Activate fake timers

  const mockFunc = jest.fn();
  setTimeout(mockFunc, 1000);

  jest.useRealTimers();  // Switch back to real timers

  // Now the test waits for real time to pass
  setTimeout(() => {
    expect(mockFunc).toHaveBeenCalled();  // This will run after 1 second in real time
  }, 1000);
});
```

`jest.useRealTimers()` is useful when you need to temporarily use real time after using fake timers, especially for certain asynchronous code.