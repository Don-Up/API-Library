### `createReducer`

- **`createReducer`**: A function from Redux Toolkit that simplifies writing reducer logic. It allows "mutating" syntax by using Immer under the hood, so you can directly modify the state without violating immutability. It maps action types to reducer functions and handles state changes in a concise way.

> **`createReducer`**：Redux Toolkit 提供的函数，用于简化编写 reducer 逻辑。它使用 Immer 支持“可变”语法，允许直接修改状态而不违反不可变性规则。它将 action 类型映射到 reducer 函数，使状态管理更加简洁。

#### Example:

```js
import { createReducer } from '@reduxjs/toolkit';
import { increment, decrement } from './counterActions';

// Initial state for the counter
const initialState = { value: 0 };

// Creating a reducer using createReducer
const counterReducer = createReducer(initialState, {
  // Action handlers
  [increment]: (state) => {
    state.value += 1;  // Directly mutating state using Immer
  },
  [decrement]: (state) => {
    state.value -= 1;
  },
});

export default counterReducer;
```

In this example, `createReducer` simplifies the traditional reducer pattern by allowing direct state mutation, making the code more intuitive while still ensuring immutability under the hood.