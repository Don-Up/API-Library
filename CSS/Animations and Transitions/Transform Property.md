### Transform Property  

The CSS **`transform`** property applies 2D or 3D transformations to elements, such as translation, rotation, scaling, or skewing:  

1. **`translate(x, y)`**: Moves an element along the X and Y axes.  
   - Example: `transform: translate(50px, 20px);`.  

2. **`rotate(angle)`**: Rotates an element around its origin.  
   - Example: `transform: rotate(45deg);`.  

3. **`scale(x, y)`**: Resizes an element. Uniform scaling uses one value.  
   - Example: `transform: scale(1.5);`.  

4. **`skew(x-angle, y-angle)`**: Tilts an element along the X and Y axes.  
   - Example: `transform: skew(20deg, 10deg);`.  

> **变形属性**  
> CSS **`transform`** 属性对元素进行 2D 或 3D 变换，例如平移、旋转、缩放或倾斜：  
> 1. **`translate(x, y)`**：沿 X 和 Y 轴移动元素。  
>    - 示例：`transform: translate(50px, 20px);`  
> 2. **`rotate(angle)`**：围绕元素的原点旋转。  
>    - 示例：`transform: rotate(45deg);`  
> 3. **`scale(x, y)`**：调整元素大小。单一值为等比例缩放。  
>    - 示例：`transform: scale(1.5);`  
> 4. **`skew(x-angle, y-angle)`**：沿 X 和 Y 轴倾斜元素。  
>    - 示例：`transform: skew(20deg, 10deg);`  

---

### Code Examples:

#### **Translation**
```css
.translate-box {
  transform: translate(50px, 20px); /* Moves the box 50px right and 20px down */
  background-color: lightblue;
  width: 100px;
  height: 100px;
}
```

#### **Rotation**
```css
.rotate-box {
  transform: rotate(45deg); /* Rotates the box 45 degrees */
  background-color: lightcoral;
  width: 100px;
  height: 100px;
}
```

#### **Scaling**
```css
.scale-box {
  transform: scale(1.5); /* Scales the box 1.5 times its original size */
  background-color: lightgreen;
  width: 100px;
  height: 100px;
}
```

#### **Skewing**
```css
.skew-box {
  transform: skew(20deg, 10deg); /* Tilts the box diagonally */
  background-color: lightyellow;
  width: 100px;
  height: 100px;
}
```

```html
<div class="translate-box"></div>
<div class="rotate-box"></div>
<div class="scale-box"></div>
<div class="skew-box"></div>
```

---

### Key Notes:  
1. Combine multiple transformations using space-separated values: `transform: translate(50px, 20px) rotate(45deg);`.  
2. Use `transform-origin` to adjust the pivot point for transformations like `rotate`.  
3. Transformations do not affect surrounding elements as they operate within the element's box model.