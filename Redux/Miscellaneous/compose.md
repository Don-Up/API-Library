### `compose`

- **`compose`**: A utility function from Redux (or functional programming) that composes multiple functions into a single function, where each function consumes the result of the previous one. This is useful when applying multiple store enhancers or middleware in a readable, functional manner. The functions are executed right-to-left (like method chaining).

> **`compose`**：Redux 提供的工具函数，用于将多个函数组合成一个函数，后一个函数的输出作为前一个函数的输入。它通常用于组合多个 store 增强器或中间件，使代码更具可读性。函数按从右到左的顺序执行（类似方法链）。

#### Example:

```js
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

// Composing middleware and Redux DevTools enhancer
const composedEnhancers = compose(
  applyMiddleware(thunk),          // Middleware for async actions
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // Redux DevTools
);

// Creating the store with composed enhancers
const store = createStore(rootReducer, composedEnhancers);
```

In this example, `compose` is used to combine middleware (`thunk`) and Redux DevTools, allowing both to enhance the store creation process.