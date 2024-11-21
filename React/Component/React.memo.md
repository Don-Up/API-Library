### `React.memo` in React

**`React.memo`**: This is a higher-order component (HOC) that **memoizes** functional components. It prevents unnecessary re-renders by performing a **shallow comparison** of the component’s **props**. If the props haven't changed, React skips re-rendering the component, optimizing performance. It’s useful for **pure functional components** where the output is solely determined by props. You can also pass a custom comparison function to handle more complex scenarios.

#### Key Points:
- Prevents re-renders if **props** haven’t changed.
- Ideal for **pure functional components**.

> **`React.memo`**：这是一个高阶组件，用于对函数组件进行缓存，防止不必要的重新渲染。它通过对 `props` 进行浅比较，如果 `props` 未改变，则跳过重新渲染，优化性能。

#### Example with Comments:

```jsx
import React from 'react';

// Memoized functional component
const MyComponent = React.memo(({ count }) => {
  console.log('Rendered');
  return <p>Count: {count}</p>;
});

export default function App() {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <MyComponent count={count} /> {/* Will only re-render if `count` changes */}
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

In this example:
- **`MyComponent`** only re-renders when the `count` prop changes, optimizing performance.