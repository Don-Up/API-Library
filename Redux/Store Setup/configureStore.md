### `configureStore`

- **`configureStore`**: A function provided by Redux Toolkit that simplifies store setup by combining reducers, applying middleware, and enabling Redux DevTools by default. It reduces boilerplate and is the recommended way to create a Redux store. You can pass slice reducers and middleware, and it automatically sets up useful defaults like `redux-thunk` for async logic.

> **`configureStore`**：Redux Toolkit 提供的函数，用于简化 Redux store 的配置。它自动组合 reducer、应用中间件并启用 Redux DevTools，减少了样板代码，是推荐的创建 store 的方式。

#### Example:

```js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice'; // Importing a slice reducer

// Creating a Redux store with configureStore
const store = configureStore({
  reducer: {
    counter: counterReducer, // Providing the reducer for the counter slice
  },
});

// Exporting the store to be used in your app
export default store;
```

`configureStore` is an all-in-one tool that simplifies Redux store creation, automatically applying useful defaults like middleware (e.g., `redux-thunk`) and DevTools support.