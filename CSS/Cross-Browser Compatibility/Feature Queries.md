### Feature Queries  

**Feature queries** in CSS allow you to check if a browser supports a specific CSS property or value using the `@supports` rule. This helps apply styles conditionally based on feature availability, ensuring compatibility across browsers.  

1. **Syntax**:  
   - `@supports (property: value)` checks if a property is supported.  

2. **Example**:  
   - `@supports (display: grid)` applies grid styles only if the browser supports CSS Grid.  

3. **Benefits**:  
   - Avoids breaking layouts in unsupported browsers.  
   - Enables progressive enhancement.  

> **功能查询**  
> **功能查询** 使用 CSS 的 `@supports` 规则检测浏览器是否支持特定的 CSS 属性或值。这有助于根据功能可用性有条件地应用样式，从而确保跨浏览器兼容性。  
> 1. **语法**：  
>    - `@supports (property: value)` 检查是否支持某个属性。  
> 2. **示例**：  
>    - `@supports (display: grid)` 仅在浏览器支持 CSS Grid 时应用网格样式。  
> 3. **优点**：  
>    - 避免在不支持的浏览器中破坏布局。  
>    - 实现渐进增强。  

---

### Code Examples:

#### **Using `@supports` for Grid Layout**
```css
/* Fallback styles for older browsers */
.container {
  display: flex;
  flex-direction: column;
}

/* Apply grid layout if supported */
@supports (display: grid) {
  .container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
}
```

#### **Checking for Custom Properties (CSS Variables)**
```css
@supports (--custom-property: value) {
  :root {
    --main-color: #3498db;
  }
}
```

---

### Key Notes:  
1. Use `@supports` for progressive enhancement rather than polyfills.  
2. Combine it with fallback styles to handle unsupported browsers gracefully.  
3. Nest `@supports` within media queries for responsive designs.