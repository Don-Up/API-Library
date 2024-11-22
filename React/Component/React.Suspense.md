### `React.Suspense` in React

**`React.Suspense`**: This component allows you to **suspend rendering** while waiting for a **lazy-loaded** component or asynchronous data to be ready. It displays a **fallback UI** (like a spinner or loading message) until the wrapped content is available. It works with **`React.lazy`** for **code-splitting** and can also be used for **data fetching** in future React features.

<audio src="..\..\mp3/__`React.Suspen.mp3"></audio>

#### Key Points:
- Displays a **fallback** while waiting for **lazy-loaded** components.
- Essential for **React.lazy** and future **Concurrent Mode** features.

> **`React.Suspense`**：此组件允许在等待延迟加载的组件或异步数据时暂停渲染，显示一个回退 UI（如加载指示器）。它与 `React.lazy` 配合使用，实现代码拆分。
>
> <audio src="..\..\mp3/`React.Suspense.mp3"></audio>

#### Example with Comments:

<audio src="..\..\mp3/这段代码展示了如何使用 Rea (21).mp3"></audio>

<audio src="..\..\mp3/This code demon (2).mp3"></audio>

```jsx
import React, { Suspense, lazy } from 'react';

// Lazy-loaded component
const LazyComponent = lazy(() => import('./LazyComponent'));

export default function App() {
  return (
    <div>
      <h1>Main Application</h1>
      {/* Suspense provides a fallback while LazyComponent is loading */}
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}
```

In this example:
- **`<Suspense>`** renders a loading message while **`LazyComponent`** is being fetched.