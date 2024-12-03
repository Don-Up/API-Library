### `fetch` API vs `XMLHttpRequest`

<audio src="C:\Users\10691\Downloads\1.  `fetch` API.mp3"></audio>

1. **`fetch` API**:  
   - A modern, promise-based API for making HTTP requests.  
   - Simpler syntax, supports async/await, and better handles streaming.  

2. **`XMLHttpRequest` (XHR)**:  
   - The older API for HTTP requests.  
   - Callback-based, more verbose, and lacks modern features like promises.  

3. **Differences**:  
   - `fetch` is simpler, but doesn't natively support progress events like XHR.  
   - XHR is still used for legacy code or progress tracking.  

> **`fetch` API 和 `XMLHttpRequest`**  
>
> <audio src="C:\Users\10691\Downloads\`fetch` API：  一.mp3"></audio>
>
> 1. **`fetch` API**：  
>    - 一个现代的基于 Promise 的 HTTP 请求 API。  
>    - 语法更简单，支持 async/await 并更好地处理流式数据。  
> 2. **`XMLHttpRequest` (XHR)**：  
>    - 较旧的 HTTP 请求 API。  
>    - 基于回调，语法更冗长，不支持 Promise。  
> 3. **对比**：  
>    - `fetch` 更简洁，但不支持像 XHR 那样的进度事件。  
>    - XHR 仍用于遗留代码或需要进度跟踪的场景。

---

### Code Examples:

<audio src="C:\Users\10691\Downloads\这段代码展示了两种向服务器发送.mp3"></audio>

#### **Using `fetch` API**
```javascript
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network error");
    }
    return response.json(); // Parse JSON response
  })
  .then((data) => console.log(data)) // Handle data
  .catch((error) => console.error("Fetch error:", error)); // Handle errors
```

#### **Using `XMLHttpRequest`**
```javascript
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");

xhr.onload = function () {
  if (xhr.status === 200) {
    console.log(JSON.parse(xhr.responseText)); // Parse and log response
  } else {
    console.error("XHR error:", xhr.statusText);
  }
};

xhr.onerror = function () {
  console.error("Network error");
};

xhr.send();
```

---

### Key Notes:

<audio src="C:\Users\10691\Downloads\1.  __`fetch`__.mp3"></audio>

1. **`fetch`** is recommended for modern applications due to its simplicity and promise-based syntax.  
2. Use **XHR** for legacy systems or when requiring progress events (like file uploads).  
3. Both APIs work for making HTTP requests, but `fetch` provides better integration with modern JavaScript features.