### Custom Document in Next.js

**Custom Document**: The `_document.js` file in Next.js allows you to customize the overall HTML document structure, such as modifying the **`<html>`**, **`<head>`**, and **`<body>`** tags. This is useful for adding meta tags, external scripts, or stylesheets that should be loaded on every page. Unlike other components, **`_document.js`** is rendered only on the server, so event handlers like `onClick` cannot be added here.

#### Key Points:
- Used for **global HTML structure** customization.
- Only rendered on the **server**.

> **自定义 Document**：Next.js 的 `_document.js` 文件允许您自定义 HTML 文档结构，比如修改 `<html>`、`<head>` 和 `<body>` 标签。适合添加全局 meta 标签、脚本或样式表。

#### Example with Comments:

```js
// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Add custom meta tags or external scripts */}
        <meta charSet="UTF-8" />
        <link rel="stylesheet" href="/global.css" />
      </Head>
      <body>
        <Main /> {/* Main Next.js application */}
        <NextScript /> {/* Next.js scripts */}
      </body>
    </Html>
  );
}
```

In this example:
- **`<Html lang="en">`** sets the language attribute globally.
- **`<Head>`** adds a global stylesheet.