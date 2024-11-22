### `React.lazy` in React

**`React.lazy`**: This function enables **code-splitting** by dynamically loading components when they are rendered. It allows you to **lazy-load** components, which can improve the performance of your app by reducing the initial bundle size. `React.lazy` works well with **`<React.Suspense>`**, which provides a fallback UI (like a spinner) while the lazy-loaded component is being fetched.

<audio src="../../../../Downloads/__`React.lazy`_.mp3"></audio>

#### Key Points:
- Enables **lazy-loading** of components.
- Requires **`<Suspense>`** for fallback during loading.

> **`React.lazy`**：此函数允许在渲染时动态加载组件，实现代码拆分。使用它可以延迟加载组件，从而减少初始包的大小，提高应用性能。需要配合 `<Suspense>` 来提供加载时的回退 UI。
>
> <audio src="../../../../Downloads/React.lazy：此函数允.mp3"></audio>

#### Example with Comments:

<audio src="../../../../Downloads/这段代码展示了如何在 Reac (1).mp3"></audio>

```jsx
import React, { Suspense, lazy } from 'react';

// Lazy-loaded component
const LazyComponent = lazy(() => import('./MyComponent'));

export default function App() {
  return (
    <div>
      <h1>Main Application</h1>
      <Suspense fallback={<div>Loading...</div>}>
        {/* LazyComponent is only loaded when rendered */}
        <LazyComponent />
      </Suspense>
    </div>
  );
}
```

In this example:
- **`LazyComponent`** is loaded only when it’s rendered, and **`<Suspense>`** provides a loading state during the fetch.