### jest.mock()

- **`jest.mock()`**: Mocks a module or dependency, replacing its actual implementation with a mock version. Useful for isolating the code under test from external dependencies.

> **`jest.mock()`**：模拟一个模块或依赖项，将其实际实现替换为模拟版本，常用于将被测代码与外部依赖隔离。

```js
// myModule.js
export const fetchData = () => 'real data';

// test.js
import { fetchData } from './myModule';

jest.mock('./myModule', () => ({
  fetchData: jest.fn().mockReturnValue('mocked data'),  // Mock fetchData function
}));

test('uses mocked fetchData', () => {
  expect(fetchData()).toBe('mocked data');  // Passes: fetchData returns mocked data
});
```

`jest.mock()` is ideal for mocking entire modules or specific functions to control dependencies and their behavior during tests.