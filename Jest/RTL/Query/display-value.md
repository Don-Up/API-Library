### `getByDisplayValue()` / `queryByDisplayValue()` / `findByDisplayValue()`

- **`getByDisplayValue()`**: Finds form elements (e.g., `<input>`, `<textarea>`, `<select>`) by their current displayed value (what the user sees). Throws an error if no matching element is found or if multiple elements match.

- **`queryByDisplayValue()`**: Similar to `getByDisplayValue()`, but returns `null` if no matching element is found, without throwing an error. Useful when the element might not exist.

- **`findByDisplayValue()`**: Asynchronously finds a form element by its displayed value. It waits for the element to be present, useful for testing form elements that are rendered asynchronously.

> **`getByDisplayValue()` / `queryByDisplayValue()` / `findByDisplayValue()`**：通过表单元素的当前显示值（用户输入或选择的值）查找元素。`getByDisplayValue` 找到则返回元素，找不到或有多个匹配项时抛错；`queryByDisplayValue` 找不到时返回 `null`；`findByDisplayValue` 异步查找元素，等待它出现在 DOM 中。

```js
import { render, getByDisplayValue, queryByDisplayValue, findByDisplayValue } from '@testing-library/react';
import MyForm from './MyForm';

test('finds form elements by display value', async () => {
  render(<MyForm />);

  // getByDisplayValue: throws an error if no matching element is found
  const inputElement = getByDisplayValue('John Doe');
  expect(inputElement).toBeInTheDocument();

  // queryByDisplayValue: returns null if no element matches the value
  const nonExistent = queryByDisplayValue('Jane Doe');
  expect(nonExistent).toBeNull();

  // findByDisplayValue: asynchronously finds the element with the displayed value
  const asyncInput = await findByDisplayValue('Loading...');
  expect(asyncInput).toBeInTheDocument();
});
```

These functions are useful when testing form elements' current values, such as input fields or select dropdowns, ensuring the correct value is displayed to the user.