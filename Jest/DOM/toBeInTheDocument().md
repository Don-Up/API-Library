### expect().toBeInTheDocument()

- **`expect().toBeInTheDocument()`**: Asserts that an HTML element is present in the document. Typically used in conjunction with testing libraries like `@testing-library/react`.

- <audio src="..\..\mp3\Asserts that an (1).mp3"></audio>

> **`expect().toBeInTheDocument()`**：断言一个 HTML 元素存在于文档中，通常与 `@testing-library/react` 等测试库配合使用。
>
> <audio src="..\..\mp3\断言一个 HTML 元素存在于.mp3"></audio>

```js
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';  // for toBeInTheDocument()

test('checks if element is in the document', () => {
  render(<button>Click me</button>);
  
  const button = screen.getByText('Click me');
  expect(button).toBeInTheDocument();  // Passes: button is present in the DOM
});
```

<audio src="..\..\mp3/这段代码展示了如何使用 Jes (4).mp3"></audio>

`expect().toBeInTheDocument()` is useful for verifying that an element exists in the rendered DOM.