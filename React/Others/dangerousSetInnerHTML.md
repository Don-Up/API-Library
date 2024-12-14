### `dangerousSetInnerHTML` in React  

<audio src="../..\..\mp3\__`dangerousSet.mp3"></audio>

**`dangerousSetInnerHTML`** is a React prop used to directly inject raw HTML into a component. It replaces the traditional `innerHTML` in the DOM. Since it can expose your application to cross-site scripting (XSS) attacks if used improperly, React enforces explicit usage with the `dangerousSetInnerHTML` prop. You must pass an object with a `__html` key containing the raw HTML string.  

1. **Use Case**:  
   - Rendering raw HTML from external sources (e.g., CMS or server responses).  

2. **Warning**:  
   - Ensure the content is sanitized to prevent XSS vulnerabilities.  

> **React 中的 `dangerousSetInnerHTML`**  
> **`dangerousSetInnerHTML`** 是 React 中用于直接注入原始 HTML 的属性，取代了 DOM 中的 `innerHTML`。由于不当使用可能导致跨站脚本攻击 (XSS)，React 强制使用 `dangerousSetInnerHTML` 属性，并要求通过对象的 `__html` 键传入原始 HTML 字符串。  
> 1. **使用场景**：  
>    - 渲染从外部来源（如 CMS 或服务器响应）获取的原始 HTML。  
> 2. **警告**：  
>    - 确保内容已消毒，以防止 XSS 攻击。  

---

### Code Examples:

#### **Basic Usage**
```javascript
import React from 'react';

function App() {
  const rawHTML = '<h1 style="color:blue">This is a Blue Heading</h1>';

  return (
    <div>
      {/* Inject raw HTML into the div */}
      <div dangerouslySetInnerHTML={{ __html: rawHTML }} />
    </div>
  );
}

export default App;
```

- **What it does**:  
  - Renders the HTML `<h1>` from the `rawHTML` string as part of the DOM.  

---

#### **Handling External Content Safely**
```javascript
import React from 'react';
import DOMPurify from 'dompurify'; // A library to sanitize HTML

function App() {
  const unsafeHTML = '<script>alert("XSS Attack!")</script><p>Safe Content</p>';
  const sanitizedHTML = DOMPurify.sanitize(unsafeHTML); // Sanitize the HTML

  return (
    <div>
      <h1>Safe Example</h1>
      {/* Inject sanitized HTML */}
      <div dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />
    </div>
  );
}

export default App;
```

- **What it does**:  
  - Sanitizes the HTML string to remove potentially harmful scripts or elements before rendering.

---

#### **Rendering Markdown from External Sources**
```javascript
import React from 'react';
import marked from 'marked'; // A library to convert Markdown to HTML

function App() {
  const markdown = '# Hello, Markdown!';
  const htmlContent = marked(markdown); // Convert Markdown to HTML

  return (
    <div>
      <h1>Markdown Example</h1>
      {/* Render converted Markdown as HTML */}
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
}

export default App;
```

- **What it does**:  
  - Converts Markdown to HTML and renders it using `dangerousSetInnerHTML`.

---

### Key Notes:
1. **Security Risk**: Always sanitize HTML before injecting it to prevent XSS attacks.  
2. **Performance Impact**: Avoid frequent usage as it bypasses React's virtual DOM optimizations.  
3. **Use Sparingly**: Only use `dangerousSetInnerHTML` when absolutely necessary, such as when working with CMS content or third-party libraries.  

#### Example of XSS Vulnerability (Don't Do This!):
```javascript
function App() {
  const maliciousHTML = '<img src="x" onerror="alert(\'XSS Attack!\')"/>';

  return (
    <div>
      {/* This is dangerous and allows XSS */}
      <div dangerouslySetInnerHTML={{ __html: maliciousHTML }} />
    </div>
  );
}
```
**Solution**: Always sanitize user-generated or external HTML before rendering.