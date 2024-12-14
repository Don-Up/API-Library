### DOM Traversal (`parentNode`, `childNodes`, `nextSibling`, etc.)

<audio src="..\..\mp3\__DOM traversal.mp3"></audio>

**DOM traversal** allows navigating through nodes in the DOM tree using relationships like parent, child, and sibling. These methods and properties help dynamically access and manipulate elements.

#### **Key DOM Traversal Properties**:
1. **`parentNode`**: Returns the parent node of an element.  
2. **`childNodes`**: Returns a NodeList of all child nodes (including text and comment nodes).  
3. **`firstChild` / `lastChild`**: Access the first or last child node.  
4. **`nextSibling` / `previousSibling`**: Access the next or previous sibling node.  
5. **`parentElement`**, **`children`**, **`firstElementChild`**, **`lastElementChild`**, **`nextElementSibling`**, **`previousElementSibling`**: Similar to the above but return only element nodes, ignoring text and comment nodes.

These traversal properties are useful for navigating and manipulating the DOM hierarchy.

> **DOM 遍历（`parentNode`、`childNodes`、`nextSibling` 等）** 
>
>  <audio src="..\..\mp3\DOM 遍历通过父节点、子节点.mp3"></audio>
> **DOM 遍历**通过父节点、子节点和兄弟节点之间的关系，帮助在 DOM 树中导航。以下是常用的属性和方法：  
>
> 1. **`parentNode`**：返回元素的父节点。  
> 2. **`childNodes`**：返回所有子节点的 NodeList（包括文本和注释节点）。  
> 3. **`firstChild` / `lastChild`**：访问第一个或最后一个子节点。  
> 4. **`nextSibling` / `previousSibling`**：访问下一个或前一个兄弟节点。  
> 5. **`parentElement`**、**`children`**、**`firstElementChild`**、**`lastElementChild`**、**`nextElementSibling`**、**`previousElementSibling`**：类似上述属性，但只返回元素节点，忽略文本和注释节点。

---

### Code Examples:

#### **Parent and Child Traversal**

<audio src="..\..\mp3\这段代码展示了如何通过Java (1).mp3"></audio>

```javascript
const child = document.querySelector(".child"); // Select an element
console.log(child.parentNode); // Logs the parent node
console.log(child.parentElement); // Logs the parent element (only an element)

const parent = document.querySelector(".parent");
console.log(parent.childNodes); // Logs all child nodes (including text nodes)
console.log(parent.children); // Logs only child elements
```

#### **Sibling Traversal**

<audio src="..\..\mp3\这段代码展示了如何通过Java (2).mp3"></audio>

```javascript
const current = document.querySelector(".current"); // Select an element
console.log(current.nextSibling); // Logs the next sibling (can be text or comment)
console.log(current.nextElementSibling); // Logs the next sibling that is an element
console.log(current.previousSibling); // Logs the previous sibling (can be text or comment)
console.log(current.previousElementSibling); // Logs the previous sibling that is an element
```

#### **First and Last Child**

<audio src="..\..\mp3\这段代码展示了如何通过Java (3).mp3"></audio>

```javascript
const parent = document.querySelector(".parent");
console.log(parent.firstChild); // Logs the first child (can be text or comment)
console.log(parent.lastChild); // Logs the last child (can be text or comment)
console.log(parent.firstElementChild); // Logs the first child element
console.log(parent.lastElementChild); // Logs the last child element
```

---

### Key Notes:
1. Use **`childNodes`** and **`children`** carefully because `childNodes` includes non-element nodes (e.g., text nodes).  
2. Use **element-specific properties** like `children` or `nextElementSibling` for cleaner traversal.  
3. DOM traversal is hierarchical: move up and down the DOM tree using parent, child, and sibling relationships.  
4. Be cautious when modifying nodes during traversal to avoid breaking the DOM structure.