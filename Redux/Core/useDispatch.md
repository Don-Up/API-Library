### `useDispatch`

- **`useDispatch`**: A React Redux hook that returns the `dispatch` function from the Redux store. This function is used to dispatch actions, which can either be plain action objects or async functions (e.g., thunks) for triggering state updates in the store.

> **`useDispatch`**：React Redux 的钩子，返回 Redux store 中的 `dispatch` 函数。通过调用此函数可以分发操作，触发 store 中的状态更新。支持同步或异步操作。

#### Example 1: Dispatching a Simple Action

```js
import { useDispatch } from 'react-redux';

const CounterButton = () => {
  const dispatch = useDispatch();

  // Dispatch an increment action when the button is clicked
  const increment = () => {
    dispatch({ type: 'counter/increment' });
  };

  return <button onClick={increment}>Increment</button>;
};
```

#### Example 2: Dispatching an Async Action (Thunk)

```js
import { useDispatch } from 'react-redux';
import { fetchUserData } from './userSlice'; // Thunk action

const FetchUserButton = () => {
  const dispatch = useDispatch();

  // Dispatch an async action when the button is clicked
  const fetchUser = () => {
    dispatch(fetchUserData());
  };

  return <button onClick={fetchUser}>Fetch User Data</button>;
};
```

`useDispatch` is essential for triggering state changes in Redux, allowing components to interact with the store by dispatching actions.

```jsx
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk to fetch user data from an API
export const fetchUserData = createAsyncThunk(
  'user/fetchUserData',
  async (userId, thunkAPI) => {
    const response = await fetch(`/api/user/${userId}`);
    if (!response.ok) throw new Error('Failed to fetch user data');
    const data = await response.json();
    return data;
  }
);

// Initial state for the user slice
const initialState = {
  user: null,
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

// Create the user slice
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Synchronous action to manually update the user data
    setUser: (state, action) => {
      state.user = action.payload;
    },
    // Synchronous action to clear the user data
    clearUser: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

// Export synchronous actions
export const { setUser, clearUser } = userSlice.actions;

// Export the reducer to be included in the store
export default userSlice.reducer;
```