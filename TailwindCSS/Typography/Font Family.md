### Font Family in TailwindCSS

- **Font Family**: TailwindCSS provides utilities to control the **font family** of text. These utilities map directly to the CSS `font-family` property and let you apply different font families for different kinds of content. Tailwind includes a few default font families, and you can extend or customize them in your configuration file.
  - **`font-sans`**: Applies a sans-serif font family.
  - **`font-serif`**: Applies a serif font family.
  - **`font-mono`**: Applies a monospace font family.

> **Font Family**：TailwindCSS 提供了一组工具类，用于控制文本的 **字体系列**。这些工具类直接映射到 CSS 的 `font-family` 属性，允许你为不同的内容类型应用不同的字体系列。Tailwind 默认提供几种字体系列，你也可以在配置文件中扩展或自定义它们。
> - **`font-sans`**：应用无衬线字体系列。
> - **`font-serif`**：应用衬线字体系列。
> - **`font-mono`**：应用等宽字体系列。

#### Example:

![image-20241119095719880](C:\Users\10691\AppData\Roaming\Typora\typora-user-images\image-20241119095719880.png)

```html
<div class="bg-gray-200 p-4">
  <p class="font-sans text-lg bg-blue-500 text-white p-2">Sans-serif font (font-sans)</p>
  <p class="font-serif text-lg bg-green-500 text-white p-2">Serif font (font-serif)</p>
  <p class="font-mono text-lg bg-red-500 text-white p-2">Monospace font (font-mono)</p>
</div>
```

In this example:
- **`font-sans`** applies a sans-serif font to the first paragraph.
- **`font-serif`** applies a serif font to the second paragraph.
- **`font-mono`** applies a monospace font to the third paragraph.

You can combine these classes with other utilities like `text-lg` to further style the text.