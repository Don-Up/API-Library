### `getByText()` / `queryByText()` / `findByText()`

- **`getByText()`**: Finds an element by its visible text content. Throws an error if no matching element is found or if multiple elements match. Ideal for asserting visible text.

- **`queryByText()`**: Similar to `getByText()`, but returns `null` if no match is found, without throwing an error. Useful when an element may or may not exist.

- **`findByText()`**: Asynchronously finds an element by its visible text content. It waits for the element to appear in the DOM, which is helpful for testing async-rendered content.

> **`getByText()` / `queryByText()` / `findByText()`**：根据元素的可见文本内容查找元素。`getByText` 找到则返回元素，找不到或有多个匹配项则抛错；`queryByText` 找不到时返回 `null`；`findByText` 异步查找元素，等待它出现在 DOM 中，常用于测试异步渲染的内容。

```js
import { render, getByText, queryByText, findByText } from '@testing-library/react';
import MyComponent from './MyComponent';

test('finds elements by text content', async () => {
  render(<MyComponent />);

  // getByText: throws an error if no matching element is found
  const element = getByText('Welcome');
  expect(element).toBeInTheDocument();

  // queryByText: returns null if no element matches the text
  const nonExistent = queryByText('Non-existent text');
  expect(nonExistent).toBeNull();

  // findByText: waits for async-rendered text
  const asyncText = await findByText('Loading complete');
  expect(asyncText).toBeInTheDocument();
});
```

These functions are useful for asserting the presence of visible text in a component, making it easier to test user-facing content.