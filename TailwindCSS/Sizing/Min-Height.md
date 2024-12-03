### Min-Height in TailwindCSS

- **Min-Height**: TailwindCSS provides utilities to control the **minimum height** of an element. This ensures that an element does not shrink smaller than the specified value, even if its content is smaller. These utilities directly map to the CSS `min-height` property:
  - **`min-h-0`**: Sets the minimum height to 0.
  - **`min-h-full`**: Sets the minimum height to 100% of the parent container.
  - **`min-h-screen`**: Sets the minimum height to 100% of the viewport height.
  - **`min-h-min`**: Sets the minimum height based on the content’s minimum size.
  - **`min-h-max`**: Sets the minimum height based on the content’s maximum size.
  - **`min-h-fit`**: Automatically adjusts to fit the content.

> **Min-Height**：TailwindCSS 提供了工具类，用于控制元素的 **最小高度**，确保元素即使内容较少也不会缩小到小于设定值的尺寸。这些工具类直接映射到 CSS 的 `min-height` 属性:
> - **`min-h-0`**：将最小高度设置为 0。
> - **`min-h-full`**：将最小高度设置为父容器的 100%。
> - **`min-h-screen`**：将最小高度设置为视口高度的 100%。
> - **`min-h-min`**：根据内容的最小尺寸设置最小高度。
> - **`min-h-max`**：根据内容的最大尺寸设置最小高度。
> - **`min-h-fit`**：根据内容自动调整最小高度。

#### Example:

<audio src="C:\Users\10691\Downloads\这里展示了min-h（最小高度.mp3"></audio>

```html
<div class="min-h-screen bg-gray-200 p-4">
  <div class="min-h-0 bg-blue-500 text-white p-4">
    This child div has no minimum height.
  </div>
</div>
```

In this example, `min-h-screen` ensures the outer container has a minimum height of 100% of the viewport. The inner container has `min-h-0`, meaning it has no minimum height and will shrink to fit its content. You can adjust these utilities based on layout needs.