### Sepia in TailwindCSS

**Sepia**: TailwindCSS provides utilities to apply a **sepia** filter to an element using the `filter` property. The sepia filter gives the element a warm, brownish tone, mimicking old photographs. You can apply either a partial or full sepia effect, depending on your design needs.

#### Common Sepia Classes:
- **`sepia-0`**: No sepia effect (default).
- **`sepia`**: Fully applies the sepia effect (100%).

> **棕褐色**：TailwindCSS 提供了用于将元素转换为 **棕褐色** 的工具类，通过 `filter` 属性模拟老照片的效果。可以设置为部分或完全的棕褐色效果。

#### React Example with JSX Comments:

![image-20241119154306170](C:\Users\10691\AppData\Roaming\Typora\typora-user-images\image-20241119154306170.png)

```jsx
{/* No sepia effect */}
<div className="sepia-0 p-4 bg-blue-500 text-white">
  No sepia effect
</div>

{/* Fully sepia effect */}
<div className="sepia p-4 bg-green-500 text-white">
  Full sepia effect
</div>
```

In this React example:
- **`sepia-0`** keeps the element in its original color.
- **`sepia`** fully applies the sepia filter, creating a vintage, brownish tone.