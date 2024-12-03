### Background Properties  

CSS background properties style the background of elements:  

1. **`background-color`**: Sets the background color (`red`, `#fff`, `rgba(0,0,0,0.5)`).  
   - Example: `background-color: lightblue;`.  

2. **`background-image`**: Adds an image (`url()`).  
   - Example: `background-image: url('image.jpg');`.  

3. **`background-size`**: Defines image size (`cover`, `contain`, `auto`, or dimensions).  
   - Example: `background-size: cover;`.  

4. **`background-position`**: Sets image position (`left`, `center`, `50% 50%`).  
   - Example: `background-position: center;`.  

5. **`background-attachment`**: Controls scrolling behavior (`scroll`, `fixed`, `local`).  
   - Example: `background-attachment: fixed;`.  

> **背景属性**  
> CSS 背景属性用于设置元素的背景样式：  
> 1. **`background-color`**：设置背景颜色（如 `red`、`#fff`、`rgba(0,0,0,0.5)`）。  
>    - 示例：`background-color: lightblue;`  
> 2. **`background-image`**：添加背景图像（`url()`）。  
>    - 示例：`background-image: url('image.jpg');`  
> 3. **`background-size`**：定义图像大小（如 `cover`、`contain`、`auto` 或具体尺寸）。  
>    - 示例：`background-size: cover;`  
> 4. **`background-position`**：设置图像位置（如 `left`、`center`、`50% 50%`）。  
>    - 示例：`background-position: center;`  
> 5. **`background-attachment`**：控制滚动行为（如 `scroll`、`fixed`、`local`）。  
>    - 示例：`background-attachment: fixed;`  

---

### Code Examples:

#### **Background Color**
```css
div {
  background-color: lightblue; /* Sets a light blue background */
}
```

#### **Background Image**
```css
div {
  background-image: url('background.jpg'); /* Adds an image as background */
}
```

#### **Background Size**
```css
div {
  background-image: url('background.jpg');
  background-size: cover; /* Image covers the entire element */
}
```

#### **Background Position**
```css
div {
  background-image: url('background.jpg');
  background-position: center; /* Centers the image */
}
```

#### **Background Attachment**
```css
div {
  background-image: url('background.jpg');
  background-attachment: fixed; /* Image stays fixed during scrolling */
}
```

---

### Key Notes:  
1. Use **`background-color`** as a fallback for unavailable images.  
2. **`background-size: cover`** scales the image to fill the container.  
3. **`background-attachment: fixed`** creates a parallax effect.  
4. Combine these properties in shorthand using `background`.