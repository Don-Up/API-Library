### Grid Template Rows in TailwindCSS

- **Grid Template Rows**: TailwindCSS provides utilities to define the number of rows in a grid layout using the `grid-template-rows` property. You can specify a fixed number of rows or create custom row heights:
  - **`grid-rows-{n}`**: Defines a grid with `n` equal-height rows (e.g., `grid-rows-3` creates three rows).
  - **`grid-rows-none`**: Disables the grid row layout, allowing the rows to be defined by the content.

> **Grid Template Rows**：TailwindCSS 提供了一组工具类，用于通过 `grid-template-rows` 属性定义网格布局中的行数。你可以指定固定行数或自定义行高：
> - **`grid-rows-{n}`**：定义一个具有 `n` 行的网格（例如 `grid-rows-3` 创建三行）。
> - **`grid-rows-none`**：禁用网格行布局，行高由内容决定。

#### Example:

![image-20241119091135508](C:\Users\10691\AppData\Roaming\Typora\typora-user-images\image-20241119091135508.png)

```html
<div class="grid grid-rows-3 gap-4 bg-gray-200">
  <div class="bg-blue-500 p-4">Item 1</div>
  <div class="bg-green-500 p-4">Item 2</div>
  <div class="bg-red-500 p-4">Item 3</div>
</div>
```

In this example, `grid-rows-3` creates a grid with three equal-height rows, and `gap-4` adds spacing between the grid items.