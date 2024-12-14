### Working with `async/await` in API Requests

<audio src="..\..\mp3\__`async await`.mp3"></audio>

**`async/await`** simplifies asynchronous code by making it look synchronous. It is built on **Promises**, where `await` pauses execution until the promise resolves, and `async` marks a function as asynchronous. This is commonly used for API requests with `fetch` or libraries like `axios`.

1. **Advantages**: Cleaner syntax, easier error handling with `try/catch`.  
2. **Steps**:  
   - Use `await` to fetch data or complete async operations.  
   - Handle errors using `try/catch`.

> **使用 `async/await` 处理 API 请求**  
>
> <audio src="..\..\mp3\`async_await` 简.mp3"></audio>
>
> **`async/await`** 简化了异步代码，使其看起来像同步代码。它基于 **Promise**，`await` 会暂停代码执行直到 Promise 解析，`async` 用于将函数标记为异步函数。  
> **优点**：语法更简洁，使用 `try/catch` 更易于错误处理。  
> **步骤**：  
>
> 1. 使用 `await` 来获取数据或完成异步操作。  
> 2. 使用 `try/catch` 处理错误。

---

### Code Examples:

<audio src="..\..\mp3\这段代码展示了如何使用`asy.mp3"></audio>

#### **Using `async/await` with `fetch`**
```javascript
async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
      throw new Error("Network error");
    }
    const data = await response.json();
    console.log("Fetched data:", data); // Handle the data
  } catch (error) {
    console.error("Error in API request:", error); // Handle errors
  }
}

fetchData();
```

#### **Using `async/await` with `axios`**
```javascript
const axios = require("axios");

async function fetchPosts() {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    console.log("Fetched data:", response.data); // Logs API response
  } catch (error) {
    console.error("Error in API request:", error); // Handle errors
  }
}

fetchPosts();
```

---

### Key Notes:

<audio src="..\..\mp3\1. Use  `async .mp3"></audio>

1. Use **`async/await`** for cleaner, readable asynchronous code.  
2. Wrap `await` calls in **`try/catch`** for robust error handling.  
3. Combine `async/await` with libraries like **`axios`** for advanced features like interceptors.