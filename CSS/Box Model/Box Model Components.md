### Box Model Components  

The **CSS Box Model** describes how elements are structured:  

1. **Content**: The actual content inside the element (e.g., text, images).  
2. **Padding**: Space between content and the border.  
3. **Border**: The boundary around the padding.  
4. **Margin**: Space outside the border, separating the element from others.  

**Box-sizing**:  
- `content-box` (default): Width includes only the content. Padding and border are added outside.  
- `border-box`: Width includes content, padding, and border.  

> **CSS 盒模型组件**  
> **CSS 盒模型** 描述了元素的结构：  
> 1. **内容（Content）**：元素内部的实际内容（如文本、图像）。  
> 2. **内边距（Padding）**：内容与边框之间的空间。  
> 3. **边框（Border）**：包围内边距的边界线。  
> 4. **外边距（Margin）**：边框外部的空间，用于分隔其他元素。  
> **Box-sizing**：  
> - `content-box`（默认）：宽度仅包括内容，内边距和边框在外部累加。  
> - `border-box`：宽度包括内容、内边距和边框。  

---

### Code Examples:

<audio src="..\..\mp3\这段代码展示了CSS中盒模型的.mp3"></audio>

#### **Box Model Example**
```html
<div class="box">Box Model Example</div>
```

```css
.box {
  width: 200px;
  padding: 20px; /* Space inside the box */
  border: 10px solid black; /* Border around the box */
  margin: 15px; /* Space outside the box */
  background-color: lightblue;
}
```

**Content Width**: `200px`  
**Total Width (`content-box`)**: `200 + 20*2 (padding) + 10*2 (border) = 260px`

---

#### **Border-box vs Content-box**
```css
/* Default: content-box */
.content-box {
  box-sizing: content-box;
  width: 200px; /* Content only */
}

/* Border-box */
.border-box {
  box-sizing: border-box;
  width: 200px; /* Includes padding and border */
  padding: 20px;
  border: 10px solid black;
}
```

**Result**:  
- `content-box`: Total width = `200px + padding + border`.  
- `border-box`: Total width = `200px` (fixed).  

---

### Key Notes:
1. Use `border-box` for more predictable box sizing.  
2. The **box model** affects layout and spacing between elements.  
3. Padding and margin do not overlap; they add space inside and outside the element, respectively.