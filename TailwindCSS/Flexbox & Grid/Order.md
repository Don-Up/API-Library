### Order in TailwindCSS

- **Order**: TailwindCSS provides utilities to control the visual order of flexbox items using the CSS `order` property. This allows you to rearrange items without changing the HTML structure. Utilities include:
  - **`order-{n}`**: Sets a specific order value, where `n` can be numbers like `1`, `2`, etc.
  - **`order-first`**, **`order-last`**, **`order-none`**: Move items to the first, last, or keep the default order.

> **Order**：TailwindCSS 提供了一组工具类，用于通过 CSS 的 `order` 属性控制弹性盒子项目的视觉顺序，允许你在不改变 HTML 结构的情况下重新排列项目。工具类包括：
> - **`order-{n}`**：设置具体的顺序值，如 `1`、`2` 等。
> - **`order-first`**、**`order-last`**、**`order-none`**：将项目移到第一个、最后一个或保持默认顺序。

#### Example:

![image-20241119085659181](C:\Users\10691\AppData\Roaming\Typora\typora-user-images\image-20241119085659181.png)

```html
<div class="flex bg-gray-200">
  <div class="order-last p-4 bg-blue-500">Item 1 (Last)</div>
  <div class="p-4 bg-green-500">Item 2</div>
  <div class="order-first p-4 bg-red-500">Item 3 (First)</div>
</div>
```

In this example, `order-first` moves the third item to the first position, and `order-last` moves the first item to the last position.