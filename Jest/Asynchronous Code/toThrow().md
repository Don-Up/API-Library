### expect().toThrow()

- **`expect().toThrow()`**: Asserts that a function throws an error when called. You can check for a specific error type, message, or pattern.

> **`expect().toThrow()`**：断言函数执行时抛出错误，可以检查特定的错误类型、消息或模式。

```js
test('checks if function throws an error', () => {
  const throwError = () => { throw new Error('Something went wrong'); };
  
  expect(throwError).toThrow();                // Passes: function throws an error
  expect(throwError).toThrow('Something went wrong');  // Passes: specific error message
});
```

`expect().toThrow()` is useful for testing error handling, ensuring that a function throws an expected error.