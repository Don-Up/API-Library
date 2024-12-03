### Gradients  

CSS gradients allow smooth transitions between colors without using images.  

1. **Linear Gradient (`linear-gradient`)**:  
   Creates a gradient in a straight line (e.g., top to bottom, left to right).  
   - Syntax: `linear-gradient(direction, color1, color2, ...)`.  
   - Example: `background: linear-gradient(to right, red, blue);`.  

2. **Radial Gradient (`radial-gradient`)**:  
   Creates a gradient radiating from a center point.  
   - Syntax: `radial-gradient(shape size at position, color1, color2, ...)`.  
   - Example: `background: radial-gradient(circle, red, blue);`.  

> **渐变**  
> CSS 渐变允许颜色之间的平滑过渡，无需使用图像：  
> 1. **线性渐变 (`linear-gradient`)**：  
>    创建沿直线方向的渐变（例如从上到下，从左到右）。  
>    - 语法：`linear-gradient(direction, color1, color2, ...)`  
>    - 示例：`background: linear-gradient(to right, red, blue);`  
> 2. **径向渐变 (`radial-gradient`)**：  
>    创建从中心点向外辐射的渐变。  
>    - 语法：`radial-gradient(shape size at position, color1, color2, ...)`  
>    - 示例：`background: radial-gradient(circle, red, blue);`  

---

### Code Examples:

#### **Linear Gradient**
```css
div {
  background: linear-gradient(to right, red, blue); /* Gradient from left to right */
  height: 200px;
}
```

#### **Radial Gradient**
```css
div {
  background: radial-gradient(circle, red, blue); /* Circular gradient from center */
  height: 200px;
}
```

#### **Advanced Example**
```css
div {
  background: linear-gradient(45deg, red, yellow, blue); /* Diagonal gradient */
  height: 200px;
}

div.circle-gradient {
  background: radial-gradient(circle at top left, red, yellow, blue); /* Gradient radiating from top-left */
  height: 200px;
}
```

---

### Key Notes:  
1. Use **`linear-gradient`** for directional transitions.  
2. Use **`radial-gradient`** for circular or elliptical transitions.  
3. Gradients can include multiple color stops for complex effects.  
4. Gradients are supported in `background` and other CSS properties like `border-image`.