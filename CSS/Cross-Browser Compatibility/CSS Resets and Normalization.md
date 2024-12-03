### CSS Resets and Normalization  

**CSS resets** and **normalization** ensure consistent styling across different browsers by removing or standardizing default styles.  

1. **CSS Reset**: Removes all default browser styles, giving a clean slate for custom styles.  
   - Example: `margin: 0; padding: 0;`.  
   - Libraries: Eric Meyer’s Reset.  

2. **Normalization**: Standardizes styles without completely removing them, preserving usability.  
   - Example: Normalize.css maintains consistent button styles across browsers.  

3. **Best Use**:  
   - Use **Normalize.css** for modern projects to balance consistency and usability.  

> **CSS 重置与标准化**  
> **CSS 重置** 和 **标准化** 用于在不同浏览器中实现一致的样式表现。  
> 1. **CSS 重置**：移除所有默认浏览器样式，为自定义样式提供干净的基础。  
>    - 示例：`margin: 0; padding: 0;`。  
>    - 常见库：Eric Meyer 的 Reset。  
> 2. **标准化**：对默认样式进行标准化处理，而非完全移除，保留可用性。  
>    - 示例：Normalize.css 确保按钮样式在不同浏览器中一致。  
> 3. **最佳使用**：  
>    - 对现代项目使用 **Normalize.css** 以平衡一致性与可用性。  

---

### Code Examples:

#### **CSS Reset (Basic Example)**
```css
/* Removes default margins, paddings, etc. */
body, h1, h2, h3, p, ul, ol {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

#### **Using Normalize.css**
```html
<head>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css">
</head>
<body>
  <h1>Consistent Styles!</h1>
</body>
```

---

### Key Notes:  
1. **CSS resets** are aggressive, removing all defaults, requiring more custom styling.  
2. **Normalize.css** is less intrusive, ideal for preserving usability with consistency.  
3. Use resets or normalization early in your CSS workflow for predictable behavior.