### Text Overflow in TailwindCSS

- **Text Overflow**: TailwindCSS provides utilities to control **text overflow behavior**, which is useful when text overflows its container. These utilities map directly to the CSS properties `text-overflow`, `white-space`, and `overflow`. You can use these classes to handle text that is too long to fit within a defined width or height.

#### Available Text Overflow Classes:
  - **`truncate`**: Truncates text and adds an ellipsis (`...`) when the text overflows a single line.
  - **`overflow-ellipsis`**: Adds an ellipsis (`...`) for overflowing text (requires `white-space-nowrap` to prevent wrapping).
  - **`overflow-clip`**: Clips the text when it overflows without adding an ellipsis.
  - **`whitespace-nowrap`**: Prevents the text from wrapping onto multiple lines.

> **Text Overflow**：TailwindCSS 提供了一组工具类，用于控制 **文本溢出** 的行为。这些工具类直接映射到 CSS 的 `text-overflow`、`white-space` 和 `overflow` 属性。你可以使用这些类来处理文本超出其容器的情况。

#### Example:

![image-20241119100910113](C:\Users\10691\AppData\Roaming\Typora\typora-user-images\image-20241119100910113.png)

```html
<div class="bg-gray-100 p-4 w-64">
  <p class="truncate text-blue-500">This is a long sentence that will be truncated when it overflows.</p>

  <p class="overflow-ellipsis whitespace-nowrap text-red-500">
    This is a long sentence that will show an ellipsis when it overflows.
  </p>

  <p class="overflow-clip whitespace-nowrap text-green-500">
    This is a long sentence that will be clipped when it overflows without an ellipsis.
  </p>
</div>
```

In this example:
- **`truncate`** shortens the text and adds an ellipsis (`...`) when it exceeds the width of its container.
- **`overflow-ellipsis`** ensures that when text overflows, it is replaced with an ellipsis, and **`whitespace-nowrap`** prevents the text from wrapping to a new line.
- **`overflow-clip`** simply cuts off the overflowing text without adding an ellipsis, also combined with **`whitespace-nowrap`** to prevent line breaks.

These utilities are useful when working with limited space, such as within buttons, cards, or other UI elements where text length may vary but should not exceed the component’s boundaries.