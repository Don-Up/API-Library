### `normalize.css` in React  

**`normalize.css`** is a small CSS library that resets and standardizes default styles across different browsers, ensuring consistency in rendering. It removes browser inconsistencies for elements like headings, buttons, and forms without completely removing all styling (unlike a full CSS reset). In React, it’s typically used to provide a consistent baseline for styling.  

1. **Use Case**:  
   - Normalize browser styles for consistent UI in React apps.  

2. **Installation**:  
   - Install via `npm install normalize.css`.  

3. **Usage in React**:  
   - Import `normalize.css` into your React project.  

> **在 React 中使用 normalize.css**  
>
> <audio src="C:\Users\10691\Downloads\`normalize.css`.mp3"></audio>
>
> **`normalize.css`** 是一个小型 CSS 库，用于重置并标准化不同浏览器的默认样式，确保渲染的一致性。它移除了诸如标题、按钮和表单等元素的浏览器不一致样式，但不会完全清除所有样式（与传统 CSS 重置不同）。在 React 中，通常用于为样式提供一致的基准。  
>
> 1. **使用场景**：  
>    - 规范浏览器默认样式，为 React 应用提供一致的 UI。  
> 2. **安装方法**：  
>    - 通过 `npm install normalize.css` 安装。  
> 3. **在 React 中使用**：  
>    - 将 `normalize.css` 导入到 React 项目中。  

---

### Code Examples:

#### **Installing `normalize.css`**
```bash
npm install normalize.css
```

---

#### **Using `normalize.css` in React**
```javascript
// src/index.js or src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css'; // Import normalize.css first
import './index.css'; // Your custom styles

function App() {
  return (
    <div>
      <h1>Hello, World!</h1>
      <button>Click Me</button>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
```

---

#### **Adding Custom Styles**
```css
/* src/index.css */
/* Custom styles after normalize.css */
body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
  color: #333;
}

button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}
```

---

### Key Notes:  
1. **Order Matters**: Import `normalize.css` before your custom styles to ensure consistency.  
2. **Minimal Reset**: Unlike CSS resets, `normalize.css` retains useful default styles (e.g., `button` styling).  
3. **Best Practice**: Use `normalize.css` to ensure cross-browser consistency, especially when building modern React apps.  

#### Example with Styled Components:
```javascript
import React from 'react';
import { createGlobalStyle } from 'styled-components';
import 'normalize.css';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    background: #fafafa;
    margin: 0;
    padding: 0;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <div>
        <h1>Using normalize.css with styled-components</h1>
      </div>
    </>
  );
}

export default App;
```