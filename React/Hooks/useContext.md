### `useContext` in React

**`useContext`**: This React Hook allows you to access the **value** of a **context** directly within a functional component. It simplifies consuming context values without needing the **`Context.Consumer`** wrapper. The `useContext` hook takes a **context object** (created with `React.createContext`) as an argument and returns its current value, allowing components to easily share common values like themes, user data, or settings across the component tree.

<audio src="C:\Users\10691\Downloads\__`useContext`_.mp3"></audio>

#### Key Points:

<audio src="C:\Users\10691\Downloads\- Accesses __co.mp3"></audio>

- Accesses **context value** directly in functional components.
- Simplifies context consumption compared to `Context.Consumer`.

> **`useContext`**：这是一个 React 钩子，允许在函数组件中直接获取上下文的值，而无需使用 `Context.Consumer`。它通过传入上下文对象并返回当前值，以便在组件树中共享数据。
>
> <audio src="C:\Users\10691\Downloads\`useContext`：这是.mp3"></audio>

#### Example with Comments:

<audio src="C:\Users\10691\Downloads\这段代码展示了如何使用 Rea.mp3"></audio>

```jsx
import React, { useContext } from 'react';

// Create a Context
const ThemeContext = React.createContext('light');

export default function MyComponent() {
  // Access the current context value
  const theme = useContext(ThemeContext);

  return (
    <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}>
      Current theme: {theme}
    </div>
  );
}

// Example of providing a context value
export function App() {
  return (
    <ThemeContext.Provider value="dark">
      <MyComponent />
    </ThemeContext.Provider>
  );
}
```

In this example:
- **`useContext(ThemeContext)`** accesses the current **theme** value (`'dark'`), which is provided by the `ThemeContext.Provider`.

- <audio src="C:\Users\10691\Downloads\__`useContext(T.mp3"></audio>