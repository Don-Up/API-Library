### Blur in TailwindCSS

**Blur**: TailwindCSS provides utilities to apply a **blur** effect to elements using the `filter` property. This effect softens the edges and details of the element, mimicking a frosted glass or out-of-focus look. You can adjust the intensity of the blur using predefined classes like `blur-sm` or `blur-lg`.

#### Common Blur Classes:
- **`blur-sm`**: Small blur effect.
- **`blur`**: Default blur effect.
- **`blur-lg`**: Large blur effect.

> **模糊**：TailwindCSS 提供了控制 **模糊** 效果的工具类，使用 `filter` 属性为元素应用模糊效果。可以通过不同的类调整模糊的强度，常用于创建柔化或失焦效果。

#### React Example with JSX Comments:

![image-20241119153545740](C:\Users\10691\AppData\Roaming\Typora\typora-user-images\image-20241119153545740.png)

```jsx
{/* Default blur effect */}
<div className="blur p-4 bg-blue-500 text-white">
  Default blur effect
</div>

{/* Small blur effect */}
<div className="blur-sm p-4 bg-green-500 text-white">
  Small blur effect
</div>

{/* Large blur effect */}
<div className="blur-lg p-4 bg-red-500 text-white">
  Large blur effect
</div>
```

In this React example:
- **`blur`** applies the default blur effect.
- **`blur-sm`** applies a subtle blur.
- **`blur-lg`** applies a more intense blur.