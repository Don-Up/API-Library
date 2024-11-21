### `createAsyncThunk`

- **`createAsyncThunk`**: A function from Redux Toolkit that simplifies handling asynchronous logic in Redux. It automatically dispatches lifecycle actions (i.e., `pending`, `fulfilled`, `rejected`) based on the promise status. It is commonly used for API calls or other async operations, reducing the need for custom async middleware.

> **`createAsyncThunk`**：Redux Toolkit 提供的函数，用于简化处理异步逻辑。它根据异步操作的状态自动派发生命周期动作（如 `pending`、`fulfilled`、`rejected`），通常用于 API 调用等异步操作，减少了自定义中间件的需求。

#### Example:

```js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Async thunk to fetch user data from an API
export const fetchUser = createAsyncThunk(
  'user/fetchUser',
  async (userId) => {
    const response = await fetch(`/api/user/${userId}`);
    return response.json();
  }
);

// Slice to handle user state
const userSlice = createSlice({
  name: 'user',
  initialState: { user: null, status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

// Exporting the reducer to be included in the store
export default userSlice.reducer;
```

`createAsyncThunk` automates async action handling, reducing the complexity of managing async state transitions (e.g., loading, success, failure) in Redux.