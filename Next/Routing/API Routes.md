### API Routes in Next.js

**API Routes**: Next.js allows you to create **API routes** inside the `pages/api` directory. These routes provide a way to build server-side APIs with Node.js functions, handling HTTP requests like GET, POST, PUT, etc. Each file in `pages/api` acts as an API endpoint, and you can access the request and response objects to manage data or integrate with external services.

#### Example:
- **`/api/hello`** will be handled by the file `pages/api/hello.js`.

> **API 路由**：Next.js 允许在 `pages/api` 目录中创建 API 路由。每个文件充当一个 API 端点，您可以处理 HTTP 请求，如 GET、POST 等。

#### Example API Route:

```js
// pages/api/hello.js
export default function handler(req, res) {
  // Handle a GET request
  if (req.method === 'GET') {
    res.status(200).json({ message: 'Hello, Next.js API!' });
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
```

In this example:
- **`req.method`** checks the HTTP method.
- **`res.status(200).json({ message })`** sends a JSON response for a GET request.