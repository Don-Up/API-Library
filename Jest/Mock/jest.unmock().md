### jest.unmock()

- **`jest.unmock()`**: Removes the mock on a module that was previously mocked with `jest.mock()`, restoring its original implementation.

- <audio src="..\..\mp3\__`jest.unmock(.mp3"></audio>

> **`jest.unmock()`**：移除之前使用 `jest.mock()` 模拟的模块，恢复其原始实现。
>
> <audio src="..\..\mp3\`jest.unmock()`.mp3"></audio>

```js
// myModule.js
export const fetchData = () => 'real data';

// test.js
jest.mock('./myModule');  // Mock the module
jest.unmock('./myModule');  // Remove the mock

import { fetchData } from './myModule';  // Import after unmocking

test('uses the real fetchData after unmock', () => {
  expect(fetchData()).toBe('real data');  // Passes: uses the real implementation
});
```

<audio src="..\..\mp3/这段代码展示了如何在 Jest (2).mp3"></audio>

`jest.unmock()` is useful when you want to temporarily mock a module but later revert to its actual implementation within the same test file.