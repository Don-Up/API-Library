### Color Formats  

CSS supports various color formats for styling elements:  

1. **Named Colors**: Predefined color names (e.g., `red`, `blue`, `black`).  
   - Example: `color: red;`.  

2. **HEX**: Hexadecimal notation for RGB values (`#RRGGBB` or `#RGB`).  
   - Example: `color: #ff5733;`.  

3. **RGB**: Specifies red, green, and blue intensities (`rgb(255, 87, 51)`).  
   - Example: `color: rgb(255, 87, 51);`.  

4. **RGBA**: Adds alpha transparency to RGB (`rgba(255, 87, 51, 0.5)`).  
   - Example: `background-color: rgba(0, 0, 0, 0.7);`.  

5. **HSL/HSLA**: Describes colors using hue, saturation, lightness, and optional alpha.  
   - Example: `color: hsl(16, 100%, 60%);`.  

> **颜色格式**  
> CSS 支持多种颜色格式用于样式设计：  
> 1. **命名颜色**：预定义的颜色名称（如 `red`、`blue`、`black`）。  
>    - 示例：`color: red;`  
> 2. **HEX**：RGB 的十六进制表示法（`#RRGGBB` 或 `#RGB`）。  
>    - 示例：`color: #ff5733;`  
> 3. **RGB**：通过红、绿、蓝的强度指定颜色（如 `rgb(255, 87, 51)`）。  
>    - 示例：`color: rgb(255, 87, 51);`  
> 4. **RGBA**：RGB 的基础上加入透明度（如 `rgba(255, 87, 51, 0.5)`）。  
>    - 示例：`background-color: rgba(0, 0, 0, 0.7);`  
> 5. **HSL/HSLA**：用色调、饱和度、亮度和可选透明度表示颜色。  
>    - 示例：`color: hsl(16, 100%, 60%);`  

---

### Code Examples:

#### **Named Colors**
```css
div {
  color: red; /* Predefined named color */
}
```

#### **HEX**
```css
div {
  color: #ff5733; /* Orange color in HEX */
}
```

#### **RGB**
```css
div {
  color: rgb(255, 87, 51); /* Same orange in RGB */
}
```

#### **RGBA**
```css
div {
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black */
}
```

#### **HSL/HSLA**
```css
div {
  color: hsl(16, 100%, 60%); /* Orange in HSL */
  background-color: hsla(0, 0%, 0%, 0.7); /* Semi-transparent black */
}
```

---

### Key Notes:
1. Use **HEX** or **RGB** for precise color control.  
2. Use **RGBA** or **HSLA** for transparency effects.  
3. **HSL/HSLA** is more intuitive for managing hue, saturation, and lightness.