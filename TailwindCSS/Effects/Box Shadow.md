### Box Shadow in TailwindCSS

**Box Shadow**: TailwindCSS provides utilities to apply various **box shadows** to elements. These shadows range from subtle to bold or can be customized with arbitrary values. The shadows are applied using the CSS `box-shadow` property.

#### Example Box Shadow Classes:
- **`shadow-sm`**: Small shadow.
- **`shadow-md`**: Medium shadow.
- **`shadow-lg`**: Large shadow.
- **`shadow-xl`**: Extra-large shadow.
- **`shadow-2xl`**: Double extra-large shadow.
- **`shadow-none`**: Removes the shadow.

> **阴影**：TailwindCSS 提供了控制 **盒子阴影** 的工具类，这些类直接映射到 CSS 的 `box-shadow` 属性。阴影范围从轻微到明显，也可以使用自定义值。

#### Code Example:

```html
<!-- Small shadow -->
<div className="shadow-sm p-4 bg-white">
  Small shadow
</div>

<!-- Large shadow -->
<div className="shadow-lg p-4 bg-white">
  Large shadow
</div>

<!-- No shadow -->
<div className="shadow-none p-4 bg-white">
  No shadow
</div>
```

Each shadow class creates a different visual depth effect for the elements.