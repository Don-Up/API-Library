### CORS in Express.js  

**CORS (Cross-Origin Resource Sharing)** is a security feature enforced by browsers that restricts resources on a web server to be accessed from a different origin (domain, protocol, or port). In **Express.js**, the `cors` middleware allows configuring CORS policies to enable or restrict cross-origin requests.  

1. **Use Case**:  
   - Allowing APIs to be accessed by front-end applications hosted on different domains.  

2. **Installation**:  
   - Use the `cors` package to simplify CORS handling.  

3. **Customization**:  
   - Configure allowed origins, methods, headers, etc., using options.  

> **CORS 在 Express.js 中**  
>
> <audio src="C:\Users\10691\Downloads\CORS（跨域资源共享） 是由.mp3"></audio>
>
> **CORS（跨域资源共享）** 是由浏览器强制执行的安全功能，用于限制来自不同源（域、协议或端口）的资源访问。在 **Express.js** 中，可以使用 `cors` 中间件配置 CORS 策略来允许或限制跨域请求。  
>
> 1. **使用场景**：  
>    - 允许前端应用访问托管在不同域名上的 API。  
> 2. **安装**：  
>    - 使用 `cors` 包简化 CORS 处理。  
> 3. **自定义**：  
>    - 配置允许的来源、方法、请求头等选项。  

---

### Code Examples:

#### **Basic Setup**
```bash
npm install cors
```

```javascript
const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS for all origins
app.use(cors());

app.get('/api', (req, res) => {
  res.json({ message: 'CORS enabled for all origins!' });
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
```

---

#### **Custom CORS Configuration**

<audio src="C:\Users\10691\Downloads\这段代码通过设置 `corsO.mp3"></audio>

```javascript
const corsOptions = {
  origin: 'http://example.com', // Allow requests only from this origin
  methods: ['GET', 'POST'],    // Allow specific HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allow specific headers
};

app.use(cors(corsOptions));

app.get('/api', (req, res) => {
  res.json({ message: 'CORS enabled for http://example.com only!' });
});
```

---

<audio src="C:\Users\10691\Downloads\这段代码通过动态的 `cors.mp3"></audio>

```js
const allowedOrigins = [
    'http://localhost:3000',
    'http://localhost:3001',
];

app.use(cors({
    origin: (origin, callback) => {
        // 允许无 origin 的请求（如直接使用 Postman 测试）
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    }
}));
```



### Key Notes:  

1. **Default Behavior**: By default, `cors()` allows all origins and HTTP methods.  
2. **Error Handling**: Without proper CORS setup, browsers will block cross-origin requests.  
3. **Preflight Requests**: For complex requests (e.g., `PUT`, `DELETE`), handle **OPTIONS** requests for preflight checks.  

#### Handle Preflight Requests:
```javascript
app.options('/api', cors(corsOptions)); // Allow preflight requests
```