### `createAction`

- **`createAction`**: A utility from Redux Toolkit that simplifies the creation of Redux action creators. It automatically generates an action creator function with a specified action type. When invoked, it returns an action object with the specified type and any provided payload.

> **`createAction`**：Redux Toolkit 提供的工具，用于简化创建 Redux action 创建器的过程。它自动生成带有指定 action 类型的创建器函数，当调用时，返回包含该类型和传递的 `payload` 的 action 对象。

#### Example:

```js
import { createAction } from '@reduxjs/toolkit';

// Create an action for incrementing a counter
export const increment = createAction('counter/increment');

// Using the action creator
const action = increment();
// action = { type: 'counter/increment' }

const actionWithPayload = increment(5);
// actionWithPayload = { type: 'counter/increment', payload: 5 }
```

In this example, `createAction` generates an action creator (`increment`). When called, it returns an action object with the type `'counter/increment'`, and if provided, includes a `payload`. This reduces boilerplate when defining action creators manually.