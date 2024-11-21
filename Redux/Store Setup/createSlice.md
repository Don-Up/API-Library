### `createSlice`

- **`createSlice`**: A function from Redux Toolkit that simplifies the process of creating Redux reducers and actions. It automatically generates action creators and action types based on the reducers you define. Each slice contains a reducer, initial state, and action creators. This reduces boilerplate and ensures a more concise, readable Redux setup.

> **`createSlice`**：Redux Toolkit 提供的函数，用于简化创建 Redux reducer 和 action 的过程。它基于定义的 reducer 自动生成 action 创建器和 action 类型，从而减少样板代码，使 Redux 配置更简洁可读。

#### Example:

```js
import { createSlice } from '@reduxjs/toolkit';

// Creating a slice for counter
const counterSlice = createSlice({
  name: 'counter',      // Name of the slice
  initialState: 0,      // Initial state
  reducers: {
    increment: (state) => state + 1,  // Reducer to increment the count
    decrement: (state) => state - 1,  // Reducer to decrement the count
  },
});

// Exporting the generated action creators
export const { increment, decrement } = counterSlice.actions;

// Exporting the reducer to be used in the store
export default counterSlice.reducer;
```

`createSlice` simplifies the Redux logic by automatically generating action creators and reducing boilerplate, making the code easier to maintain and understand.