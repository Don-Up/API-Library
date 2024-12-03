### CSS Custom Properties for Dynamic Theming  

CSS custom properties (variables) enable dynamic theming by defining reusable values that can be updated at runtime.  

1. **Define Theme Variables**:  
   - Use `--` to declare variables in `:root` for global scope.  

2. **Dynamic Updates**:  
   - Change variables using CSS selectors or JavaScript to apply themes dynamically.  

3. **Benefits**:  
   - Simplifies theme switching without modifying individual styles.  
   - Supports cascading and inheritance for contextual overrides.  

> **CSS 自定义属性的动态主题**  
> CSS 自定义属性（变量）通过定义可复用的值支持动态主题，并可在运行时更新。  
> 1. **定义主题变量**：  
>    - 在 `:root` 中使用 `--` 声明全局变量。  
> 2. **动态更新**：  
>    - 通过 CSS 选择器或 JavaScript 更改变量，实现动态主题切换。  
> 3. **优点**：  
>    - 简化主题切换，无需逐一修改样式。  
>    - 支持级联与继承，实现上下文覆盖。  

---

### Code Example:

#### **Defining Theme Variables**
```css
:root {
  --primary-color: #3498db;
  --secondary-color: #2ecc71;
}

body {
  background-color: var(--primary-color); /* Apply primary color */
  color: white;
}

button {
  background-color: var(--secondary-color); /* Apply secondary color */
  border: none;
  padding: 10px 20px;
  color: white;
}
```

#### **Switching Themes with CSS**
```css
.dark-theme {
  --primary-color: #2c3e50;
  --secondary-color: #e74c3c;
}
```

```html
<body class="dark-theme"> <!-- Switch themes by adding this class -->
  <button>Click Me</button>
</body>
```

#### **Switching Themes with JavaScript**
```javascript
document.documentElement.style.setProperty('--primary-color', '#8e44ad'); // Change theme dynamically
```

---

### Key Notes:  
1. Define variables globally in `:root` for reusability.  
2. Use CSS class toggling or JavaScript for dynamic theme switching.  
3. Variables cascade, so context-specific overrides are effortless.