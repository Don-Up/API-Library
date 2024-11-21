### `combineReducers`

- **`combineReducers`**: A function provided by Redux that merges multiple reducer functions into a single root reducer. Each reducer manages its own part of the state, and `combineReducers` ensures that these individual slices are combined into one global state object. It helps in structuring large applications by dividing state into manageable slices.

> **`combineReducers`**：Redux 提供的函数，用于将多个 reducer 函数合并为一个根 reducer。每个 reducer 管理状态的一部分，`combineReducers` 将这些部分合并成一个全局状态对象，帮助简化大型应用程序的状态管理。

#### Example:

```js
import { combineReducers } from 'redux';
import counterReducer from './counterSlice';
import userReducer from './userSlice';

// Combine multiple reducers into a single root reducer
const rootReducer = combineReducers({
  counter: counterReducer,  // Slice of the state for counter
  user: userReducer,        // Slice of the state for user
});

// Exporting the root reducer to be used in the store
export default rootReducer;
```

In this example, `combineReducers` merges the `counter` and `user` reducers into one root reducer, allowing you to manage different parts of the state separately while keeping the overall state global and organized.