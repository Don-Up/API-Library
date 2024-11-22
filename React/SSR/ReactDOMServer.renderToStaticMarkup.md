### `ReactDOMServer.renderToStaticMarkup` in React

**`ReactDOMServer.renderToStaticMarkup`**: This method renders a React component tree to a static HTML string **without including React-specific attributes** (e.g., `data-reactroot`). It’s useful for generating static HTML for pages where React doesn’t need to manage the DOM or for SEO purposes. Unlike `renderToString`, it doesn’t support hydration since the output HTML is purely static. It’s commonly used for generating HTML for emails or static sites.

#### Key Points:
- Converts a React component tree to a **static HTML string**.
- Excludes React-specific attributes (e.g., `data-reactroot`), making the output non-hydratable.

> **`ReactDOMServer.renderToStaticMarkup`**：此方法将 React 组件树渲染为一个静态 HTML 字符串，不包含 React 特有的属性（如 `data-reactroot`）。它适用于生成静态 HTML 页面（无需 React 管理 DOM）或电子邮件模板。与 `renderToString` 不同，它生成的内容不可进行 hydration。
>
> <audio src="..\..\mp3\`ReactDOMServer (1).mp3"></audio>

#### Example with Comments:

```jsx
// Server-side example
import React from 'react';
import ReactDOMServer from 'react-dom/server';

function App() {
  return (
    <div>
      <h1>Hello, Static Markup!</h1>
      <p>This is a static HTML page.</p>
    </div>
  );
}

// Render the App component to a static HTML string
const staticHtmlString = ReactDOMServer.renderToStaticMarkup(<App />);

console.log(staticHtmlString);
// Output: <div><h1>Hello, Static Markup!</h1><p>This is a static HTML page.</p></div>
```

In this example:
- **`ReactDOMServer.renderToStaticMarkup`** generates a plain HTML string without React-specific attributes, suitable for static HTML purposes (e.g., emails or static pages).