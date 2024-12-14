### Attributes vs. Properties in DOM Nodes

<audio src="..\..\mp3\Attributes are .mp3"></audio>

**Attributes** are defined in the HTML markup and reflect initial values. **Properties** are JavaScript representations of these attributes, accessible via DOM objects.  

1. **Attributes**:
   - Represent the original HTML values.
   - Accessed with `getAttribute()` / `setAttribute()`.
   - Do not reflect changes made to DOM properties.

2. **Properties**:
   - Represent the live state of an element in JavaScript.
   - Accessed directly (e.g., `element.id`, `element.value`).
   - Changes to properties do not always update attributes.

> **DOM 节点中的属性和属性**  
>
> <audio src="..\..\mp3\Attributes定义在 H.mp3"></audio>
>
> **属性（Attributes）** 定义在 HTML 中，表示初始值。**属性（Properties）** 是这些属性在 JavaScript 中的表示，可通过 DOM 对象访问。  
>
> 1. **属性**：代表 HTML 的原始值，用 `getAttribute()` / `setAttribute()` 访问。  
> 2. **属性**：代表元素的实时状态，通过 `element.property` 访问。

---

### Code Example:

<audio src="..\..\mp3\这段代码展示了HTML属性和D.mp3"></audio>

```javascript
const input = document.querySelector("input");

// Attribute: Reflects the initial value
console.log(input.getAttribute("value")); // "Initial"

// Property: Reflects the current value
input.value = "Changed";
console.log(input.value); // "Changed"
console.log(input.getAttribute("value")); // Still "Initial"
```

---

### Key Notes:
- **Attributes** are static (initial values).  
- **Properties** are dynamic (live values).