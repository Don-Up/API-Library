### Align Self in TailwindCSS

- **Align Self**: TailwindCSS provides utilities to control the alignment of a single flex item along the cross axis, overriding the container's `align-items` property. This is handled by the CSS `align-self` property. Available utilities include:
  - **`self-auto`**: Inherits the default alignment (default behavior).
  - **`self-start`**: Aligns the item to the start.
  - **`self-center`**: Centers the item.
  - **`self-end`**: Aligns the item to the end.
  - **`self-stretch`**: Stretches the item to fill the container height.
  - **`self-baseline`**: Aligns the item to its baseline.

> **Align Self**：TailwindCSS 提供了一组工具类，用于控制单个弹性盒子项目在交叉轴上的对齐方式，覆盖容器的 `align-items` 属性。这是通过 CSS 的 `align-self` 属性实现的。可用的工具类包括：
> - **`self-auto`**：继承默认的对齐方式（默认行为）。
> - **`self-start`**：项目与容器顶部对齐。
> - **`self-center`**：项目居中对齐。
> - **`self-end`**：项目与容器底部对齐。
> - **`self-stretch`**：项目高度拉伸以填充容器。
> - **`self-baseline`**：项目与其基线对齐。

#### Example:

![image-20241119091537852](C:\Users\10691\AppData\Roaming\Typora\typora-user-images\image-20241119091537852.png)

```html
<div class="flex items-start bg-gray-200 h-32">
  <div class="self-center p-4 bg-blue-500">Item 1 (Center)</div>
  <div class="p-4 bg-green-500">Item 2 (Start)</div>
</div>
```

In this example, `self-center` centers the first item vertically, while the second item follows the container's `items-start` alignment.