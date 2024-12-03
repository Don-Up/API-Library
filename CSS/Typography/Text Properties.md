### Text Properties  

Text properties control the appearance and alignment of text in CSS:  

1. **`text-align`**: Aligns text horizontally (`left`, `center`, `right`, `justify`).  
   - Example: `text-align: center;`.  

2. **`text-transform`**: Modifies text case (`uppercase`, `lowercase`, `capitalize`).  
   - Example: `text-transform: uppercase;`.  

3. **`text-decoration`**: Adds or removes text decoration (`none`, `underline`, `line-through`, `overline`).  
   - Example: `text-decoration: underline;`.  

4. **`letter-spacing`**: Adjusts space between characters (e.g., `normal`, or a unit value like `2px`).  
   - Example: `letter-spacing: 1px;`.  

> **文本属性**  
> 文本属性用于控制 CSS 中文本的外观和对齐方式：  
> 1. **`text-align`**：水平对齐文本（`left`、`center`、`right`、`justify`）。  
>    - 示例：`text-align: center;`  
> 2. **`text-transform`**：修改文本大小写（`uppercase`、`lowercase`、`capitalize`）。  
>    - 示例：`text-transform: uppercase;`  
> 3. **`text-decoration`**：添加或移除文本装饰（`none`、`underline`、`line-through`、`overline`）。  
>    - 示例：`text-decoration: underline;`  
> 4. **`letter-spacing`**：调整字符间距（如 `normal` 或单位值 `2px`）。  
>    - 示例：`letter-spacing: 1px;`  

---

### Code Example:
```css
.text {
  text-align: justify; /* Aligns text evenly across the line */
  text-transform: capitalize; /* Capitalizes the first letter of each word */
  text-decoration: line-through; /* Adds a line through the text */
  letter-spacing: 2px; /* Increases space between characters */
}
```

```html
<p class="text">this is an example of text properties in css.</p>
```

---

### Key Notes:
1. **`text-align`** improves layout readability.  
2. **`text-transform`** modifies how text is displayed without changing the actual content.  
3. **`text-decoration`** is useful for styling links or emphasis.  
4. Use **`letter-spacing`** to improve legibility or create stylistic effects.