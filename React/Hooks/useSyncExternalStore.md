### `useSyncExternalStore` in React

**`useSyncExternalStore`**: This React Hook allows components to subscribe to **external stores** (such as Redux or other custom stores) and stay in sync with their updates. It ensures that the component subscribes to the store's updates in a way that’s **compatible with concurrent rendering**. The hook takes three arguments: a **subscribe function**, a function to **get the current snapshot** of the store, and an optional function for **server-side rendering** (SSR).

#### Key Points:
- Syncs components with **external stores**.
- Ensures compatibility with **concurrent rendering**.

> **`useSyncExternalStore`**：此钩子允许组件订阅外部存储（如 Redux 或自定义存储），确保在并发渲染下与存储的更新同步。接收三个参数：订阅函数、获取当前快照的函数、以及可选的服务端渲染函数。

#### Example with Comments:

```jsx
import React, { useSyncExternalStore } from 'react';

// A simple store with a subscribe method
const store = {
  state: 0,
  listeners: new Set(),
  increment() {
    this.state += 1;
    this.listeners.forEach((listener) => listener());
  },
  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  },
  getState() {
    return this.state;
  },
};

export default function Counter() {
  // Use useSyncExternalStore to subscribe to the store
  const state = useSyncExternalStore(
    store.subscribe,  // Subscribe to store updates
    store.getState     // Get the current state snapshot
  );

  return (
    <div>
      <p>Count: {state}</p>
      <button onClick={() => store.increment()}>Increment</button>
    </div>
  );
}
```

In this example:
- **`useSyncExternalStore`** ensures the component stays in sync with the store's state and updates efficiently when the store changes.