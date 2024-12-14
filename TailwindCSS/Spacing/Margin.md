### Margin in TailwindCSS

- **Margin**: TailwindCSS provides utilities to control the **margin** (outer spacing) around elements. Margins create space around an element, outside of its border. You can apply margin to all sides or target specific sides (top, right, bottom, left):
  - **`m-{n}`**: Adds margin to all four sides (e.g., `m-4` adds 1rem margin).
  - **`mt-{n}`**, **`mr-{n}`**, **`mb-{n}`**, **`ml-{n}`**: Adds margin to specific sides (top, right, bottom, left).
  - **`mx-{n}`**: Adds horizontal margin (left and right).
  - **`my-{n}`**: Adds vertical margin (top and bottom).
  - **`m-auto`**: Automatically centers an element horizontally within its container.

> **Margin**：TailwindCSS 提供了一组工具类，用于控制元素周围的 **外边距**。外边距在元素边框外侧创建空间。你可以为所有边设置外边距，或为单个边（上、右、下、左）设置：
> - **`m-{n}`**：为四个边添加外边距（例如 `m-4` 添加 1rem 外边距）。
> - **`mt-{n}`**、**`mr-{n}`**、**`mb-{n}`**、**`ml-{n}`**：为特定边（上、右、下、左）添加外边距。
> - **`mx-{n}`**：为水平边（左右）添加外边距。
> - **`my-{n}`**：为垂直边（上下）添加外边距。
> - **`m-auto`**：自动水平居中元素。

#### Example:

<audio src="..\..\mp3\最外层的容器使用了 `m4`，.mp3"></audio>

```html
<div class="m-4 bg-gray-200">
  <div class="mt-2 mb-4 mx-auto bg-blue-500 text-white p-4">
    Item with margin
  </div>
</div>
```

In this example, `m-4` adds 1rem margin around the outer container, while `mt-2` and `mb-4` add specific vertical margins to the inner item. `mx-auto` centers the inner item horizontally in the container.