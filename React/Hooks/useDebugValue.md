### `useDebugValue` in React

**`useDebugValue`**: This React Hook is used to **display custom labels** in React DevTools for custom hooks. It helps developers easily debug custom hooks by providing meaningful information. You can pass a value that will be shown in the DevTools, and optionally, format that value for better readability. It’s useful for improving the **debugging experience**, especially for complex hooks.

#### Key Points:
- Displays **custom labels** in React DevTools.
- Used inside **custom hooks** for easier debugging.

> **`useDebugValue`**：此钩子用于在 React DevTools 中显示自定义标签，方便调试自定义钩子。通过传递值，可以在开发工具中显示有意义的信息，帮助开发者更轻松地调试复杂钩子。

#### Example with Comments:

```jsx
import React, { useState, useDebugValue } from 'react';

// Custom hook with useDebugValue
function useCustomCounter() {
  const [count, setCount] = useState(0);

  // Display the current count in React DevTools
  useDebugValue(count > 5 ? 'High Count' : 'Low Count');

  return [count, setCount];
}

export default function MyComponent() {
  const [count, setCount] = useCustomCounter();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

In this example:
- **`useDebugValue`** shows **`High Count`** or **`Low Count`** in React DevTools based on the counter's current value.