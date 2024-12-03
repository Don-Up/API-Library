### `compression` Middleware  

**`compression`** is an Express.js middleware that compresses HTTP responses using Gzip or Brotli to reduce the size of the response body. This improves performance by reducing the amount of data transferred between the server and client, leading to faster load times.  

1. **Use Case**:  
   - Optimize performance for large payloads like JSON, HTML, or CSS.  

2. **Key Features**:  
   - Automatically negotiates compression based on client support.  
   - Works seamlessly with Express.  

3. **Installation**:  
   - Install via `npm install compression`.  

> **compression 中间件**  
>
> <audio src="C:\Users\10691\Downloads\`compression` 是.mp3"></audio>
>
> **`compression`** 是一个 Express.js 中间件，用于通过 Gzip 或 Brotli 压缩 HTTP 响应体，从而减小响应体大小。它通过减少服务器和客户端之间传输的数据量提升性能，使页面加载更快。  
>
> 1. **使用场景**：  
>    - 优化大数据量如 JSON、HTML 或 CSS 的传输性能。  
> 2. **主要功能**：  
>    - 根据客户端支持自动协商压缩。  
>    - 与 Express 无缝集成。  
> 3. **安装方法**：  
>    - 通过 `npm install compression` 安装。  

---

### Code Examples:

#### **Installing the Middleware**
```bash
npm install compression
```

#### **Basic Usage**
```javascript
const express = require('express');
const compression = require('compression');

const app = express();

// Enable compression middleware
app.use(compression());

app.get('/', (req, res) => {
  res.send('This response is compressed!');
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
```

---

#### **Custom Configuration**
```javascript
app.use(
  compression({
    threshold: 1024, // Only compress responses larger than 1KB
    level: 6,        // Set compression level (0-9), default is 6
  })
);
```

---

#### **Testing Compression**
You can test the compression by using tools like `curl` with the `--compressed` flag:
```bash
curl --compressed http://localhost:3000
```

---

### Key Notes:  
1. **Threshold**: Small responses (e.g., under 1KB) are not compressed by default to avoid overhead.  
2. **Negotiation**: Compression is automatically applied if the client (browser) supports it via the `Accept-Encoding` header.  
3. **Performance**: Improves load times for assets but adds slight CPU overhead for compression.  

#### Example with Static Files:
```javascript
const path = require('path');
app.use(compression());
app.use(express.static(path.join(__dirname, 'public')));
```