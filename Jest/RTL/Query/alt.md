### `getByAltText()` / `queryByAltText()` / `findByAltText()`

- **`getByAltText()`**: Finds an element (usually an image, `<img>`) by its `alt` attribute. Throws an error if no matching element is found or if multiple elements match. Useful for testing images or elements with alternative text.

- **`queryByAltText()`**: Similar to `getByAltText()`, but returns `null` if no element matches, without throwing an error. Useful when the element might not exist.

- **`findByAltText()`**: Asynchronously finds an element by its `alt` text. It waits for the element to appear in the DOM, which is helpful for testing images or elements that render asynchronously.

> **`getByAltText()` / `queryByAltText()` / `findByAltText()`**：通过元素的 `alt` 属性查找元素（通常是 `<img>` 标签）。`getByAltText` 找到则返回元素，找不到或有多个匹配项时抛错；`queryByAltText` 找不到时返回 `null`；`findByAltText` 异步查找元素，等待它出现在 DOM 中。
>
> <audio src="..\..\mp3\`getByAltText().mp3"></audio>

```js
import { render, getByAltText, queryByAltText, findByAltText } from '@testing-library/react';
import MyComponent from './MyComponent';

test('finds elements by alt text', async () => {
  render(<MyComponent />);

  // getByAltText: throws an error if no match is found
  const imgElement = getByAltText('Profile picture');
  expect(imgElement).toBeInTheDocument();

  // queryByAltText: returns null if no element matches the alt text
  const nonExistent = queryByAltText('Non-existent image');
  expect(nonExistent).toBeNull();

  // findByAltText: waits for asynchronously rendered image
  const asyncImage = await findByAltText('Loading image');
  expect(asyncImage).toBeInTheDocument();
});
```

<audio src="..\..\mp3\这段代码展示了如何使用 Rea (28).mp3"></audio>

These functions are particularly useful for testing images and ensuring that the `alt` text is correctly associated with the element for accessibility purposes.