### `useReducer` in React

**`useReducer`**: This React Hook is an alternative to `useState` for managing more **complex state logic**. It takes a **reducer function** and an **initial state** as arguments. The reducer function defines how the state should be updated based on the **action** dispatched. It returns the current state and a dispatch function to trigger state updates. It’s useful when state logic involves multiple sub-values or complex transitions.

#### Key Points:
- Manages **complex state** logic.
- Takes a **reducer function** and an **initial state**.
- Returns **state** and a **dispatch function**.

> **`useReducer`**：这是 `useState` 的替代钩子，用于管理更复杂的状态逻辑。它接收一个 reducer 函数和初始状态。reducer 函数定义如何根据操作更新状态，返回当前状态和用于触发状态更新的 dispatch 函数。

#### Example with Comments:

```jsx
import React, { useReducer } from 'react';

// Reducer function to handle state transitions
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

export default function Counter() {
  // Initialize state using useReducer
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
}
```

In this example:
- **`useReducer`** manages the `count` state with actions (`increment` and `decrement`) dispatched to the reducer to update the state.