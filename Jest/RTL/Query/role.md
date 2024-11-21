### `getByRole()` / `queryByRole()` / `findByRole()`

- **`getByRole()`**: Returns the element matching the specified [ARIA role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles). Throws an error if no matching element is found or if multiple matches exist.

- **`queryByRole()`**: Similar to `getByRole()`, but returns `null` if no element matches, without throwing an error. Useful when the element may not exist.

- **`findByRole()`**: Asynchronously returns the element matching the specified role. It waits for the element to appear in the DOM (useful for elements that are rendered after an async operation).

> **`getByRole()` / `queryByRole()` / `findByRole()`**：用于根据指定的 [ARIA 角色](https://developer.mozilla.org/zh-CN/docs/Web/Accessibility/ARIA/Roles) 查找元素。`getByRole` 找到则返回元素，找不到或有多个匹配项则抛错；`queryByRole` 找不到时返回 `null`；`findByRole` 异步查找元素，等待它出现在 DOM 中。

```js
import { render, getByRole, queryByRole, findByRole } from '@testing-library/react';
import MyComponent from './MyComponent';

test('finds button by role', () => {
  render(<MyComponent />);

  // getByRole: throws an error if not found
  const button = getByRole('button');
  expect(button).toBeInTheDocument();

  // queryByRole: returns null if not found, no error
  const nonExistent = queryByRole('textbox');
  expect(nonExistent).toBeNull();

  // findByRole: waits for async-rendered button
  const asyncButton = await findByRole('button', { name: /submit/i });
  expect(asyncButton).toBeInTheDocument();
});
```

These functions are preferred for accessibility testing since they leverage ARIA roles.