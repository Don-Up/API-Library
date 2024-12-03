### Vendor Prefixes  

**Vendor prefixes** are added to CSS properties to ensure compatibility with specific browsers during the experimental or non-standard implementation phase.  

1. **Common Prefixes**:  
   - `-webkit-`: For Chrome, Safari, and newer Edge.  
   - `-moz-`: For Firefox.  
   - `-ms-`: For Internet Explorer and older Edge.  
   - `-o-`: For Opera (rarely used now).  

2. **Example**: `-webkit-transition` ensures transitions work in WebKit-based browsers.  

3. **Best Practices**:  
   - Use autoprefixers (e.g., PostCSS) to automate prefixing.  
   - Avoid overusing prefixes for obsolete browsers.  

> **浏览器前缀**  
> **浏览器前缀** 是为确保特定浏览器兼容性而添加到 CSS 属性上的标记，通常用于实验性或非标准功能。  
> 1. **常见前缀**：  
>    - `-webkit-`：适用于 Chrome、Safari、较新的 Edge。  
>    - `-moz-`：适用于 Firefox。  
>    - `-ms-`：适用于 Internet Explorer 和旧版 Edge。  
>    - `-o-`：适用于 Opera（现已较少使用）。  
> 2. **示例**：`-webkit-transition` 可确保过渡效果在 WebKit 浏览器中正常工作。  
> 3. **最佳实践**：  
>    - 使用自动前缀工具（如 PostCSS）自动处理前缀。  
>    - 避免为过时的浏览器滥用前缀。  

---

### Code Example:

#### **Transition with Vendor Prefixes**
```css
.element {
  -webkit-transition: all 0.3s ease; /* Chrome, Safari */
  -moz-transition: all 0.3s ease;    /* Firefox */
  -o-transition: all 0.3s ease;      /* Opera (rarely used) */
  transition: all 0.3s ease;         /* Standard */
}
```

#### **Flexbox with Prefixes**
```css
.container {
  display: -webkit-box;      /* Old Safari/Chrome */
  display: -moz-box;         /* Old Firefox */
  display: -ms-flexbox;      /* IE 10 */
  display: -webkit-flex;     /* Old Webkit browsers */
  display: flex;             /* Standard */
}
```

---

### Key Notes:  
1. Modern browsers now support most CSS features without prefixes, but older versions may still need them.  
2. Use tools like **Autoprefixer** to avoid manual prefixing.  
3. Always test for browser compatibility when using prefixes.