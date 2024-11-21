### `useTransition` in React

**`useTransition`**: This React Hook lets you mark state updates as **non-urgent**, allowing you to keep the UI responsive during expensive re-renders. It returns a tuple with a boolean (`isPending`) and a function (`startTransition`). The boolean indicates if the transition is in progress, and the function is used to defer updates. It’s particularly useful for prioritizing urgent updates (like input typing) over expensive operations (like filtering large lists).

#### Key Points:
- Defers **non-urgent** state updates.
- Improves **UI responsiveness** during expensive updates.

> **`useTransition`**：此钩子允许将状态更新标记为**非紧急**，在昂贵的重新渲染期间保持 UI 响应。返回一个布尔值和一个函数，布尔值指示过渡是否进行中，函数用于延迟更新。

#### Example with Comments:

```jsx
import React, { useState, useTransition } from 'react';

export default function MyComponent() {
  const [list, setList] = useState([]);
  const [isPending, startTransition] = useTransition();

  const handleClick = () => {
    // Mark this update as non-urgent
    startTransition(() => {
      const newList = Array(20000).fill(0).map((_, i) => i);
      setList(newList);
    });
  };

  return (
    <div>
      <button onClick={handleClick}>Load Large List</button>
      {isPending ? <p>Loading...</p> : <ul>{list.map(item => <li key={item}>{item}</li>)}</ul>}
    </div>
  );
}
```

In this example:
- **`startTransition`** defers the update of a large list, while **`isPending`** shows a loading state during the transition.