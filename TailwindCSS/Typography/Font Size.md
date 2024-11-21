### Font Size in TailwindCSS

- **Font Size**: TailwindCSS provides a variety of utilities to control the **font size** of text. These utilities map directly to the CSS `font-size` property. Tailwind offers a range of predefined sizes, from small to large, and also supports responsive scaling.
  - **`text-xs`**: Extra small text (0.75rem).
  - **`text-sm`**: Small text (0.875rem).
  - **`text-base`**: Base text (1rem, default).
  - **`text-lg`**: Large text (1.125rem).
  - **`text-xl`**, **`text-2xl`**, **`text-3xl`**: Increasingly larger text (1.25rem, 1.5rem, 1.875rem, etc.).
  - **`text-4xl`** to **`text-9xl`**: Very large text, up to 9xl (6rem).

> **Font Size**：TailwindCSS 提供了一组工具类，用于控制文本的 **字体大小**。这些工具类直接映射到 CSS 的 `font-size` 属性。Tailwind 提供了从小到大的预定义大小，并支持响应式缩放。
> - **`text-xs`**：超小字体（0.75rem）。
> - **`text-sm`**：小字体（0.875rem）。
> - **`text-base`**：基础字体（1rem，默认）。
> - **`text-lg`**：大字体（1.125rem）。
> - **`text-xl`**、**`text-2xl`**、**`text-3xl`**：越来越大的字体（1.25rem、1.5rem、1.875rem 等）。
> - **`text-4xl`** 到 **`text-9xl`**：非常大的字体，最大到 9xl（6rem）。

#### Example:

![image-20241119095801573](C:\Users\10691\AppData\Roaming\Typora\typora-user-images\image-20241119095801573.png)

```html
<div class="text-base bg-gray-200 p-4">
  <p class="text-sm bg-blue-500 text-white p-2">Small text (text-sm)</p>
  <p class="text-lg bg-green-500 text-white p-2">Large text (text-lg)</p>
  <p class="text-3xl bg-red-500 text-white p-2">Very large text (text-3xl)</p>
</div>
```

In this example, `text-sm` applies small text to the first paragraph, `text-lg` applies a larger font size to the second, and `text-3xl` applies a very large font size to the third. You can use these classes to adjust text size as per your design requirements.