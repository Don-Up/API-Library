### Invert in TailwindCSS

**Invert**: TailwindCSS provides utilities to invert the colors of an element using the `filter` property. Inverting colors swaps the light and dark areas, turning white to black and vice versa, and similarly affects all other colors. This is useful for creating high-contrast modes or creative visual effects.

#### Common Invert Classes:
- **`invert-0`**: No color inversion (default).
- **`invert`**: Fully inverts colors (100%).

> **颜色反转**：TailwindCSS 提供了用于反转元素颜色的工具类，通过 `filter` 属性将颜色翻转。颜色反转会将亮部变为暗部，白色变为黑色，反之亦然。

#### React Example with JSX Comments:

![image-20241119154107557](C:\Users\10691\AppData\Roaming\Typora\typora-user-images\image-20241119154107557.png)

```jsx
{/* No color inversion (default) */}
<div className="invert-0 p-4 bg-blue-500 text-white">
  No inversion
</div>

{/* Fully inverted colors */}
<div className="invert p-4 bg-green-500 text-white">
  Fully inverted colors
</div>
```

In this React example:
- **`invert-0`** keeps the original colors.
- **`invert`** fully inverts the colors, turning light shades to dark and vice versa.