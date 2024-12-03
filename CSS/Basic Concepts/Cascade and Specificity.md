### Cascade and Specificity in CSS  

The **CSS Cascade** determines which styles are applied when multiple rules target the same element. It resolves conflicts using:  
1. **Importance** (`!important` > normal rules).  
2. **Specificity** (inline > id > class > element).  
3. **Source Order** (last rule wins if specificity is equal).  

**Specificity Calculation**:  
- Inline styles: `1000` points.  
- IDs: `100` points.  
- Classes, attributes, pseudo-classes: `10` points.  
- Elements and pseudo-elements: `1` point.  

The `!important` keyword overrides all specificity rules, but use it sparingly as it can make debugging hard.  

> **CSS 的层叠和优先级**  
> **CSS 层叠** 决定当多个规则应用于同一元素时，哪一个规则生效。冲突通过以下方式解决：  
> 1. **重要性**（`!important` > 正常规则）。  
> 2. **优先级**（内联 > id > class > 元素）。  
> 3. **来源顺序**（优先级相同时，后定义的规则生效）。  
> **优先级计算**：  
> - 内联样式：`1000` 分。  
> - ID 选择器：`100` 分。  
> - 类、属性、伪类：`10` 分。  
> - 元素和伪元素：`1` 分。  
> `!important` 会覆盖所有优先级规则，但应谨慎使用，否则会增加调试难度。  

---

### Code Examples:

#### **Cascade and Specificity**
```html
<!-- HTML structure -->
<div id="main" class="container">
  <p style="color: red;">Hello, World!</p>
</div>
```

```css
/* CSS rules */
p {
  color: blue; /* Element selector (1 point) */
}

.container p {
  color: green; /* Class selector (10 points) */
}

#main p {
  color: orange; /* ID selector (100 points) */
}
```

**Result**: The paragraph text will be **orange** because ID (`#main p`) has higher specificity.

---

#### **Using `!important`**
```css
p {
  color: blue !important; /* Overrides all other rules */
}
```

**Result**: The paragraph text will be **blue**, even though `style="color: red;"` is inline.

---

### Key Notes:
1. The **cascade** resolves conflicts using importance, specificity, and order.  
2. Avoid overusing `!important` as it disrupts the natural cascade.  
3. Write clear and specific rules to minimize conflicts and debugging.