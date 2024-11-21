### `Head` Component in Next.js

**`Head` Component**: The `Head` component in Next.js allows you to modify the contents of the HTML `<head>` section, such as setting **meta tags**, **title**, **links**, and other elements like **favicon**. It is useful for setting page-specific metadata, which can improve SEO and control how the page appears in search engines or when shared on social media.

#### Key Points:
- Modify the **`<head>`** tag for **SEO** and **social sharing**.
- Can be used **per page** for custom metadata.

> **`Head` 组件**：Next.js 的 `Head` 组件允许修改 HTML 的 `<head>` 部分，例如设置 meta 标签、标题、链接等。它有助于改进 SEO 并自定义页面在搜索引擎或社交媒体中的展示效果。

#### Example with JSX Comments:

```jsx
import Head from 'next/head';

const MyPage = () => {
  return (
    <div>
      {/* Modify the <head> section */}
      <Head>
        <title>My Custom Page Title</title>
        <meta name="description" content="This is a custom description for SEO." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Welcome to My Page</h1>
    </div>
  );
};

export default MyPage;
```

In this example:
- **`<title>`** sets the page title.
- **`<meta>`** adds a description for SEO.
- **`<link>`** sets a custom favicon.