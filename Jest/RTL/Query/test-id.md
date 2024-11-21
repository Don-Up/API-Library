### `getByTestId()` / `queryByTestId()` / `findByTestId()`

- **`getByTestId()`**: Finds an element by its `data-testid` attribute. Throws an error if no matching element is found or if multiple elements match. Commonly used for targeting elements in tests when no better selector (like ARIA roles or text) is available.

- **`queryByTestId()`**: Similar to `getByTestId()`, but returns `null` if no matching element is found, without throwing an error. Use it when the element might not exist.

- **`findByTestId()`**: Asynchronously finds an element by its `data-testid`. It waits for the element to appear in the DOM, useful for testing elements that are rendered asynchronously.

> **`getByTestId()` / `queryByTestId()` / `findByTestId()`**：通过元素的 `data-testid` 属性查找元素。`getByTestId` 找到则返回元素，找不到或有多个匹配时抛错；`queryByTestId` 找不到时返回 `null`；`findByTestId` 异步查找元素，等待它出现在 DOM 中。

```js
import { render, getByTestId, queryByTestId, findByTestId } from '@testing-library/react';
import MyComponent from './MyComponent';

test('finds elements by test ID', async () => {
  render(<MyComponent />);

  // getByTestId: throws an error if no match is found
  const button = getByTestId('submit-button');
  expect(button).toBeInTheDocument();

  // queryByTestId: returns null if no element matches the test ID
  const nonExistent = queryByTestId('non-existent-id');
  expect(nonExistent).toBeNull();

  // findByTestId: waits for async-rendered elements
  const asyncElement = await findByTestId('async-element');
  expect(asyncElement).toBeInTheDocument();
});
```

These functions are useful for testing when the element has a unique `data-testid` attribute, ensuring that specific elements can be easily targeted in your tests.