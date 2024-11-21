### Flex Grow / Shrink in TailwindCSS

- **Flex Grow/Shrink**: TailwindCSS provides utilities to control how flex items grow or shrink to fill space within a flex container, based on the `flex-grow` and `flex-shrink` properties:
  - **`flex-grow`**: Allows an item to grow to fill available space (`flex-grow-0` prevents growing).
  - **`flex-shrink`**: Allows an item to shrink if necessary (`flex-shrink-0` prevents shrinking).

> **Flex Grow / Shrink**：TailwindCSS 提供了一组工具类，用于控制弹性盒子项目如何基于 `flex-grow` 和 `flex-shrink` 属性来填充或缩减空间：
> - **`flex-grow`**：允许项目增长以填充可用空间（`flex-grow-0` 阻止增长）。
> - **`flex-shrink`**：允许项目缩小以适应空间（`flex-shrink-0` 阻止缩小）。

#### Example:

![image-20241119091427060](C:\Users\10691\AppData\Roaming\Typora\typora-user-images\image-20241119091427060.png)

```html
<div class="flex bg-gray-200">
  <div class="flex-grow p-4 bg-blue-500">Item 1 (Grows)</div>
  <div class="p-4 bg-green-500">Item 2</div>
</div>
```

In this example, `flex-grow` allows the first item to grow and fill the remaining space, while the second item stays its original size.