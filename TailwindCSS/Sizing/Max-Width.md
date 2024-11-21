### Max-Width in TailwindCSS

- **Max-Width**: TailwindCSS provides utilities to control the **maximum width** of an element, ensuring that the element does not grow wider than the specified value. This is handled via the CSS `max-width` property. Available utilities include:
  - **`max-w-xs`**: Sets the maximum width to 20rem.
  - **`max-w-sm`**, **`max-w-md`**, **`max-w-lg`**, **`max-w-xl`**: Sets the maximum width to predefined sizes ranging from 24rem to 36rem.
  - **`max-w-full`**: Sets the maximum width to 100%.
  - **`max-w-screen-sm`**, **`max-w-screen-md`**, **`max-w-screen-lg`**, **`max-w-screen-xl`**: Sets the maximum width to the width of the screen at different breakpoints.
  - **`max-w-none`**: Removes any maximum width restrictions.

> **Max-Width**：TailwindCSS 提供了一组工具类，用于控制元素的 **最大宽度**，确保元素不会超过设定的宽度。这通过 CSS 的 `max-width` 属性实现。可用工具类包括：
> - **`max-w-xs`**：将最大宽度设置为 20rem。
> - **`max-w-sm`**、**`max-w-md`**、**`max-w-lg`**、**`max-w-xl`**：将最大宽度设置为预定义的尺寸，范围从 24rem 到 36rem。
> - **`max-w-full`**：将最大宽度设置为 100%。
> - **`max-w-screen-sm`**、**`max-w-screen-md`**、**`max-w-screen-lg`**、**`max-w-screen-xl`**：将最大宽度设置为不同断点下的屏幕宽度。
> - **`max-w-none`**：取消任何最大宽度限制。

#### Example:

```html
<div class="max-w-md bg-gray-200 p-4">
  <p class="bg-blue-500 text-white p-4">
    This container has a maximum width of 28rem (max-w-md).
  </p>
</div>
```

In this example, `max-w-md` restricts the container's width to a maximum of 28rem. You can adjust the `max-w` utility to fit your design requirements.