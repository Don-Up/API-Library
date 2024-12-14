### DOM Structure and Methods in JavaScript

The **Document Object Model (DOM)** represents the structure of a web page as a tree of nodes. Each HTML element is a node in the tree, allowing JavaScript to dynamically access, modify, and manipulate content, attributes, and styles.

#### **DOM Structure**:
1. The root of the DOM tree is the `document` object.
2. Nodes are classified as:
   - **Element Nodes**: Represent HTML elements (e.g., `<div>`, `<p>`).
   - **Text Nodes**: Represent text inside elements.
   - **Attribute Nodes**: Represent attributes like `class` or `id`.
   - **Comment Nodes**: Represent HTML comments.

#### **Common DOM Methods**:
1. **Element Selection**:
   - `getElementById(id)`: Selects an element by its ID.
   - `querySelector(selector)`: Selects the first element matching a CSS selector.
   - `querySelectorAll(selector)`: Selects all elements matching a CSS selector.
2. **Node Manipulation**:
   - `createElement(tag)`: Creates a new element.
   - `appendChild(node)`: Adds a child node.
   - `removeChild(node)`: Removes a child node.
3. **Content and Attributes**:
   - `innerHTML`: Sets or gets HTML content.
   - `textContent`: Sets or gets text content.
   - `setAttribute(attr, value)`: Sets an attribute.
   - `getAttribute(attr)`: Gets an attribute.

> **DOM 结构与方法**：
>
> <audio src="..\..\mp3\文档对象模型（DOM） 将网页.mp3"></audio>
>
> **文档对象模型（DOM）** 将网页结构表示为节点树。每个 HTML 元素都是树中的一个节点，JavaScript 可以动态访问、修改和操作内容、属性和样式。  
>
> #### **DOM 结构**：
>
> <audio src="..\..\mp3\DOM 结构：1. DOM 树.mp3"></audio>
>
> 1. DOM 树的根节点是 `document` 对象。  
> 2. 节点分类：
>    - **元素节点**：表示 HTML 元素（如 `<div>`、`<p>`）。
>    - **文本节点**：表示元素中的文本。
>    - **属性节点**：表示属性（如 `class` 或 `id`）。
>    - **注释节点**：表示 HTML 注释。  
> #### **常见 DOM 方法**：
> 1. **元素选择**：
>    
>    - `getElementById(id)`：通过 ID 选择元素。
>    
>    - `querySelector(selector)`：选择第一个匹配 CSS 选择器的元素。
>    
>    - `querySelectorAll(selector)`：选择所有匹配 CSS 选择器的元素。
>    
>    - <audio src="..\..\mp3\元素选择：- `getElem.mp3"></audio>
>    
> 2. **节点操作**：
>    
>    - `createElement(tag)`：创建新元素。
>    
>    - `appendChild(node)`：添加子节点。
>    
>    - `removeChild(node)`：移除子节点。
>    
>    - <audio src="..\..\mp3\节点操作：- `createE.mp3"></audio>
>    
> 3. **内容与属性**：
>    
>    - `innerHTML`：设置或获取 HTML 内容。
>    
>    - `textContent`：设置或获取文本内容。
>    
>    - `setAttribute(attr, value)`：设置属性。
>    
>    - `getAttribute(attr)`：获取属性。
>    
>    - <audio src="..\..\mp3\内容与属性：- `innerH.mp3"></audio>

---

### Code Examples:

#### **Creating and Appending Elements**

<audio src="..\..\mp3\这段代码展示了如何使用Java.mp3"></audio>

```javascript
const div = document.createElement("div"); // Create a <div> element
div.textContent = "Hello, DOM"; // Set text content
div.setAttribute("class", "greeting"); // Add a class attribute
document.body.appendChild(div); // Append to the body
```

#### **Selecting and Manipulating Elements**

<audio src="..\..\mp3\这段代码展示了如何使用Java (1).mp3"></audio>

```javascript
const heading = document.getElementById("main-heading"); // Select by ID
heading.textContent = "Updated Heading"; // Update text content

const paragraphs = document.querySelectorAll(".text"); // Select all by class
paragraphs.forEach((p) => (p.style.color = "blue")); // Change text color
```

#### **Removing an Element**

<audio src="..\..\mp3\这段代码展示了如何通过Java.mp3"></audio>

```javascript
const element = document.querySelector(".to-remove"); // Select an element
element.parentNode.removeChild(element); // Remove it from the DOM
```

---

### Key Notes:
1. The DOM tree allows hierarchical navigation and manipulation of webpage elements.  
2. Use efficient selectors like `querySelector` and `getElementById` for precise access.  
3. Dynamically create, modify, or remove nodes to update the UI without reloading the page.  
4. Always sanitize content when using `innerHTML` to avoid security risks (e.g., XSS attacks).