### `getServerSideProps` in Next.js

**`getServerSideProps`**: This Next.js function is used to fetch data **on each request** for server-side rendering (SSR). It runs on the server every time a page is requested, making it ideal for pages that need up-to-date or dynamic data that changes frequently (e.g., user data, live APIs).

#### Key Points:
- Fetches data **on request**, not at build time.
- Ideal for **dynamic content** that needs to be always fresh.

> **`getServerSideProps`**：`getServerSideProps` 函数用于在每次请求时获取数据，适用于服务器端渲染。它在服务器上运行，适合需要实时更新数据的页面。

#### Example with JSX Comments:

```js
// pages/user.js
export async function getServerSideProps() {
  // Fetch user data at request time
  const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
  const user = await res.json();

  return {
    props: {
      user, // Pass user data to the page as props
    },
  };
}

const User = ({ user }) => (
  <div>
    <h1>{user.name}</h1>
    <p>Email: {user.email}</p>
  </div>
);

export default User;
```

In this example:
- **`getServerSideProps`** fetches user data on every request.
- The fetched **`user`** data is passed to the **`User`** component as props.