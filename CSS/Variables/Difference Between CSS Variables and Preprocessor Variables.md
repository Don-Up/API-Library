### Difference Between CSS Variables and Preprocessor Variables  

1. **CSS Variables**:  
   - Native to CSS, defined with `--` (e.g., `--primary-color: #3498db;`).  
   - Accessed using `var(--variable-name)`.  
   - Dynamic: Updates can be made at runtime (e.g., via JavaScript).  
   - Cascade and inherit naturally, allowing contextual overrides.  

2. **Preprocessor Variables (SASS/LESS)**:  
   - Defined in preprocessors (e.g., `$primary-color: #3498db;` in SASS).  
   - Processed during compilation, not dynamic.  
   - No cascading or inheritance.  

> **CSS 变量与预处理器变量的区别**  
> 1. **CSS 变量**：  
>    - 原生 CSS 支持，使用 `--` 定义（如 `--primary-color: #3498db;`）。  
>    - 使用 `var(--变量名)` 访问。  
>    - 动态：可以在运行时更新（如通过 JavaScript）。  
>    - 自然支持级联与继承，可按上下文覆盖。  
> 2. **预处理器变量（SASS/LESS）**：  
>    - 在预处理器中定义（如在 SASS 中 `$primary-color: #3498db;`）。  
>    - 仅在编译时处理，非动态。  
>    - 不支持级联或继承。  

---

### Code Examples:

#### **CSS Variables**
```css
:root {
  --primary-color: #3498db;
}

button {
  background-color: var(--primary-color); /* Dynamic and can inherit */
}
```

#### **SASS Variables**
```scss
$primary-color: #3498db;

button {
  background-color: $primary-color; /* Static, processed at compile time */
}
```

#### **Dynamic Update with JavaScript (CSS Variables Only)**
```javascript
document.documentElement.style.setProperty('--primary-color', '#e74c3c'); // Updates at runtime
```

---

### Key Notes:  
1. Use CSS variables for flexibility and runtime updates.  
2. Use preprocessor variables for static, compile-time optimizations.  
3. Combining both can leverage their respective strengths.