### Z-index and Stacking Context  

**`z-index`** controls the stacking order of elements along the z-axis (visibility). Higher `z-index` values appear in front of lower ones.  

1. **How `z-index` Works**:  
   - Only works on elements with a **position** (`relative`, `absolute`, `fixed`, `sticky`).  
   - Default `z-index` is `0`.  

2. **Stacking Context**:  
   - Created by elements with specific styles (e.g., `position` with `z-index`, `opacity < 1`, `transform`, `filter`).  
   - Child elements are confined to their parent’s stacking context, meaning their `z-index` only affects siblings within the same context.  

> **Z-index 与堆叠上下文**  
> **`z-index`** 控制元素在 z 轴上的堆叠顺序（可见性）。较高的 `z-index` 值会覆盖较低的。  
> 1. **`z-index` 的工作原理**：  
>    - 仅对具有 **position**（`relative`、`absolute`、`fixed`、`sticky`）的元素生效。  
>    - 默认 `z-index` 为 `0`。  
> 2. **堆叠上下文**：  
>    - 由特定样式创建（如 `position` 与 `z-index`、`opacity < 1`、`transform`、`filter`）。  
>    - 子元素受限于父级的堆叠上下文，其 `z-index` 仅对同级元素有效。  

---

### Code Examples:

#### **Basic `z-index`**
```css
.box1 {
  position: relative;
  z-index: 1; /* Layer behind box2 */
  background: lightblue;
}

.box2 {
  position: relative;
  z-index: 2; /* Layer in front of box1 */
  background: lightgreen;
}
```

```html
<div class="box1">Box 1</div>
<div class="box2">Box 2</div>
```

---

#### **Stacking Context**
```css
.parent {
  position: relative;
  z-index: 1; /* Creates a stacking context */
  background: lightgray;
}

.child1 {
  position: relative;
  z-index: 2; /* Affects only siblings in the same context */
  background: lightblue;
}

.child2 {
  position: relative;
  z-index: 1;
  background: lightgreen;
}
```

```html
<div class="parent">
  <div class="child1">Child 1</div>
  <div class="child2">Child 2</div>
</div>
```

---

### Key Notes:
1. `z-index` only works on elements with a positioning context.  
2. Stacking contexts isolate child elements’ `z-index` within their parent.  
3. Use higher `z-index` to bring elements forward but avoid overusing it for clean layouts.