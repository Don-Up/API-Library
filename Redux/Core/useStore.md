### `useStore`

- **`useStore`**: A hook provided by React Redux that returns the Redux store instance. It allows direct access to the store's methods, like `getState()` and `dispatch()`. While most use cases are covered by `useSelector` and `useDispatch`, `useStore` is helpful when you need raw access to the store, such as getting the entire state synchronously.

> **`useStore`**：React Redux 提供的钩子，返回 Redux store 实例。它允许直接访问 store 的方法，比如 `getState()` 和 `dispatch()`。通常 `useSelector` 和 `useDispatch` 足够，但在需要直接访问 store 时（例如同步获取整个状态）可以使用 `useStore`。

#### Example:

```js
import { useStore } from 'react-redux';

const DebugComponent = () => {
  const store = useStore();

  // Access the entire Redux state directly
  const currentState = store.getState();
  console.log('Current State:', currentState);

  // You can also dispatch actions directly if necessary
  // store.dispatch({ type: 'someAction' });

  return <div>Check console for current state</div>;
};
```

`useStore` is useful for advanced scenarios where you need to interact with the store directly, bypassing standard hooks like `useSelector`.