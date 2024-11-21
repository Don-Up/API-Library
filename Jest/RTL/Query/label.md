### `getByLabelText()` / `queryByLabelText()` / `findByLabelText()`

- **`getByLabelText()`**: Finds a form element (like `input`, `textarea`, `select`) by associated label text. Throws an error if no element is found or multiple matches exist. Useful for testing form inputs.

- **`queryByLabelText()`**: Similar to `getByLabelText()`, but returns `null` if no matching element is found, without throwing an error. Useful when the form element may or may not exist.

- **`findByLabelText()`**: Asynchronously finds a form element by label text. It waits for the element to appear in the DOM, useful for testing async-rendered form inputs.

> **`getByLabelText()` / `queryByLabelText()` / `findByLabelText()`**：通过关联的标签文本查找表单元素（如 `input`、`textarea`、`select` 等）。`getByLabelText` 找到则返回元素，找不到或有多个匹配项时抛错；`queryByLabelText` 找不到时返回 `null`；`findByLabelText` 异步查找表单元素，等待它出现在 DOM 中。

```js
import { render, getByLabelText, queryByLabelText, findByLabelText } from '@testing-library/react';
import MyForm from './MyForm';

test('finds form elements by label text', async () => {
  render(<MyForm />);

  // getByLabelText: throws an error if not found
  const input = getByLabelText('Username:');
  expect(input).toBeInTheDocument();

  // queryByLabelText: returns null if no match is found
  const nonExistent = queryByLabelText('Password:');
  expect(nonExistent).toBeNull();

  // findByLabelText: waits for async-rendered input field
  const asyncInput = await findByLabelText('Email:');
  expect(asyncInput).toBeInTheDocument();
});
```

These functions are particularly helpful for testing form inputs by label associations, ensuring accessible and user-friendly forms.