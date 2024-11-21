### Transition Property in TailwindCSS

**Transition Property**: TailwindCSS provides utilities to control which CSS properties should transition when they change. By specifying transition properties, you can create smooth animations for elements when they are hovered, focused, or otherwise updated.

#### Common Transition Property Classes:
- **`transition`**: Transitions all properties.
- **`transition-colors`**: Transitions only color-related properties (e.g., `background-color`, `border-color`).
- **`transition-opacity`**: Transitions only opacity changes.
- **`transition-transform`**: Transitions transformations like `scale` or `rotate`.

> **过渡属性**：TailwindCSS 提供了工具类来控制哪些 CSS 属性在发生变化时进行过渡。通过指定过渡属性，可以为元素的悬停、聚焦等状态创建平滑的动画效果。

#### React Example with JSX Comments:

```jsx
{/* Transitions background color on hover */}
<div className="transition-colors duration-300 bg-blue-500 hover:bg-red-500 p-4 text-white">
  Hover to change background color
</div>

{/* Transitions opacity on hover */}
<div className="transition-opacity duration-300 opacity-100 hover:opacity-50 p-4 bg-green-500 text-white">
  Hover to change opacity
</div>
```

In this React example:
- **`transition-colors`** smoothly transitions the background color over 300ms.
- **`transition-opacity`** smoothly transitions the element's opacity on hover.