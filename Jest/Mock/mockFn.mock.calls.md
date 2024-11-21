### mockFn.mock.calls

- **`mockFn.mock.calls`**: An array that records all the calls made to a mock function, including their arguments. Each entry is an array of arguments passed during a specific call.

> **`mockFn.mock.calls`**：一个数组，记录对模拟函数的所有调用及其传递的参数。每个条目是某次调用时传入的参数数组。

```js
test('tracks mock function calls and arguments', () => {
  const mockFunc = jest.fn();  // Create a mock function

  mockFunc('first call');
  mockFunc('second call', 42);

  expect(mockFunc.mock.calls.length).toBe(2);  // Passes: function was called twice
  expect(mockFunc.mock.calls[0][0]).toBe('first call');  // Passes: first call's first argument is 'first call'
  expect(mockFunc.mock.calls[1]).toEqual(['second call', 42]);  // Passes: second call's arguments are 'second call', 42
});
```

`mockFn.mock.calls` is useful for inspecting how many times and with what arguments a mock function was called.