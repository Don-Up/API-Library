### Contrast in TailwindCSS

**Contrast**: TailwindCSS provides utilities to adjust the **contrast** of an element using the `filter` property. The contrast filter controls the difference between dark and light areas of an element. Lower values reduce contrast, making the image or element appear more washed out, while higher values increase contrast, making colors and details more defined.

#### Common Contrast Classes:
- **`contrast-50`**: Reduces contrast to 50% (washed out).
- **`contrast-100`**: Default contrast (normal).
- **`contrast-150`**: Increases contrast by 50% (more vivid).

> **对比度**：TailwindCSS 提供了用于控制元素 **对比度** 的工具类，通过 `filter` 属性调整明暗之间的差异。较低的值降低对比度，较高的值增加对比度。

#### React Example with JSX Comments:

![image-20241119153747509](C:\Users\10691\AppData\Roaming\Typora\typora-user-images\image-20241119153747509.png)

```jsx
{/* Default contrast */}
<div className="contrast-100 p-4 bg-blue-500 text-white">
  Normal contrast (100%)
</div>

{/* Reduced contrast (50%) */}
<div className="contrast-50 p-4 bg-green-500 text-white">
  Reduced contrast (50%)
</div>

{/* Increased contrast (150%) */}
<div className="contrast-150 p-4 bg-red-500 text-white">
  Increased contrast (150%)
</div>
```

In this React example:
- **`contrast-100`** keeps normal contrast.
- **`contrast-50`** reduces the contrast, making the colors appear more muted.
- **`contrast-150`** increases the contrast, making the colors and details pop.