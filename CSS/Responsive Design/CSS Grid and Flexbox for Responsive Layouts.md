### CSS Grid and Flexbox for Responsive Layouts  

**CSS Grid** and **Flexbox** are powerful tools for creating responsive layouts:  

1. **CSS Grid**:  
   - Best for 2D layouts (rows & columns).  
   - Example: A responsive grid adjusts columns based on screen size using `grid-template-columns`.  

2. **Flexbox**:  
   - Best for 1D layouts (row or column).  
   - Example: A flex container wraps items using `flex-wrap` for responsiveness.  

Both enable layouts that adapt to different screen sizes, making them ideal for responsive design.  

> **CSS 网格和弹性盒子用于响应式布局**  
> **CSS Grid** 和 **Flexbox** 是创建响应式布局的强大工具：  
> 1. **CSS Grid**：  
>    - 适合 2D 布局（行和列）。  
>    - 示例：通过 `grid-template-columns` 创建可根据屏幕大小调整的网格布局。  
> 2. **Flexbox**：  
>    - 适合 1D 布局（行或列）。  
>    - 示例：使用 `flex-wrap` 使容器内的项目响应式换行。  
>    两者都能创建适应不同屏幕尺寸的布局，非常适合响应式设计。  

---

### Code Examples:

#### **Responsive Grid Layout**
```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* Responsive columns */
  gap: 16px; /* Space between items */
}

.item {
  background-color: lightblue;
  height: 100px;
  text-align: center;
}
```

```html
<div class="grid-container">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
  <div class="item">Item 4</div>
</div>
```

---

#### **Responsive Flexbox Layout**
```css
.flex-container {
  display: flex;
  flex-wrap: wrap; /* Wrap items to the next line on smaller screens */
  gap: 16px; /* Space between items */
}

.flex-item {
  flex: 1 1 calc(33.33% - 16px); /* 3 items per row, responsive */
  min-width: 200px;
  background-color: lightcoral;
  height: 100px;
  text-align: center;
}
```

```html
<div class="flex-container">
  <div class="flex-item">Item 1</div>
  <div class="flex-item">Item 2</div>
  <div class="flex-item">Item 3</div>
  <div class="flex-item">Item 4</div>
</div>
```

---

### Key Notes:  
1. **CSS Grid** is ideal for complex layouts with rows and columns.  
2. **Flexbox** is great for simpler, single-direction layouts.  
3. Use `auto-fit` or `flex-wrap` for responsiveness without media queries.