### Types of CSS  

1. **Inline CSS**:  
   Styles are written directly in an element's `style` attribute.  

   **Advantages**: Quick to apply, overrides other styles.  
   **Disadvantages**: Hard to maintain, violates separation of concerns.  

2. **Internal CSS**:  
   Styles are written inside a `<style>` tag in the HTML `<head>`.  

   **Advantages**: Useful for single-page styling.  
   **Disadvantages**: Not reusable, increases HTML file size.  

3. **External CSS**:  
   Styles are written in a separate `.css` file and linked with `<link>`.  

   **Advantages**: Reusable, promotes separation of concerns.  
   **Disadvantages**: Requires an additional HTTP request.  

> **CSS 的类型**  
> 1. **内联 CSS**：样式直接写在元素的 `style` 属性中。  
>    **优点**：快速应用，优先级高。  
>    **缺点**：难以维护，违反关注点分离原则。  
> 2. **内部 CSS**：样式写在 HTML `<head>` 中的 `<style>` 标签内。  
>    **优点**：适用于单页面样式。  
>    **缺点**：不可复用，增加 HTML 文件大小。  
> 3. **外部 CSS**：样式写在单独的 `.css` 文件中，通过 `<link>` 引入。  
>    **优点**：可复用，符合关注点分离原则。  
>    **缺点**：需要额外的 HTTP 请求。  

---

### Code Examples:

#### **Inline CSS**
```html
<p style="color: red; font-size: 20px;">This is inline CSS.</p>
```

#### **Internal CSS**
```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      background-color: lightgray;
    }
    h1 {
      color: blue;
      text-align: center;
    }
  </style>
</head>
<body>
  <h1>Internal CSS Example</h1>
</body>
</html>
```

#### **External CSS**
```html
<!-- HTML file -->
<link rel="stylesheet" href="styles.css">
<h1>External CSS Example</h1>
```

```css
/* styles.css */
h1 {
  color: green;
  font-size: 24px;
}
```

---

### Key Notes:
1. Use **inline CSS** sparingly for quick fixes.  
2. Use **internal CSS** for single-page projects.  
3. Use **external CSS** for scalable, multi-page applications.