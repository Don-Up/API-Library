### Dynamic Routing in Next.js

**Dynamic Routing**: Next.js supports dynamic routing by using **file and folder names** inside the `pages` directory. Files with square brackets, such as `[id].js`, create dynamic routes. This allows you to handle URLs with variable segments (e.g., `/post/1` or `/post/2`). You can access the dynamic parameters with **`useRouter`** or via functions like **`getStaticProps`** or **`getServerSideProps`**.

#### Example:
- A file named **`[id].js`** in the `pages/post` directory will map to `/post/1`, `/post/2`, etc.

> **动态路由**：Next.js 通过 `pages` 目录中的方括号文件名（如 `[id].js`）支持动态路由，允许处理带有变量段的 URL，如 `/post/1` 或 `/post/2`。

#### React Example with JSX Comments:

```jsx
// pages/post/[id].js
import { useRouter } from 'next/router';

const Post = () => {
  const router = useRouter();
  const { id } = router.query;  // Access the dynamic route parameter

  return <p>Post ID: {id}</p>;
};

export default Post;
```

In this example:
- The file **`[id].js`** creates a dynamic route.
- **`router.query.id`** accesses the dynamic `id` parameter from the URL (e.g., `/post/1`).