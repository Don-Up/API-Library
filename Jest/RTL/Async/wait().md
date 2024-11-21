### `wait()` (Deprecated)

- **`wait()`**: A deprecated utility in React Testing Library that waits for a condition to be met, typically for async operations. It has been replaced by `waitFor()` for better clarity and control.

> **`wait()`**：React Testing Library 中的一个已弃用工具，用于等待某个条件满足（通常用于异步操作）。已被 `waitFor()` 取代以提供更好的控制和清晰度。

```js
import { render, wait } from '@testing-library/react';
import MyComponent from './MyComponent';

test('uses deprecated wait to wait for text', async () => {
  const { getByText } = render(<MyComponent />);

  // Deprecated wait: waits for the text "Loaded" to appear
  await wait(() => expect(getByText('Loaded')).toBeInTheDocument());
});
```

Use `waitFor()` instead, as `wait()` is deprecated and may be removed in future releases.