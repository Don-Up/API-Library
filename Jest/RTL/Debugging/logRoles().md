### `logRoles()`

- **`logRoles()`**: A utility in React Testing Library that logs all the ARIA roles of the elements in the rendered DOM to the console. This is useful for debugging accessibility issues by showing the roles assigned to elements, helping you choose the correct query method (like `getByRole`).

- <audio src="..\..\mp3\__`logRoles`___.mp3"></audio>

> **`logRoles()`**：React Testing Library 中的工具，用于将渲染的 DOM 中所有元素的 ARIA 角色输出到控制台。它有助于调试可访问性问题，帮助选择正确的查询方法（如 `getByRole`）。
>
> <audio src="..\..\mp3\`logRoles()`：Re (1).mp3"></audio>

```js
import { render, logRoles } from '@testing-library/react';
import MyComponent from './MyComponent';

test('logs all roles in the DOM', () => {
  const { container } = render(<MyComponent />);

  // Logs all ARIA roles in the container to the console
  logRoles(container);

  // Perform assertions
  const button = screen.getByRole('button', { name: 'Submit' });
  expect(button).toBeInTheDocument();
});
```

<audio src="..\..\mp3\这段代码展示了如何使用 Rea (25).mp3"></audio>

`logRoles()` helps identify accessible roles in the DOM, ensuring that elements have the correct ARIA roles for accessibility testing.