### `getByTitle()` / `queryByTitle()` / `findByTitle()`

- **`getByTitle()`**: Finds elements by their `title` attribute. Throws an error if no matching element is found or if there are multiple matches. Useful for testing elements that use the `title` attribute for tooltips or additional information.

- **`queryByTitle()`**: Similar to `getByTitle()`, but returns `null` if no matching element is found, without throwing an error. Useful when the element might not always exist.

- **`findByTitle()`**: Asynchronously finds an element by its `title` attribute. It waits for the element to appear in the DOM, which is helpful for testing elements that render after async operations.

> **`getByTitle()` / `queryByTitle()` / `findByTitle()`**：通过元素的 `title` 属性查找元素。`getByTitle` 找到则返回元素，找不到或有多个匹配项时抛错；`queryByTitle` 找不到时返回 `null`；`findByTitle` 异步查找元素，等待它出现在 DOM 中。

```js
import { render, getByTitle, queryByTitle, findByTitle } from '@testing-library/react';
import MyComponent from './MyComponent';

test('finds elements by title attribute', async () => {
  render(<MyComponent />);

  // getByTitle: throws an error if no matching element is found
  const infoIcon = getByTitle('Information');
  expect(infoIcon).toBeInTheDocument();

  // queryByTitle: returns null if no element matches
  const nonExistent = queryByTitle('Non-existent title');
  expect(nonExistent).toBeNull();

  // findByTitle: waits for async-rendered elements with a title attribute
  const asyncElement = await findByTitle('Async Title');
  expect(asyncElement).toBeInTheDocument();
});
```

These functions are particularly useful for testing elements that use the `title` attribute for accessibility purposes or tooltips, ensuring the correct text is associated with the element.