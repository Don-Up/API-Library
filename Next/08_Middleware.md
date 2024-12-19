# Middleware in Next.js

<audio src="../mp3/2024年12月19日12点03分.mp3"></audio>

Middleware in Next.js allows you to run custom logic **before a request is completed**. It acts as a layer that intercepts requests and responses, giving you the ability to modify or redirect them, check for authentication, perform logging, or handle other tasks **before the final response is sent to the client**.

Introduced in Next.js 12, middleware works on both server-side and edge environments, making it a powerful tool for building modern, performant web applications.

---

## **Objective**

<audio src="../mp3/2024年12月19日12点04分.mp3"></audio>

The goal of this section is to:

1. Understand what middleware is and how it works in Next.js.
2. Learn how to create and configure middleware.
3. Explore common use cases like authentication, redirects, and custom headers.
4. Understand the difference between middleware and other Next.js features like API routes.

By the end, you'll be able to implement middleware effectively and optimize request handling in your Next.js applications.

---

## **1. What Is Middleware?**

<audio src="../mp3/2024年12月19日12点07分.mp3"></audio>

Middleware is a function that executes during the server-side request lifecycle **before the request is completed**. It allows you to:

- **Intercept requests**: Modify requests or responses dynamically.
- **Add custom logic**: Perform tasks like authentication, geo-location, feature flags, or logging.
- **Redirect or rewrite responses**: Change the destination of a request or modify the response data.

**Key Features of Middleware in Next.js:**

- Runs at the **edge** for improved performance (when deployed on platforms like Vercel).
- Executes **before rendering** or hitting an API route.
- Can modify requests (`req`) and responses (`res`), or even terminate them.

---

## **2. How Middleware Works in Next.js**

<audio src="../mp3/2024年12月19日12点10分.mp3"></audio>

Middleware in Next.js is implemented using a file called `_middleware.js` or `middleware.js`. It runs **before rendering a page or routing to an API endpoint**.

### **Middleware Lifecycle**

When a request is made to your application:
1. Middleware intercepts the request.
2. Executes custom logic.
3. Based on the logic, it:
   - Continues the request (unchanged or modified).
   - Redirects or rewrites the request.
   - Returns an error or terminates the response.

---

## **3. Creating Middleware**

<audio src="../mp3/2024年12月19日12点12分.mp3"></audio>

Middleware is defined in a `middleware.js` file located in the **root of your project** or within specific routes.

### **Basic Middleware Example**

1. Create a `middleware.js` file in the root of your project:

   ```javascript
   import { NextResponse } from 'next/server';

   export function middleware(request) {
     console.log('Middleware is running...');
     return NextResponse.next(); // Continue to the requested route
   }
   ```

2. Start your development server and observe the console messages for every request.

---

### **Middleware API**

<audio src="../mp3/2024年12月19日12点21分.mp3"></audio>

The middleware function receives a `Request` object and must return a `Response` object (or allow the request to continue).

#### **Request Object**
- Represents the incoming request.
- Provides data like URL, headers, and cookies.

Example:
```javascript
export function middleware(request) {
  console.log(request.url);       // Logs the requested URL
  console.log(request.headers);   // Logs request headers
  return NextResponse.next();     // Allows request to proceed
}
```

#### **Response Object**
- Use `NextResponse` to modify the response or perform actions like redirects, rewrites, or custom headers.

---

### **4. Middleware Examples**

#### **4.1 Redirect Users Based on Authentication**

Redirect unauthenticated users to a login page:

<audio src="../mp3/2024年12月19日12点29分.mp3"></audio>

<audio src="../mp3/2024年12月19日12点32分.mp3"></audio>

<audio src="../mp3/2024年12月19日12点34分.mp3"></audio>

```javascript
import { NextResponse } from 'next/server';

export function middleware(request) {
  const { cookies } = request; // Access cookies from the request
  const token = cookies.get('authToken'); // Assume 'authToken' holds the user's session

  if (!token) {
    // If no token, redirect to the login page
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Allow the request to proceed
  return NextResponse.next();
}
```

---

#### **4.2 Geo-Location-Based Routing**

<audio src="../mp3/2024年12月19日12点44分.mp3"></audio>

<audio src="../mp3/2024年12月19日12点48分.mp3"></audio>

<audio src="../mp3/2024年12月19日12点51分.mp3"></audio>

Use the `x-vercel-ip-country` header to detect the user's location and route them accordingly:

```javascript
import { NextResponse } from 'next/server';

export function middleware(request) {
  const country = request.headers.get('x-vercel-ip-country');

  if (country === 'US') {
    // Redirect US users to a specific page
    return NextResponse.redirect(new URL('/us-home', request.url));
  }

  // Proceed with the request for other users
  return NextResponse.next();
}
```

---

#### **4.3 Add Custom Headers**

Modify the response to include custom headers for security or caching purposes:

