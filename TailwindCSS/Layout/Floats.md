### Floats

- **Floats**: TailwindCSS provides utilities to control the CSS `float` property. They include:
  - **`float-left`**: Floats an element to the left.
  - **`float-right`**: Floats an element to the right.
  - **`float-none`**: Removes floating behavior (default).
  - **`clearfix`**: Ensures that floating elements are cleared within a container.

> **Floats**：TailwindCSS 提供了一组控制 CSS `float` 属性的工具类，包括：  
> - **`float-left`**：将元素向左浮动。  
> - **`float-right`**：将元素向右浮动。  
> - **`float-none`**：移除浮动行为（默认）。  
> - **`clearfix`**：确保容器内的浮动元素被清除。

#### Example:

```html
<div class="float-left w-1/3 bg-blue-200">Left Float</div>
<div class="float-right w-1/3 bg-green-200">Right Float</div>
<div class="clearfix bg-gray-200">Cleared Container</div>
```

In this example, `float-left` and `float-right` float two elements to the left and right, while `clearfix` clears the floats within the container.