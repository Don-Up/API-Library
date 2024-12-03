### What is CSS?

**CSS (Cascading Style Sheets)** is a stylesheet language used to style and lay out HTML elements. It controls the visual presentation of web pages, including layout, colors, fonts, and responsiveness. CSS separates content (HTML) from design, making websites easier to maintain and more visually appealing.

**CSS Syntax**:  
CSS consists of **selectors** (to target elements), **properties** (what to style), and **values** (how to style).

```css
selector {
  property: value; /* Example: color: red; */
}
```

> **什么是 CSS？**  
> **CSS（层叠样式表）** 是一种样式表语言，用于为 HTML 元素添加样式和布局。它控制网页的视觉呈现，包括布局、颜色、字体和响应式设计。CSS 将内容（HTML）与设计分离，使网站更易于维护且更美观。  
> **CSS 语法**：  
> CSS 由 **选择器**（定位元素）、**属性**（定义样式）和 **值**（样式内容）组成。

---

### Code Examples:

#### **Basic CSS Syntax**
```css
/* Select all <p> elements and set their color to blue */
p {
  color: blue; /* Property: color, Value: blue */
}

/* Select elements with a class of 'highlight' */
.highlight {
  background-color: yellow;
}
```

#### **Inline, Internal, and External CSS**
```html
<!-- Inline CSS -->
<p style="color: red;">This is red text.</p>

<!-- Internal CSS -->
<style>
  h1 {
    font-size: 24px;
    text-align: center;
  }
</style>

<!-- External CSS -->
<link rel="stylesheet" href="styles.css">
```

---

### Key Notes:
- **Selectors** target elements (`p`, `.class`, `#id`).
- **Properties** define styles (`color`, `font-size`).
- **Values** specify how to apply styles (`red`, `24px`).