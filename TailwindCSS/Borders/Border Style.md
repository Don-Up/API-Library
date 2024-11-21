### Border Style in TailwindCSS

- **Border Style**: TailwindCSS provides utilities to control the **style of borders** on an element. These utilities map directly to the CSS `border-style` property, allowing you to apply various border styles such as solid, dashed, or dotted.

#### Available Border Style Classes:
- **`border-solid`**: Applies a solid border (default).
- **`border-dashed`**: Applies a dashed border.
- **`border-dotted`**: Applies a dotted border.
- **`border-double`**: Applies a double border.
- **`border-none`**: Removes the border.

> **Border Style**: TailwindCSS 提供了控制 **边框样式** 的工具类，这些类直接映射到 CSS 的 `border-style` 属性。你可以轻松地为元素应用不同的边框样式。

#### Example Border Style Classes:

![image-20241119103343628](C:\Users\10691\AppData\Roaming\Typora\typora-user-images\image-20241119103343628.png)

```html
<div class="space-y-4 p-4">
  <div class="border-4 border-blue-500 border-solid p-4">
    Solid border (border-solid)
  </div>
  <div class="border-4 border-red-500 border-dashed p-4">
    Dashed border (border-dashed)
  </div>
  <div class="border-4 border-green-500 border-dotted p-4">
    Dotted border (border-dotted)
  </div>
  <div class="border-4 border-purple-500 border-double p-4">
    Double border (border-double)
  </div>
  <div class="border-4 border-yellow-500 border-none p-4">
    No border (border-none)
  </div>
</div>
```

In this example:
- **`border-solid`** applies a solid border to the element.
- **`border-dashed`** applies a dashed border.
- **`border-dotted`** applies a dotted border.
- **`border-double`** applies a double border, which consists of two parallel lines.
- **`border-none`** removes the border entirely.

#### Combining Border Style with Width and Color:
You can easily combine **border styles** with **border width** and **border color** classes to create unique border designs.

### Example with Border Style, Width, and Color:

![image-20241119103428087](C:\Users\10691\AppData\Roaming\Typora\typora-user-images\image-20241119103428087.png)

```html
<div class="space-y-4 p-4">
  <div class="border-4 border-blue-500 border-solid p-4">
    Solid blue border (border-4 border-blue-500 border-solid)
  </div>
  <div class="border-2 border-red-500 border-dashed p-4">
    Dashed red border (border-2 border-red-500 border-dashed)
  </div>
  <div class="border-4 border-green-500 border-dotted p-4">
    Dotted green border (border-4 border-green-500 border-dotted)
  </div>
  <div class="border-4 border-purple-500 border-double p-4">
    Double purple border (border-4 border-purple-500 border-double)
  </div>
</div>
```

In this combination example:
- **`border-4 border-blue-500 border-solid`** applies a 4px solid blue border.
- **`border-2 border-red-500 border-dashed`** applies a 2px dashed red border.
- **`border-4 border-green-500 border-dotted`** applies a 4px dotted green border.
- **`border-4 border-purple-500 border-double`** applies a 4px double purple border.

#### Responsive Border Style:
You can apply border styles responsively by using breakpoint prefixes:
- **`sm:border-dashed`**: Applies a dashed border on small screens and up.
- **`lg:border-dotted`**: Applies a dotted border on large screens and up.

### Example with Responsive Border Style:

![image-20241119103449523](C:\Users\10691\AppData\Roaming\Typora\typora-user-images\image-20241119103449523.png)

```html
<div class="space-y-4 p-4">
  <div class="border-4 border-blue-500 sm:border-dotted lg:border-dashed p-4">
    Responsive border style: solid → dotted → dashed
  </div>
</div>
```

In this example:
- **`border-4 border-blue-500`** applies a solid border by default.
- **`sm:border-dotted`** changes the border style to dotted on small screens and larger.
- **`lg:border-dashed`** changes the border style to dashed on large screens and larger.

These utilities allow you to quickly apply consistent border styles across your components while maintaining flexibility with width, color, and responsive design.