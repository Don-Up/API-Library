### Box Sizing

- **Box Sizing**: TailwindCSS provides two utilities for controlling the `box-sizing` CSS property: `box-border` and `box-content`.  
  - **`box-border`**: Includes the padding and border within the element's total width and height (default behavior).  
  - **`box-content`**: Excludes padding and border from the element's width and height, so they are added to the defined dimensions.

> **Box Sizing**：TailwindCSS 提供两个控制 `box-sizing` CSS 属性的工具类：`box-border` 和 `box-content`。  
>
> <audio src="..\..\mp3\- `box-border`：.mp3"></audio>
>
> - **`box-border`**：将内边距和边框包含在元素的总宽度和高度内（默认行为）。  
> - **`box-content`**：将内边距和边框排除在元素的宽度和高度之外，因此它们会被添加到定义的尺寸中。

#### Example:

```html
<div class="box-border p-4 border-4 w-48">
  Box border sizing
</div>

<div class="box-content p-4 border-4 w-48">
  Box content sizing
</div>
```

In this example, `box-border` and `box-content` demonstrate how padding and borders are included or excluded from the element's width.