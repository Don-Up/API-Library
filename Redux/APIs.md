React Redux provides a set of APIs that are designed to connect React components to a Redux store, manage state, and handle side effects. Below is a comprehensive list of the core React Redux APIs categorized based on their purpose.

### 1. **Core APIs for React-Redux Integration**

These APIs are primarily used to connect React components to Redux, manage the state, and dispatch actions.

#### 1.1. **Provider**
- **Description**: The `Provider` component makes the Redux store available to any nested components that need to interact with it.
- **Usage**: Wrap your root React component with `Provider`, passing the store as a prop.
- **Example**:
  ```jsx
  import { Provider } from 'react-redux';
  import store from './store';
  
  <Provider store={store}>
    <App />
  </Provider>
  ```

#### 1.2. **useSelector**
- **Description**: A hook that extracts data from the Redux store by subscribing to store updates. It can select specific pieces of state using a selector function.
- **Usage**: Used within functional components to access the Redux state.
- **Example**:
  ```js
  import { useSelector } from 'react-redux';
  
  const count = useSelector((state) => state.counter.value);
  ```

#### 1.3. **useDispatch**
- **Description**: A hook that returns a reference to the `dispatch` function from the Redux store. This is used to dispatch actions.
- **Usage**: Used within functional components to dispatch actions.
- **Example**:
  ```js
  import { useDispatch } from 'react-redux';
  
  const dispatch = useDispatch();
  dispatch({ type: 'INCREMENT' });
  ```

#### 1.4. **useStore**
- **Description**: A hook that returns the Redux store object. Rarely used directly because `useSelector` and `useDispatch` are more commonly needed.
- **Usage**: Useful when you need direct access to the store.
- **Example**:
  ```js
  import { useStore } from 'react-redux';
  
  const store = useStore();
  console.log(store.getState());
  ```

#### 1.5. **connect**
- **Description**: A higher-order component (HOC) that connects a React component to the Redux store. It maps state and dispatch to the component's props.
- **Usage**: Can be used in class components or function components if hooks are not preferred.
- **Example**:
  ```js
  import { connect } from 'react-redux';
  
  const mapStateToProps = (state) => ({
    counter: state.counter,
  });
  
  const mapDispatchToProps = (dispatch) => ({
    increment: () => dispatch({ type: 'INCREMENT' }),
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(MyComponent);
  ```

### 2. **Redux Store Setup APIs**

These APIs are used to configure and enhance the Redux store.

#### 2.1. **configureStore**
- **Description**: A utility from Redux Toolkit that simplifies store setup by combining reducers, applying middleware, and enabling Redux DevTools out-of-the-box.
- **Usage**: Recommended for creating a Redux store.
- **Example**:
  ```js
  import { configureStore } from '@reduxjs/toolkit';
  import counterReducer from './counterSlice';
  
  const store = configureStore({
    reducer: {
      counter: counterReducer,
    },
  });
  ```

#### 2.2. **createSlice**
- **Description**: A helper function from Redux Toolkit that automatically generates action creators and action types corresponding to the reducers and state you define.
- **Usage**: Used to simplify reducer and action creation.
- **Example**:
  ```js
  import { createSlice } from '@reduxjs/toolkit';
  
  const counterSlice = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
      increment: (state) => state + 1,
      decrement: (state) => state - 1,
    },
  });
  
  export const { increment, decrement } = counterSlice.actions;
  export default counterSlice.reducer;
  ```

#### 2.3. **createAsyncThunk**
- **Description**: A Redux Toolkit function for handling asynchronous operations. It automatically dispatches `pending`, `fulfilled`, and `rejected` actions.
- **Usage**: Used for managing async logic such as API calls.
- **Example**:
  ```js
  import { createAsyncThunk } from '@reduxjs/toolkit';
  
  export const fetchUser = createAsyncThunk('user/fetchById', async (userId) => {
    const response = await fetch(`/api/user/${userId}`);
    return response.json();
  });
  ```

