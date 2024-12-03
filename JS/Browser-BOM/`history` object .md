### The `history` Object in BOM

<audio src="C:\Users\10691\Downloads\The __`history`.mp3"></audio>

The **`history` object** is part of the Browser Object Model (BOM) and allows interaction with the browser's session history (pages visited in the current tab). It provides methods to navigate and manipulate the history stack.

#### **Key Methods**:
1. **`history.back()`**: Goes to the previous page.  
2. **`history.forward()`**: Moves to the next page.  
3. **`history.go(n)`**: Moves `n` steps in the history (`n > 0` forward, `n < 0` backward).  
4. **`history.pushState(state, title, url)`**: Adds a new entry to the history stack.  
5. **`history.replaceState(state, title, url)`**: Modifies the current history entry.

> **BOM 中的 `history` 对象**  
>
> <audio src="C:\Users\10691\Downloads\`history` 对象 是浏.mp3"></audio>
>
> **`history` 对象** 是浏览器对象模型的一部分，用于操作浏览器的会话历史（当前标签页访问的页面）。  
>
> #### **主要方法**：  
> 1. **`history.back()`**：返回上一页。  
> 2. **`history.forward()`**：前进到下一页。  
> 3. **`history.go(n)`**：在历史记录中前进或后退 `n` 步。  
> 4. **`history.pushState(state, title, url)`**：向历史堆栈添加新条目。  
> 5. **`history.replaceState(state, title, url)`**：修改当前历史条目。

---

### Code Examples:

#### **Basic Navigation**
```javascript
// Go back to the previous page
history.back();

// Go forward to the next page
history.forward();

// Move two steps forward or backward
history.go(-2); // Go back two pages
history.go(1);  // Go forward one page
```

#### **Using `pushState` and `replaceState`**

<audio src="C:\Users\10691\Downloads\这段代码展示了如何使用hist.mp3"></audio>

```javascript
// Add a new entry to the history stack
history.pushState({ page: 1 }, "Page 1", "/page1");
console.log(history.state); // { page: 1 }

// Replace the current history entry
history.replaceState({ page: 2 }, "Page 2", "/page2");
console.log(history.state); // { page: 2 }
```

---

### Key Notes:

<audio src="C:\Users\10691\Downloads\1. __`pushState.mp3"></audio>

1. **`pushState`** and **`replaceState`** do not reload the page but update the URL and history entry.  
2. Use **`state`** for storing additional data in history entries.  
3. `history.length` returns the number of entries in the history stack.