### `React.createContext` in React

**`React.createContext`**: This function creates a **Context** object, enabling you to share data (like state or functions) between components without having to pass props through every level of the tree. It returns a **Provider** and **Consumer**. The `Provider` component wraps a part of the component tree and supplies the context value, while the `Consumer` or `useContext` hook allows components to access the shared value.

#### Key Points:
- Creates a **context** to share values across components.
- Provides a **Provider** and **Consumer** for managing and accessing the context.

> **`React.createContext`**：此函数创建一个上下文对象，允许在组件之间共享数据，而无需通过每个组件层级传递 props。返回的 `Provider` 用于提供上下文值，`Consumer` 或 `useContext` 用于访问该共享值。

#### Example with Comments:

```jsx
import React, { createContext, useContext } from 'react';

// Create a Context with a default value
const ThemeContext = createContext('light');

function MyComponent() {
  // Access the context value
  const theme = useContext(ThemeContext);
  return <div>Current Theme: {theme}</div>;
}

export default function App() {
  return (
    // Provide a context value to the component tree
    <ThemeContext.Provider value="dark">
      <MyComponent />
    </ThemeContext.Provider>
  );
}
```

In this example:
- **`ThemeContext.Provider`** supplies the value `'dark'`, and **`useContext(ThemeContext)`** is used to access the current theme inside `MyComponent`.