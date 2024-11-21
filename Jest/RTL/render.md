### `render()`

- **`render()`**: Renders a React component into the DOM for testing and returns utility methods (e.g., `getByText`, `queryByRole`) to interact with and query the component's output.

> **`render()`**：将 React 组件渲染到 DOM 中以进行测试，并返回用于与组件输出交互和查询的方法。

```js
import { render } from '@testing-library/react';
import MyComponent from './MyComponent';

test('renders MyComponent correctly', () => {
  const { getByText } = render(<MyComponent />);  // Render the component

  expect(getByText('Hello, World!')).toBeInTheDocument();  // Check if the text exists
});
```

`render()` is the core function in React Testing Library, allowing you to render and test the behavior of React components.