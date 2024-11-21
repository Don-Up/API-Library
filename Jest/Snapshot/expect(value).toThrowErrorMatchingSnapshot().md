### expect(value).toThrowErrorMatchingSnapshot()

- **`expect(value).toThrowErrorMatchingSnapshot()`**: Asserts that a function throws an error, capturing its error message and comparing it to a stored snapshot. If the message has changed, the test fails.

> **`expect(value).toThrowErrorMatchingSnapshot()`**：断言函数抛出错误，并捕获其错误信息，与存储的快照进行比较。如果错误信息发生变化，测试将失败。

```js
test('matches error message snapshot', () => {
  const throwError = () => {
    throw new Error('This is an error');
  };

  expect(throwError).toThrowErrorMatchingSnapshot();  // Captures and compares the error message snapshot
});
```

`expect(value).toThrowErrorMatchingSnapshot()` is useful for ensuring consistent error messages, especially when error messages are expected to remain stable over time.