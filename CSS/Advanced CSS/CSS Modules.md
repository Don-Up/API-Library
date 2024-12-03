### CSS Modules  

**CSS Modules** provide a modular approach to CSS by scoping styles to individual components, avoiding global conflicts.  

1. **How It Works**:  
   - Class and ID names are locally scoped by default.  
   - Styles are imported into JavaScript files (e.g., React).  

2. **Benefits**:  
   - Prevents style conflicts in large projects.  
   - Enables reusable, maintainable styles.  

3. **Usage in React**:  
   - Import the CSS module: `import styles from './Button.module.css';`.  
   - Apply styles: `<button className={styles.button}>Click Me</button>`.  

> **CSS 模块**  
> **CSS 模块** 提供模块化 CSS，默认将样式作用域限制在单个组件中，避免全局冲突。  
> 1. **工作原理**：  
>    - 类名和 ID 默认是局部作用域。  
>    - 样式通过 JavaScript 文件引入（如 React）。  
> 2. **优点**：  
>    - 防止大型项目中的样式冲突。  
>    - 提高样式的复用性和可维护性。  
> 3. **在 React 中使用**：  
>    - 引入 CSS 模块：`import styles from './Button.module.css';`。  
>    - 应用样式：`<button className={styles.button}>Click Me</button>`。  

---

### Code Example:

#### **CSS Module File (`Button.module.css`)**
```css
.button {
  background-color: #3498db;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.button:hover {
  background-color: #2980b9;
}
```

#### **React Component**
```jsx
import React from 'react';
import styles from './Button.module.css'; // Import CSS module

function Button() {
  return <button className={styles.button}>Click Me</button>; // Apply scoped class
}

export default Button;
```

---

### Key Notes:  
1. CSS Modules generate unique class names to prevent conflicts.  
2. They are ideal for component-based architectures like React or Vue.  
3. Use tools like Webpack or Vite for CSS module support.