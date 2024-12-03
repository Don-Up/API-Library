### Shadow Effects  

**CSS shadow effects** enhance elements with shadows for depth and style.  

1. **`box-shadow`**: Adds shadow to an element’s box.  
   - Syntax: `box-shadow: offset-x offset-y blur-radius spread-radius color;`.  
   - Example: `box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);`.  

2. **`text-shadow`**: Adds shadow to text.  
   - Syntax: `text-shadow: offset-x offset-y blur-radius color;`.  
   - Example: `text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);`.  

**Difference**: `box-shadow` affects boxes, while `text-shadow` applies only to text.  

> **阴影效果**  
> **CSS 阴影效果** 为元素添加阴影，增强深度和样式。  
> 1. **`box-shadow`**：为元素盒子添加阴影。  
>    - 语法：`box-shadow: 水平偏移 垂直偏移 模糊半径 扩展半径 颜色;`  
>    - 示例：`box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);`  
> 2. **`text-shadow`**：为文本添加阴影。  
>    - 语法：`text-shadow: 水平偏移 垂直偏移 模糊半径 颜色;`  
>    - 示例：`text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);`  
>    **区别**：`box-shadow` 作用于盒子，`text-shadow` 仅作用于文本。  

---

### Code Examples:

#### **Box Shadow**
```css
.box {
  width: 200px;
  height: 100px;
  background-color: lightblue;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3); /* Adds a 3D shadow effect */
}
```

#### **Text Shadow**
```css
.text {
  font-size: 2rem;
  color: #3498db;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5); /* Adds a soft shadow to text */
}
```

```html
<div class="box"></div>
<div class="text">Shadowed Text</div>
```

---

### Key Notes:  
1. **`box-shadow`** has an optional spread-radius for shadow size.  
2. **`text-shadow`** does not support spread-radius.  
3. Shadows improve aesthetics but use with balance to avoid cluttered designs.