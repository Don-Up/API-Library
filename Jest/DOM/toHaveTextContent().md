### expect().toHaveTextContent()

- **`expect().toHaveTextContent()`**: Asserts that an HTML element contains specific text content, useful for validating rendered text in UI components.

- <audio src="..\..\mp3\__`expect().toH (2).mp3"></audio>

> **`expect().toHaveTextContent()`**：断言 HTML 元素包含特定文本内容，常用于验证 UI 组件中渲染的文本。
>
> <audio src="..\..\mp3\`expect().toHav (1).mp3"></audio>

```js
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';  // for toHaveTextContent()

test('checks if element has correct text content', () => {
  render(<p>Hello, world!</p>);
  
  const paragraph = screen.getByText('Hello, world!');
  expect(paragraph).toHaveTextContent('Hello, world!');  // Passes: paragraph contains 'Hello, world!'
});
```

`expect().toHaveTextContent()` is useful for verifying that an element displays the correct text content, ensuring expected UI rendering.