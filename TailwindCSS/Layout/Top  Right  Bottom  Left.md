### Top / Right / Bottom / Left in TailwindCSS

- **Top / Right / Bottom / Left**: TailwindCSS provides utilities to control the positioning of elements when using absolute, relative, fixed, or sticky positioning. These utilities map directly to the CSS `top`, `right`, `bottom`, and `left` properties. You can use values like `0`, fractions, percentages, etc., to position elements:
  - **`top-{n}`**, **`right-{n}`**, **`bottom-{n}`**, **`left-{n}`**: Position the element based on the specified spacing (`n`).

> **Top / Right / Bottom / Left**：TailwindCSS 提供了一组工具类，用于控制元素在使用绝对、相对、固定或粘性定位时的位置。这些工具类直接映射到 CSS 的 `top`、`right`、`bottom` 和 `left` 属性。你可以使用 `0`、分数、百分比等值来定位元素：
> - **`top-{n}`**、**`right-{n}`**、**`bottom-{n}`**、**`left-{n}`**: 根据指定的间距（`n`）定位元素。

#### Example:

```html
<div class="relative h-24 w-24 bg-gray-200">
  <div class="absolute top-2 right-2 bg-blue-500 text-white p-2">
    Positioned Box
  </div>
</div>
```

In this example, the `absolute` box is positioned 0.5rem from the top and right edges of its `relative` parent (`top-2`, `right-2`).