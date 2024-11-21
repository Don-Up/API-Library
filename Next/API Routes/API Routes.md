### API Routes in Next.js

**API Routes**: Next.js allows you to create server-side API endpoints by placing JavaScript files inside the `pages/api` directory. Each file in this directory maps to an API route, and you can handle requests like **GET**, **POST**, **PUT**, etc. These routes run on a Node.js server, allowing you to interact with databases, external APIs, or perform backend logic.

#### Key Points:
- Create API endpoints under **`pages/api`**.
- Handle HTTP methods using **`req`** and **`res`** objects.

> **API 路由**：Next.js 允许通过在 `pages/api` 目录中创建 JavaScript 文件来创建服务器端 API 端点。每个文件对应一个 API 路由，可以处理 GET、POST 等请求。

#### Example with JSX Comments:

```js
// pages/api/hello.js
export default function handler(req, res) {
  // Handle a GET request
  if (req.method === 'GET') {
    res.status(200).json({ message: 'Hello, Next.js API!' });
  } else {
    // For other methods, return 405 (Method Not Allowed)
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
```

In this example:
- The API route **`/api/hello`** responds to **GET** requests with a message.
- **`req.method`** checks the HTTP method, and non-GET methods return a **405** status.