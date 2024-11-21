### Object Position in TailwindCSS

- **Object Position**: TailwindCSS provides utilities to position media (like images or videos) within their container using the CSS `object-position` property. You can control how the object is aligned inside its container, especially when combined with `object-fit`. Common options include:
  - **`object-center`**: Centers the media.
  - **`object-top`**, **`object-bottom`**, **`object-left`**, **`object-right`**: Aligns the media to the specified edge.
  - **`object-{position}`**: Custom positions, like `object-[position-percentage]`, can be used.

> **Object Position**：TailwindCSS 提供了一组工具类，用于通过 CSS 的 `object-position` 属性控制媒体（如图片或视频）在其容器中的对齐方式。常见选项包括：  
> - **`object-center`**：将媒体居中对齐。  
> - **`object-top`**、**`object-bottom`**、**`object-left`**、**`object-right`**：将媒体对齐到指定边缘。  
> - **`object-{position}`**：可以使用自定义位置（如百分比）。

#### Example:

```html
<img class="object-cover object-center w-48 h-48" src="image.jpg" alt="Centered Image">
<img class="object-cover object-top w-48 h-48" src="image.jpg" alt="Top Aligned Image">
```

In this example, `object-center` centers the image, while `object-top` aligns it to the top of the container.