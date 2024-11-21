### `getByPlaceholderText()` / `queryByPlaceholderText()` / `findByPlaceholderText()`

- **`getByPlaceholderText()`**: Finds a form element (e.g., `input`, `textarea`) by its `placeholder` attribute. Throws an error if no matching element is found or if multiple elements match. Useful for testing form fields with placeholder text.

- **`queryByPlaceholderText()`**: Similar to `getByPlaceholderText()`, but returns `null` if no element matches the placeholder text, without throwing an error. Useful when the element might not exist.

- **`findByPlaceholderText()`**: Asynchronously finds a form element by its placeholder text. It waits for the element to appear in the DOM, which is helpful for testing fields that render asynchronously.

> **`getByPlaceholderText()` / `queryByPlaceholderText()` / `findByPlaceholderText()`**：通过元素的 `placeholder` 属性查找表单元素（如 `input`、`textarea`）。`getByPlaceholderText` 找到则返回元素，找不到或有多个匹配项时抛错；`queryByPlaceholderText` 找不到时返回 `null`；`findByPlaceholderText` 异步查找元素，等待它出现在 DOM 中。

```js
import { render, getByPlaceholderText, queryByPlaceholderText, findByPlaceholderText } from '@testing-library/react';
import MyForm from './MyForm';

test('finds form elements by placeholder text', async () => {
  render(<MyForm />);

  // getByPlaceholderText: throws an error if no match is found
  const usernameInput = getByPlaceholderText('Enter your username');
  expect(usernameInput).toBeInTheDocument();

  // queryByPlaceholderText: returns null if no element matches
  const nonExistent = queryByPlaceholderText('Enter non-existent field');
  expect(nonExistent).toBeNull();

  // findByPlaceholderText: waits for async-rendered input field
  const emailInput = await findByPlaceholderText('Enter your email');
  expect(emailInput).toBeInTheDocument();
});
```

These functions help test elements based on placeholder text, ensuring that placeholder attributes are correctly displayed and functional.