#### 2.4. **combineReducers**
- **Description**: Combines multiple reducers into a single reducing function that can be passed to the Redux store.
- **Usage**: Used to manage different slices of state.
- **Example**:
  ```js
  import { combineReducers } from 'redux';
  import counterReducer from './counterReducer';
  import userReducer from './userReducer';
  
  const rootReducer = combineReducers({
    counter: counterReducer,
    user: userReducer,
  });
  ```

### 3. **Redux Toolkit APIs**

Redux Toolkit simplifies many aspects of Redux, making it easier to write reducers, actions, and store configuration.

#### 3.1. **createAction**
- **Description**: A helper function from Redux Toolkit that creates an action creator with a specific action type.
- **Usage**: Used when you need to create actions outside of `createSlice`.
- **Example**:
  ```js
  import { createAction } from '@reduxjs/toolkit';
  
  export const increment = createAction('counter/increment');
  ```

#### 3.2. **createReducer**
- **Description**: A Redux Toolkit function that allows writing reducers with "mutating" logic, which under the hood uses Immer to handle immutability.
- **Usage**: Used for writing reducers in a concise manner.
- **Example**:
  ```js
  import { createReducer } from '@reduxjs/toolkit';
  
  const counterReducer = createReducer(0, {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
  });
  ```

#### 3.3. **createEntityAdapter**
- **Description**: A utility from Redux Toolkit that helps manage normalized state for collections of items, like lists of entities.
- **Usage**: Simplifies common tasks like adding, removing, or updating items in a list.
- **Example**:
  ```js
  import { createEntityAdapter } from '@reduxjs/toolkit';
  
  const usersAdapter = createEntityAdapter();
  const initialState = usersAdapter.getInitialState();
  ```

### 4. **Middleware and Side Effects APIs**

These APIs are used to handle asynchronous actions, middleware, and side effects.

#### 4.1. **applyMiddleware**
- **Description**: A Redux function for applying middleware to the store. Middleware extends Redux with custom behavior.
- **Usage**: Used when configuring the store manually.
- **Example**:
  ```js
  import { applyMiddleware, createStore } from 'redux';
  import thunk from 'redux-thunk';
  
  const store = createStore(rootReducer, applyMiddleware(thunk));
  ```

#### 4.2. **thunk middleware**
- **Description**: A middleware that allows you to write action creators that return a function instead of an action, typically for handling async logic.
- **Usage**: Used for asynchronous logic like making API calls.
- **Example**:
  ```js
  export const fetchData = () => (dispatch) => {
    fetch('/api/data')
      .then((response) => response.json())
      .then((data) => dispatch({ type: 'DATA_LOADED', payload: data }));
  };
  ```

### 5. **Miscellaneous Utilities**

These are various smaller utilities provided by Redux and Redux Toolkit to help with specific tasks.

#### 5.1. **bindActionCreators**
- **Description**: Binds action creators to the `dispatch` function, so they can be called directly without needing to pass `dispatch` every time.
- **Usage**: Maps multiple action creators to `dispatch`.
- **Example**:
  ```js
  import { bindActionCreators } from 'redux';
  import { increment } from './counterActions';
  
  const boundIncrement = bindActionCreators(increment, dispatch);
  boundIncrement();
  ```

#### 5.2. **compose**
- **Description**: Composes multiple functions from right to left. Often used for applying middleware or enhancers to the store.
- **Usage**: Used when you need to combine store enhancers.
- **Example**:
  ```js
  import { compose } from 'redux';
  
  const composedEnhancers = compose(applyMiddleware(thunk), devToolsEnhancer());
  ```

#### 5.3. **createSelector** (from `reselect`)
- **Description**: A utility for creating memoized selectors, which derive state efficiently and avoid unnecessary recalculations.
- **Usage**: Used for optimizing state selection.
- **Example**:
  ```js
  import { createSelector } from 'reselect';
  
  const selectItems = (state) => state.items;
  const selectActiveItems = createSelector(
    [selectItems],
    (items) => items.filter(item => item.active)
  );
  ```

---

This list includes the core APIs, Redux Toolkit utilities, and common patterns that you'll frequently use when building React apps with Redux.