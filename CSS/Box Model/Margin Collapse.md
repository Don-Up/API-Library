### Margin Collapse  

**Margin collapse** occurs when vertical margins of adjacent elements combine into a single margin, rather than adding together. The resulting margin equals the larger of the two margins.  

**When it happens**:  
1. Between adjacent sibling elements.  
2. Between a parent and its first/last child if no padding or border exists.  
3. For empty elements with no content, padding, or border.  

**How to avoid it**:  
1. Add padding or border to the parent.  
2. Use `overflow: hidden` or `overflow: auto` on the parent.  
3. Avoid empty elements or set `display: inline-block`/`flex`.  

> **外边距合并**  
>
> <audio src="C:\Users\10691\Downloads\外边距合并 是指相邻元素的垂直.mp3"></audio>
>
> **外边距合并** 是指相邻元素的垂直外边距合并为一个外边距，而不是相加。合并后的外边距等于两个中较大的一个。  
> **发生情况**：  
>
> 1. 相邻兄弟元素之间。  
> 2. 父元素与其第一个或最后一个子元素之间（无内边距或边框）。  
> 3. 空元素（无内容、内边距和边框）。  
> **解决方法**：  
> 1. 给父元素添加内边距或边框。  
> 2. 设置父元素 `overflow: hidden` 或 `overflow: auto`。  
> 3. 避免空元素或使用 `display: inline-block`/`flex`。  

---

### Code Examples:

<audio src="C:\Users\10691\Downloads\这段代码展示了CSS中的“外边.mp3"></audio>

#### **Margin Collapse Example**
```html
<div class="parent">
  <div class="child-1">Child 1</div>
  <div class="child-2">Child 2</div>
</div>
```

```css
.parent {
  background-color: lightgray;
}

.child-1 {
  margin-bottom: 20px;
}

.child-2 {
  margin-top: 30px;
  background-color: lightblue;
}
```

**Result**: The margin between `child-1` and `child-2` will collapse to `30px` (the larger margin).

---

#### **Avoiding Margin Collapse**

```css
/* Add padding to the parent */
.parent {
  padding: 1px; /* Prevent collapse between parent and children */
}

/* Add border to the parent */
.parent {
  border: 1px solid black; /* Prevent collapse */
}

/* Use overflow on the parent */
.parent {
  overflow: hidden; /* Prevent collapse */
}
```

---

### Key Notes:
1. Margin collapse applies only to vertical margins, not horizontal.  
2. Avoid collapse by adding padding, border, or using `overflow`.  
3. Understand margin collapse to debug unexpected spacing issues.