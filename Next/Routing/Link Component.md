### `Link` Component in Next.js

**`Link` Component**: Next.js provides the **`Link`** component for client-side navigation between pages. It enables **preloading** of the linked page, improving performance by reducing load times when navigating. Instead of using a regular `<a>` tag, use `Link` for internal routing between pages in your Next.js app, ensuring fast, seamless transitions.

#### Common Usage:
- **`<Link href="/about">`**: Navigates to the `/about` page.

> **`Link` 组件**：Next.js 提供的 `Link` 组件用于客户端页面跳转，并且会预加载链接的页面，提高性能。使用 `Link` 代替普通的 `<a>` 标签来进行应用内的页面路由跳转。

#### React Example with JSX Comments:

```jsx
import Link from 'next/link';

const MyComponent = () => {
  return (
    <nav>
      {/* Client-side navigation to the About page */}
      <Link href="/about">
        <a>Go to About</a>
      </Link>
    </nav>
  );
};

export default MyComponent;
```

In this example:
- **`Link href="/about"`** wraps an anchor tag, enabling client-side navigation to the `/about` page without a full page reload.