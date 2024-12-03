### Flexbox  

Flexbox is a CSS layout model for arranging and aligning items efficiently along a **main axis** and a **cross axis**.  

1. **Main Axis vs Cross Axis**:  
   - **Main Axis**: Defined by `flex-direction` (`row`, `row-reverse`, `column`, `column-reverse`). Items are placed along this axis.  
   - **Cross Axis**: Perpendicular to the main axis. Items are aligned along this axis using `align-items` or `align-self`.  

2. **Parent Properties**:  
   - `display: flex`: Enables Flexbox.  
   - `justify-content`: Aligns items along the main axis (`flex-start`, `center`, `space-between`).  
   - `align-items`: Aligns items along the cross axis (`stretch`, `center`).  
   - `flex-wrap`: Allows items to wrap onto multiple lines (`nowrap`, `wrap`).  

3. **Child Properties**:  
   - `flex-grow`: Defines how much a child grows relative to others (`0` = no growth).  
   - `flex-shrink`: Defines how much a child shrinks relative to others (`0` = no shrink).  
   - `align-self`: Overrides `align-items` for an individual child.  

> **Flexbox**  
> Flexbox 是一种 CSS 布局模型，用于沿着 **主轴** 和 **交叉轴** 高效排列和对齐元素。  
> 1. **主轴与交叉轴**：  
>    - **主轴**：由 `flex-direction` 定义（`row`、`column` 等）。元素沿主轴排列。  
>    - **交叉轴**：垂直于主轴，通过 `align-items` 或 `align-self` 对齐元素。  
> 2. **父级属性**：  
>    - `display: flex`：启用 Flexbox 布局。  
>    - `justify-content`：沿主轴对齐（如 `flex-start`、`center`）。  
>    - `align-items`：沿交叉轴对齐（如 `stretch`、`center`）。  
>    - `flex-wrap`：允许元素换行（`nowrap`、`wrap`）。  
> 3. **子级属性**：  
>    - `flex-grow`：定义子元素相对增长比例（`0` 表示不增长）。  
>    - `flex-shrink`：定义子元素相对收缩比例（`0` 表示不收缩）。  
>    - `align-self`：覆盖单个子元素的 `align-items`。  

---

### Code Examples:

#### **Main Axis vs Cross Axis**
```css
.container {
  display: flex;
  flex-direction: row; /* Main axis is horizontal */
  justify-content: center; /* Align items along main axis */
  align-items: center; /* Align items along cross axis (vertical) */
}
```

---

#### **Parent Properties**
```css
.container {
  display: flex;
  flex-wrap: wrap; /* Allow items to wrap onto new lines */
  justify-content: space-between; /* Distribute items with space between them */
  align-items: flex-start; /* Align items to the start of cross axis */
}
```

---

#### **Child Properties**
```css
.item {
  flex-grow: 1; /* Allow this item to grow and fill available space */
  flex-shrink: 0; /* Prevent this item from shrinking */
  align-self: center; /* Align this item to the center of cross axis */
}
```

---

### Key Notes:  
1. Flexbox simplifies responsive layouts, especially for aligning and distributing elements.  
2. Use **parent properties** for overall control of the layout.  
3. Use **child properties** for specific item behaviors.  
4. The **main axis** depends on `flex-direction`, while the **cross axis** is always perpendicular.