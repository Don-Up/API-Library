### `bindActionCreators`

- **`bindActionCreators`**: A Redux utility that automatically binds action creators to the `dispatch` function. This allows you to call the action creators directly without manually calling `dispatch(actionCreator())` each time. It's useful when passing action creators as props to components, especially in class components.

> **`bindActionCreators`**：Redux 提供的工具，用于将 action 创建器自动绑定到 `dispatch` 函数。这样可以直接调用 action 创建器，而不必每次手动调用 `dispatch(actionCreator())`。它在将 action 创建器作为 props 传递给组件时特别有用，尤其是在类组件中。

#### Example:

```js
import { bindActionCreators } from 'redux';
import { increment, decrement } from './counterActions';

// Action creators
function increment() {
  return { type: 'INCREMENT' };
}

function decrement() {
  return { type: 'DECREMENT' };
}

// Bind action creators to dispatch
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ increment, decrement }, dispatch);
};

// Now you can call increment() and decrement() directly in your component
mapDispatchToProps.increment(); // Equivalent to dispatch(increment())
mapDispatchToProps.decrement(); // Equivalent to dispatch(decrement())
```

In this example, `bindActionCreators` simplifies calling `increment` and `decrement` without explicitly using `dispatch`.