# API Routes in Next.js

Next.js allows you to create **backend API routes** directly within your application using the `pages/api/` directory. These routes run on the server as **serverless functions**, meaning they only execute when triggered by a request. This built-in backend functionality eliminates the need for a separate server, making it easier to create APIs for handling data, authentication, or other backend logic.

---

## **Objective**

The goal of this section is to:

1. Understand what API routes are and how they work in Next.js.
2. Learn how to create and handle API endpoints.
3. Explore advanced concepts like dynamic API routes, middleware, and error handling.

By the end, you'll be able to integrate backend logic seamlessly into your Next.js app without relying on external servers.

---

## **1. What Are API Routes?**

API routes in Next.js are special files inside the `pages/api/` directory that define server-side functions. These routes:

- Run on the server, not in the browser.
- Can be used to handle requests, fetch data, or interact with databases and external APIs.
- Are deployed as **serverless functions** (e.g., on platforms like Vercel).

Each file in `pages/api/` corresponds to an endpoint. For example:

- `pages/api/hello.js` → `/api/hello`
- `pages/api/user.js` → `/api/user`

---

## **2. Creating Your First API Route**

To create an API route, follow these steps:

### **Example: Basic API Route**

1. Create a file: `pages/api/hello.js`.
2. Add the following code:

   ```javascript
   export default function handler(req, res) {
     res.status(200).json({ message: 'Hello, Next.js API!' });
   }
   ```

3. Start the development server (`npm run dev`) and navigate to [http://localhost:3000/api/hello](http://localhost:3000/api/hello). You'll see the following JSON response:

   ```json
   {
     "message": "Hello, Next.js API!"
   }
   ```

### **How It Works:**

- **`req` (Request Object):** Contains details about the HTTP request (e.g., headers, query parameters, and body).
- **`res` (Response Object):** Used to send a response back to the client (e.g., JSON data, status codes).

---

## **3. HTTP Methods in API Routes**

API routes can handle different HTTP methods (e.g., GET, POST, PUT, DELETE). You can use the `req.method` property to determine which method was used to call the endpoint.

### **Example: Handling Multiple HTTP Methods**

1. Create a file: `pages/api/user.js`.
2. Add the following code:

   ```javascript
   export default function handler(req, res) {
     if (req.method === 'GET') {
       // Handle GET request
       res.status(200).json({ message: 'This is a GET request.' });
     } else if (req.method === 'POST') {
       // Handle POST request
       const { name } = req.body; // Assume the body contains JSON data
       res.status(201).json({ message: `User ${name} created.` });
     } else {
       // Handle unsupported methods
       res.setHeader('Allow', ['GET', 'POST']);
       res.status(405).end(`Method ${req.method} Not Allowed`);
     }
   }
   ```

3. Test the endpoint:
   - Send a GET request to `/api/user` → You’ll receive `This is a GET request.`.
   - Send a POST request to `/api/user` with JSON `{ "name": "John" }` → You’ll receive `User John created.`.

### **Key Points:**
- Use `req.method` to handle different HTTP methods.
- Return a `405 Method Not Allowed` status for unsupported methods.

---

## **4. Dynamic API Routes**

Dynamic API routes allow you to use route parameters in your endpoints. These parameters are defined by wrapping the file or folder name in square brackets (`[param]`).

### **Example: Dynamic API Route**

1. Create a file: `pages/api/user/[id].js`.
2. Add the following code:

   ```javascript
   export default function handler(req, res) {
     const { id } = req.query; // Extract the "id" parameter from the URL
     res.status(200).json({ message: `User ID: ${id}` });
   }
   ```

3. Test the endpoint by navigating to:
   - `/api/user/123` → Returns `User ID: 123`.
   - `/api/user/456` → Returns `User ID: 456`.

### **Key Points:**
- Use `req.query` to access dynamic route parameters.
- Dynamic API routes are ideal for resources like user profiles, product details, or blog posts.

---

## **5. Middleware in API Routes**

Middleware can be used to perform tasks like authentication, logging, or input validation before handling a request.

### **Example: Adding Middleware**

1. Create a middleware function:
   ```javascript
   function checkAuth(req, res, next) {
     const { authorization } = req.headers;
   
     if (authorization !== 'Bearer my-secret-token') {
       res.status(401).json({ error: 'Unauthorized' });
       return;
     }
   
     next();
   }
   ```

2. Apply the middleware in an API route:
   ```javascript
   export default function handler(req, res) {
     // Middleware
     checkAuth(req, res, () => {
       // If authenticated, proceed
       res.status(200).json({ message: 'Authenticated request!' });
     });
   }
   ```

3. Test the endpoint:
   - Without the `Authorization` header → Returns `401 Unauthorized`.
   - With `Authorization: Bearer my-secret-token` → Returns `Authenticated request!`.

---

## **6. Error Handling**

Proper error handling ensures your API routes return meaningful error messages and appropriate HTTP status codes.

### **Example: Error Handling**

```javascript
export default function handler(req, res) {
  try {
    // Simulate an error
    if (!req.query.id) {
      throw new Error('No ID provided');
    }

    res.status(200).json({ id: req.query.id });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
```

### **Key Points:**
- Use `try...catch` blocks to handle errors gracefully.
- Return appropriate HTTP status codes (e.g., `400 Bad Request`, `500 Internal Server Error`).

---

## **7. Connecting to a Database**

API routes can interact with databases to retrieve or store data.

### **Example: Using a Database**

1. Install a database driver (e.g., `mysql2`, `pg`, or `mongoose` for MongoDB):
   ```bash
   npm install mongoose
   ```

2. Create an API route to fetch data:
   ```javascript
   import mongoose from 'mongoose';
   
   // Connect to the database
   mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
   
   export default async function handler(req, res) {
     const data = await mongoose.model('User', { name: String }).find();
     res.status(200).json(data);
   }
   ```

3. Set up the `MONGO_URI` environment variable with your database connection string.

---

## **8. API Route Best Practices**

1. **Use HTTP Status Codes:**
   - Always return meaningful status codes (e.g., `200 OK`, `400 Bad Request`, `500 Internal Server Error`).

2. **Secure Sensitive Data:**
   - Never expose sensitive data like API keys in your routes.
   - Use environment variables to store secrets.

3. **Validate Input:**
   - Validate incoming data (e.g., using libraries like `joi` or `zod`).

4. **Optimize Performance:**
   - Avoid long-running tasks in API routes (offload them to external services or queues).

5. **Error Logging:**
   - Log errors for debugging, but do not expose sensitive information to the client.

---

## **9. Deploying API Routes**

When deploying your Next.js app, API routes are deployed as **serverless functions**. Platforms like Vercel automatically manage these functions, scaling them based on traffic.

- Each API route becomes its own serverless function.
- Serverless functions are stateless; use external services (e.g., databases, cloud storage) to persist data.

---

## **Summary**

API routes in Next.js provide a simple and integrated way to build backend functionality without the need for a separate server. By creating endpoints inside the `pages/api/` directory, you can handle HTTP requests, interact with databases, and implement authentication or other backend logic. Whether you're building a small app or a large-scale application, mastering API routes allows you to create efficient and scalable server-side features within Next.js.