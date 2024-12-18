### Middleware in Next.js

**Middleware**: Middleware in Next.js allows you to run code **before a request is completed**. It can modify the request or response, execute redirects, or handle authentication. Middleware runs on the **Edge Runtime**, allowing for **low-latency operations** close to the user. Middleware is defined in a `middleware.js` file and can be applied globally or to specific routes.

#### Key Points:
- Runs **before** the request completes.
- Can modify **request/response**, perform **redirects**, or handle **authentication**.

> **中间件**：Next.js 中的中间件允许在请求完成之前运行代码，能够修改请求或响应、执行重定向或处理身份验证。中间件在 Edge Runtime 上运行，可处理低延迟操作。

#### Example with Comments:

```js
// middleware.js
import { NextResponse } from 'next/server';

export function middleware(req) {
  // Redirect if the user is not authenticated
  const token = req.cookies['auth-token'];
  if (!token) {
    return NextResponse.redirect(new URL('/login', req.url));
  }
  return NextResponse.next(); // Continue if authenticated
}
```

In this example:
- The middleware checks for an **auth token**.
- If no token is found, it **redirects** the user to the `/login` page; otherwise, it proceeds with the request.