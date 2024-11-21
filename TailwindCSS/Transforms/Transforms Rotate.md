### Transforms Rotate in TailwindCSS

**Transforms Rotate**: TailwindCSS provides utilities to rotate elements using the **`rotate`** transform. You can rotate elements clockwise or counterclockwise by specifying degrees. Positive values rotate clockwise, while negative values rotate counterclockwise. Common angles include 45°, 90°, and 180°, but you can use custom values as well.

#### Common Rotate Classes:
- **`rotate-45`**: Rotates an element 45 degrees clockwise.
- **`rotate-90`**: Rotates 90 degrees clockwise.
- **`-rotate-45`**: Rotates an element 45 degrees counterclockwise.

> **旋转变换**：TailwindCSS 提供了用于旋转元素的工具类。通过 **`rotate`** 变换，元素可以顺时针或逆时针旋转，正值为顺时针旋转，负值为逆时针旋转。

#### React Example with JSX Comments:

<img src="C:\Users\10691\AppData\Roaming\Typora\typora-user-images\image-20241119153101371.png" alt="image-20241119153101371" style="zoom: 50%;" />

```jsx
{/* Rotates the element 45 degrees clockwise */}
<div className="rotate-45 p-4 bg-blue-500 text-white">
  Rotated 45°
</div>

{/* Rotates the element 90 degrees clockwise */}
<div className="rotate-90 p-4 bg-green-500 text-white">
  Rotated 90°
</div>

{/* Rotates the element 45 degrees counterclockwise */}
<div className="-rotate-45 p-4 bg-red-500 text-white">
  Rotated -45°
</div>
```

In this React example:
- **`rotate-45`** rotates the element 45 degrees clockwise.
- **`rotate-90`** rotates the element 90 degrees clockwise.
- **`-rotate-45`** rotates the element 45 degrees counterclockwise.