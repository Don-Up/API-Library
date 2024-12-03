### CSS Filters  

**CSS filters** apply visual effects like blurring, brightness adjustment, or grayscale to elements.  

1. **`blur(px)`**: Creates a blur effect.  
   - Example: `filter: blur(5px);`.  

2. **`brightness(%)`**: Adjusts brightness (100% = normal).  
   - Example: `filter: brightness(150%);`.  

3. **`grayscale(%)`**: Converts colors to grayscale (100% = fully grayscale).  
   - Example: `filter: grayscale(100%);`.  

Filters are stackable, allowing multiple effects at once: `filter: blur(5px) brightness(120%);`.  

> **CSS 滤镜**  
> **CSS 滤镜** 为元素添加视觉效果，如模糊、亮度调整或灰度化。  
> 1. **`blur(px)`**：创建模糊效果。  
>    - 示例：`filter: blur(5px);`  
> 2. **`brightness(%)`**：调整亮度（100% = 正常亮度）。  
>    - 示例：`filter: brightness(150%);`  
> 3. **`grayscale(%)`**：将颜色转换为灰度（100% = 完全灰度）。  
>    - 示例：`filter: grayscale(100%);`  
>    滤镜支持叠加：`filter: blur(5px) brightness(120%);`。  

---

### Code Example:

#### **Blur Effect**
```css
.blurred {
  width: 300px;
  height: 200px;
  background-color: lightblue;
  filter: blur(5px); /* Applies a 5px blur */
}
```

#### **Brightness Adjustment**
```css
.bright {
  width: 300px;
  height: 200px;
  background-color: lightgreen;
  filter: brightness(150%); /* Increases brightness by 50% */
}
```

#### **Grayscale Effect**
```css
.grayscale {
  width: 300px;
  height: 200px;
  background-color: lightcoral;
  filter: grayscale(100%); /* Converts to grayscale */
}
```

```html
<div class="blurred"></div>
<div class="bright"></div>
<div class="grayscale"></div>
```

---

### Key Notes:  
1. Filters enhance visuals without modifying the original image or element.  
2. Combine filters for complex effects.  
3. Supported in most modern browsers, but check compatibility for older versions.