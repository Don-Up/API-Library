### Object Fit in TailwindCSS

- **Object Fit**: TailwindCSS provides utilities to control how an image or video fits within its container using the CSS `object-fit` property. Options include:
  - **`object-contain`**: Scales the media to maintain its aspect ratio and fit within the container.
  - **`object-cover`**: Scales the media to cover the container while maintaining its aspect ratio.
  - **`object-fill`**: Stretches the media to fill the container, ignoring aspect ratio.
  - **`object-none`**: Shows the media at its original size.
  - **`object-scale-down`**: Scales the media down to fit the container, but only if it's larger.

> **Object Fit**：TailwindCSS 提供了用于控制图片或视频如何适应其容器的工具类，通过 CSS 的 `object-fit` 属性实现。选项包括：  
> - **`object-contain`**：按比例缩放媒体以适应容器。  
> - **`object-cover`**：按比例缩放媒体以覆盖容器。  
> - **`object-fill`**：拉伸媒体以填充容器，不考虑比例。  
> - **`object-none`**：按原始大小显示媒体。  
> - **`object-scale-down`**：仅当媒体大于容器时缩小它以适应容器。

#### Example:

```html
<img class="object-cover w-48 h-48" src="image.jpg" alt="Example Image">
<img class="object-contain w-48 h-48" src="image.jpg" alt="Example Image">
```

In this example, `object-cover` makes the image cover the container, while `object-contain` fits it inside while maintaining its aspect ratio.