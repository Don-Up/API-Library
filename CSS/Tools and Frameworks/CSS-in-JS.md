### CSS-in-JS  

**CSS-in-JS** is a styling technique where CSS is written directly in JavaScript, often used in frameworks like React. Libraries like **Styled-components** and **Emotion** allow scoped, dynamic styling with JavaScript.  

1. **Benefits**:  
   - Scoped styles tied to components.  
   - Supports dynamic styling using props or states.  
   - No need for external CSS files.  

2. **Example**:  
   - Styled-components: `const Button = styled.button` for custom components.  
   - Emotion: Similar syntax with `@emotion/react`.  

3. **Best Use**:  
   - Ideal for component-based architectures with dynamic styling needs.  

> **CSS-in-JS**  
> **CSS-in-JS** 是一种将 CSS 直接写在 JavaScript 中的样式技术，常用于 React 等框架。像 **Styled-components** 和 **Emotion** 这样的库能够实现基于组件的作用域动态样式化。  
> 1. **优点**：  
>    - 样式作用域局限于组件。  
>    - 支持通过 props 或状态实现动态样式。  
>    - 无需外部 CSS 文件。  
> 2. **示例**：  
>    - Styled-components：`const Button = styled.button` 定义自定义组件。  
>    - Emotion：使用类似语法结合 `@emotion/react`。  
> 3. **最佳用途**：  
>    - 适合需要动态样式的组件化架构项目。  

---

### Code Examples:

#### **Styled-components Example**
```bash
npm install styled-components
```

```jsx
import styled from 'styled-components';

// Define a styled button
const Button = styled.button`
  background-color: ${(props) => (props.primary ? '#3498db' : '#ccc')};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.primary ? '#2980b9' : '#bbb')};
  }
`;

function App() {
  return (
    <div>
      <Button primary>Primary Button</Button>
      <Button>Default Button</Button>
    </div>
  );
}

export default App;
```

---

#### **Emotion Example**
```bash
npm install @emotion/react
```

```jsx
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const buttonStyle = (primary) => css`
  background-color: ${primary ? '#3498db' : '#ccc'};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${primary ? '#2980b9' : '#bbb'};
  }
`;

function App() {
  return (
    <div>
      <button css={buttonStyle(true)}>Primary Button</button>
      <button css={buttonStyle(false)}>Default Button</button>
    </div>
  );
}

export default App;
```

---

### Key Notes:  
1. CSS-in-JS improves scalability in large component-based projects.  
2. Styled-components and Emotion offer similar functionality but differ slightly in syntax and features.  
3. Leverage props/states for highly dynamic styling needs.