### Resize in TailwindCSS

**Resize**: TailwindCSS provides utilities to control the **resize** CSS property, which allows an element to be resizable by the user. The element can be resized horizontally, vertically, or both. You'll typically also use the `overflow` property to limit the size of the resizable area.

#### Common Resize Classes:
- **`resize`**: Enables both horizontal and vertical resizing.
- **`resize-x`**: Enables horizontal resizing only.
- **`resize-y`**: Enables vertical resizing only.
- **`resize-none`**: Disables resizing (default).

> **调整大小**：TailwindCSS 提供了控制 **resize** 属性的工具类，允许用户调整元素的大小。可以设置为横向、纵向或两者都可调整，通常结合 `overflow` 限制可调整区域。

#### React Example with JSX Comments:

![image-20241119111403000](C:\Users\10691\AppData\Roaming\Typora\typora-user-images\image-20241119111403000.png)

```jsx
{/* Both horizontal and vertical resizing */}
<textarea className="resize p-4 border border-gray-500 w-64 h-32">
  Resize me horizontally and vertically
</textarea>

{/* Vertical resizing only */}
<textarea className="resize-y p-4 border border-gray-500 w-64 h-32">
  Resize me vertically
</textarea>

{/* Horizontal resizing only */}
<textarea className="resize-x p-4 border border-gray-500 w-64 h-32">
  Resize me horizontally
</textarea>

{/* Resizing disabled */}
<textarea className="resize-none p-4 border border-gray-500 w-64 h-32">
  Cannot resize me
</textarea>
```

In this React example:
- **`resize`** enables both directions.
- **`resize-x`** and **`resize-y`** limit the resizing direction.
- **`resize-none`** disables resizing.