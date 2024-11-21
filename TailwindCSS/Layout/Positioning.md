### Positioning in TailwindCSS

- **Positioning**: TailwindCSS provides utilities to control the CSS `position` property. These utilities allow you to define how an element is positioned within its parent container:
  - **`static`**: Default, no special positioning.
  - **`relative`**: Positioned relative to its normal position.
  - **`absolute`**: Positioned relative to the nearest positioned ancestor.
  - **`fixed`**: Positioned relative to the viewport.
  - **`sticky`**: Toggles between `relative` and `fixed` based on scroll position.

> **Positioning**：TailwindCSS 提供了一组工具类，用于控制 CSS `position` 属性。这些工具类可以定义元素在父容器中的定位方式：  
> - **`static`**：默认定位，没有特殊定位。  
> - **`relative`**：相对于其正常位置定位。  
> - **`absolute`**：相对于最近的定位祖先定位。  
> - **`fixed`**：相对于视口定位。  
> - **`sticky`**：根据滚动位置在 `relative` 和 `fixed` 之间切换。

#### Example:

```html
<div class="relative">
  <div class="absolute top-0 left-0 bg-blue-500 text-white p-2">
    Absolutely positioned box
  </div>
</div>
```

In this example, the `absolute` box is positioned at the top-left corner of its `relative` parent container.