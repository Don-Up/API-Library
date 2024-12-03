### Keyframe Animations  

CSS **keyframe animations** define smooth and complex animations by specifying intermediate steps of a CSS property over time.  

1. **Syntax**:  
   - Use `@keyframes animation-name` to define the animation.  
   - Syntax:  
     ```css
     @keyframes animation-name {
       0% { /* initial state */ }
       50% { /* intermediate state */ }
       100% { /* final state */ }
     }
     ```
   - Apply the animation using `animation: name duration timing-function iteration-count;`.  

2. **Example**:  
   - `animation: slide-in 2s infinite;` animates continuously over 2 seconds.  

> **关键帧动画**  
> CSS **关键帧动画**通过指定 CSS 属性的中间状态，定义平滑和复杂的动画效果。  
> 1. **语法**：  
>    - 使用 `@keyframes 动画名称` 定义动画。  
>    - 语法：  
>      ```css
>      @keyframes 动画名称 {
>        0% { /* 初始状态 */ }
>        50% { /* 中间状态 */ }
>        100% { /* 最终状态 */ }
>      }
>      ```
>    - 使用 `animation: 名称 持续时间 动画曲线 迭代次数;` 应用动画。  
> 2. **示例**：  
>    - `animation: slide-in 2s infinite;` 在 2 秒内循环播放动画。  

---

### Code Example:

#### **Sliding Animation**
```css
@keyframes slide-in {
  0% {
    transform: translateX(-100%); /* Start off-screen */
    opacity: 0; /* Fully transparent */
  }
  50% {
    transform: translateX(50%); /* Midway bounce */
    opacity: 0.5; /* Semi-transparent */
  }
  100% {
    transform: translateX(0); /* End position */
    opacity: 1; /* Fully visible */
  }
}

.box {
  width: 100px;
  height: 100px;
  background-color: lightcoral;
  animation: slide-in 2s ease-in-out infinite; /* Infinite sliding animation */
}
```

```html
<div class="box"></div>
```

---

### Key Notes:  
1. Use `@keyframes` to define the animation steps for properties like `transform`, `opacity`, etc.  
2. `animation` shorthand includes properties like duration, timing function, and iteration count.  
3. Combine animations with `hover`, `focus`, or `media queries` for interactive or responsive effects.