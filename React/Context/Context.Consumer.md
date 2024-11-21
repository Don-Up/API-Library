### `Context.Consumer` in React

**`Context.Consumer`**: This component allows you to **consume** a context value within the component tree. It expects a **function as a child** that receives the current context value and returns JSX. The `Consumer` is useful in class components or when the `useContext` hook is not available. If no `Provider` is found, it uses the **default value** set by `createContext`.

#### Key Points:
- Consumes context value via a **render function**.
- Useful in **class components** or when `useContext` is not an option.

> **`Context.Consumer`**：此组件用于在组件树中获取上下文值。它期望接收一个函数作为子组件，该函数返回 JSX，并可以访问当前的上下文值。如果没有找到 `Provider`，它将使用 `createContext` 设置的默认值。

#### Example with Comments:

```jsx
import React, { createContext } from 'react';

// Create a Context with a default value
const ThemeContext = createContext('light');

export default function App() {
  return (
    // Provide a context value
    <ThemeContext.Provider value="dark">
      <ThemeContext.Consumer>
        {theme => (
          <div>
            <p>Current theme: {theme}</p>
          </div>
        )}
      </ThemeContext.Consumer>
    </ThemeContext.Provider>
  );
}
```

In this example:
- **`ThemeContext.Consumer`** consumes the context value (`"dark"`) provided by `ThemeContext.Provider` and displays it inside the render function. 