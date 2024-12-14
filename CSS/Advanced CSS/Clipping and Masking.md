### Clipping and Masking  

**Clipping** and **masking** control the visibility of an element's content:  

1. **`clip-path`**: Clips an element to a specific shape or path (e.g., circle, polygon).  
   - Example: `clip-path: circle(50%);` creates a circular clip.  

2. **`mask` / `mask-image`**: Masks an element using an image or gradient, controlling which parts are visible based on transparency.  
   - Example: `mask-image: linear-gradient(to right, black, transparent);`.  

**Difference**:  
- `clip-path` hides content outside the shape (no transparency).  
- `mask` allows transparency effects.  

> **裁剪与遮罩**  
> **裁剪** 和 **遮罩** 控制元素内容的可见性：  
> 1. **`clip-path`**：将元素裁剪为特定形状或路径（如圆形、多边形）。  
>    - 示例：`clip-path: circle(50%);` 创建一个圆形裁剪。  
> 2. **`mask` / `mask-image`**：使用图像或渐变遮罩元素，根据透明度控制可见部分。  
>    - 示例：`mask-image: linear-gradient(to right, black, transparent);`。  
>    **区别**：  
> - `clip-path` 隐藏形状外的内容（无透明效果）。  
> - `mask` 支持透明效果。  

---

### Code Examples:

#### **Clipping with `clip-path`**

<img src="C:\Users\10691\Desktop\Documentation\CSS\Advanced CSS\assets\image-20241125133147089.png" alt="image-20241125133147089" style="zoom:33%;" />

<audio src="..\..\mp3\这段代码展示了如何使用CSS的.mp3"></audio>

```css
.circle {
  width: 200px;
  height: 200px;
  background-color: lightblue;
  clip-path: circle(50%); /* Clips the element into a circle */
}
```

```html
<div class="circle"></div>
```

---

#### **Masking with `mask-image`**

<img src="C:\Users\10691\Desktop\Documentation\CSS\Advanced CSS\assets\image-20241125133255153.png" alt="image-20241125133255153" style="zoom:33%;" />

<audio src="..\..\mp3\这段代码展示了如何使用CSS的 (1).mp3"></audio>

```css
.masked {
  width: 300px;
  height: 200px;
  background-color: lightcoral;
  mask-image: linear-gradient(to right, black, transparent); /* Mask with gradient */
  -webkit-mask-image: linear-gradient(to right, black, transparent); /* Webkit support */
}
```

```html
<div class="masked"></div>
```

---

### Key Notes:  
1. Use **`clip-path`** for basic shape clipping (e.g., circles, polygons).  
2. Use **`mask`** for complex transparency effects with gradients or images.  
3. Both enhance visual design but may require browser compatibility checks.