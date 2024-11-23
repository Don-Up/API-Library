### `cleanup()`

- **`cleanup()`**: A utility in React Testing Library that unmounts components and clears the DOM after each test to prevent memory leaks and interference between tests. It happens automatically with modern versions of React Testing Library, but it can be manually invoked if needed.

- <audio src="..\..\mp3\__`cleanup`___ .mp3"></audio>

> **`cleanup()`**：React Testing Library 中的工具，用于在每个测试后卸载组件并清除 DOM，以防止内存泄漏和测试之间的干扰。现代版本中会自动执行，但可以手动调用。
>
> <audio src="..\..\mp3\cleanup()：React.mp3"></audio>

```js
import { render, screen, cleanup } from '@testing-library/react';
import MyComponent from './MyComponent';

afterEach(() => {
  // Manually cleanup rendered components after each test
  cleanup();
});

test('renders component', () => {
  render(<MyComponent />);
  const heading = screen.getByText('Hello, World!');
  expect(heading).toBeInTheDocument();
});

test('ensures DOM is cleared between tests', () => {
  render(<MyComponent />);
  const button = screen.getByRole('button');
  expect(button).toBeInTheDocument();
});
```

<audio src="..\..\mp3\这段代码展示了如何使用 Rea (29).mp3"></audio>

`cleanup()` ensures a fresh DOM environment for each test, preventing side effects from previous tests.