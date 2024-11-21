### jest.isMockFunction()

- **`jest.isMockFunction()`**: Checks if a given function is a mock (i.e., created by `jest.fn()` or `jest.mock()`), returning `true` if it is a mock function.

> **`jest.isMockFunction()`**：检查指定的函数是否为模拟函数（即通过 `jest.fn()` 或 `jest.mock()` 创建的函数），如果是模拟函数，返回 `true`。

```js
const mockFunc = jest.fn();  // Create a mock function
const regularFunc = () => 'real function';

test('check if a function is mocked', () => {
  expect(jest.isMockFunction(mockFunc)).toBe(true);  // Passes: mockFunc is a mock function
  expect(jest.isMockFunction(regularFunc)).toBe(false);  // Passes: regularFunc is not a mock function
});
```

`jest.isMockFunction()` is useful for verifying whether a function is mocked, particularly in scenarios where the function might be dynamically mocked.