### Padding in TailwindCSS

- **Padding**: TailwindCSS provides a comprehensive set of utilities to control the padding (inner spacing) of elements. The padding is applied inside the element’s borders. You can apply padding to all sides, or to individual sides (top, right, bottom, left):
  - **`p-{n}`**: Adds padding to all four sides (e.g., `p-4` adds 1rem padding).
  - **`pt-{n}`**, **`pr-{n}`**, **`pb-{n}`**, **`pl-{n}`**: Adds padding to specific sides (top, right, bottom, left).
  - **`px-{n}`**: Adds horizontal padding (left and right).
  - **`py-{n}`**: Adds vertical padding (top and bottom).

> **Padding**：TailwindCSS 提供了一组工具类，用于控制元素的填充（内边距）。填充应用在元素的边框内。你可以为所有边设置填充，也可以为单个边（上、右、下、左）设置：
> - **`p-{n}`**：为四个边添加填充（例如 `p-4` 添加 1rem 的填充）。
> - **`pt-{n}`**、**`pr-{n}`**、**`pb-{n}`**、**`pl-{n}`**：为特定边（上、右、下、左）添加填充。
> - **`px-{n}`**：为水平边（左右）添加填充。
> - **`py-{n}`**：为垂直边（上下）添加填充。

#### Example:

![image-20241119094144845](C:\Users\10691\AppData\Roaming\Typora\typora-user-images\image-20241119094144845.png)

```html
<div class="p-4 bg-gray-200">
  <div class="p-2 bg-blue-500 text-white">Item with padding</div>
</div>
```

In this example, `p-4` adds 1rem padding to all sides of the outer container, and `p-2` adds 0.5rem padding to all sides of the inner item. You can use `px-4` for horizontal padding or `py-4` for vertical padding.