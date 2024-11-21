### `useRouter` in Next.js

**`useRouter`**: The `useRouter` hook from Next.js provides access to the **router object**, enabling navigation and retrieving route information inside functional components. It allows you to programmatically navigate between pages, access query parameters, and listen to route changes. This is essential for dynamic routing and client-side navigation.

#### Common Uses:
- **`router.push('/path')`**: Navigate to a new page.
- **`router.query`**: Access URL query parameters.

> **`useRouter`**：`useRouter` 是 Next.js 提供的钩子，它允许在函数组件中访问路由对象，进行页面跳转、获取查询参数等操作。

#### React Example with JSX Comments:

```jsx
import { useRouter } from 'next/router';

const MyComponent = () => {
  const router = useRouter();

  // Access query parameters
  const { id } = router.query;

  // Navigate to another page
  const goToHome = () => {
    router.push('/');
  };

  return (
    <div>
      <p>Current ID: {id}</p>
      <button onClick={goToHome}>Go to Home</button>
    </div>
  );
};

export default MyComponent;
```

In this example:
- **`router.query`** is used to access the `id` parameter from the URL.
- **`router.push('/')`** is used to navigate to the home page programmatically.