### Flex Direction in TailwindCSS

- **Flex Direction**: TailwindCSS offers utilities to control the direction of flexbox items inside a container. The `flex-direction` property can arrange items horizontally or vertically:
  - **`flex-row`**: Items are arranged in a horizontal row (default).
  - **`flex-row-reverse`**: Items are arranged in a reversed horizontal row.
  - **`flex-col`**: Items are arranged in a vertical column.
  - **`flex-col-reverse`**: Items are arranged in a reversed vertical column.

> **Flex Direction**：TailwindCSS 提供了一组工具类，用于控制弹性盒子容器内项目的排列方向。`flex-direction` 属性可以将项目水平或垂直排列：
> - **`flex-row`**：项目水平排列（默认）。
> - **`flex-row-reverse`**：项目水平反向排列。
> - **`flex-col`**：项目垂直排列。
> - **`flex-col-reverse`**：项目垂直反向排列。

#### Example:

![image-20241119091459889](C:\Users\10691\AppData\Roaming\Typora\typora-user-images\image-20241119091459889.png)

```html
<div class="flex flex-row bg-gray-200">
  <div class="p-4 bg-blue-500">Item 1</div>
  <div class="p-4 bg-green-500">Item 2</div>
  <div class="p-4 bg-red-500">Item 3</div>
</div>
```

In this example, `flex-row` arranges the items in a horizontal row. You can replace it with `flex-col` to stack the items vertically.