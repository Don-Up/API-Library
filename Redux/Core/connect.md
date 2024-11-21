### `connect`

- **`connect`**: A higher-order component (HOC) provided by React Redux that connects a React component to the Redux store. It maps state (`mapStateToProps`) and dispatch (`mapDispatchToProps`) to the component's props, allowing the component to access the store and dispatch actions without using hooks like `useSelector` or `useDispatch`.

> **`connect`**：React Redux 提供的高阶组件，用于将 React 组件连接到 Redux store。它通过 `mapStateToProps` 和 `mapDispatchToProps` 将状态和 dispatch 映射到组件的 props，使组件能够访问 store 并分发操作，而无需使用钩子。

#### Example:

```js
import React from 'react';
import { connect } from 'react-redux';

// Component that receives props from Redux store
const Counter = ({ count, increment }) => (
  <div>
    <p>Count: {count}</p>
    <button onClick={increment}>Increment</button>
  </div>
);

// Maps Redux state to component props
const mapStateToProps = (state) => ({
  count: state.counter.value,
});

// Maps dispatch actions to component props
const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch({ type: 'counter/increment' }),
});

// Connecting component to Redux store
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
```

`connect` is useful in class components or when you prefer using HOCs over hooks for accessing Redux state and dispatching actions.