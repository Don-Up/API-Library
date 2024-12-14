### Align Items in TailwindCSS

- **Align Items**: TailwindCSS offers utilities to control the vertical alignment of flexbox items along the cross axis (perpendicular to the flex direction). This is managed by the `align-items` CSS property:
  - **`items-start`**: Aligns items to the start of the container.
  - **`items-center`**: Aligns items to the center.
  - **`items-end`**: Aligns items to the end.
  - **`items-baseline`**: Aligns items along their baselines.
  - **`items-stretch`**: Stretches items to fill the container height (default).

> **Align Items**：TailwindCSS 提供了一组工具类，用于控制弹性盒子项目在交叉轴上的垂直对齐方式（垂直于主轴）。这是通过 `align-items` CSS 属性实现的：
> - **`items-start`**：项目与容器顶部对齐。
> - **`items-center`**：项目居中对齐。
> - **`items-end`**：项目与容器底部对齐。
> - **`items-baseline`**：项目沿基线对齐。
> - **`items-stretch`**：项目高度拉伸以填充容器（默认）。

#### Example:

![image-20241119091636455](C:\Users\10691\AppData\Roaming\Typora\typora-user-images\image-20241119091636455.png)

<audio src="..\..\mp3\这里展示了`flex`布局的` (1).mp3"></audio>

```html
<div class="flex items-center h-32 bg-gray-200">
  <div class="p-4 bg-blue-500">Item 1</div>
  <div class="p-4 bg-green-500">Item 2</div>
</div>
```

In this example, `items-center` vertically centers the items within the flex container. You can change it to `items-start` or `items-end` to adjust alignment.