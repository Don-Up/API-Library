### Align Content

- **Align Content**: TailwindCSS provides utilities to control the alignment of multiple rows of flexbox items along the cross axis. This is useful when the flex container has extra space. The CSS `align-content` property manages this behavior:
  - **`content-start`**: Aligns rows to the start.
  - **`content-center`**: Centers rows in the container.
  - **`content-end`**: Aligns rows to the end.
  - **`content-between`**: Distributes rows with space between them.
  - **`content-around`**: Distributes rows with space around them.
  - **`content-evenly`**: Distributes rows with equal space between them.

> **Align Content**：TailwindCSS 提供了一组工具类，用于控制多行弹性盒子项目在交叉轴上的对齐方式。当弹性盒子容器有额外空间时，这非常有用。通过 CSS 的 `align-content` 属性管理：
> - **`content-start`**：将行对齐到容器的顶部。
> - **`content-center`**：将行居中对齐。
> - **`content-end`**：将行对齐到容器底部。
> - **`content-between`**：行之间均匀分布。
> - **`content-around`**：行周围有相等的空隙。
> - **`content-evenly`**：行之间的空间均等分布。

#### Example:

![image-20241119091925686](C:\Users\10691\AppData\Roaming\Typora\typora-user-images\image-20241119091925686.png)

<audio src="C:\Users\10691\Downloads\这里展示了`flex`布局的`.mp3"></audio>

```html
<div class="flex flex-wrap content-between h-64 bg-gray-200">
  <div class="p-4 bg-blue-500 w-1/3">Item 1</div>
  <div class="p-4 bg-green-500 w-1/3">Item 2</div>
  <div class="p-4 bg-red-500 w-1/3">Item 3</div>
  <div class="p-4 bg-yellow-500 w-1/3">Item 4</div>
</div>
```

In this example, `content-between` evenly distributes the rows vertically within the container.