### Transitions  

CSS **transitions** animate changes in property values over time, improving interactivity and UX.  

1. **Syntax**:  
   - `transition: property duration timing-function delay;`  
   - `property`: The CSS property to animate (e.g., `color`, `opacity`, `all`).  
   - `duration`: Time for the transition (e.g., `0.3s`, `1s`).  
   - `timing-function`: Animation speed curve (`ease`, `linear`, `ease-in-out`).  
   - `delay`: Time before the animation starts (optional).  

2. **Example**: `transition: all 0.3s ease-in-out;` animates all properties over 0.3 seconds.  

> **过渡效果**  
> CSS **过渡**通过动画化属性值的变化提升交互性和用户体验。  
> 1. **语法**：  
>    - `transition: property duration timing-function delay;`  
>    - `property`：要动画化的 CSS 属性（如 `color`、`opacity`、`all`）。  
>    - `duration`：过渡的时间（如 `0.3s`、`1s`）。  
>    - `timing-function`：动画的速度曲线（如 `ease`、`linear`、`ease-in-out`）。  
>    - `delay`：动画延迟启动的时间（可选）。  
> 2. **示例**：`transition: all 0.3s ease-in-out;` 动画化所有属性，持续 0.3 秒。  

---

### Code Example:

#### **Hover Effect with Transition**
```css
.button {
  background-color: lightblue; /* Initial background color */
  color: white;
  padding: 10px 20px;
  border: none;
  transition: background-color 0.3s ease-in-out, transform 0.3s; /* Animate background and scale */
}

.button:hover {
  background-color: blue; /* Changes background on hover */
  transform: scale(1.1); /* Scales up slightly */
}
```

```html
<button class="button">Hover Me</button>
```

---

### Key Notes:  
1. Use `transition: all` for multiple properties or target specific ones for efficiency.  
2. `ease-in-out` creates smooth transitions, while `linear` keeps constant speed.  
3. Combine with pseudo-classes like `:hover` or `:focus` for interactive effects.