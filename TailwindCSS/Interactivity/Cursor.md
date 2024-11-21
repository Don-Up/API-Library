### Cursor in TailwindCSS

**Cursor**: TailwindCSS provides utilities to control the **cursor** CSS property, which defines the type of cursor displayed when hovering over an element. Common cursor types include `pointer`, `default`, `not-allowed`, and `wait`. You can easily change the mouse cursor to indicate different interactions for users.

#### Common Cursor Classes:
- **`cursor-pointer`**: Display a pointer (hand icon).
- **`cursor-default`**: Default arrow cursor.
- **`cursor-not-allowed`**: Indicates an action is not allowed (disabled).
- **`cursor-wait`**: Shows a wait cursor (hourglass/spinner).

> **光标样式**：TailwindCSS 提供了用于控制 **光标** 样式的工具类，定义用户悬停在元素上时显示的光标类型，如指针、禁用、等待等。

#### React Example with JSX Comments:

```jsx
{/* Pointer cursor (clickable) */}
<div className="cursor-pointer p-4 bg-blue-500 text-white">
  Clickable area (pointer)
</div>

{/* Default cursor */}
<div className="cursor-default p-4 bg-blue-500 text-white">
  Default cursor
</div>

{/* Not allowed cursor (disabled) */}
<div className="cursor-not-allowed p-4 bg-gray-500 text-white">
  Disabled area (not allowed)
</div>

{/* Wait cursor */}
<div className="cursor-wait p-4 bg-yellow-500 text-white">
  Please wait (wait cursor)
</div>
```

In this React example:
- **`cursor-pointer`** shows a clickable hand cursor.
- **`cursor-default`** maintains the default arrow cursor.
- **`cursor-not-allowed`** shows a "not allowed" cursor for disabled actions.
- **`cursor-wait`** displays a loading or waiting cursor.