### Aspect Ratio in TailwindCSS

- **Aspect Ratio**: TailwindCSS provides utilities for controlling the aspect ratio of an element. This ensures that the width and height of an element maintain a specific proportion, useful for images, videos, or any container. Common utilities include:
  - **`aspect-auto`**: Automatically adjusts the aspect ratio.
  - **`aspect-square`**: Maintains a 1:1 aspect ratio (square).
  - **`aspect-video`**: Maintains a 16:9 aspect ratio (video).

> **Aspect Ratio**：TailwindCSS 提供了控制元素宽高比的工具类。这确保元素的宽度和高度保持特定比例，适用于图像、视频或任何容器。常用的工具类包括：
> - **`aspect-auto`**：自动调整宽高比。
> - **`aspect-square`**：保持 1:1 的宽高比（正方形）。
> - **`aspect-video`**：保持 16:9 的宽高比（视频）。

#### Example:

```html
<div class="aspect-video bg-gray-300">
  <img src="video-thumbnail.jpg" alt="Video Thumbnail" class="object-cover">
</div>
```

In this example, the container maintains a 16:9 aspect ratio using `aspect-video`, and the image inside is scaled to fit the container.