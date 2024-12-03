### Web Fonts  

1. **Using `@font-face`**:  
   Custom fonts can be imported using `@font-face`. Specify the font file URL and desired font-family name.  
   - Example:  
     ```css
     @font-face {
       font-family: 'CustomFont';
       src: url('custom-font.woff2') format('woff2');
     }
     ```

2. **Using Google Fonts**:  
   Google Fonts provides free fonts, easily imported via a `<link>` tag or `@import`.  
   - Example:  
     ```html
     <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
     ```

3. **Serif vs Sans-serif**:  
   - **`serif`**: Fonts with decorative strokes (e.g., Times New Roman). Good for print.  
   - **`sans-serif`**: Clean, modern fonts without strokes (e.g., Arial). Best for digital screens.  

> **网页字体**  
> 1. **使用 `@font-face`**：  
>    通过 `@font-face` 导入自定义字体，指定字体文件 URL 和字体名称。  
>    - 示例：  
>      ```css
>      @font-face {
>        font-family: 'CustomFont';
>        src: url('custom-font.woff2') format('woff2');
>      }
>      ```
> 2. **使用 Google Fonts**：  
>    Google Fonts 提供免费字体，可通过 `<link>` 或 `@import` 引入。  
>    - 示例：  
>      ```html
>      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
>      ```
> 3. **Serif 与 Sans-serif**：  
>    - **`serif`**：带装饰性笔画的字体（如 Times New Roman），适合印刷。  
>    - **`sans-serif`**：无装饰笔画的字体（如 Arial），更适合屏幕显示。  

---

### Code Example:

#### Using `@font-face`
```css
@font-face {
  font-family: 'CustomFont';
  src: url('custom-font.woff2') format('woff2');
}

body {
  font-family: 'CustomFont', sans-serif;
}
```

#### Using Google Fonts
```html
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
<style>
  body {
    font-family: 'Roboto', sans-serif;
  }
</style>
```

---

### Key Notes:
1. `@font-face` allows hosting custom fonts locally or via external URLs.  
2. Google Fonts makes importing web-safe fonts easy.  
3. **Serif** fonts are decorative, while **Sans-serif** fonts are clean and minimalistic.