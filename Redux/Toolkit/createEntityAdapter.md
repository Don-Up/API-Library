### `createEntityAdapter`

- **`createEntityAdapter`**: A utility from Redux Toolkit that helps manage normalized state for collections of items, such as arrays of entities. It provides functions for common operations like adding, updating, and removing items from a collection, while ensuring that the data is stored in a normalized structure (with `ids` and `entities`).

> **`createEntityAdapter`**：Redux Toolkit 提供的工具，用于帮助管理实体集合的标准化状态。它提供常见操作的函数，如添加、更新和删除项目，并确保数据以标准化结构存储（包含 `ids` 和 `entities`）。

#### Example:

```js
import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

// Creating an adapter for user entities
const usersAdapter = createEntityAdapter();

// Initial state includes entities and ids
const initialState = usersAdapter.getInitialState();

// Creating a slice using the adapter's reducers
const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    // Add multiple users
    addUsers: usersAdapter.addMany,
    // Remove a user by ID
    removeUser: usersAdapter.removeOne,
    // Update a user by ID
    updateUser: usersAdapter.updateOne,
  },
});

// Exporting the generated action creators
export const { addUsers, removeUser, updateUser } = usersSlice.actions;

// Exporting the reducer
export default usersSlice.reducer;
```

Using `createEntityAdapter` simplifies managing collections of items by providing pre-built CRUD operations and a normalized state structure.