### Z-Index in TailwindCSS

- **Z-Index**: TailwindCSS provides utilities to control the **z-index** of an element, determining its stack order relative to other elements. Higher values bring elements to the front. Available values include:
  - **`z-0`**, **`z-10`**, **`z-20`**, **`z-30`**, **`z-40`**, **`z-50`**: Set predefined z-index values.
  - **`z-auto`**: Resets to the automatic stack order (default).

> **Z-Index**：TailwindCSS 提供了一组工具类，用于控制元素的 **z-index**，即元素相对于其他元素的堆叠顺序。较大的值会将元素置于前面。可用的值包括：
> - **`z-0`**、**`z-10`**、**`z-20`**、**`z-30`**、**`z-40`**、**`z-50`**：设置预定义的 z-index 值。
> - **`z-auto`**：重置为默认的自动堆叠顺序。

#### Example:

```html
<div class="relative z-10 bg-blue-500 text-white p-4">
  This is in front (z-10)
</div>
<div class="relative z-0 bg-gray-300 p-4">
  This is behind (z-0)
</div>
```

In this example, the element with `z-10` is stacked in front of the element with `z-0`.