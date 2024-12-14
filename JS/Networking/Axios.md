### Axios

<audio src="..\..\mp3\Axios is a popu.mp3"></audio>

**Axios** is a popular promise-based HTTP client for making HTTP requests in **Node.js** and browsers. It simplifies asynchronous requests with a clean API and supports features like request/response interception, automatic JSON conversion, and timeout handling. Axios is preferred over `fetch` for complex applications due to its ease of configuration, support for query parameters, and better error handling.

**Key Features**:  

- Supports `GET`, `POST`, `PUT`, `DELETE`, etc.  
- Handles request/response transformations automatically.  
- Built-in support for interceptors and cancellation.

> **Axios**  
>
> <audio src="..\..\mp3\Axios 是一个流行的基于 .mp3"></audio>
>
> **Axios** 是一个流行的基于 Promise 的 HTTP 客户端，用于在 **Node.js** 和浏览器中发送 HTTP 请求。它通过简洁的 API 简化异步请求，支持请求/响应拦截、自动 JSON 转换和超时处理。相比 `fetch`，Axios 在复杂应用中更受欢迎，因为它更易配置，支持查询参数且错误处理更优。  
> **主要功能**：  
>
> - 支持 `GET`、`POST`、`PUT`、`DELETE` 等请求方式。  
> - 自动处理请求和响应转换。  
> - 内置拦截器和请求取消功能。

---

### Code Examples:

<audio src="..\..\mp3\这段代码展示了如何使用`axi.mp3"></audio>

#### **Basic GET Request**
```javascript
const axios = require("axios"); // For Node.js

axios
  .get("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    console.log(response.data); // Automatically parses JSON
  })
  .catch((error) => {
    console.error("Error occurred:", error);
  });
```

#### **POST Request with Data**
```javascript
axios
  .post("https://jsonplaceholder.typicode.com/posts", {
    title: "foo",
    body: "bar",
    userId: 1,
  })
  .then((response) => {
    console.log(response.data); // Logs the response body
  })
  .catch((error) => {
    console.error("Error occurred:", error);
  });
```

#### **Using Interceptors**
```javascript
axios.interceptors.request.use(
  (config) => {
    console.log("Request sent:", config);
    return config; // Modify or log request before sending
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios
  .get("https://jsonplaceholder.typicode.com/posts")
  .then((response) => console.log(response.data));
```

---

### Key Notes:

<audio src="..\..\mp3\1.  __Axios__ a.mp3"></audio>

1. **Axios** automatically parses JSON responses and handles errors better than `fetch`.  
2. It supports advanced features like **interceptors**, **timeouts**, and **request cancellation**.  
3. Ideal for both client-side and server-side HTTP requests in modern JavaScript applications.