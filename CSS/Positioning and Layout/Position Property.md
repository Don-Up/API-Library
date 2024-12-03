### Position Property  

The **position** property determines how an element is placed in the document flow.

1. **Static** (default): Elements follow the normal document flow.  
   **Use case**: Default behavior, no special positioning.  

2. **Relative**: Positioned relative to itself; offsets (`top`, `left`, etc.) move it without affecting other elements.  
   **Use case**: Minor adjustments.  

3. **Absolute**: Positioned relative to the nearest positioned ancestor (`relative`, `absolute`, or `fixed`).  
   **Use case**: Tooltips, modals.  

4. **Fixed**: Always positioned relative to the viewport (doesn’t scroll).  
   **Use case**: Sticky headers, floating buttons.  

5. **Sticky**: Toggles between `relative` and `fixed` based on scroll position.  
   **Use case**: Sticky sections or headers.  

> **位置属性**  
> **position** 属性决定元素在文档中的定位方式。  
> 1. **Static**（默认）：元素遵循正常文档流。  
>    **使用场景**：默认行为，无需特殊定位。  
> 2. **Relative**：相对于自身定位，偏移值（如 `top`、`left`）移动元素而不影响其他元素。  
>    **使用场景**：小范围调整。  
> 3. **Absolute**：相对于最近的定位祖先（`relative`、`absolute` 或 `fixed`）定位。  
>    **使用场景**：工具提示、模态框。  
> 4. **Fixed**：相对于视口定位（不随滚动变化）。  
>    **使用场景**：固定头部、浮动按钮。  
> 5. **Sticky**：根据滚动状态在 `relative` 和 `fixed` 之间切换。  
>    **使用场景**：粘性部分或头部。  

---

### Code Examples:

#### **Static**
```css
div {
  position: static; /* Default positioning */
}
```

---

#### **Relative**
```css
div {
  position: relative;
  top: 20px; /* Moves down 20px relative to its normal position */
  left: 10px; /* Moves right 10px */
}
```

---

#### **Absolute**
```css
.parent {
  position: relative; /* Positioned ancestor */
}

.child {
  position: absolute;
  top: 10px;
  left: 20px; /* Positioned relative to .parent */
}
```

---

#### **Fixed**
```css
div {
  position: fixed;
  bottom: 10px;
  right: 10px; /* Always stays in the viewport */
}
```

---

#### **Sticky**
```css
div {
  position: sticky;
  top: 0; /* Sticks to the top of the viewport when scrolling down */
}
```

---

### Key Notes:
1. **Static** is default and doesn’t allow offsets.  
2. **Relative** adjusts position without affecting other elements.  
3. **Absolute** depends on a positioned ancestor; otherwise, the viewport.  
4. **Fixed** is independent of scroll and always in the same spot.  
5. **Sticky** combines `relative` and `fixed` for scroll-based behavior.