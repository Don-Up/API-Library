### Lazy Loading and Code Splitting in JavaScript

<audio src="C:\Users\10691\Downloads\1.  Lazy Loadin.mp3"></audio>

1. **Lazy Loading**:  
   - Delays loading of resources (e.g., images, scripts) until they are needed.  
   - Improves initial load time and performance.  

2. **Code Splitting**:  
   - Breaks JavaScript bundles into smaller chunks loaded on demand.  
   - Often implemented with tools like Webpack or ES Modules (`import()`).

3. **Benefits**:  
   - Reduces initial bundle size.  
   - Optimizes resource usage and speeds up page performance.

> **懒加载与代码分割**  
>
> <audio src="C:\Users\10691\Downloads\懒加载：  延迟加载资源（如图.mp3"></audio>
>
> 1. **懒加载**：  
>    - 延迟加载资源（如图片、脚本），直到需要时才加载。  
>    - 提升初始加载速度和性能。  
> 2. **代码分割**：  
>    - 将 JavaScript 包拆分为小块，按需加载。  
>    - 通常通过 Webpack 或 ES 模块（`import()`）实现。  
> 3. **优点**：  
>    - 减少初始包大小。  
>    - 优化资源使用，加快页面性能。

---

### Code Examples:

#### **Lazy Loading Images**
```html
<img src="placeholder.jpg" data-src="real-image.jpg" alt="Lazy Image" class="lazy" />

<script>
  const lazyImages = document.querySelectorAll(".lazy");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src; // Load the real image
        img.classList.remove("lazy");
        observer.unobserve(img); // Stop observing once loaded
      }
    });
  });

  lazyImages.forEach((img) => observer.observe(img));
</script>
```

#### **Code Splitting with Dynamic Imports**
```javascript
// Dynamically import a module when needed
document.getElementById("loadButton").addEventListener("click", async () => {
  const { greet } = await import("./greetings.js"); // Load this file only when needed
  greet(); // Call the function from the imported module
});

// greetings.js
export function greet() {
  console.log("Hello, this is dynamically loaded!");
}
```

---

### Key Notes:
1. **Lazy Loading**: Useful for images, videos, and other heavy resources.  
2. **Code Splitting**: Breaks large bundles into smaller chunks, improving performance.  
3. Use **tools like Webpack or Rollup** for automated code splitting.