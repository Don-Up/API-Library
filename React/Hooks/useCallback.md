### `useCallback` in React

**`useCallback`**: This React Hook returns a **memoized version** of a function that only changes if its **dependencies** change. It is useful for **optimizing performance** in components that pass functions as props to prevent unnecessary re-renders. By memoizing the function, React ensures that the same function reference is used unless the dependencies change, avoiding re-creating the function on every render.

<audio src="C:\Users\10691\Downloads\__`useCallback`.mp3"></audio>

#### Key Points:

<audio src="C:\Users\10691\Downloads\- Memoizes func.mp3"></audio>

- Memoizes functions to avoid **re-creation** on every render.
- Recreates the function only when **dependencies** change.

> **`useCallback`**：这是一个 React 钩子，返回一个记忆化的函数版本，只有在依赖项更改时才会重新生成。它用于优化性能，防止传递函数作为 props 时导致不必要的重新渲染。

#### Example with Comments:

<audio src="C:\Users\10691\Downloads\这段代码展示了一个使用 Rea.mp3"></audio>

```jsx
import React, { useState, useCallback } from 'react';

export default function MyComponent() {
  const [count, setCount] = useState(0);

  // Memoize the increment function to prevent it from being re-created on every render
  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []); // No dependencies, so the function won't change

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
```

In this example:
- **`useCallback`** ensures that the `increment` function is **memoized** and will not be re-created unless dependencies change.

- <audio src="C:\Users\10691\Downloads\__`useCallback` (1).mp3"></audio>