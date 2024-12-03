### CSS Shapes  

CSS allows creating geometric shapes like circles, triangles, and custom designs using properties like `border-radius`, `border`, and `clip-path`.  

1. **Circle**: Use `border-radius: 50%` to create a perfect circle.  
   - Example: `width: 100px; height: 100px; border-radius: 50%;`.  

2. **Triangle**: Use the `border` property, with transparent sides and one visible border.  
   - Example: `border: 50px solid transparent; border-bottom: 50px solid red;`.  

3. **Custom Shapes**: Use `clip-path` with shapes like polygons.  
   - Example: `clip-path: polygon(50% 0%, 0% 100%, 100% 100%);`.  

> **CSS 形状**  
> CSS 能通过 `border-radius`、`border` 和 `clip-path` 等属性创建圆形、三角形和自定义形状。  
> 1. **圆形**：使用 `border-radius: 50%` 创建完美圆形。  
>    - 示例：`width: 100px; height: 100px; border-radius: 50%;`。  
> 2. **三角形**：通过 `border` 属性设置透明边和可见边。  
>    - 示例：`border: 50px solid transparent; border-bottom: 50px solid red;`。  
> 3. **自定义形状**：使用 `clip-path` 定义多边形等形状。  
>    - 示例：`clip-path: polygon(50% 0%, 0% 100%, 100% 100%);`。  

---

### Code Examples:

#### **Circle**
```css
.circle {
  width: 100px;
  height: 100px;
  background-color: lightblue;
  border-radius: 50%; /* Makes the element circular */
}
```

#### **Triangle**
```css
.triangle {
  width: 0;
  height: 0;
  border-left: 50px solid transparent; /* Transparent left border */
  border-right: 50px solid transparent; /* Transparent right border */
  border-bottom: 100px solid red; /* Visible bottom border creates the triangle */
}
```

#### **Custom Shape**
```css
.custom-shape {
  width: 150px;
  height: 150px;
  background-color: lightgreen;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%); /* Creates a triangle-like custom shape */
}
```

```html
<div class="circle"></div>
<div class="triangle"></div>
<div class="custom-shape"></div>
```

---

### Key Notes:  
1. Use `border-radius` for rounded shapes like circles or ovals.  
2. Triangles rely on zero `width`/`height` and the `border` property.  
3. Use `clip-path` for advanced, responsive custom shapes.  
4. Test `clip-path` in modern browsers for compatibility.