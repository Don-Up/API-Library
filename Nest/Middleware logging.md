In a **Nest.js** application, middleware can be used to handle cross-cutting concerns like logging, authentication, or request transformations. Below, we’ll create a simple **logging middleware** that logs details about incoming HTTP requests, such as the request method, URL, and the time it takes to process the request.

---

### **Steps to Create Logging Middleware**

1. Generate the middleware file.
2. Implement the middleware logic.
3. Apply the middleware to specific routes or globally.

---

### **Step 1: Generate Middleware**
You can create the middleware manually or use the Nest CLI:
```bash
nest generate middleware logger
```
This will generate a `logger.middleware.ts` file in your project.

---

### **Step 2: Implement the Middleware Logic**

Here’s how to implement the logging middleware:

#### **`src/logger.middleware.ts`**
```typescript
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction): void {
    const { method, url } = req; // Extract method and URL from the request
    const start = Date.now(); // Start the timer

    // Log the request details before passing to the next handler
    console.log(`[Request] ${method} ${url}`);
    
    // Wait for the response to finish
    res.on('finish', () => {
      const duration = Date.now() - start; // Calculate the time taken
      console.log(`[Response] ${method} ${url} - ${res.statusCode} (${duration}ms)`);
    });

    next(); // Pass control to the next middleware or route handler
  }
}
```

---

### **What Does This Middleware Do?**

1. **Extracts Information**:
   - Retrieves the HTTP method (e.g., `GET`, `POST`) and URL of the incoming request using `req.method` and `req.url`.

2. **Logs the Request**:
   - Logs the HTTP method and URL when the request comes in (before it is processed).

3. **Tracks Response Time**:
   - Starts a timer when the request is received.
   - Waits for the response to finish using the `res.on('finish')` event.
   - Logs the response status code and the time taken to process the request.

4. **Passes Control**:
   - Calls the `next()` function to pass control to the next middleware or route handler in the pipeline.

---

### **Step 3: Apply Middleware**

There are two ways to apply middleware in Nest.js: **per route** or **globally**.

#### **1. Apply Middleware to Specific Routes**
You can apply middleware to specific routes in the module's configuration.

#### **`src/app.module.ts`**
```typescript
import { Module, MiddlewareConsumer } from '@nestjs/common';
import { LoggerMiddleware } from './logger.middleware';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [TasksModule],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('*'); // Apply middleware to all routes
  }
}
```

#### Options for `forRoutes()`:
- **Specific routes**: Pass a route or a controller name.
  ```typescript
  consumer.apply(LoggerMiddleware).forRoutes('tasks'); // Only for '/tasks' routes
  ```
- **Exclude specific routes**:
  ```typescript
  consumer.apply(LoggerMiddleware).exclude('tasks/:id').forRoutes('*'); // Exclude '/tasks/:id'
  ```

---

#### **2. Apply Middleware Globally**
To apply middleware globally (across all routes), use the `use()` method in the `main.ts` file.

#### **`src/main.ts`**
```typescript
import { LoggerMiddleware } from './logger.middleware';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Apply the LoggerMiddleware globally
  app.use(new LoggerMiddleware().use);

  await app.listen(3000);
}
bootstrap();
```

---

### **Testing the Middleware**

#### **Example Request**
Send a request to any route in your application, e.g., via Postman or using `curl`:
```bash
curl http://localhost:3000/tasks
```

#### **Middleware Logs**

On the server console, you will see logs like this:

```
[Request] GET /tasks
[Response] GET /tasks - 200 (15ms)
```

- **`[Request]`**: Logs the HTTP method and URL of the incoming request.
- **`[Response]`**: Logs the HTTP method, URL, status code, and the duration (in milliseconds) it took to process the request.

---

### **Why Use Middleware for Logging?**

1. **Centralized Logging**:
   - Middleware ensures that logging is consistent across all routes, without having to add logging logic to every controller or service.

2. **Improved Debugging**:
   - Logs help track the flow of requests and responses, making it easier to debug performance issues.

3. **Customizable**:
   - Middleware can be extended to log additional details like headers, body, or user information for authentication.

---

### **Extending the Middleware**

You can enhance the middleware to log more information if needed:

#### **Log Request Headers**
```typescript
console.log(`[Headers]`, JSON.stringify(req.headers));
```

#### **Log Request Body**
```typescript
console.log(`[Body]`, JSON.stringify(req.body));
```

#### **Log User Information (for Authenticated Routes)**
If you are using authentication (e.g., JWT):
```typescript
console.log(`[User]`, req.user);
```

---

### **Complete Code Example**

Here’s the complete logging middleware implementation:

#### **`src/logger.middleware.ts`**
```typescript
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction): void {
    const { method, url } = req;
    const start = Date.now();

    console.log(`[Request] ${method} ${url}`);
    console.log(`[Headers]`, JSON.stringify(req.headers));

    res.on('finish', () => {
      const duration = Date.now() - start;
      console.log(`[Response] ${method} ${url} - ${res.statusCode} (${duration}ms)`);
    });

    next();
  }
}
```

#### **`src/app.module.ts`**
```typescript
import { Module, MiddlewareConsumer } from '@nestjs/common';
import { LoggerMiddleware } from './logger.middleware';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [TasksModule],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('*'); // Apply middleware to all routes
  }
}
```

---

### **Summary**

- Middleware in Nest.js is great for logging requests and responses.
- Using `LoggerMiddleware`, we can log useful information about HTTP requests, responses, headers, and processing times.
- Middleware can be applied per route or globally, making it flexible and reusable.