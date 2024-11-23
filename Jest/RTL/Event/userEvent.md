### `userEvent`

- **`userEvent`**: A more advanced API than `fireEvent`, mimicking real user interactions (e.g., typing, clicking) more closely by managing events like focus and blur. It's part of the `@testing-library/user-event` package.

- <audio src="..\..\mp3\__`userEvent`__.mp3"></audio>

> **`userEvent`**：比 `fireEvent` 更高级，能够更真实地模拟用户交互（例如输入、点击），并处理焦点和失焦等事件。
>
> <audio src="..\..\mp3\userEvent：比 `fi.mp3"></audio>

```js
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MyComponent from './MyComponent';

test('triggers typing and clicking events', async () => {
  const { getByLabelText, getByText } = render(<MyComponent />);

  const input = getByLabelText('Username');
  const submitButton = getByText('Submit');

  // userEvent: types 'John' into the input field
  await userEvent.type(input, 'John');

  // userEvent: simulates a click on the submit button
  await userEvent.click(submitButton);

  expect(input).toHaveValue('John');
});
```

<audio src="..\..\mp3\这段代码展示了如何使用 Rea (27).mp3"></audio>

`userEvent` simulates more realistic interactions, making it ideal for testing complex user flows.