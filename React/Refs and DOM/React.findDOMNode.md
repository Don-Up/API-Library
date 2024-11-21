### `React.findDOMNode` in React

**`React.findDOMNode`**: This method allows you to access the underlying **DOM node** of a React component. It is typically used in **class components** to directly manipulate the DOM, though it is considered **legacy** and discouraged in favor of using **refs**. It should not be used in **functional components** or **StrictMode**. For better practices, use `ref` for accessing and manipulating DOM nodes.

#### Key Points:
- Used to access the **DOM node** of a class component.
- **Deprecated** in favor of using **refs**, and should not be used in **functional components**.

> **`React.findDOMNode`**：此方法允许访问 React 组件的底层 DOM 节点。通常用于类组件直接操作 DOM，但它是**遗留**方法，建议使用 `ref` 替代。不要在函数组件或严格模式下使用。

#### Example with Comments:

```jsx
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class MyComponent extends Component {
  componentDidMount() {
    // Find the DOM node of this component
    const domNode = ReactDOM.findDOMNode(this);
    console.log(domNode); // Logs the actual DOM element
  }

  render() {
    return <div>Hello, World!</div>;
  }
}

export default MyComponent;
```

In this example:
- **`ReactDOM.findDOMNode(this)`** is used to access the actual DOM element rendered by the component, but it is generally discouraged in favor of using **refs** for direct DOM manipulation.