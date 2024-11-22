### `ReactDOM.createRoot` in React

**`ReactDOM.createRoot`**: This method is used to create a **root rendering container** in React 18 and later. It replaces the legacy `ReactDOM.render` and enables features like **concurrent rendering**. It creates a React root tied to a DOM element, where the React component tree can be rendered using the `.render()` method. This is the first step for initializing a React app with modern React features.

<audio src="..\..\mp3/__`ReactDOM.cre.mp3"></audio>

#### Key Points:
- Used in React 18+ for creating a **root container**.
- Enables **concurrent rendering** and other new features.

> **`ReactDOM.createRoot`**：此方法用于在 React 18 及更高版本中创建一个**根渲染容器**，取代了旧的 `ReactDOM.render` 方法。它支持**并发渲染**等新功能，需通过 `.render()` 方法将 React 组件树渲染到指定的 DOM 元素中。
>
> <audio src="..\..\mp3/ReactDOM.create.mp3"></audio>

#### Example with Comments:

<audio src="..\..\mp3/这段代码展示了 React 1.mp3"></audio>

<audio src="..\..\mp3/This code demon (3).mp3"></audio>

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  return <h1>Hello, React 18!</h1>;
}

// Get the root DOM element
const rootElement = document.getElementById('root');

// Create a React root container
const root = ReactDOM.createRoot(rootElement);

// Render the React component tree
root.render(<App />);
```

In this example:
- **`ReactDOM.createRoot`** creates a root container for the `#root` element.
- The **`root.render`** method renders the `App` component inside the root container with modern React features enabled.