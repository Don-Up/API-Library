### The `location` Object in BOM

<audio src="C:\Users\10691\Downloads\The __`location.mp3"></audio>

The **`location` object** in the Browser Object Model (BOM) represents the current URL and provides methods to navigate or manipulate it. It is accessible via `window.location`.

#### **Key Properties**:
1. **`location.href`**: Full URL of the current page.  
2. **`location.protocol`**: Protocol (`http:`, `https:`).  
3. **`location.host`**: Hostname and port.  
4. **`location.pathname`**: Path after the domain.  
5. **`location.search`**: Query string (e.g., `?key=value`).  
6. **`location.hash`**: Fragment identifier (e.g., `#section`).

#### **Key Methods**:
1. **`location.assign(url)`**: Navigates to a new URL.  
2. **`location.replace(url)`**: Replaces the current page (no history entry).  
3. **`location.reload()`**: Reloads the page.

> **BOM 中的 `location` 对象**  
>
> <audio src="C:\Users\10691\Downloads\`location` 对象 表.mp3"></audio>
>
> **`location` 对象** 表示当前页面的 URL，并提供方法导航或操作 URL。通过 `window.location` 访问。  
>
> #### **主要属性**：
> 1. **`location.href`**：当前页面的完整 URL。  
> 2. **`location.protocol`**：协议（如 `http:`、`https:`）。  
> 3. **`location.host`**：主机名和端口号。  
> 4. **`location.pathname`**：域名后的路径。  
> 5. **`location.search`**：查询字符串（如 `?key=value`）。  
> 6. **`location.hash`**：片段标识符（如 `#section`）。  
> #### **主要方法**：
> 1. **`location.assign(url)`**：跳转到新 URL。  
> 2. **`location.replace(url)`**：替换当前页面（不保存历史记录）。  
> 3. **`location.reload()`**：重新加载页面。

---

### Code Examples:

#### **Getting URL Properties**
```javascript
console.log(location.href);       // Full URL (e.g., "https://example.com/page?key=value#section")
console.log(location.protocol);   // Protocol (e.g., "https:")
console.log(location.host);       // Hostname and port (e.g., "example.com")
console.log(location.pathname);   // Path (e.g., "/page")
console.log(location.search);     // Query string (e.g., "?key=value")
console.log(location.hash);       // Fragment identifier (e.g., "#section")
```

#### **Navigating with `location`**

<audio src="C:\Users\10691\Downloads\这段代码展示了如何使用loca.mp3"></audio>

```javascript
// Navigate to a new page
location.assign("https://example.com/new-page");

// Replace the current page (no back button)
location.replace("https://example.com/replacement-page");

// Reload the current page
location.reload();
```

---

### Key Notes:

<audio src="C:\Users\10691\Downloads\1. __`location .mp3"></audio>

1. **`location.href`** is both readable (get URL) and writable (navigate to a new URL).  
2. Use **`assign`** to navigate and preserve history; use **`replace`** to avoid adding to history.  
3. **`reload()`** can force a reload by passing `true` (e.g., `location.reload(true)`).