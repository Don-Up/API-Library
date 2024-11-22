### `ReactDOMServer.renderToNodeStream` in React

**`ReactDOMServer.renderToNodeStream`**: This method is used for **streaming server-side rendering (SSR)** by generating a **Node.js-readable stream** of HTML. It allows sending the HTML to the client incrementally, improving performance for large pages by enabling the browser to render visible content earlier. This method is supported in React 16 and 17, but in React 18, it has been replaced by **`renderToPipeableStream`** for modern concurrent rendering.

#### Key Points:
- Streams HTML as a **Node.js-readable stream**.
- Useful for SSR in React 16/17 (deprecated in React 18).

> **`ReactDOMServer.renderToNodeStream`**：此方法用于**流式服务端渲染 (SSR)**，生成一个 **Node.js 可读流**的 HTML。它可逐步将 HTML 发送到客户端，从而加快大页面的渲染速度，使浏览器更早显示内容。在 React 18 中已被 **`renderToPipeableStream`** 取代。
>
> <audio src="..\..\mp3\ReactDOMServer..mp3"></audio>

#### Example with Comments:

```javascript
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import express from 'express';

const app = express();

function App() {
  return (
    <div>
      <h1>Hello, Streaming SSR!</h1>
      <p>Content is streamed incrementally to the client.</p>
    </div>
  );
}

app.get('/', (req, res) => {
  // Set the content type to HTML
  res.setHeader('Content-Type', 'text/html');

  // Use renderToNodeStream to stream HTML to the client
  const stream = ReactDOMServer.renderToNodeStream(<App />);
  stream.pipe(res); // Pipe the stream directly to the response
});

app.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});
```

In this example:
- **`renderToNodeStream`** streams the HTML of the `App` component to the client incrementally.
- The **stream** is piped directly to the HTTP response for efficient streaming.