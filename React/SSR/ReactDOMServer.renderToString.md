### `ReactDOMServer.renderToString` in React

**`ReactDOMServer.renderToString`**: This method is used on the server to render a React component tree to an HTML string. It’s commonly used in **Server-Side Rendering (SSR)** to generate static HTML on the server, which is then sent to the client for faster page loads and better SEO. The generated HTML string can be directly inserted into the DOM on the client side. Unlike `renderToStaticMarkup`, it includes React-specific attributes (e.g., `data-reactroot`) for hydration.

#### Key Points:
- Converts a React component tree to an **HTML string**.
- Used in **Server-Side Rendering (SSR)**.

> **`ReactDOMServer.renderToString`**：此方法在服务器端将 React 组件树渲染为 HTML 字符串，常用于**服务端渲染 (SSR)**。生成的 HTML 字符串可直接发送到客户端，用于更快的页面加载和更好的 SEO。与 `renderToStaticMarkup` 不同，它包含 React 的特殊属性（如 `data-reactroot`），以便客户端进行 hydration。
>
> <audio src="C:\Users\10691\Downloads\`ReactDOMServer.mp3"></audio>

#### Example with Comments:

```jsx
// Server-side example
import React from 'react';
import ReactDOMServer from 'react-dom/server';

function App() {
  return <h1>Hello, Server-Side Rendering!</h1>;
}

// Render the App component to an HTML string
const htmlString = ReactDOMServer.renderToString(<App />);

console.log(htmlString);
// Output: <h1 data-reactroot="">Hello, Server-Side Rendering!</h1>
```

In this example:
- **`ReactDOMServer.renderToString`** generates a string of HTML for the `App` component.
- The resulting HTML includes React attributes for hydration on the client side.