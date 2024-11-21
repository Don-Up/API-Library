### Text Transform in TailwindCSS

- **Text Transform**: TailwindCSS provides utilities to control the **text transformation**, allowing you to easily change the case of text (uppercase, lowercase, capitalize) or restore it to its original form. These utilities map directly to the CSS `text-transform` property.

#### Available Text Transform Classes:
  - **`uppercase`**: Transforms text to uppercase.
  - **`lowercase`**: Transforms text to lowercase.
  - **`capitalize`**: Transforms the first letter of each word to uppercase.
  - **`normal-case`**: Removes any transformations and returns the text to its normal case.

> **Text Transform**：TailwindCSS 提供了一组工具类，用于控制 **文本转换**，可以轻松更改文本的大小写（大写、小写、首字母大写），或将其恢复为原始形式。这些工具类直接映射到 CSS 的 `text-transform` 属性。

#### Example:

![image-20241119100811894](C:\Users\10691\AppData\Roaming\Typora\typora-user-images\image-20241119100811894.png)

```html
<div class="bg-gray-100 p-4">
  <p class="uppercase text-blue-500">Uppercase text (uppercase)</p>
  <p class="lowercase text-red-500">LOWERCASE TEXT (lowercase)</p>
  <p class="capitalize text-green-500">capitalize each word (capitalize)</p>
  <p class="normal-case text-gray-700 uppercase">
    THIS TEXT IS UPPERCASE, BUT NOW IT'S NORMAL CASE (normal-case).
  </p>
</div>
```

In this example:
- **`uppercase`** forces the text in the first paragraph to be displayed in all uppercase letters.
- **`lowercase`** converts the text in the second paragraph to all lowercase letters.
- **`capitalize`** capitalizes the first letter of each word in the third paragraph.
- **`normal-case`** removes any text transformations applied by other classes, returning the text to its original form in the fourth paragraph.

These utilities are helpful when you want to enforce consistent text casing in your design, especially for headings, buttons, or other UI elements where text case is important.