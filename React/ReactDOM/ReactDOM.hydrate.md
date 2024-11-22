### `ReactDOM.hydrate` in React

**`ReactDOM.hydrate`**: This method is used to **attach React’s event handlers** to a server-rendered HTML structure during **server-side rendering (SSR)**. It reuses the existing DOM instead of re-rendering it from scratch, improving performance by avoiding unnecessary DOM manipulations. It should only be used when the HTML is generated by React during SSR. If the server-rendered HTML doesn’t match the React app, React will log a warning and attempt to fix the inconsistencies.

#### Key Points:
- Used in **SSR** to attach React to server-rendered HTML.
- Improves performance by reusing the existing DOM.

> **`ReactDOM.hydrate`**：此方法用于在**服务端渲染 (SSR)** 时，将 React 的事件处理程序附加到服务端生成的 HTML 结构上。它复用现有的 DOM，而不是重新渲染整个结构，从而提高性能。如果服务端 HTML 与 React 应用不匹配，React 会发出警告并尝试修复不一致。

#### Example with Comments:

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  return <h1>Hello, Server-Side Rendering!</h1>;
}

// Assuming this HTML is pre-rendered on the server
// <div id="root"><h1>Hello, Server-Side Rendering!</h1></div>

// Hydrate React into the pre-rendered HTML
ReactDOM.hydrate(
  <App />,
  document.getElementById('root') // Attach React to the existing DOM
);
```

In this example:
- **`ReactDOM.hydrate`** attaches the React app to the **server-rendered HTML** inside the `#root` element, instead of generating a new DOM tree.