### `thunk`

- **`thunk`**: A middleware function in Redux (commonly `redux-thunk`) that allows you to write action creators that return a function instead of an action object. This function can handle asynchronous logic, such as fetching data from an API, and dispatch actions based on the result (e.g., success or failure).

> **`thunk`**：Redux 中的中间件函数（通常是 `redux-thunk`），允许编写返回函数而非操作对象的 action 创建器。该函数可以处理异步逻辑，如从 API 获取数据，并根据结果派发操作（如成功或失败）。

#### Example:

```js
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Action creator using thunk for async logic
const fetchUserData = (userId) => {
  return (dispatch) => {
    dispatch({ type: 'FETCH_USER_REQUEST' });
    fetch(`/api/user/${userId}`)
      .then((response) => response.json())
      .then((data) => dispatch({ type: 'FETCH_USER_SUCCESS', payload: data }))
      .catch((error) => dispatch({ type: 'FETCH_USER_FAILURE', error }));
  };
};

// Example reducer
const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_USER_SUCCESS':
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

// Create store with thunk middleware
const store = createStore(userReducer, applyMiddleware(thunk));
```

In this example, `redux-thunk` enables the `fetchUserData` action creator to dispatch multiple actions over time based on the result of an asynchronous API call.