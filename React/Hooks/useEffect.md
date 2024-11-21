### `useEffect` in React

**`useEffect`**: This is a **React Hook** that allows you to perform **side effects** in functional components, such as **data fetching**, **subscriptions**, or **manipulating the DOM**. It runs after the component renders and can be configured to run **once** (on mount) or **on updates** by specifying **dependencies** in an array. You can also return a **cleanup function** to handle side effects like removing listeners when the component unmounts.

#### Key Points:
- Manages **side effects** in functional components.
- Can run **on mount**, **on update**, or **on unmount**.

> **`useEffect`**：这是一个 React 钩子，允许在函数组件中执行副作用操作，如数据获取、订阅或 DOM 操作。它在组件渲染后运行，并可通过依赖数组控制其执行时机。

#### Example with Comments:

```jsx
import React, { useEffect, useState } from 'react';

export default function MyComponent() {
  const [data, setData] = useState(null);

  // Fetch data when the component mounts
  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => setData(data));
    
    // Cleanup function (optional)
    return () => {
      console.log('Component unmounted');
    };
  }, []); // Empty array means it runs only once (on mount)

  return <div>Data: {data ? JSON.stringify(data) : 'Loading...'}</div>;
}
```

In this example:
- **`useEffect`** runs once after the component mounts to **fetch data**, and the cleanup function logs a message when the component unmounts.