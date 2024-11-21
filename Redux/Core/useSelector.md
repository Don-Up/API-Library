### `useSelector`

- **`useSelector`**: A React Redux hook that allows you to extract data from the Redux store's state. It takes a selector function as an argument, which receives the entire state and returns the part of the state your component needs. `useSelector` automatically subscribes to the store and re-renders the component when the selected state changes.

> **`useSelector`**：React Redux 的钩子，用于从 Redux store 的状态中提取数据。它接收一个选择器函数，该函数返回组件所需的状态部分，并在状态变化时自动触发组件重新渲染。

#### Example 1: Simple State Selection

```js
import { useSelector } from 'react-redux';

const CounterDisplay = () => {
  // Select the counter value from the Redux store
  const counter = useSelector((state) => state.counter.value);

  return <div>Counter: {counter}</div>;
};
```

#### Example 2: Selecting a Subset of State

```js
import { useSelector } from 'react-redux';

const UserProfile = () => {
  // Select the current user from the Redux state
  const user = useSelector((state) => state.user);

  return <div>Username: {user.name}</div>;
};
```

`useSelector` ensures that components only re-render when the selected state changes, making it efficient for accessing specific parts of the store data.