<audio src="../mp3/2024年12月19日12点56分.mp3"></audio>

<audio src="../mp3/2024年12月19日12点58分.mp3"></audio>

<audio src="../mp3/2024年12月19日12点59分.mp3"></audio>

```javascript
import { NextResponse } from 'next/server';

export function middleware(request) {
  const response = NextResponse.next();

  // Add custom headers
  response.headers.set('X-Custom-Header', 'My Custom Value');
  response.headers.set('Cache-Control', 'max-age=3600');
   
  return response;
}
```

---

#### **4.4 Rewriting URLs**

Rewrite the URL to serve a different page without changing the URL in the browser:

<audio src="../mp3/2024年12月19日13点12分.mp3"></audio>

<audio src="../mp3/2024年12月19日13点15分.mp3"></audio>

<audio src="../mp3/2024年12月19日13点18分.mp3"></audio>

```javascript
import { NextResponse } from 'next/server';

export function middleware(request) {
  const url = request.nextUrl;

  if (url.pathname === '/old-route') {
    // Rewrite '/old-route' to '/new-route'
    url.pathname = '/new-route';
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}
```

---

#### **4.5 Middleware for Specific Routes**

<audio src="../mp3/2024年12月19日13点21分.mp3"></audio>

<audio src="../mp3/2024年12月19日13点24分.mp3"></audio>

<audio src="../mp3/2024年12月19日13点26分.mp3"></audio>

If you only want middleware to run for specific routes, use a `matcher` configuration:

1. Add the `matcher` export in `middleware.js`:

   ```javascript
   export const config = {
     matcher: ['/dashboard/:path*', '/profile/:path*'], // Specify routes
   };
   ```

2. Middleware will only execute for `/dashboard` and `/profile` routes (including subpaths).

---

## **5. Middleware vs. Other Features**

| **Feature**          | **Middleware**                           | **API Routes**                        | **getServerSideProps**                    |
| -------------------- | ---------------------------------------- | ------------------------------------- | ----------------------------------------- |
| **Purpose**          | Runs logic before a request is completed | Handles server-side API logic         | Fetches data server-side before rendering |
| **Execution**        | Runs for every request                   | Runs only when the endpoint is called | Runs during page rendering                |
| **Edge Support**     | ✅ Runs at the edge (if deployed)         | ❌ No edge support                     | ❌ No edge support                         |
| **Modifies Request** | ✅ Can modify requests or responses       | ❌ Cannot modify requests              | ❌ Cannot modify requests                  |

---

## **6. Middleware Best Practices**

<audio src="../mp3/2024年12月19日13点30分.mp3"></audio>

1. **Keep Middleware Lightweight**:
   - Avoid heavy computations or database queries. Middleware should be fast and efficient.
   - Offload complex logic to API routes or server-side functions.

2. **Use Matchers for Specific Routes**:
   - Scope middleware to specific routes using the `matcher` configuration to avoid unnecessary execution.

3. **Secure Middleware Logic**:
   - Validate sensitive data like tokens and headers securely to prevent vulnerabilities.

4. **Combine Middleware with API Routes**:
   - Use middleware for intercepting and redirecting requests, and API routes for handling complex server-side logic.

5. **Test Middleware Locally**:
   - Use tools like Postman or curl to test middleware behavior thoroughly before deployment.

---

## **7. Deployment and Edge Performance**

<audio src="../mp3/2024年12月19日13点31分.mp3"></audio>

When deployed on platforms like **Vercel**, middleware runs at the **edge**. This means it runs closer to the user’s location, reducing latency and improving performance. Middleware's ability to execute at the edge makes it ideal for:

- **Geo-location-based routing**.
- **Authentication checks**.
- **Dynamic rewrites and redirects**.

---

## **8. Common Use Cases**

<audio src="../mp3/2024年12月19日13点33分.mp3"></audio>

Here are some real-world applications of middleware in Next.js:

1. **Authentication and Authorization**:
   - Check for valid authentication tokens before granting access to protected pages.

2. **Localization**:
   - Redirect users to region-specific pages based on their location or preferred language.

3. **A/B Testing**:
   - Serve different versions of a page to users based on feature flags or cookies.

4. **Rate Limiting**:
   - Limit the frequency of requests to prevent abuse of APIs or resources.

5. **Custom Headers and Security**:
   - Add headers like `Content-Security-Policy` or `X-Frame-Options` to enhance security.

---

## **9. Summary**

<audio src="../mp3/2024年12月19日13点34分.mp3"></audio>

Middleware in Next.js provides a powerful way to intercept and modify requests before they are completed. Whether you need to handle authentication, geo-location, redirects, or custom headers, middleware allows you to implement this functionality efficiently. By running at the edge, middleware ensures low latency and better performance, making it an essential tool for building modern, scalable web applications. Understanding and leveraging middleware effectively will help you optimize your application's request handling and user experience.