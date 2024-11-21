### Justify Content in TailwindCSS

- **Justify Content**: TailwindCSS provides utilities to control the alignment of flex items along the main axis (horizontal by default). This is handled by the CSS `justify-content` property:
  - **`justify-start`**: Aligns items to the start.
  - **`justify-center`**: Centers items.
  - **`justify-end`**: Aligns items to the end.
  - **`justify-between`**: Distributes items with space between them.
  - **`justify-around`**: Distributes items with space around them.
  - **`justify-evenly`**: Distributes items with equal space between them.

> **Justify Content**：TailwindCSS 提供了一组工具类，用于控制弹性盒子项目沿主轴（默认水平）的对齐方式。这是通过 CSS 的 `justify-content` 属性实现的：
> - **`justify-start`**：项目与容器的开头对齐。
> - **`justify-center`**：项目居中对齐。
> - **`justify-end`**：项目与容器的结尾对齐。
> - **`justify-between`**：项目之间均匀分布。
> - **`justify-around`**：项目周围有相等的空隙。
> - **`justify-evenly`**：项目之间的空间均等分布。

#### Example:

![image-20241119090756094](C:\Users\10691\AppData\Roaming\Typora\typora-user-images\image-20241119090756094.png)

```html
<div class="flex justify-between bg-gray-200">
  <div class="p-4 bg-blue-500">Item 1</div>
  <div class="p-4 bg-green-500">Item 2</div>
  <div class="p-4 bg-red-500">Item 3</div>
</div>
```

In this example, `justify-between` distributes the items evenly with space between them.

![image-20241119090905038](C:\Users\10691\AppData\Roaming\Typora\typora-user-images\image-20241119090905038.png)

![image-20241119091001371](C:\Users\10691\AppData\Roaming\Typora\typora-user-images\image-20241119091001371.png)