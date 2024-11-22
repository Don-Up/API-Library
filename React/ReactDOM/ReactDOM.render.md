### `ReactDOM.render` in React

**`ReactDOM.render`**: This method was used in React (prior to version 18) to render a React component tree into a specified DOM element. It takes two arguments: the React element to render and the DOM container where it should be mounted. However, starting with **React 18**, `ReactDOM.render` has been replaced by **`ReactDOM.createRoot`** to enable concurrent rendering, and `ReactDOM.render` is now considered **legacy**.

#### Key Points:
- Renders a React component tree into a DOM container.
- Deprecated in React 18 in favor of `ReactDOM.createRoot`.

> **`ReactDOM.render`**：此方法用于在 React 18 之前将 React 组件树渲染到指定的 DOM 容器中。它接收两个参数：要渲染的 React 元素和目标容器。从 React 18 开始，此方法已被 **`ReactDOM.createRoot`** 取代，属于**遗留方法**。

#### Example with Comments:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return <h1>Hello, React!</h1>;
}

// Get the root DOM element
const rootElement = document.getElementById('root');

// Render the App component into the root element
ReactDOM.render(<App />, rootElement);
```

In this example:
- **`ReactDOM.render`** mounts the `App` component into the DOM element with the id `root`.
- Starting in React 18, this should be replaced with **`ReactDOM.createRoot`** for modern React features.