### `waitForElementToBeRemoved()`

- **`waitForElementToBeRemoved()`**: Waits for an element to be removed from the DOM. It's useful for testing elements that disappear after async actions like loading spinners or modals.

- <audio src="..\..\mp3\__waitForElemen.mp3"></audio>

> **`waitForElementToBeRemoved()`**：等待元素从 DOM 中移除。适用于测试在异步操作后消失的元素（如加载动画或模态框）。
>
> <audio src="..\..\mp3\`waitForElement.mp3"></audio>

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

<audio src="..\..\mp3\这段代码展示了如何使用 Rea (23).mp3"></audio>

This utility is ideal for testing elements that should disappear after some async task is completed.