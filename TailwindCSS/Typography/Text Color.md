### Text Color in TailwindCSS

- **Text Color**: TailwindCSS provides utilities to control the **text color** of elements. These utilities map directly to the CSS `color` property. Tailwind comes with a set of predefined colors that can be applied to text, and each color can be adjusted with various shades (from 50 to 900). You can also customize or extend the color palette in your Tailwind configuration file.

#### Basic Text Color Classes:
  - **`text-{color}`**: Sets the text color using predefined colors (e.g., `text-blue-500`).
  - **`text-transparent`**: Makes the text transparent.
  - **`text-black`**: Sets the text color to black.
  - **`text-white`**: Sets the text color to white.
  - **`text-{color}-{shade}`**: Sets the text color to a specific shade of a color (e.g., `text-red-700` or `text-gray-300`).

> **Text Color**：TailwindCSS 提供了一组工具类，用于控制元素的 **文本颜色**。这些类直接映射到 CSS 的 `color` 属性。Tailwind 默认提供一组预定义的颜色，并且每种颜色都有不同的深浅（从 50 到 900）。你也可以在配置文件中自定义或扩展颜色。

#### Example Color Classes:
  - **`text-blue-500`**: Sets the text color to blue with a shade of 500.
  - **`text-red-700`**: Sets the text color to red with a shade of 700.
  - **`text-gray-300`**: Sets the text color to gray with a shade of 300.

#### Example:

![image-20241119100532537](C:\Users\10691\AppData\Roaming\Typora\typora-user-images\image-20241119100532537.png)

```html
<div class="bg-gray-100 p-4">
  <p class="text-blue-500">Blue text (text-blue-500)</p>
  <p class="text-red-700">Red text (text-red-700)</p>
  <p class="text-green-600">Green text (text-green-600)</p>
  <p class="text-gray-300 bg-black p-2">Light gray text (text-gray-300)</p>
  <p class="text-white bg-blue-900 p-2">White text on dark background (text-white)</p>
  <p class="text-transparent bg-green-500 p-2">Transparent text (text-transparent)</p>
</div>
```

In this example:
- **`text-blue-500`** applies a medium blue color to the text.
- **`text-red-700`** applies a dark red color to the text.
- **`text-green-600`** applies a dark green color to the text.
- **`text-gray-300`** applies a light gray color to the text.
- **`text-white`** applies white text on a dark background.
- **`text-transparent`** makes the text transparent, so it blends with the background.

These utilities can be combined with other Tailwind utilities to create visually engaging designs and ensure proper contrast for accessibility.