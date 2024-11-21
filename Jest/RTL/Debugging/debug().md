### `debug()`

- **`debug()`**: A utility in React Testing Library that prints the current state of the DOM to the console, helping you inspect the component structure during testing. It can be used to debug issues by showing the rendered output at any point in a test.

> **`debug()`**：React Testing Library 中的工具，用于在测试期间将当前 DOM 状态输出到控制台，帮助检查组件结构。可以在测试的任何时候使用，以便调试渲染输出中的问题。

```js
import { render, screen } from '@testing-library/react';
import MyComponent from './MyComponent';

test('debugging the DOM output', () => {
  const { debug } = render(<MyComponent />);

  // Logs the current DOM structure to the console
  debug();

  // Perform assertions
  const heading = screen.getByText('Hello, World!');
  expect(heading).toBeInTheDocument();

  // Optionally, debug again after interacting
  debug();
});
```

Using `debug()` can help you visualize the rendered component's DOM, making it easier to identify issues during test development.