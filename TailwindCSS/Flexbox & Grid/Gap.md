### Gap in TailwindCSS

- **Gap**: TailwindCSS provides utilities to control the spacing (gaps) between rows and columns in grid and flexbox layouts using the `gap` property:
  - **`gap-{n}`**: Sets equal spacing between both rows and columns (e.g., `gap-4` sets a 1rem gap).
  - **`gap-x-{n}`**: Sets horizontal gaps (between columns).
  - **`gap-y-{n}`**: Sets vertical gaps (between rows).

> **Gap**：TailwindCSS 提供了一组工具类，用于通过 `gap` 属性控制网格和弹性盒子布局中行与列之间的间距：
> - **`gap-{n}`**：同时设置行和列之间的相等间距（例如 `gap-4` 设置 1rem 的间距）。
> - **`gap-x-{n}`**：设置列之间的水平间距。
> - **`gap-y-{n}`**：设置行之间的垂直间距。

#### Example:

```html
<div class="grid grid-cols-3 gap-4 bg-gray-200">
  <div class="bg-blue-500 p-4">Item 1</div>
  <div class="bg-green-500 p-4">Item 2</div>
  <div class="bg-red-500 p-4">Item 3</div>
</div>
```

In this example, `gap-4` creates a 1rem gap between all grid items. You can use `gap-x-4` or `gap-y-4` to control horizontal or vertical gaps separately.