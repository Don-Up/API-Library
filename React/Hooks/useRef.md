### `useRef` in React

**`useRef`**: This React Hook returns a **mutable ref object** whose `.current` property persists across renders. It’s commonly used to reference **DOM elements** or store **instance variables** without triggering a re-render when updated. Unlike state, changes to the ref's `.current` do not cause the component to re-render. It can also be used for accessing previous values or storing temporary data.

#### Key Points:
- Returns a **ref object** with a `.current` property.
- Useful for **DOM access** or **persistent values** without causing re-renders.

> **`useRef`**：这是一个 React 钩子，返回一个可变的 `ref` 对象，其 `.current` 属性在渲染之间保持不变。通常用于引用 DOM 元素或存储实例变量，更新时不会触发重新渲染。

#### Example with Comments:

```jsx
import React, { useRef } from 'react';

export default function MyComponent() {
  const inputRef = useRef(null); // Create a ref for the input element

  const focusInput = () => {
    inputRef.current.focus(); // Access the input DOM element directly
  };

  return (
    <div>
      <input ref={inputRef} placeholder="Enter text" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}
```

In this example:
- **`useRef(null)`** creates a ref for the input, and **`inputRef.current.focus()`** is used to focus the input element directly without re-rendering.