### `Provider`

- **`Provider`**: A component from React Redux that makes the Redux store available to any nested components within the app. It wraps the entire application (or part of it) and passes the Redux store down via React's context API, enabling components to access the store using hooks like `useSelector` and `useDispatch`.

> **`Provider`**：React Redux 提供的组件，作用是将 Redux 的 store 提供给应用中的嵌套组件。它通过 React 的上下文 API 传递 store，允许组件使用 `useSelector` 和 `useDispatch` 等钩子访问 store。

#### Example:

```jsx
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';  // The Redux store
import App from './App';

const Root = () => (
  // Wrap the App component with Provider and pass down the store
  <Provider store={store}>
    <App />
  </Provider>
);

export default Root;
```

Here, `Provider` ensures that all components within `App` can access the Redux store and interact with it, either by reading state or dispatching actions.