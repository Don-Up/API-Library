### Media Queries  

CSS **media queries** allow for responsive design by applying styles based on screen size, resolution, or device type.  

1. **Syntax**:  
   - Example: `@media screen and (max-width: 768px) { /* Styles */ }`.  
     - `screen`: Targets screen devices.  
     - `(max-width: 768px)`: Applies styles when the viewport width is 768px or smaller.  

2. **Mobile-first vs Desktop-first**:  
   - **Mobile-first**: Start with smaller screens, then add styles for larger screens using `min-width`.  
   - **Desktop-first**: Start with larger screens, then adjust for smaller screens using `max-width`.  

> **媒体查询**  
> CSS **媒体查询**用于响应式设计，根据屏幕大小、分辨率或设备类型应用样式：  
> 1. **语法**：  
>    - 示例：`@media screen and (max-width: 768px) { /* 样式 */ }`  
>      - `screen`：针对屏幕设备。  
>      - `(max-width: 768px)`：当视口宽度小于或等于 768px 时应用样式。  
> 2. **移动优先 vs 桌面优先**：  
>    - **移动优先**：从较小屏幕开始，使用 `min-width` 为较大屏幕添加样式。  
>    - **桌面优先**：从较大屏幕开始，使用 `max-width` 为较小屏幕调整样式。  

---

### Code Examples:

#### **Mobile-First Approach**
```css
/* Default styles for mobile devices */
body {
  font-size: 16px;
}

/* Styles for larger devices (tablet and desktop) */
@media screen and (min-width: 768px) {
  body {
    font-size: 18px; /* Larger font for larger screens */
  }
}
```

---

#### **Desktop-First Approach**
```css
/* Default styles for desktop devices */
body {
  font-size: 18px;
}

/* Styles for smaller devices (tablet and mobile) */
@media screen and (max-width: 768px) {
  body {
    font-size: 16px; /* Smaller font for smaller screens */
  }
}
```

---

### Key Notes:
1. **Mobile-first** is ideal for modern responsive design, ensuring small screens are prioritized.  
2. **Desktop-first** is useful for legacy systems or designs targeting desktop users.  
3. Combine multiple conditions in a media query, e.g., `@media screen and (min-width: 768px) and (orientation: portrait)`.  
4. Media queries can target more than screen size, such as resolution or color schemes.