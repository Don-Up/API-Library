### `waitForElementToBeRemoved()`

- **`waitForElementToBeRemoved()`**: Waits for an element to be removed from the DOM. It's useful for testing elements that disappear after async actions like loading spinners or modals.

> **`waitForElementToBeRemoved()`**：等待元素从 DOM 中移除。适用于测试在异步操作后消失的元素（如加载动画或模态框）。

```js
import { render, waitForElementToBeRemoved } from '@testing-library/react';
import MyComponent from './MyComponent';

test('waits for loading spinner to disappear', async () => {
  const { getByTestId } = render(<MyComponent />);

  const spinner = getByTestId('loading-spinner');

  // waitForElementToBeRemoved: waits for the spinner to be removed
  await waitForElementToBeRemoved(() => spinner);

  expect(spinner).not.toBeInTheDocument();
});
```

This utility is ideal for testing elements that should disappear after some async task is completed.