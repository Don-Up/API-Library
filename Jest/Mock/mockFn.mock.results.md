### mockFn.mock.results

- **`mockFn.mock.results`**: An array that stores the results of each call to the mock function. Each entry contains data about whether the function returned normally or threw an error, and the result value.

> **`mockFn.mock.results`**：一个数组，存储每次调用模拟函数的结果。每个条目包含函数是正常返回还是抛出错误，以及返回的值。

```js
test('tracks mock function results', () => {
  const mockFunc = jest.fn()
    .mockReturnValueOnce(10)
    .mockReturnValueOnce(20);

  mockFunc();  // First call, returns 10
  mockFunc();  // Second call, returns 20

  expect(mockFunc.mock.results[0].value).toBe(10);  // Passes: first call returned 10
  expect(mockFunc.mock.results[1].value).toBe(20);  // Passes: second call returned 20
});
```

`mockFn.mock.results` is useful for tracking the return values or errors from each invocation of a mock function.