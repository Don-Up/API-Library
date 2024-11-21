### `createSelector`

- **`createSelector`**: A function from the **reselect** library (commonly used with Redux) that creates memoized selectors. It accepts input selectors and an output selector. The output selector recalculates only when the input changes, optimizing performance by preventing unnecessary recalculations of derived data.

> **`createSelector`**：来自 **reselect** 库的函数（常与 Redux 一起使用），用于创建具备记忆功能的选择器。它接收输入选择器和输出选择器，只有当输入更改时，输出选择器才会重新计算，避免不必要的重复计算，提高性能。

#### Example:

```js
import { createSelector } from 'reselect';

// Input selector: gets raw state
const selectCartItems = (state) => state.cart.items;

// Output selector: derived data, memoized
const selectTotalPrice = createSelector(
  [selectCartItems],                // Input selector
  (items) => items.reduce((total, item) => total + item.price, 0)  // Output selector
);

// Usage in a component
const totalPrice = useSelector(selectTotalPrice); // Only recalculates if cart items change
```

In this example, `createSelector` memoizes the total price calculation, ensuring it only recalculates when the `cart.items` state changes. This improves performance in large applications.