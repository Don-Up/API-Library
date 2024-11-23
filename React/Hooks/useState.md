### `useState` in React

**`useState`**: This is a **React Hook** that allows you to add **state** to functional components. It returns an array with two values: the **current state** and a **function to update the state**. You can pass an initial state to `useState`, which can be a value or a function. When the state is updated, the component re-renders to reflect the changes.

<audio src="..\..\mp3\__`useState`___.mp3"></audio>

#### Key Points:
- Adds **state** to functional components.

- Returns the **state variable** and an **update function**.

- <audio src="..\..\mp3\- Adds __state_.mp3"></audio>

> **`useState`**：这是一个 React 钩子，允许您在函数组件中添加状态。它返回一个数组，包含当前状态和一个用于更新状态的函数。当状态更新时，组件会重新渲染以反映更改。
>
> <audio src="..\..\mp3\useState：这是一个 R.mp3"></audio>

#### Example with Comments:

<audio src="..\..\mp3\这段代码展示了如何使用 Rea (9).mp3"></audio>

```jsx
import React, { useState } from 'react';

export default function Counter() {
  // Declare state variable 'count' with initial value 0
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Current Count: {count}</p>
      {/* Update the state when the button is clicked */}
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

In this example:
- **`useState(0)`** initializes the state variable `count` to **0**, and **`setCount`** is used to update it.

- <audio src="..\..\mp3\__`useState(0)`.mp3"></audio>