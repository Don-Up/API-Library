### Text Decoration in TailwindCSS

- **Text Decoration**: TailwindCSS provides utilities to control **text decoration**, such as underlining, overlining, line-through (strikethrough), and removing decorations. These utilities map directly to the CSS `text-decoration` property.

#### Available Text Decoration Classes:
  - **`underline`**: Adds an underline to the text.
  - **`overline`**: Adds an overline to the text (a line above the text).
  - **`line-through`**: Adds a strikethrough (line through the middle) to the text.
  - **`no-underline`**: Removes any underline or other text decorations from the text.

> **Text Decoration**：TailwindCSS 提供了一组工具类，用于控制 **文本装饰**，如下划线、上划线、删除线等。这些工具类直接映射到 CSS 的 `text-decoration` 属性。

#### Example:

![image-20241119100628917](C:\Users\10691\AppData\Roaming\Typora\typora-user-images\image-20241119100628917.png)

```html
<div class="bg-gray-100 p-4">
  <p class="underline text-blue-500">Underlined text (underline)</p>
  <p class="overline text-red-500">Overlined text (overline)</p>
  <p class="line-through text-green-500">Strikethrough text (line-through)</p>
  <p class="no-underline text-gray-700 underline">
    This text starts with an underline, but it's removed (no-underline).
  </p>
</div>
```

In this example:
- **`underline`** adds an underline to the first paragraph.
- **`overline`** applies a line above the text in the second paragraph.
- **`line-through`** adds a strike-through effect to the third paragraph.
- **`no-underline`** removes any underline from the text, even if it was added by another class (like the `underline` class in the fourth paragraph).

These utilities are commonly used for links and headings where you want to emphasize or remove specific text decoration styles.