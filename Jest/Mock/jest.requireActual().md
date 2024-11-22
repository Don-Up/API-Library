### jest.requireActual()

- **`jest.requireActual()`**: Returns the actual (unmocked) implementation of a module. Useful when you mock a module but still need access to its real implementation in some tests.

- <audio src="C:\Users\10691\Downloads\__`jest.require.mp3"></audio>

> **`jest.requireActual()`**：返回模块的真实（未模拟）实现。当你模拟一个模块但仍需要访问其真实实现时非常有用。
>
> <audio src="C:\Users\10691\Downloads\`jest.requireAc.mp3"></audio>

```js
// myModule.js
export const fetchData = () => 'real data';

// test.js
jest.mock('./myModule');  // Mock the module

const actualModule = jest.requireActual('./myModule');  // Get the real implementation

test('uses the real fetchData implementation', () => {
  expect(actualModule.fetchData()).toBe('real data');  // Passes: uses the real fetchData function
});
```

`jest.requireActual()` is helpful when you want to mock parts of a module but still use the real implementation for certain tests.