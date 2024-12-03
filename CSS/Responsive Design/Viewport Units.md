### Viewport Units  

Viewport units are relative to the browser's viewport size:  

1. **`vw` (Viewport Width)**: 1 `vw` = 1% of the viewport's width.  
   - Example: `width: 50vw;` (50% of viewport width).  

2. **`vh` (Viewport Height)**: 1 `vh` = 1% of the viewport's height.  
   - Example: `height: 100vh;` (full viewport height).  

3. **`vmin`**: 1 `vmin` = 1% of the smaller dimension (width or height).  
   - Example: `font-size: 5vmin;`.  

4. **`vmax`**: 1 `vmax` = 1% of the larger dimension (width or height).  
   - Example: `margin: 10vmax;`.  

> **视口单位**  
> 视口单位基于浏览器视口大小：  
> 1. **`vw` (视口宽度)**：1 `vw` = 视口宽度的 1%。  
>    - 示例：`width: 50vw;`（视口宽度的 50%）。  
> 2. **`vh` (视口高度)**：1 `vh` = 视口高度的 1%。  
>    - 示例：`height: 100vh;`（视口高度的 100%）。  
> 3. **`vmin`**：1 `vmin` = 较小维度（宽或高）的 1%。  
>    - 示例：`font-size: 5vmin;`  
> 4. **`vmax`**：1 `vmax` = 较大维度（宽或高）的 1%。  
>    - 示例：`margin: 10vmax;`  

---

### Code Examples:

#### **Basic Usage**
```css
.container {
  width: 50vw;  /* 50% of viewport width */
  height: 100vh; /* Full viewport height */
  font-size: 5vmin; /* Font size based on smaller dimension */
  padding: 2vmax; /* Padding based on larger dimension */
}
```

#### **Full-Screen Section**
```css
.full-screen {
  height: 100vh; /* Takes the full height of the viewport */
  background-color: lightblue;
}
```

---

### Key Notes:  
1. **`vw` and `vh`** are ideal for responsive layouts without fixed dimensions.  
2. **`vmin` and `vmax`** are useful for scaling elements based on the smallest or largest viewport dimension.  
3. Be cautious with `vh` on mobile browsers due to dynamic toolbars affecting viewport height.