### Promises with `fetch` for Asynchronous Calls

<audio src="C:\Users\10691\Downloads\The `fetch` API.mp3"></audio>

The `fetch` API is used to make asynchronous HTTP requests and returns a **Promise**. This promise resolves when the request completes successfully, providing a `Response` object. Use `.then()` to handle the response and `.catch()` for errors.

**Steps**:  

- Call `fetch()` with a URL (and optional configurations like method, headers).  
- Chain `.then()` to process the response (e.g., convert to JSON).  
- Handle errors using `.catch()`.

> **使用 `fetch` 和 Promises 进行异步调用**  
>
> <audio src="C:\Users\10691\Downloads\`fetch` API 用于发.mp3"></audio>
>
> `fetch` API 用于发起异步 HTTP 请求，并返回一个 **Promise**。当请求成功完成时，Promise 会解析，返回一个 `Response` 对象。  
> **步骤**：  
>
> 1. 调用 `fetch()` 并传入 URL（可选配置如方法、头信息）。  
> 2. 使用 `.then()` 处理响应（如解析为 JSON）。  
> 3. 使用 `.catch()` 处理错误。

---

### Code Examples:

<audio src="C:\Users\10691\Downloads\这段代码展示了使用`fetch.mp3"></audio>

#### **Basic `fetch` Example**
```javascript
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network error"); // Handle HTTP errors
    }
    return response.json(); // Parse response as JSON
  })
  .then((data) => {
    console.log("Fetched data:", data); // Handle the data
  })
  .catch((error) => {
    console.error("Error occurred:", error); // Handle errors
  });
```

#### **POST Request with `fetch`**
```javascript
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST", // HTTP method
  headers: {
    "Content-Type": "application/json", // Set content type
  },
  body: JSON.stringify({ title: "foo", body: "bar", userId: 1 }), // Request payload
})
  .then((response) => {
    if (!response.ok) {
      throw new Error("Failed to create resource");
    }
    return response.json(); // Parse response
  })
  .then((data) => {
    console.log("Created resource:", data); // Log created resource
  })
  .catch((error) => {
    console.error("Error:", error); // Handle errors
  });
```

---

### Key Notes:

<audio src="C:\Users\10691\Downloads\1. __`fetch`__ .mp3"></audio>

1. **`fetch`** is promise-based and does not reject on HTTP errors (e.g., `404`), so check `response.ok`.  
2. Use `.then()` to process the response and `.catch()` for network-related errors.  
3. Always include headers for proper content type handling in `POST`/`PUT` requests.