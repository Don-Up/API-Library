### Float and Clear  

1. **How `float` Works**:  
   The `float` property places an element to the left or right of its container, allowing inline content (like text) to flow around it.  
   - `float: left | right`: Floats the element.  
   - `float: none`: Default, no floating.  

2. **Clearing Floats**:  
   When using `float`, parent containers may collapse if they don’t account for the floated elements. Use:  
   - `clear`: Prevents elements from sitting beside floated elements (`clear: left | right | both`).  
   - **Clearfix**: A hack to clear floats automatically by adding a pseudo-element.  

> **浮动与清除**  
> 1. **浮动的工作原理**：  
>    `float` 属性将元素向左或右浮动，允许内联内容（如文本）围绕它排列。  
>    - `float: left | right`：元素浮动。  
>    - `float: none`：默认值，无浮动。  
> 2. **清除浮动**：  
>    浮动元素可能导致父容器坍塌。解决方法：  
>    - `clear`：阻止元素与浮动元素并排（`clear: left | right | both`）。  
>    - **清除浮动（clearfix）**：通过伪元素自动清除浮动。  

---

### Code Examples:

#### **Float Example**
```css
.image {
  float: left; /* Image floats to the left */
  margin-right: 10px; /* Adds space between image and text */
}

.text {
  overflow: hidden; /* Prevents text overflow */
}
```

```html
<img src="image.jpg" class="image" alt="Example">
<p class="text">This text flows around the floated image.</p>
```

---

#### **Clear Example**
```css
.box {
  float: left;
  width: 100px;
  height: 100px;
  background: lightblue;
}

.clear {
  clear: both; /* Clears both left and right floats */
}
```

```html
<div class="box"></div>
<div class="box"></div>
<div class="clear"></div> <!-- Pushes content below floated elements -->
```

---

#### **Clearfix Example**
```css
.container {
  display: block;
  overflow: auto; /* Simple clearfix */
}

/* Advanced Clearfix */
.container::after {
  content: "";
  display: block;
  clear: both; /* Clears floats */
}
```

---

### Key Notes:
1. **Float** is useful for layouts but has largely been replaced by Flexbox and Grid.  
2. Use `clear` to prevent elements from wrapping around floats.  
3. **Clearfix** solves float-related issues by automatically clearing parent containers.