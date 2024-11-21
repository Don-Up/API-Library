### `within()`

- **`within()`**: A utility in React Testing Library that scopes queries to a specific DOM element. It allows you to search for elements only within a particular container, which is useful if there are multiple similar elements on the page.

> **`within()`**：React Testing Library 中的工具，用于将查询限制在特定的 DOM 元素内。它允许你仅在特定容器内查找元素，这在页面上有多个类似元素时非常有用。

```js
import { render, within } from '@testing-library/react';
import MyComponent from './MyComponent';

test('uses within to scope queries to a specific section', () => {
  const { getByRole } = render(<MyComponent />);

  // Get a specific section (e.g., a form or a div)
  const section = getByRole('region');

  // Use within to scope queries inside the section
  const { getByText } = within(section);
  const button = getByText('Submit');
  
  expect(button).toBeInTheDocument();  // Only looks within the section
});
```

`within()` helps isolate queries to specific parts of the DOM, improving accuracy when dealing with complex UIs.