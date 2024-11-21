### `React.Fragment` in React

**`React.Fragment`**: This component allows you to group multiple children elements without adding extra nodes to the DOM. It’s useful when a component must return multiple adjacent elements but you don’t want to wrap them in an additional HTML element (like a `<div>`). You can also use the shorthand syntax `<>...</>` for brevity.

#### Key Points:
- Groups children **without extra DOM elements**.
- Use **`<React.Fragment>`** or the shorthand **`<>...</>`**.

> **`React.Fragment`**：此组件允许您在不向 DOM 添加额外节点的情况下，组合多个子元素。在需要返回多个相邻元素时非常有用，避免了使用额外的 HTML 元素（如 `<div>`）包装。

#### Example with Comments:

```jsx
import React from 'react';

export default function MyComponent() {
  return (
    <React.Fragment>
      <h1>Title</h1>
      <p>This is a paragraph.</p>
    </React.Fragment>
  );
}

// Or using the shorthand syntax:
export function AnotherComponent() {
  return (
    <>
      <h1>Title</h1>
      <p>This is another paragraph.</p>
    </>
  );
}
```

In this example:
- **`React.Fragment`** or **`<>...</>`** is used to return multiple elements without adding extra DOM nodes.