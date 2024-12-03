### Responsive Images  

To make images responsive, use `max-width: 100%`. This ensures images scale proportionally within their parent container without exceeding its width.  

1. **Key Property**:  
   - `max-width: 100%`: Restricts the image width to the container's width while maintaining its aspect ratio.  
   - `height: auto`: Ensures the height adjusts proportionally.  

2. **Benefits**:  
   - Prevents images from overflowing containers on smaller screens.  
   - Works well in flexible layouts.  

> **响应式图片**  
> 使用 `max-width: 100%` 使图片响应式。此属性确保图片按比例缩放，不会超出父容器宽度。  
> 1. **关键属性**：  
>    - `max-width: 100%`：限制图片宽度为容器宽度，同时保持宽高比。  
>    - `height: auto`：确保高度按比例调整。  
> 2. **优点**：  
>    - 防止图片在小屏幕上溢出容器。  
>    - 在灵活布局中效果良好。  

---

### Code Example:

#### **Responsive Image**
```css
img {
  max-width: 100%; /* Scales the image to fit within its container */
  height: auto;    /* Maintains the aspect ratio */
}
```

```html
<div style="width: 50%; border: 1px solid gray;">
  <img src="example.jpg" alt="Responsive Image">
</div>
```

---

### Key Notes:  
1. Use `max-width: 100%` for images in fluid layouts.  
2. Pair it with `height: auto` to maintain aspect ratio.  
3. Test on different screen sizes to ensure proper scaling.