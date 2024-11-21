### Drop Shadow in TailwindCSS

**Drop Shadow**: TailwindCSS provides utilities to apply a **drop shadow** to elements, simulating the effect of light casting a shadow. These shadows enhance depth and create a 3D-like appearance. Tailwind offers predefined shadow sizes and also allows for custom shadows. You can adjust the blur and position of the shadow.

#### Common Drop Shadow Classes:
- **`drop-shadow-sm`**: Small shadow.
- **`drop-shadow`**: Default medium shadow.
- **`drop-shadow-lg`**: Large shadow.
- **`drop-shadow-none`**: Removes shadow.

> **投影**：TailwindCSS 提供了用于为元素添加 **投影** 的工具类，模拟光线产生的阴影效果，增强视觉深度。可以选择预定义的投影大小或自定义投影。

#### React Example with JSX Comments:

![image-20241119154436078](C:\Users\10691\AppData\Roaming\Typora\typora-user-images\image-20241119154436078.png)

```jsx
{/* Default drop shadow */}
<div className="drop-shadow p-4 bg-blue-500 text-white">
  Default drop shadow
</div>

{/* Small drop shadow */}
<div className="drop-shadow-sm p-4 bg-green-500 text-white">
  Small drop shadow
</div>

{/* Large drop shadow */}
<div className="drop-shadow-lg p-4 bg-red-500 text-white">
  Large drop shadow
</div>
```

In this React example:
- **`drop-shadow`** applies the default medium shadow.
- **`drop-shadow-sm`** applies a smaller, subtler shadow.
- **`drop-shadow-lg`** applies a larger, more pronounced shadow for more depth.