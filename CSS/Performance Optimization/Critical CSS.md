### Critical CSS  

**Critical CSS** refers to the CSS required to style above-the-fold (visible) content during the initial page load. Extracting critical CSS improves performance by reducing render-blocking styles.  

1. **What It Does**:  
   - Inline critical CSS directly into the `<head>` of the document.  
   - Defer non-critical CSS to load asynchronously.  

2. **Benefits**:  
   - Faster rendering of visible content.  
   - Improves **First Contentful Paint (FCP)** and **Largest Contentful Paint (LCP)**.  

3. **Tools**:  
   - Tools like **Critical** or **PurgeCSS** automate extraction.  

> **关键 CSS**  
> **关键 CSS** 指的是页面首次加载时用于样式化“首屏内容”（可视区域）的 CSS。提取关键 CSS 可以通过减少阻塞样式来提升性能。  
> 1. **作用**：  
>    - 将关键 CSS 直接内嵌到文档的 `<head>` 中。  
>    - 延迟加载非关键 CSS。  
> 2. **优点**：  
>    - 加快可视内容的渲染速度。  
>    - 改善 **首次内容绘制（FCP）** 和 **最大内容绘制（LCP）** 的性能指标。  
> 3. **工具**：  
>    - 使用 **Critical** 或 **PurgeCSS** 等工具自动提取。  

---

### Code Example:

#### **Inline Critical CSS**
```html
<head>
  <style>
    /* Critical CSS for above-the-fold content */
    body {
      margin: 0;
      font-family: Arial, sans-serif;
    }
    header {
      background-color: #3498db;
      color: white;
      padding: 20px;
      text-align: center;
    }
  </style>
</head>
```

#### **Load Non-Critical CSS**
```html
<link rel="stylesheet" href="styles.css" media="print" onload="this.media='all'">
<noscript><link rel="stylesheet" href="styles.css"></noscript>
```

---

### Key Notes:  
1. Critical CSS ensures faster page rendering by prioritizing key styles.  
2. Combine with lazy-loading non-critical CSS for optimal performance.  
3. Tools like **Critical** integrate with build processes for automation.