### expect().toHaveAttribute()

- **`expect().toHaveAttribute()`**: Asserts that an HTML element has a specific attribute, and optionally checks its value.

> **`expect().toHaveAttribute()`**：断言 HTML 元素具有指定的属性，并可选地检查其值。

```js
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';  // for toHaveAttribute()

test('checks if element has the correct attribute', () => {
  render(<input type="text" placeholder="Enter your name" />);

  const input = screen.getByPlaceholderText('Enter your name');
  expect(input).toHaveAttribute('type', 'text');  // Passes: input has 'type' attribute with value 'text'
});
```

`expect().toHaveAttribute()` is useful for validating that an element contains a certain attribute and optionally confirming its value.