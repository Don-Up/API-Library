### `ReactDOMServer.renderToPipeableStream` in React

**`ReactDOMServer.renderToPipeableStream`**: This React method is used for **streaming server-side rendering (SSR)**. It enables React to send HTML to the client incrementally as it is generated, improving performance for large pages by allowing the browser to display content earlier. It returns a **readable stream** that can be piped to the response. This is particularly helpful for **modern SSR with concurrent rendering** in React 18+. You can also define a callback (`onShellReady`) to know when the initial HTML is ready to stream.

#### Key Points:
- Streams HTML to the client incrementally for **faster rendering**.
- Supports **concurrent rendering** in React 18+.

> **`ReactDOMServer.renderToPipeableStream`**：此方法用于**流式服务端渲染 (SSR)**，可以在生成 HTML 时逐步将其发送到客户端，提升大页面的渲染性能。它返回一个**可读流**，可直接传输到 HTTP 响应中，支持 React 18 的并发渲染。你还可以通过 `onShellReady` 回调获知初始 HTML 准备就绪的时机。
>
> <audio src="C:\Users\10691\Downloads\`ReactDOMServer (2).mp3"></audio>

#### Example with Comments:

```javascript
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Readable } from 'stream';
import express from 'express';

const app = express();

function App() {
  return (
    <div>
      <h1>Hello, Streaming SSR!</h1>
      <p>This content is streamed to the client.</p>
    </div>
  );
}

app.get('/', (req, res) => {
  // Use renderToPipeableStream for streaming HTML
  const { pipe } = ReactDOMServer.renderToPipeableStream(<App />, {
    onShellReady() {
      // Pipe the stream to the response when ready
      res.setHeader('Content-Type', 'text/html');
      pipe(res);
    },
  });
});

app.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});
```

In this example:
- **`renderToPipeableStream`** streams the HTML of the `App` component to the client incrementally.
- The `onShellReady` callback pipes the generated content to the HTTP response when the shell is ready.