### `innerHTML` vs. `textContent` in JavaScript

<audio src="..\..\mp3\Both `innerHTML.mp3"></audio>

Both `innerHTML` and `textContent` are used to manipulate or retrieve the content of an element, but they behave differently.

#### **`innerHTML`**:
- Retrieves or sets the **HTML content** of an element, including tags.
- Parses and renders HTML when used to set content.
- Less secure if used with untrusted input (vulnerable to XSS attacks).

#### **`textContent`**:
- Retrieves or sets the **text content** of an element (ignores HTML tags).
- Escapes HTML when setting content, treating it as plain text.
- Faster and more secure (does not parse HTML).

> **`innerHTML` vs. `textContent`**  
> 都可以操作元素的内容，但有以下区别：  
> #### **`innerHTML`**：
>
> <audio src="..\..\mp3\`innerHTML`：- 获.mp3"></audio>
>
> - 获取或设置元素的 **HTML 内容**，包括标签。  
> - 设置内容时会解析并渲染 HTML。  
> - 使用不受信输入时可能导致安全问题（容易遭受 XSS 攻击）。  
> #### **`textContent`**：
>
> <audio src="..\..\mp3\`textContent`：-.mp3"></audio>
>
> - 获取或设置元素的 **纯文本内容**（忽略 HTML 标签）。  
> - 设置内容时会将 HTML 转义为普通文本。  
> - 更快、更安全（不解析 HTML）。

---

### Code Examples:

#### **`innerHTML` Example**

<audio src="..\..\mp3\这段代码展示了如何使用inne.mp3"></audio>

```javascript
const div = document.querySelector("#myDiv");

// Get HTML content
console.log(div.innerHTML); 
// Output: "<strong>Hello</strong> World"

// Set HTML content (renders the HTML)
div.innerHTML = "<em>Updated</em> Content";
console.log(div.innerHTML);
// Output: "<em>Updated</em> Content"
```

#### **`textContent` Example**

<audio src="..\..\mp3\这段代码展示了如何使用`tex.mp3"></audio>

```javascript
const div = document.querySelector("#myDiv");

// Get text content (ignores HTML tags)
console.log(div.textContent); 
// Output: "Hello World"

// Set text content (escapes HTML)
div.textContent = "<em>Updated</em> Content";
console.log(div.textContent);
// Output: "<em>Updated</em> Content"
console.log(div.innerHTML);
// Output: "&lt;em&gt;Updated&lt;/em&gt; Content"
```

---

### Key Notes:
1. Use **`innerHTML`** when working with HTML markup.  
2. Use **`textContent`** for plain text to avoid security risks and improve performance.  
3. Avoid setting untrusted data with `innerHTML` to prevent XSS vulnerabilities.