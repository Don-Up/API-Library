### `React.createElement` in React

**`React.createElement`**: This function is used to create and return a **React element**. It takes three arguments: the **type** of element (a string for a DOM element or a React component), an object of **props**, and **children**. It is the underlying method that JSX compiles to. While JSX is more common, using `React.createElement` directly offers flexibility in cases where JSX is not available.

#### Key Points:
- Creates a React element with a specified **type**, **props**, and **children**.
- JSX compiles to `React.createElement`.

> **`React.createElement`**：此函数用于创建并返回一个 React 元素。它接收三个参数：元素类型（DOM 元素的字符串或 React 组件）、属性对象和子元素。JSX 会被编译为 `React.createElement`。

#### Example with Comments:

```jsx
import React from 'react';

// Using React.createElement instead of JSX
const element = React.createElement(
  'button',            // Element type (HTML button)
  { onClick: () => alert('Clicked') },  // Props (onClick handler)
  'Click me'           // Children (button text)
);

export default function App() {
  return element;
}
```

In this example:
- **`React.createElement`** creates a `<button>` element with an **`onClick`** handler and the text **`"Click me"`** as its child.