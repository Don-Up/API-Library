### SVG Fill in TailwindCSS

**SVG Fill**: TailwindCSS provides utilities to control the **fill** property of SVGs, which determines the color inside the shapes of an SVG element. This is useful for applying colors to icons or illustrations without directly modifying the SVG file.

#### Common SVG Fill Classes:
- **`fill-current`**: Sets the fill color to the current text color.
- **`fill-none`**: Removes the fill, leaving the shape transparent.
- You can also apply custom colors using Tailwind's text color utilities.

> **SVG 填充**：TailwindCSS 提供了控制 **fill** 属性的工具类，用于设置 SVG 元素内部形状的填充颜色，通常用于为图标或插图设置颜色，而无需修改 SVG 文件本身。

#### React Example with JSX Comments:

![image-20241119111712586](C:\Users\10691\AppData\Roaming\Typora\typora-user-images\image-20241119111712586.png)

```jsx
{/* SVG with current text color as fill */}
<svg className="fill-current text-blue-500 w-12 h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <circle cx="12" cy="12" r="10" />
</svg>

{/* SVG without any fill */}
<svg className="fill-none stroke-current text-red-500 w-12 h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <circle cx="12" cy="12" r="10" strokeWidth="2"/>
</svg>
```

In this React example:
- **`fill-current`** applies the current text color (`text-blue-500`) as the fill color of the SVG.
- **`fill-none`** disables the fill, only showing the stroke with the current text color (`text-red-500`).