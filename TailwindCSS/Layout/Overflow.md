### Overflow in TailwindCSS

- **Overflow**: TailwindCSS provides utilities to control how content overflows its container. It directly maps to the CSS `overflow` property. Common options include:
  - **`overflow-auto`**: Adds scrollbars if necessary.
  - **`overflow-hidden`**: Clips the content without scrollbars.
  - **`overflow-visible`**: Content is not clipped (default).
  - **`overflow-scroll`**: Always shows scrollbars.
  - You can also control overflow on specific axes using `overflow-x` and `overflow-y` (e.g., `overflow-x-auto`).

> **Overflow**：TailwindCSS 提供了用于控制内容如何溢出其容器的工具类，对应 CSS 的 `overflow` 属性。常见选项包括：  
> - **`overflow-auto`**：必要时显示滚动条。  
> - **`overflow-hidden`**：裁剪内容，不显示滚动条。  
> - **`overflow-visible`**：内容不被裁剪（默认）。  
> - **`overflow-scroll`**：始终显示滚动条。  
> 还可以通过 `overflow-x` 和 `overflow-y` 控制特定轴上的溢出。

#### Example:

```html
<div class="overflow-auto h-32 w-32 bg-gray-200">
  <p>This content is scrollable if it overflows.</p>
</div>

<div class="overflow-hidden h-32 w-32 bg-gray-200">
  <p>This content is hidden if it overflows.</p>
</div>
```

In this example, `overflow-auto` makes the content scrollable if necessary, while `overflow-hidden` ensures overflow content is clipped.