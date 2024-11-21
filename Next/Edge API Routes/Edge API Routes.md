### Edge API Routes in Next.js

**Edge API Routes**: Next.js supports **Edge API Routes**, which run serverless functions on the **Edge Network**. These routes offer **low-latency** and **highly scalable** solutions, making them ideal for tasks requiring fast responses, such as geolocation or real-time data processing. Unlike traditional API routes, Edge API Routes use the **Edge Runtime**, which has limitations, such as no access to Node.js APIs.

#### Key Points:
- Executes on the **Edge Network** for low-latency responses.
- Suitable for **real-time** or **geolocation-based** tasks.

> **边缘 API 路由**：Next.js 的边缘 API 路由在边缘网络上运行无服务器函数，提供低延迟和高扩展性。适合需要快速响应的任务，如地理位置或实时数据处理。

#### Example with Comments:

```js
// pages/api/hello.js
export const config = {
  runtime: 'edge', // Specify Edge Runtime
};

export default async function handler(req) {
  // Return a simple JSON response
  return new Response(JSON.stringify({ message: 'Hello from the Edge!' }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
```

In this example:
- **`runtime: 'edge'`** configures this API route to run on the **Edge Network**.
- **`Response`** is used instead of `res` to return a response in the **Edge Runtime**.