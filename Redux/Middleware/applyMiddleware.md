### `applyMiddleware`

- **`applyMiddleware`**: A Redux function that allows you to extend Redux with custom middleware, such as logging actions, handling async logic (e.g., `redux-thunk`), or modifying dispatched actions. Middleware in Redux sits between dispatching an action and the moment it reaches the reducer, allowing you to add extra functionality to the action flow.

> **`applyMiddleware`**：Redux 提供的函数，用于通过自定义中间件扩展 Redux，例如记录操作日志、处理异步逻辑（如 `redux-thunk`）或修改派发的操作。中间件位于派发操作和到达 reducer 之间，允许在操作流中添加额外的功能。

#### Example:

```js
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // Middleware for async actions
import rootReducer from './reducers';

// Applying middleware (redux-thunk) to the store
const store = createStore(
  rootReducer,
  applyMiddleware(thunk) // Applying thunk middleware for handling async logic
);

export default store;
```

In this example, `applyMiddleware` is used to integrate `redux-thunk`, enabling the store to handle asynchronous actions such as API calls by dispatching functions instead of plain action objects.