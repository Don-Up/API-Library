### CSS Selectors  

CSS selectors are used to target HTML elements for styling.

1. **Basic Selectors**:  
   - `*` (Universal), `element` (e.g., `div`), `#id`, `.class`.  

2. **Attribute Selectors**:  
   - `[attr]` (has attribute), `[attr=value]` (specific value), `[attr^=value]` (value starts with).  

3. **Pseudo-classes**:  
   - `:hover` (mouse hover), `:nth-child(n)` (nth child), `:focus` (focused element), `:not(selector)` (excludes selector).  

4. **Pseudo-elements**:  
   - `::before`, `::after` (insert content), `::first-letter` (style first letter).  

> **CSS 选择器**  
> CSS 选择器用于定位 HTML 元素以应用样式。  
> 1. **基本选择器**：  
>    - `*`（通配符），`element`（如 `div`），`#id`，`.class`。  
> 2. **属性选择器**：  
>    - `[attr]`（有属性），`[attr=value]`（特定值），`[attr^=value]`（值以指定内容开头）。  
> 3. **伪类**：  
>    - `:hover`（鼠标悬停），`:nth-child(n)`（第 n 个子元素），`:focus`（聚焦元素），`:not(selector)`（排除选择器）。  
> 4. **伪元素**：  
>    - `::before`、`::after`（插入内容），`::first-letter`（样式化第一个字母）。  

---

### Code Examples:

#### **Basic Selectors**
```css
* {
  margin: 0; /* Apply to all elements */
}

p {
  color: blue; /* Apply to all <p> elements */
}

#header {
  background: gray; /* Target element with id="header" */
}

.highlight {
  background-color: yellow; /* Target elements with class="highlight" */
}
```

#### **Attribute Selectors**
```css
input[type="text"] {
  border: 1px solid black; /* Target <input> with type="text" */
}

a[href^="https://"] {
  color: green; /* Links starting with "https://" */
}
```

#### **Pseudo-classes**
```css
button:hover {
  background-color: lightblue; /* Change button color on hover */
}

li:nth-child(2) {
  color: red; /* Style the 2nd <li> */
}

input:focus {
  outline: 2px solid blue; /* Highlight focused input */
}

p:not(.excluded) {
  font-weight: bold; /* Style <p> elements except those with class="excluded" */
}
```

#### **Pseudo-elements**
```css
p::before {
  content: "Note: "; /* Add text before <p> elements */
  font-weight: bold;
}

p::first-letter {
  font-size: 2em; /* Style the first letter of <p> */
}
```

---

### Key Notes:
1. **Basic selectors** target elements directly.  
2. **Attribute selectors** are powerful for form and dynamic elements.  
3. **Pseudo-classes** apply styles based on element states or positions.  
4. **Pseudo-elements** style specific parts of elements (e.g., first letter, added content).