### `waitFor()`

- **`waitFor()`**: A utility in React Testing Library that asynchronously waits for a condition to be met, typically used for assertions in async operations or DOM updates. It retries until the expectation passes or times out.

> **`waitFor()`**：React Testing Library 中的工具，用于异步等待某个条件满足，通常用于异步操作或 DOM 更新的断言。它会重试直到断言通过或超时。

```js
import { render, waitFor } from '@testing-library/react';
import MyComponent from './MyComponent';

test('wait for the text to appear', async () => {
  const { getByText } = render(<MyComponent />);

  // waitFor: waits for the text "Loaded" to appear
  await waitFor(() => expect(getByText('Loaded')).toBeInTheDocument());
});
```

`waitFor()` is the preferred way to handle async updates in tests, replacing the deprecated `wait()`.