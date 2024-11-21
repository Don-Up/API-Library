### Line Height in TailwindCSS

- **Line Height**: TailwindCSS provides utilities to control the **line height** (leading) of text. These utilities map directly to the CSS `line-height` property and allow you to adjust the vertical spacing between lines of text. The available options include a range of predefined values:
  - **`leading-none`**: Sets line height to 1 (no extra spacing).
  - **`leading-tight`**: Sets a tight line height (1.25).
  - **`leading-snug`**: Sets a slightly snug line height (1.375).
  - **`leading-normal`**: Default line height (1.5).
  - **`leading-relaxed`**: Sets a relaxed line height (1.625).
  - **`leading-loose`**: Sets a loose line height (2).
  - **`leading-[value]`**: You can also specify custom line heights using arbitrary values (e.g., `leading-[3rem]`).

> **Line Height**：TailwindCSS 提供了一组工具类，用于控制文本的 **行高**（行距），直接映射到 CSS 的 `line-height` 属性。你可以通过这些工具调整文本行之间的垂直间距。可用的选项包括一系列预定义的值：
> - **`leading-none`**：行高设置为 1（无额外间距）。
> - **`leading-tight`**：紧凑的行高（1.25）。
> - **`leading-snug`**：略微紧凑的行高（1.375）。
> - **`leading-normal`**：默认行高（1.5）。
> - **`leading-relaxed`**：舒适的行高（1.625）。
> - **`leading-loose`**：较松的行高（2）。
> - **`leading-[value]`**：你也可以通过自定义值设置行高（例如 `leading-[3rem]`）。

#### Example:

![image-20241119100217317](C:\Users\10691\AppData\Roaming\Typora\typora-user-images\image-20241119100217317.png)

```html
<div class="bg-gray-200 p-4">
  <p class="leading-none text-lg bg-blue-500 text-white p-2">None line height (leading-none)</p>
  <p class="leading-tight text-lg bg-green-500 text-white p-2">Tight line height (leading-tight)</p>
  <p class="leading-relaxed text-lg bg-red-500 text-white p-2">Relaxed line height (leading-relaxed)</p>
  <p class="leading-loose text-lg bg-yellow-500 text-white p-2">Loose line height (leading-loose)</p>
</div>
```

In this example:
- **`leading-none`** sets no extra spacing between lines, making the text appear very compact.
- **`leading-tight`** sets a tighter line height with less vertical space between lines.
- **`leading-relaxed`** increases the line height for more comfortable reading.
- **`leading-loose`** adds even more vertical space between lines for a more open look.

You can use these utilities to adjust the readability and visual style of your text, depending on the layout and design you're aiming for.