### `getStaticProps` in Next.js

**`getStaticProps`**: This Next.js function allows you to **fetch data at build time** for static generation (SSG). It runs on the server during the build process and provides the fetched data to the page as props. This method is ideal for pages with content that doesn’t change frequently, improving performance by pre-rendering the page.

#### Key Points:
- Only runs at **build time**.
- Ideal for **static pages** with external data sources (e.g., CMS, APIs).

> **`getStaticProps`**：Next.js 的 `getStaticProps` 函数允许在构建时获取数据，用于静态页面生成。它在构建过程中运行，将获取的数据作为 props 提供给页面。

#### Example with JSX Comments:

```js
// pages/posts.js
export async function getStaticProps() {
  // Fetch data from an API or database
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  return {
    props: {
      posts, // Pass posts as a prop to the page
    },
  };
}

const Posts = ({ posts }) => (
  <div>
    <h1>Posts</h1>
    <ul>
      {posts.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  </div>
);

export default Posts;
```

In this example:
- **`getStaticProps`** fetches posts at build time.
- The fetched posts are passed to the **`Posts`** component as props.