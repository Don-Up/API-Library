### jest.requireMock()

- **`jest.requireMock()`**: Returns the mocked version of a module that has been explicitly mocked using `jest.mock()`. Useful to directly access the mock implementation.

> **`jest.requireMock()`**：返回通过 `jest.mock()` 显式模拟的模块的模拟版本，便于直接访问该模块的模拟实现。

```js
// myModule.js
export const fetchData = () => 'real data';

// test.js
jest.mock('./myModule');  // Mock the module

const mockedModule = jest.requireMock('./myModule');  // Get the mocked version

test('uses the mocked fetchData implementation', () => {
  mockedModule.fetchData.mockReturnValue('mocked data');  // Define mock behavior
  expect(mockedModule.fetchData()).toBe('mocked data');    // Passes: uses the mocked version
});
```

`jest.requireMock()` is useful when you need to directly interact with the mocked module, especially for setting or asserting mock behaviors.