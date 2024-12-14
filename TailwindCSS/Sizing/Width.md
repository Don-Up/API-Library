### Width in TailwindCSS

- **Width**: TailwindCSS provides utilities to control the width of an element. These utilities map directly to the CSS `width` property and offer various values such as fixed sizes, fractions, percentages, and more:
  - **`w-{n}`**: Fixed width (e.g., `w-16` sets the width to 4rem).
  - **`w-1/2`**, **`w-1/3`**, **`w-1/4`**: Fractional widths relative to the parent container.
  - **`w-full`**: Sets the width to 100%.
  - **`w-screen`**: Sets the width to 100% of the viewport.
  - **`w-auto`**: Sets the width to auto (default).
  - **`w-min`**, **`w-max`**, **`w-fit`**: Sets the width based on content or constraints.

> **Width**：TailwindCSS 提供了一组工具类，用于控制元素的宽度。这些工具类直接映射到 CSS 的 `width` 属性，并提供了各种固定尺寸、分数、百分比等值：
> - **`w-{n}`**：固定宽度（例如 `w-16` 设置宽度为 4rem）。
> - **`w-1/2`**、**`w-1/3`**、**`w-1/4`**：相对于父容器的分数宽度。
> - **`w-full`**：将宽度设置为 100%。
> - **`w-screen`**：将宽度设置为视口的 100%。
> - **`w-auto`**：将宽度设置为自动（默认）。
> - **`w-min`**、**`w-max`**、**`w-fit`**：根据内容或约束设置宽度。

#### Example:

<audio src="..\..\mp3\这里展示了`w-`（宽度）相关.mp3"></audio>

```html
<div class="w-1/2 bg-gray-200 p-4">
  <div class="w-full bg-blue-500 text-white p-4">Full Width Inside Half Width</div>
</div>
```

In this example, the outer container has a width of `w-1/2` (50% of its parent), and the inner container is set to `w-full` to take up 100% of its parent container's width.