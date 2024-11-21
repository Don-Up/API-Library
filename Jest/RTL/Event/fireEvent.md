### `fireEvent()`

- **`fireEvent()`**: Simulates browser events (e.g., clicks, input changes) on DOM elements in tests. It's used to trigger user interactions like clicks, form submissions, and keyboard events.

> **`fireEvent()`**：在测试中模拟浏览器事件（例如点击、输入更改），用于触发用户交互，如单击、表单提交和键盘事件。

```js
import { render, fireEvent } from '@testing-library/react';
import MyComponent from './MyComponent';

test('triggers click event', () => {
  const { getByText } = render(<MyComponent />);
  
  const button = getByText('Click Me');
  
  // fireEvent: simulates a click event on the button
  fireEvent.click(button);
  
  expect(button).toHaveTextContent('Clicked');
});
```

`fireEvent()` allows you to test how components respond to user interactions by simulating real-world events.