### Avoiding Repaints and Reflows  

**Repaints** and **reflows** are expensive DOM operations triggered by changes in styles or layout. Repaints affect visual appearance (e.g., color), while reflows recalculate layout, affecting the entire DOM tree.  

1. **Optimization Techniques**:  
   - Minimize DOM manipulation by batching changes (e.g., using `documentFragment`).  
   - Avoid layout-triggering properties like `offsetWidth` or `clientHeight` in loops.  
   - Use `transform` and `opacity` for animations (GPU-optimized).  
   - Avoid deep or overly complex CSS selectors.  

2. **Benefits**:  
   - Reduces CPU usage, improves rendering performance.  

> **避免重绘与重排**  
> **重绘** 和 **重排** 是昂贵的 DOM 操作，分别由样式变化或布局重新计算引发。重绘影响视觉外观（如颜色），重排影响整个 DOM 树的布局。  
> 1. **优化方法**：  
>    - 通过批量操作（如 `documentFragment`）减少 DOM 操作。  
>    - 避免在循环中使用触发布局的属性（如 `offsetWidth`、`clientHeight`）。  
>    - 使用 `transform` 和 `opacity` 实现动画（GPU 优化）。  
>    - 避免过深或复杂的 CSS 选择器。  
> 2. **优点**：  
>    - 降低 CPU 使用率，提升渲染性能。  

---

### Code Examples:

#### **Batch DOM Manipulations**
```javascript
const fragment = document.createDocumentFragment();
for (let i = 0; i < 100; i++) {
  const div = document.createElement('div');
  div.textContent = `Item ${i}`;
  fragment.appendChild(div); // Add to fragment
}
document.body.appendChild(fragment); // Update DOM once
```

#### **Avoid Layout Thrashing**
```javascript
const items = document.querySelectorAll('.item');
const heights = [];
// Avoid triggering layout recalculation in a loop
items.forEach((item) => {
  heights.push(item.offsetHeight); // Triggers reflow
});
console.log(heights);
```

#### **Use Transform for Animations**
```css
.box {
  transition: transform 0.3s ease, opacity 0.3s ease; /* GPU-optimized */
}
.box:hover {
  transform: scale(1.1); /* Avoid layout changes */
  opacity: 0.8;
}
```

---

### Key Notes:  
1. **Repaints** are less costly than **reflows**, but both should be minimized.  
2. Avoid JavaScript operations that repeatedly access layout properties (e.g., `offsetWidth`).  
3. Use `transform` and `opacity` for smoother animations without triggering reflow.