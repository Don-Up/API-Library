### Lazy Loading  

**Lazy loading** delays the loading of background images and resources until they are needed (e.g., when the element enters the viewport). This optimization improves performance by reducing initial load time and bandwidth usage.  

1. **For Images**: Use the `loading="lazy"` attribute for `<img>` or dynamically load the background images with JavaScript.  

2. **For Background Images**: Load images only when they appear in the viewport using the `Intersection Observer API`.  

**Benefits**:  
- Reduces unnecessary resource loading.  
- Improves **Largest Contentful Paint (LCP)** and user experience.  

> **延迟加载**  
> **延迟加载** 会推迟加载背景图片和资源，直到它们需要时（例如，元素进入视口）。这种优化通过减少初始加载时间和带宽使用来提升性能。  
> 1. **针对图片**：为 `<img>` 使用 `loading="lazy"` 属性，或通过 JavaScript 动态加载背景图片。  
> 2. **针对背景图片**：使用 `Intersection Observer API` 实现仅在图片进入视口时加载。  
> **优点**：  
> - 减少不必要的资源加载。  
> - 提升 **最大内容绘制 (LCP)** 和用户体验。  

---

### Code Examples:

#### **Lazy Loading for Images**
```html
<img src="low-res-placeholder.jpg" data-src="high-res-image.jpg" alt="Lazy Image" loading="lazy">
```

#### **Lazy Loading Background Images with Intersection Observer**
```javascript
document.addEventListener("DOMContentLoaded", () => {
  const lazyBackgrounds = document.querySelectorAll(".lazy-bg");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.backgroundImage = `url(${entry.target.dataset.bg})`; // Load background image
        observer.unobserve(entry.target); // Stop observing
      }
    });
  });

  lazyBackgrounds.forEach((bg) => observer.observe(bg));
});
```

```html
<div class="lazy-bg" data-bg="high-res-bg.jpg" style="height: 300px;"></div>
```

---

### Key Notes:  
1. Use `loading="lazy"` for native lazy loading of images.  
2. For background images, combine `Intersection Observer` with `data-attributes` for resource efficiency.  
3. Lazy loading is especially useful for long pages or resource-heavy websites.