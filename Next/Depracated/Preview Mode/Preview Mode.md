### Preview Mode in Next.js

**Preview Mode**: Next.js's Preview Mode allows you to view **unpublished content** or **drafts** from a headless CMS or external data source. When Preview Mode is enabled, the page bypasses static generation and re-renders on each request using **`getStaticProps`**. This is useful for content editors who need to see changes before publishing.

#### Key Points:
- Enables **dynamic content** rendering for previews.
- Activated via API routes and checked in **`getStaticProps`**.

> **预览模式**：Next.js 的预览模式允许您查看来自无头 CMS 或外部数据源的未发布内容。启用预览模式时，页面将跳过静态生成，每次请求都会重新渲染。

#### Example with Comments:

```js
// pages/api/preview.js
export default function handler(req, res) {
  res.setPreviewData({}); // Enable Preview Mode
  res.redirect('/');      // Redirect to the homepage after enabling
}

// pages/index.js
export async function getStaticProps(context) {
  if (context.preview) {
    // Fetch draft content in preview mode
    return { props: { message: 'This is a preview!' } };
  }
  // Fetch normal published content
  return { props: { message: 'Hello, World!' } };
}

const HomePage = ({ message }) => <h1>{message}</h1>;

export default HomePage;
```

In this example:
- **`res.setPreviewData`** enables Preview Mode.
- **`context.preview`** checks if Preview Mode is active in `getStaticProps`.