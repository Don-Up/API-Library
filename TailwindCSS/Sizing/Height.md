### Height in TailwindCSS

- **Height**: TailwindCSS provides utilities to control the height of an element. These utilities are mapped directly to the CSS `height` property, and you can set fixed heights, fractional heights, or responsive heights based on the viewport or content:
  - **`h-{n}`**: Sets a fixed height value (e.g., `h-16` sets the height to 4rem).
  - **`h-full`**: Sets the height to 100% of the parent container.
  - **`h-screen`**: Sets the height to 100% of the viewport height.
  - **`h-auto`**: Automatically adjusts the height based on the content (default behavior).
  - **`h-min`**, **`h-max`**, **`h-fit`**: Sets the height to fit the content or follow constraints.

> **Height**：TailwindCSS 提供了一组工具类，用于控制元素的高度。这些工具类直接映射到 CSS 的 `height` 属性，可以设置固定高度、分数高度或基于视口或内容的响应式高度：
> - **`h-{n}`**：设置固定高度值（例如 `h-16` 设置高度为 4rem）。
> - **`h-full`**：设置高度为父容器的 100%。
> - **`h-screen`**：设置高度为视口高度的 100%。
> - **`h-auto`**：根据内容自动调整高度（默认行为）。
> - **`h-min`**、**`h-max`**、**`h-fit`**：根据内容或约束设置高度。

#### Example:

```html
<div class="h-64 bg-gray-200 p-4">
  <div class="h-full bg-blue-500 text-white p-4">
    This child div takes up 100% of the parent height.
  </div>
</div>
```

In this example, `h-64` sets the height of the outer container to 16rem, while `h-full` makes the inner container take up the full height of its parent. You can adjust the `h` utility based on your design needs.