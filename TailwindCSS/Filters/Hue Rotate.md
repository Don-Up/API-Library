### Hue Rotate in TailwindCSS

**Hue Rotate**: TailwindCSS provides utilities to adjust the **hue** of an element's colors using the `filter` property. The **`hue-rotate`** class rotates the color wheel by a specified degree, changing the perceived colors of the element. Positive values shift the hue clockwise, while negative values shift it counterclockwise. This effect is often used for creative image manipulation or hover effects.

#### Common Hue Rotate Classes:
- **`hue-rotate-0`**: No hue rotation (default).
- **`hue-rotate-90`**: Rotates hue by 90 degrees.
- **`hue-rotate-180`**: Rotates hue by 180 degrees (inverts colors).

> **色相旋转**：TailwindCSS 提供了控制元素 **色相旋转** 的工具类，通过 `filter` 属性调整颜色的色相。正值顺时针旋转色轮，负值逆时针旋转。

#### React Example with JSX Comments:

![image-20241119153959249](C:\Users\10691\AppData\Roaming\Typora\typora-user-images\image-20241119153959249.png)

```jsx
{/* No hue rotation (default) */}
<div className="hue-rotate-0 p-4 bg-blue-500 text-white">
  No hue rotation
</div>

{/* Rotate hue by 90 degrees */}
<div className="hue-rotate-90 p-4 bg-green-500 text-white">
  Hue rotated by 90°
</div>

{/* Rotate hue by 180 degrees */}
<div className="hue-rotate-180 p-4 bg-red-500 text-white">
  Hue rotated by 180°
</div>
```

In this React example:
- **`hue-rotate-0`** keeps the original colors.
- **`hue-rotate-90`** shifts the colors by 90 degrees on the color wheel.
- **`hue-rotate-180`** inverts the colors by rotating the hue 180 degrees.