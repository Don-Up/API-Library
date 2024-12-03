### Display Property  

The **display** property defines how an element is rendered in the document.

1. **`block`**: Takes full width, starts on a new line.  
   **Use case**: Divs, paragraphs.  

2. **`inline`**: Takes only as much width as needed, stays in the same line.  
   **Use case**: Links, spans.  

3. **`inline-block`**: Like `inline`, but allows setting width/height.  
   **Use case**: Buttons, inline elements with custom dimensions.  

4. **`none`**: Hides the element (it doesn’t occupy space).  
   **Use case**: Conditional rendering.  

5. **`flex`**: Enables flexbox layout for flexible alignment.  
   **Use case**: Responsive layouts.  

6. **`grid`**: Enables grid-based layout for precise placement.  
   **Use case**: Complex web page layouts.  

> **display 属性**  
> **display** 属性定义元素在文档中的渲染方式。  
> 1. **`block`**：占据整行宽度，独占一行。  
>    **使用场景**：div、段落。  
> 2. **`inline`**：占据内容所需宽度，保持在同一行。  
>    **使用场景**：链接、span。  
> 3. **`inline-block`**：类似 `inline`，但可以设置宽高。  
>    **使用场景**：按钮、带尺寸的行内元素。  
> 4. **`none`**：隐藏元素（不占据空间）。  
>    **使用场景**：条件渲染。  
> 5. **`flex`**：启用 Flexbox 布局，灵活调整对齐。  
>    **使用场景**：响应式布局。  
> 6. **`grid`**：启用网格布局，精确定位元素。  
>    **使用场景**：复杂页面布局。  

---

### Code Examples:

#### **Block**
```css
div {
  display: block; /* Takes full width */
}
```

---

#### **Inline**
```css
span {
  display: inline; /* Stays in the same line */
}
```

---

#### **Inline-block**
```css
button {
  display: inline-block;
  width: 100px;
  height: 40px; /* Allows width/height adjustments */
}
```

---

#### **None**
```css
div {
  display: none; /* Element is hidden and occupies no space */
}
```

---

#### **Flex**
```css
.container {
  display: flex;
  justify-content: space-between; /* Distribute items evenly */
}
```

---

#### **Grid**
```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr; /* Two equal columns */
}
```

---

### Key Notes:
1. **Block**: Full-width elements for structure.  
2. **Inline**: For text-level elements.  
3. **Inline-block**: Combines inline placement with block-level styling.  
4. **None**: Removes the element completely.  
5. **Flex**: Aligns items in rows/columns.  
6. **Grid**: Defines a structured layout with rows and columns.