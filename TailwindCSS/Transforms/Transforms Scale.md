### Transforms Scale in TailwindCSS

**Transforms Scale**: TailwindCSS provides utilities for scaling elements using the **`scale`** transform. You can scale elements up or down along both the X and Y axes. The scale factor is a multiplier, where `scale-100` represents the original size (1x), and values like `scale-50` reduce the size by half, while `scale-150` enlarges the element by 1.5 times.

#### Common Scale Classes:
- **`scale-50`**: Scales to 50% of the original size.
- **`scale-100`**: Default, no scaling (1x).
- **`scale-150`**: Scales to 150% (1.5x).

> **缩放变换**：TailwindCSS 提供了用于缩放元素的工具类。通过 **`scale`** 变换，元素可以按 X 和 Y 轴进行缩放，缩放值是倍数，`scale-100` 表示原始大小，`scale-150` 表示放大 1.5 倍。

#### React Example with JSX Comments:

![image-20241119152903253](C:\Users\10691\AppData\Roaming\Typora\typora-user-images\image-20241119152903253.png)

```jsx
{/* Default size */}
<div className="scale-100 p-4 bg-blue-500 text-white">
  No scaling (100%)
</div>

{/* Scaled down to 50% */}
<div className="scale-50 p-4 bg-green-500 text-white">
  Scaled down to 50%
</div>

{/* Scaled up to 150% */}
<div className="scale-150 p-4 bg-red-500 text-white">
  Scaled up to 150%
</div>
```

In this React example:
- **`scale-100`** keeps the element at its original size.
- **`scale-50`** reduces the element to half its size.
- **`scale-150`** increases the element to 1.5 times its original size.