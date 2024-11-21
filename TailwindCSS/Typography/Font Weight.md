### Font Weight in TailwindCSS

- **Font Weight**: TailwindCSS provides utilities to control the **font weight** of text, mapping directly to the CSS `font-weight` property. These utilities allow you to set different levels of font boldness, from light to heavy:
  - **`font-thin`**: Sets the font weight to 100 (very thin).
  - **`font-extralight`**: Sets the font weight to 200.
  - **`font-light`**: Sets the font weight to 300.
  - **`font-normal`**: Sets the font weight to 400 (default/regular).
  - **`font-medium`**: Sets the font weight to 500.
  - **`font-semibold`**: Sets the font weight to 600.
  - **`font-bold`**: Sets the font weight to 700.
  - **`font-extrabold`**: Sets the font weight to 800.
  - **`font-black`**: Sets the font weight to 900 (heaviest).

> **Font Weight**：TailwindCSS 提供了一组工具类，用于控制文本的 **字体粗细**，直接映射到 CSS 的 `font-weight` 属性。这些工具类允许你为文本设置不同的粗细，从轻到重：
> - **`font-thin`**：设置字体粗细为 100（非常细）。
> - **`font-extralight`**：设置字体粗细为 200。
> - **`font-light`**：设置字体粗细为 300。
> - **`font-normal`**：设置字体粗细为 400（默认/常规）。
> - **`font-medium`**：设置字体粗细为 500。
> - **`font-semibold`**：设置字体粗细为 600。
> - **`font-bold`**：设置字体粗细为 700。
> - **`font-extrabold`**：设置字体粗细为 800。
> - **`font-black`**：设置字体粗细为 900（最重）。

#### Example:

![image-20241119095916937](C:\Users\10691\AppData\Roaming\Typora\typora-user-images\image-20241119095916937.png)

```html
<div class="bg-gray-200 p-4">
  <p class="font-thin text-lg bg-blue-500 text-white p-2">Thin font (font-thin)</p>
  <p class="font-semibold text-lg bg-green-500 text-white p-2">Semi-bold font (font-semibold)</p>
  <p class="font-bold text-lg bg-red-500 text-white p-2">Bold font (font-bold)</p>
  <p class="font-black text-lg bg-yellow-500 text-white p-2">Black font (font-black)</p>
</div>
```

In this example:
- **`font-thin`** applies a very thin font weight (100) to the first paragraph.
- **`font-semibold`** applies a semi-bold font weight (600) to the second paragraph.
- **`font-bold`** applies a bold font weight (700) to the third paragraph.
- **`font-black`** applies the heaviest font weight (900) to the fourth paragraph.

You can mix these font weight utilities with other TailwindCSS utilities to achieve the desired text style.