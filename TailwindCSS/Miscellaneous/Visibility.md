### Visibility in TailwindCSS

**Visibility**: TailwindCSS provides utilities to control the **visibility** of elements. The **`visible`** class makes an element visible, while **`invisible`** hides it without affecting the layout. Unlike `display: none` (which removes the element from the flow), `invisible` keeps the element’s space in the document but makes it non-interactive and hidden.

#### Common Visibility Classes:
- **`visible`**: Makes the element visible (default).
- **`invisible`**: Hides the element but maintains its layout space.

> **可见性**：TailwindCSS 提供了用于控制元素 **可见性** 的工具类。`visible` 使元素可见，而 `invisible` 则隐藏元素，但保留其布局空间。

#### React Example with JSX Comments:

![image-20241119154958028](C:\Users\10691\AppData\Roaming\Typora\typora-user-images\image-20241119154958028.png)

```jsx
{/* Visible element (default) */}
<div className="visible p-4 bg-blue-500 text-white">
  I am visible
</div>

{/* Invisible element (hidden but retains space) */}
<div className="invisible p-4 bg-green-500 text-white">
  I am invisible but still take up space
</div>
```

In this React example:
- **`visible`** keeps the element visible.
- **`invisible`** hides the element but retains its space in the layout.