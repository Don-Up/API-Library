### CSS Grid  

**CSS Grid** is a powerful layout system for creating two-dimensional (rows and columns) layouts.  

1. **Grid Containers and Items**:  
   - Use `display: grid` on a container to enable Grid layout.  
   - Child elements become grid items.  

2. **Important Properties**:  
   - `grid-template-rows`: Defines row sizes.  
   - `grid-template-columns`: Defines column sizes.  
   - `grid-gap`: Adds space between rows and columns.  

3. **Flexbox vs Grid**:  
   - **Flexbox**: One-dimensional (row *or* column).  
   - **Grid**: Two-dimensional (row *and* column).  

> **CSS 网格**  
> **CSS Grid** 是一种强大的布局系统，用于创建二维（行和列）布局。  
> 1. **网格容器与项目**：  
>    - 在容器上使用 `display: grid` 启用网格布局。  
>    - 子元素会成为网格项目。  
> 2. **重要属性**：  
>    - `grid-template-rows`：定义行的大小。  
>    - `grid-template-columns`：定义列的大小。  
>    - `grid-gap`：设置行和列之间的间距。  
> 3. **Flexbox 与 Grid 区别**：  
>    - **Flexbox**：一维布局（行或列）。  
>    - **Grid**：二维布局（同时定义行和列）。  

---

### Code Examples:

#### **Defining Grid Container and Items**

<audio src="..\..\mp3\这里展示了定义一个网格容器及其.mp3"></audio>

<img src="C:\Users\10691\Desktop\Documentation\CSS\Positioning and Layout\assets\image-20241125142953860.png" alt="image-20241125142953860" style="zoom:50%;" />

```css
.container {
  display: grid; /* Enable Grid layout */
  grid-template-rows: 100px 200px; /* Two rows: 100px and 200px */
  grid-template-columns: 1fr 2fr; /* Two columns: 1 fraction and 2 fractions */
  grid-gap: 20px; /* Space between grid items */
}
```

```html
<div class="container">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

---

#### **Flexbox vs Grid**
```css
/* Flexbox: One-dimensional layout */
.flex-container {
  display: flex;
  justify-content: space-between; /* Align along the main axis */
}

/* Grid: Two-dimensional layout */
.grid-container {
  display: grid;
  grid-template-rows: 100px 100px;
  grid-template-columns: 1fr 1fr; /* Two equal columns */
}
```

---

### Key Notes:
1. Use **Grid** for complex two-dimensional layouts (e.g., dashboards).  
2. Use **Flexbox** for simpler, one-dimensional alignments.  
3. **Grid** offers precise control over rows, columns, and gaps.