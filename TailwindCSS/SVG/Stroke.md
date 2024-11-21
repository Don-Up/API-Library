### SVG Stroke in TailwindCSS

**SVG Stroke**: TailwindCSS provides utilities to control the **stroke** property of SVGs, which determines the color and width of an element's outline or border. This is useful for styling SVG icons or shapes where you need to define the stroke independently from the fill.

#### Common SVG Stroke Classes:
- **`stroke-current`**: Sets the stroke color to the current text color.
- **`stroke-0`, `stroke-1`, `stroke-2`, ...**: Controls the stroke width.

> **SVG描边**：TailwindCSS 提供了控制 **stroke** 属性的工具类，用于设置 SVG 元素的描边颜色和宽度。通常用于图标或形状的边框样式，独立于填充颜色。

#### React Example with JSX Comments:

```jsx
{/* SVG with current text color as stroke */}
<svg className="stroke-current text-red-500 w-12 h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <circle cx="12" cy="12" r="10" strokeWidth="2" />
</svg>

{/* SVG with thicker stroke */}
<svg className="stroke-current text-green-500 stroke-2 w-12 h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <circle cx="12" cy="12" r="10" strokeWidth="4" />
</svg>
```

In this React example:
- **`stroke-current`** applies the current text color (`text-red-500` or `text-green-500`) to the stroke.
- **`stroke-2`** increases the stroke width for a thicker outline.