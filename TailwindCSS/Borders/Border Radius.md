### Border Radius in TailwindCSS

- **Border Radius**: TailwindCSS provides utilities to control the **border radius** of elements, which determines how rounded the corners of an element will be. These utilities map directly to the CSS `border-radius` property and include predefined classes for common radius values, as well as support for arbitrary values.

#### Available Border Radius Classes:
- **Basic Border Radius**:
  - **`rounded`**: Applies a small, uniform border radius.
  - **`rounded-sm`**: Applies a slightly smaller border radius.
  - **`rounded-md`**: Applies a medium border radius.
  - **`rounded-lg`**: Applies a large border radius.
  - **`rounded-xl`**: Applies a larger border radius.
  - **`rounded-2xl`**: Applies an extra-large border radius.
  - **`rounded-3xl`**: Applies an even larger border radius.
  - **`rounded-full`**: Applies a border radius that makes the element circular or fully rounded.
  - **`rounded-none`**: Removes the border radius (no rounding).

- **Individual Corner Control**:
  - **`rounded-t`**: Rounds the top corners.
  - **`rounded-b`**: Rounds the bottom corners.
  - **`rounded-l`**: Rounds the left corners.
  - **`rounded-r`**: Rounds the right corners.
  - **`rounded-tl`**: Rounds the top-left corner.
  - **`rounded-tr`**: Rounds the top-right corner.
  - **`rounded-bl`**: Rounds the bottom-left corner.
  - **`rounded-br`**: Rounds the bottom-right corner.

- **Arbitrary Values**:
  - **`rounded-[value]`**: You can also specify arbitrary border radius values using custom units (e.g., `rounded-[20px]`, `rounded-[50%]`).

> **Border Radius**: TailwindCSS 提供了用于控制 **边框半径** 的工具类，这些类映射到 CSS 的 `border-radius` 属性。你可以使用预定义的类或自定义数值来创建圆角效果。

#### Example Basic Border Radius Classes:

![image-20241119102409109](C:\Users\10691\AppData\Roaming\Typora\typora-user-images\image-20241119102409109.png)

```html
<div class="space-y-4 p-4">
  <div class="rounded bg-blue-500 text-white p-4">Small rounded corners (rounded)</div>
  <div class="rounded-md bg-green-500 text-white p-4">Medium rounded corners (rounded-md)</div>
  <div class="rounded-lg bg-red-500 text-white p-4">Large rounded corners (rounded-lg)</div>
  <div class="rounded-full bg-purple-500 text-white p-4 w-32 h-32 flex items-center justify-center">
    Fully rounded (rounded-full)
  </div>
  <div class="rounded-none bg-gray-500 text-white p-4">No rounded corners (rounded-none)</div>
</div>
```

In this example:
- **`rounded`** applies a small border radius to the first div, making the corners slightly rounded.
- **`rounded-md`** applies a medium radius for more noticeable rounding.
- **`rounded-lg`** increases the rounding for larger, rounded corners.
- **`rounded-full`** creates fully rounded corners, making the element circular (if the width and height are equal).
- **`rounded-none`** removes any rounding from the element.

#### Example Individual Corner Control:

![image-20241119102502166](C:\Users\10691\AppData\Roaming\Typora\typora-user-images\image-20241119102502166.png)

```html
<div class="space-y-4 p-4">
  <div class="rounded-t-lg bg-blue-500 text-white p-4">
    Rounded top corners only (rounded-t-lg)
  </div>
  <div class="rounded-b-lg bg-green-500 text-white p-4">
    Rounded bottom corners only (rounded-b-lg)
  </div>
  <div class="rounded-l-lg bg-red-500 text-white p-4">
    Rounded left corners only (rounded-l-lg)
  </div>
  <div class="rounded-tr-lg bg-purple-500 text-white p-4">
    Rounded top-right corner only (rounded-tr-lg)
  </div>
</div>
```

In this example:
- **`rounded-t-lg`** rounds only the top corners of the element.
- **`rounded-b-lg`** rounds only the bottom corners.
- **`rounded-l-lg`** rounds the left side of the element.
- **`rounded-tr-lg`** rounds only the top-right corner.

#### Arbitrary Border Radius Example:

![image-20241119102547147](C:\Users\10691\AppData\Roaming\Typora\typora-user-images\image-20241119102547147.png)

```html
<div class="space-y-4 p-4">
  <div class="rounded-[30px] bg-blue-500 text-white p-4">
    Custom border radius (30px)
  </div>
  <div class="rounded-[50%] bg-green-500 text-white p-4 w-32 h-32 flex items-center justify-center">
    Custom border radius (50%) - Circle
  </div>
</div>
```

In this example:
- **`rounded-[30px]`** applies a custom border radius of 30px to the first element.
- **`rounded-[50%]`** applies a 50% border radius, turning the second element into a perfect circle (assuming the width and height are equal).

#### Responsive Border Radius:
You can apply border radius utilities responsively by prefixing them with breakpoints:
- **`sm:rounded-lg`**: Applies a large border radius on small screens and up.
- **`lg:rounded-none`**: Removes the border radius on large screens and up.

### Example with Responsive Border Radius:

![image-20241119102615963](C:\Users\10691\AppData\Roaming\Typora\typora-user-images\image-20241119102615963.png)

```html
<div class="space-y-4 p-4">
  <div class="rounded-lg sm:rounded-full lg:rounded-none bg-blue-500 text-white p-4">
    Responsive border radius: large → full → none
  </div>
</div>
```

In this example:
- **`rounded-lg`** applies a large radius by default.
- **`sm:rounded-full`** changes the radius to fully rounded on small screens and up.
- **`lg:rounded-none`** removes the border radius on large screens and up.

These utilities give you precise control over the rounding of corners, allowing you to create a wide range of designs with smooth, rounded edges or sharp, square corners.