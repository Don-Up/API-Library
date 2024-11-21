### Custom Error Pages in Next.js

**Custom Error Pages**: Next.js allows you to create custom error pages by defining special files like **`404.js`** and **`_error.js`** within the `pages` directory. The `404.js` is for handling **404 Not Found** errors, while `_error.js` handles other errors (e.g., 500). These pages can be styled and customized to provide a better user experience and branding during errors.

#### Key Points:
- **`404.js`** for **404 errors**.
- **`_error.js`** for handling other errors (e.g., 500).

> **自定义错误页面**：Next.js 允许通过在 `pages` 目录中定义 `404.js` 和 `_error.js` 文件来自定义错误页面。`404.js` 用于处理 404 错误，而 `_error.js` 处理其他错误。

#### Example with Comments:

```jsx
// pages/404.js
export default function Custom404() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you're looking for doesn't exist.</p>
    </div>
  );
}

// pages/_error.js
export default function CustomError({ statusCode }) {
  return (
    <div>
      <h1>{statusCode} - Something went wrong</h1>
    </div>
  );
}

CustomError.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};
```

In this example:
- **`404.js`** handles custom 404 error pages.
- **`_error.js`** handles other errors with customizable error messages.