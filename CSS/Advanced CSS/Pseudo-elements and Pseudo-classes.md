### Pseudo-elements and Pseudo-classes  

**Pseudo-elements** (`::before`, `::after`) style specific parts of an element’s content by creating virtual elements.  
- **`::before`**: Inserts content before an element.  
- **`::after`**: Inserts content after an element.  

**Pseudo-classes** (`:hover`, `:nth-child`) style elements based on their state or position.  
- **`:hover`**: Styles when an element is hovered.  
- **`:nth-child(n)`**: Targets elements based on their position in a parent.  

> **伪元素和伪类**  
> **伪元素**（`::before`、`::after`）通过创建虚拟元素来样式化内容的特定部分。  
> - **`::before`**：在元素之前插入内容。  
> - **`::after`**：在元素之后插入内容。  
>
> **伪类**（`:hover`、`:nth-child`）根据元素的状态或位置进行样式化。  
>
> - **`:hover`**：当鼠标悬停时样式化元素。  
> - **`:nth-child(n)`**：根据位置选中特定子元素。  

---

### Code Examples:

#### **Pseudo-elements**
```css
button::before {
  content: "👉 "; /* Adds an emoji before the button text */
}

button::after {
  content: " 🔥"; /* Adds an emoji after the button text */
}
```

```html
<button>Click Me</button>
```

---

#### **Pseudo-classes**
```css
button:hover {
  background-color: #3498db; /* Changes background on hover */
  color: white;
}

li:nth-child(odd) {
  background-color: #f0f0f0; /* Styles odd list items */
}
```

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

---

### Key Notes:  
1. **Pseudo-elements** create content virtually; they don’t exist in the DOM.  
2. **Pseudo-classes** style elements based on state or position dynamically.  
3. Combine them for powerful, dynamic styling.