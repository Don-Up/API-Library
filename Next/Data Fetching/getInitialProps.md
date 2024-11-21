### `getInitialProps` in Next.js

**`getInitialProps`**: This Next.js function allows for **data fetching** on both the **server and client side** during the initial page load. It works in both **SSR** (server-side rendering) and **client-side navigation**. However, it’s a legacy feature, and **`getStaticProps`** or **`getServerSideProps`** are preferred for static generation or SSR. It can be used in both **pages** and **custom App components**.

#### Key Points:
- Runs on **both server and client**.
- Use **`getStaticProps`** or **`getServerSideProps`** for new projects.

> **`getInitialProps`**：`getInitialProps` 允许在初始页面加载时，在服务器和客户端进行数据获取。它适用于服务器端渲染和客户端导航。但这是一个遗留功能，推荐使用 `getStaticProps` 或 `getServerSideProps`。

#### Example with JSX Comments:

```js
// pages/about.js
const About = ({ data }) => (
  <div>
    <h1>About Page</h1>
    <p>{data}</p>
  </div>
);

// Fetch data during the initial page load
About.getInitialProps = async () => {
  const res = await fetch('https://api.example.com/data');
  const data = await res.json();
  return { data: data.message };
};

export default About;
```

In this example:
- **`getInitialProps`** fetches data on both the server during the initial request and on the client during navigation.
- The **`data`** is passed as props to the **`About`** page.