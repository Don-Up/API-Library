### `screen`

- **`screen`**: A utility provided by React Testing Library to access all queries (e.g., `getByText`, `queryByRole`) without destructuring them from the `render()` function. This makes the code cleaner and easier to read, especially in larger test files.

- <audio src="..\..\mp3\__`screen`___ A.mp3"></audio>

> **`screen`**：React Testing Library 提供的工具，用于直接访问所有查询方法（如 `getByText`、`queryByRole`），无需从 `render()` 中解构。这样可以使代码更简洁，尤其在较大的测试文件中。
>
> <audio src="..\..\mp3\`screen`：React .mp3"></audio>

```js
import { render, screen } from '@testing-library/react';
import MyComponent from './MyComponent';

test('uses screen to access queries', () => {
  render(<MyComponent />);

  // Access queries directly via screen
  const button = screen.getByRole('button', { name: /submit/i });
  expect(button).toBeInTheDocument();

  const heading = screen.getByText('Welcome');
  expect(heading).toBeInTheDocument();
});
```

<audio src="..\..\mp3\这段代码展示了如何在 Reac (3).mp3"></audio>

1`screen` is especially helpful for improving readability in tests by avoiding repetitive destructuring of query functions.