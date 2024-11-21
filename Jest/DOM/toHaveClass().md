### expect().toHaveClass()

- **`expect().toHaveClass()`**: Asserts that an HTML element has one or more specified CSS classes. Useful for checking if elements have the correct styling.

> **`expect().toHaveClass()`**：断言一个 HTML 元素具有指定的一个或多个 CSS 类，常用于检查元素是否具有正确的样式。

```js
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';  // for toHaveClass()

test('checks if element has the correct class', () => {
  render(<button className="btn primary">Submit</button>);
  
  const button = screen.getByText('Submit');
  expect(button).toHaveClass('btn');      // Passes: button has class 'btn'
  expect(button).toHaveClass('primary');  // Passes: button has class 'primary'
});
```

`expect().toHaveClass()` is ideal for verifying that elements are correctly styled by checking their CSS class names.