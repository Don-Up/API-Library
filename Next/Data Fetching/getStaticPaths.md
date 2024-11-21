### `getStaticPaths` in Next.js

**`getStaticPaths`**: This Next.js function is used alongside **`getStaticProps`** to generate dynamic routes for **static pages**. It specifies which paths should be pre-rendered at build time based on external data. This is essential for dynamic routes (e.g., `/post/[id]`), where multiple pages need to be generated based on the data.

#### Key Points:
- Works with **`getStaticProps`** for dynamic SSG.
- Returns an array of paths to pre-render.

> **`getStaticPaths`**：`getStaticPaths` 与 `getStaticProps` 一起使用，用于为动态路由生成静态页面。它返回需要在构建时预渲染的路径列表，适用于基于外部数据的动态路由。

#### Example with JSX Comments:

```js
// pages/posts/[id].js
export async function getStaticPaths() {
  // Fetch available post IDs
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  // Map post IDs to paths
  const paths = posts.map(post => ({
    params: { id: post.id.toString() },
  }));

  return { paths, fallback: false }; // Pre-render only these paths
}

export async function getStaticProps({ params }) {
  // Fetch data for each post
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
  const post = await res.json();

  return { props: { post } };
}

const Post = ({ post }) => (
  <div>
    <h1>{post.title}</h1>
    <p>{post.body}</p>
  </div>
);

export default Post;
```

In this example:
- **`getStaticPaths`** generates dynamic paths for each post.
- **`getStaticProps`** fetches the data for each individual post based on its `id`.