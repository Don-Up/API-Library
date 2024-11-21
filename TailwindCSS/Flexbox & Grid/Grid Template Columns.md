### Grid Template Columns in TailwindCSS

- **Grid Template Columns**: TailwindCSS provides utilities to define the number of columns in a CSS grid layout using the `grid-template-columns` property. You can create grids with a specified number of columns or custom column widths:
  - **`grid-cols-{n}`**: Defines a grid with `n` equal-width columns (e.g., `grid-cols-3` creates three columns).
  - **`grid-cols-none`**: Disables the grid column layout.

> **Grid Template Columns**：TailwindCSS 提供了一组工具类，用于通过 `grid-template-columns` 属性定义 CSS 网格布局中的列数。你可以创建指定列数或自定义列宽的网格：
> - **`grid-cols-{n}`**：定义一个具有 `n` 列的网格（例如 `grid-cols-3` 创建三列）。
> - **`grid-cols-none`**：禁用网格列布局。

#### Example:

![image-20241119091219112](C:\Users\10691\AppData\Roaming\Typora\typora-user-images\image-20241119091219112.png)

```html
<div class="grid grid-cols-3 gap-4 bg-gray-200">
  <div class="bg-blue-500 p-4">Item 1</div>
  <div class="bg-green-500 p-4">Item 2</div>
  <div class="bg-red-500 p-4">Item 3</div>
</div>
```

In this example, `grid-cols-3` creates a grid with three equal-width columns, and `gap-4` adds spacing between the grid items.