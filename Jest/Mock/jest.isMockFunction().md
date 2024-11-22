### jest.isMockFunction()

- **`jest.isMockFunction()`**: Checks if a given function is a mock (i.e., created by `jest.fn()` or `jest.mock()`), returning `true` if it is a mock function.

- <audio src="..\..\mp3\__`jest.isMockF.mp3"></audio>

> **`jest.isMockFunction()`**：检查指定的函数是否为模拟函数（即通过 `jest.fn()` 或 `jest.mock()` 创建的函数），如果是模拟函数，返回 `true`。
>
> <audio src="..\..\mp3\`jest.isMockFun.mp3"></audio>

```js
const mockFunc = jest.fn();  // Create a mock function
const regularFunc = () => 'real function';

test('check if a function is mocked', () => {
  expect(jest.isMockFunction(mockFunc)).toBe(true);  // Passes: mockFunc is a mock function
  expect(jest.isMockFunction(regularFunc)).toBe(false);  // Passes: regularFunc is not a mock function
});
```

<audio src="../../../../Downloads/这段代码展示了如何使用 Jes (8).mp3"></audio>

`jest.isMockFunction()` is useful for verifying whether a function is mocked, particularly in scenarios where the function might be dynamically mocked.