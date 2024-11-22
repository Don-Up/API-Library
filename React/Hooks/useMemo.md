### `useMemo` in React

**`useMemo`**: This React Hook memoizes the result of a **computationally expensive function** and only recalculates the value when its **dependencies** change. It helps optimize performance by avoiding re-running the function on every render. You provide a function and a dependency array, and React returns the **cached result** unless the dependencies change.

<audio src="..\..\mp3\__`useMemo`___ .mp3"></audio>

#### Key Points:
- Memoizes **expensive calculations**.

- Recomputes the value only if **dependencies** change.

- <audio src="..\..\mp3\- Memoizes __ex.mp3"></audio>

> **`useMemo`**：这是一个 React 钩子，用于记忆化计算量大的函数结果，只有在依赖项发生变化时才会重新计算。它通过避免每次渲染时重新计算来优化性能。
>
> <audio src="..\..\mp3\`useMemo`：这是一个 .mp3"></audio>

#### Example with Comments:

<audio src="..\..\mp3\这段代码展示了如何使用 Rea (6).mp3"></audio>

```jsx
import React, { useState, useMemo } from 'react';

export default function MyComponent() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  // Memoize the expensive calculation
  const expensiveCalculation = useMemo(() => {
    console.log('Calculating...');
    return count * 2; // Expensive computation
  }, [count]); // Recalculate only when `count` changes

  return (
    <div>
      <p>Expensive Calculation Result: {expensiveCalculation}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <input 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Type something" 
      />
    </div>
  );
}
```

In this example:
- **`useMemo`** is used to avoid recalculating the result of `count * 2` unless **`count`** changes, improving performance when the component re-renders.

- <audio src="..\..\mp3\__`useMemo`__ i.mp3"></audio>