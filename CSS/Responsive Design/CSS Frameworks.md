### CSS Frameworks  

CSS frameworks simplify web development by providing pre-designed components and utility classes:  

1. **Bootstrap**:  
   - A popular framework with ready-to-use components (e.g., navbars, modals) and a responsive grid system.  
   - Example: `class="btn btn-primary"` for styled buttons.  

2. **Tailwind CSS**:  
   - A utility-first framework that allows building custom designs with utility classes.  
   - Example: `class="bg-blue-500 text-white p-4"` for a styled button.  

3. **Benefits**:  
   - Faster development, consistent design, and responsive layouts.  
   - Drawback: May include unused styles, increasing file size (can be optimized).  

> **CSS 框架**  
> CSS 框架通过提供预设计的组件和实用类简化了网页开发：  
> 1. **Bootstrap**：  
>    - 流行框架，带有可直接使用的组件（如导航栏、模态框）和响应式网格系统。  
>    - 示例：`class="btn btn-primary"` 用于样式化按钮。  
> 2. **Tailwind CSS**：  
>    - 实用优先的框架，通过实用类构建自定义设计。  
>    - 示例：`class="bg-blue-500 text-white p-4"` 用于样式化按钮。  
> 3. **Benefits**：  
>    - 开发更快、设计一致、支持响应式布局。  
>    - 缺点：可能包含未使用的样式，导致文件增大（可优化）。  

---

### Code Examples:

#### **Bootstrap Button**
```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
<button class="btn btn-primary">Bootstrap Button</button>
```

#### **Tailwind CSS Button**
```html
<link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
<button class="bg-blue-500 text-white p-4 rounded">Tailwind Button</button>
```

---

### Key Notes:  
1. **Bootstrap** is component-heavy and suits quick prototyping.  
2. **Tailwind CSS** focuses on flexibility and custom designs with utility classes.  
3. Use frameworks to save time but customize as needed to avoid bloated styles.