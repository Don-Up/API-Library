### LocalStorage, SessionStorage, and Cookies

<audio src="C:\Users\10691\Downloads\LocalStorage_  .mp3"></audio>

1. **LocalStorage**:  
   - Stores data persistently with no expiration.  
   - Data survives page reloads and browser restarts.  

2. **SessionStorage**:  
   - Stores data for the session only.  
   - Data is cleared when the tab/browser is closed.  

3. **Cookies**:  
   - Stores small amounts of data (4KB limit).  
   - Can set expiration and is sent with every HTTP request for server use.  

**Use Cases**:  
- LocalStorage for persistent data (e.g., preferences).  
- SessionStorage for session-based data.  
- Cookies for server communication.

> **LocalStorage、SessionStorage 和 Cookies** 
>
>  <audio src="C:\Users\10691\Downloads\LocalStorage：  .mp3"></audio>
>
> 1. **LocalStorage**：  
>    - 持久存储数据，无过期时间。  
>    - 数据在页面刷新和浏览器重启后仍然存在。  
> 2. **SessionStorage**：  
>    - 会话存储，仅在会话期间有效。  
>    - 浏览器/标签页关闭时清除数据。  
> 3. **Cookies**：  
>    - 存储小量数据（最多 4KB）。  
>    - 可以设置过期时间，且会随每个 HTTP 请求发送给服务器。  
>    **应用场景**：  
> - LocalStorage 适用于持久数据（如用户偏好）。  
> - SessionStorage 用于会话数据。  
> - Cookies 用于与服务器交互。

---

### Code Examples:

<audio src="C:\Users\10691\Downloads\`localStorage`用.mp3"></audio>

#### **LocalStorage**
```javascript
// Set item
localStorage.setItem("username", "Alice");
// Get item
console.log(localStorage.getItem("username")); // Output: Alice
// Remove item
localStorage.removeItem("username");
// Clear all data
localStorage.clear();
```

#### **SessionStorage**
```javascript
// Set item
sessionStorage.setItem("sessionID", "12345");
// Get item
console.log(sessionStorage.getItem("sessionID")); // Output: 12345
// Remove item
sessionStorage.removeItem("sessionID");
// Clear all data
sessionStorage.clear();
```

#### **Cookies**
```javascript
// Set cookie
document.cookie = "username=Alice; expires=Fri, 31 Dec 2024 23:59:59 GMT; path=/";
// Get cookies
console.log(document.cookie); // Output: username=Alice
// Delete cookie (set expiration in the past)
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
```

---

### Key Notes:

<audio src="C:\Users\10691\Downloads\1. __LocalStora.mp3"></audio>

1. **LocalStorage** and **SessionStorage** are easier for client-side storage but not sent to the server.  
2. **Cookies** are used when data needs to be shared between client and server.  
3. LocalStorage has a larger storage capacity than cookies (usually 5MB per domain).