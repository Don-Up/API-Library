### Brightness in TailwindCSS

**Brightness**: TailwindCSS provides utilities to adjust the **brightness** of an element using the `filter` property. This property controls how light or dark the element appears. You can increase or decrease brightness with predefined classes such as `brightness-50` (darker) or `brightness-150` (brighter).

#### Common Brightness Classes:
- **`brightness-50`**: Reduces brightness to 50% (darker).
- **`brightness-100`**: Default brightness (normal lighting).
- **`brightness-150`**: Increases brightness by 50% (brighter).

> **亮度**：TailwindCSS 提供了用于控制元素 **亮度** 的工具类，通过 `filter` 属性调整元素的明暗。可以使用预定义的类来增加或减少亮度。

#### React Example with JSX Comments:

![image-20241119153636960](C:\Users\10691\AppData\Roaming\Typora\typora-user-images\image-20241119153636960.png)

```jsx
{/* Default brightness */}
<div className="brightness-100 p-4 bg-blue-500 text-white">
  Normal brightness (100%)
</div>

{/* Reduced brightness (50%) */}
<div className="brightness-50 p-4 bg-green-500 text-white">
  Reduced brightness (50%)
</div>

{/* Increased brightness (150%) */}
<div className="brightness-150 p-4 bg-red-500 text-white">
  Increased brightness (150%)
</div>
```

In this React example:
- **`brightness-100`** keeps normal brightness.
- **`brightness-50`** darkens the element.
- **`brightness-150`** makes the element brighter.