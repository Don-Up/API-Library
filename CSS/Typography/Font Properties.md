### Font Properties  

Font properties control the appearance of text in CSS:

1. **`font-family`**: Specifies the typeface (e.g., `Arial`, `Verdana`). Use fallback fonts in a comma-separated list.  
   - Example: `font-family: "Arial", sans-serif;`.  

2. **`font-size`**: Sets the size of the text (e.g., in `px`, `%`, `em`, `rem`).  
   - Example: `font-size: 16px;`.  

3. **`font-weight`**: Determines the thickness of the text (`normal`, `bold`, or numbers `100–900`).  
   - Example: `font-weight: 700;`.  

4. **`line-height`**: Sets the space between lines of text (e.g., `normal`, numbers, or unit values).  
   - Example: `line-height: 1.5;`.  

> **字体属性**  
> 字体属性控制 CSS 中文本的外观：  
> 1. **`font-family`**：指定字体系列（如 `Arial`、`Verdana`）。用逗号分隔的列表设置备用字体。  
>    - 示例：`font-family: "Arial", sans-serif;`  
> 2. **`font-size`**：设置字体大小（单位如 `px`、`%`、`em`、`rem`）。  
>    - 示例：`font-size: 16px;`  
> 3. **`font-weight`**：设置字体粗细（`normal`、`bold` 或 `100–900` 的数字）。  
>    - 示例：`font-weight: 700;`  
> 4. **`line-height`**：设置文本行间距（如 `normal`、数字、或带单位的值）。  
>    - 示例：`line-height: 1.5;`  

---

### Code Example:
```css
.text {
  font-family: "Arial", sans-serif; /* Use Arial, fallback to sans-serif */
  font-size: 18px; /* Text size */
  font-weight: 600; /* Semi-bold text */
  line-height: 1.5; /* 1.5 times the font size */
}
```

```html
<p class="text">This is a sample paragraph styled with font properties.</p>
```

---

### Key Notes:
1. **`font-family`** defines primary and fallback fonts.  
2. Use relative units (`em`, `rem`) for **`font-size`** in responsive designs.  
3. **`font-weight`** accepts keywords or numeric values for finer control.  
4. **`line-height`** improves readability by adjusting vertical spacing.