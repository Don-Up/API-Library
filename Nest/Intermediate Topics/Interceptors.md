### **Interceptors in Nest.js**

<audio src="..\..\mp3\Interceptors in.mp3"></audio>

Interceptors in **Nest.js** are a powerful mechanism for controlling the flow of request/response transformations and logic around route handlers. They are executed **before** and/or **after** the route handler is invoked, allowing you to:

- Transform incoming requests or outgoing responses.
- Add additional logic (e.g., logging, caching, or performance profiling).
- Handle exceptions or modify the behavior of the route handler.

---

## **Key Features of Interceptors**

<audio src="..\..\mp3\1. __Pre- and P.mp3"></audio>

1. **Pre- and Post-Processing**:
   - **Pre-Processing**: Logic before the route handler is invoked.
   - **Post-Processing**: Logic after the route handler has returned a response (or a Promise).
   
2. **Response Transformation**: Modify or transform the response data before sending it back to the client.
   
3. **Exception Handling**: Catch and handle exceptions that occur in the route handler.
   
4. **Cross-Cutting Concerns**: Implement features like caching, logging, or performance profiling.

---

### **When Interceptors Are Executed**

<audio src="..\..\mp3\Interceptors ar.mp3"></audio>

Interceptors are executed **after guards** and **before pipes**. They wrap around the route handler and can modify both the incoming request and the outgoing response.

#### **Execution Order in Nest.js Lifecycle**:
1. Middleware
2. Guards
3. Interceptors (Pre-Processing)
4. Pipes
5. Route Handler
6. Interceptors (Post-Processing)

---

## **Creating an Interceptor**

<audio src="..\..\mp3\Interceptors in (1).mp3"></audio>

Interceptors in Nest.js are implemented as classes that implement the `NestInterceptor` interface. They have a single method, `intercept`, which provides access to the `ExecutionContext` and the `CallHandler`.

### **Interceptor Interface**

<audio src="..\..\mp3\在 Nest.js 中，拦截器.mp3"></audio>

```typescript
import { NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';

export interface NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any>;
}
```

- **`ExecutionContext`**: Provides details about the current request, including the route handler, class, and HTTP request/response objects.
- **`CallHandler`**: Provides access to the route handler and its returned value (or observable).

---

### **Example: Basic Interceptor**

<audio src="..\..\mp3\在 Nest.js 中，拦截器 (1).mp3"></audio>

```typescript
import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('Before the route handler...');
    const now = Date.now();

    return next.handle().pipe(
      tap(() => console.log(`After... ${Date.now() - now}ms`)),
    );
  }
}
```

- **Pre-Processing**: The log `Before the route handler...` is executed before the route handler.
- **Post-Processing**: The log `After...` is executed after the route handler has returned.

---

## **Using Interceptors**

Interceptors can be applied globally, at the controller level, or at the method level using the `@UseInterceptors()` decorator.

---

### **1. Applying Interceptors Globally**

<audio src="..\..\mp3\在 Nest.js 中，全局拦.mp3"></audio>

Global interceptors apply to all routes in the application. You can set a global interceptor in the `main.ts` file.

#### **Example: Global Interceptor**
```typescript
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LoggingInterceptor } from './logging.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalInterceptors(new LoggingInterceptor()); // Apply globally

  await app.listen(3000);
}
bootstrap();
```

---

### **2. Applying Interceptors to a Controller**

<audio src="..\..\mp3\在 Nest.js 中，拦截器 (2).mp3"></audio>

You can apply interceptors to specific controllers.

#### **Example: Controller-Level Interceptor**
```typescript
import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { LoggingInterceptor } from './logging.interceptor';

@Controller('tasks')
@UseInterceptors(LoggingInterceptor) // Apply to all routes in this controller
export class TasksController {
  @Get()
  getAllTasks() {
    return 'Get all tasks';
  }
}
```

---

### **3. Applying Interceptors to a Method**

<audio src="..\..\mp3\在 Nest.js 中，拦截器 (3).mp3"></audio>

Interceptors can also be applied to individual route handlers.

#### **Example: Method-Level Interceptor**
```typescript
@Controller('tasks')
export class TasksController {
  @Get()
  getAllTasks() {
    return 'This route is public';
  }

  @Get('protected')
  @UseInterceptors(LoggingInterceptor) // Apply only to this route
  getProtectedTasks() {
    return 'This route is intercepted';
  }
}
```

---

## **Transforming Responses with Interceptors**

<audio src="..\..\mp3\在 Nest.js 中，拦截器 (4).mp3"></audio>

Interceptors can transform the outgoing response using RxJS operators like `map`.

### **Example: Transforming the Response**
```typescript
import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class TransformInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map(data => ({
        success: true,
        data,
      })),
    );
  }
}
```

- This interceptor wraps the response in a consistent format:
  ```json
  {
    "success": true,
    "data": {}
  }
  ```

---

## **Catching Exceptions with Interceptors**



Interceptors can also catch exceptions thrown by the route handler.

### **Example: Exception Handling**

<audio src="..\..\mp3\在 Nest.js 中，拦截器 (6).mp3"></audio>

```typescript
import { Injectable, NestInterceptor, ExecutionContext, CallHandler, BadRequestException } from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ExceptionInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      catchError(err => {
        console.log('An error occurred:', err.message);
        return throwError(() => new BadRequestException('Custom error message'));
      }),
    );
  }
}
```

- This interceptor catches errors, logs them, and transforms them into a custom error message.

---

## **Combining Multiple Interceptors**

<audio src="..\..\mp3\在 Nest.js 中，可以通 (2).mp3"></audio>

You can apply multiple interceptors to a route handler or controller.

#### **Example: Multiple Interceptors**
```typescript
@Controller('tasks')
@UseInterceptors(LoggingInterceptor, TransformInterceptor)
export class TasksController {
  @Get()
  getAllTasks() {
    return { id: 1, name: 'Task 1' };
  }
}
```

In this case:
- The `LoggingInterceptor` runs first.
- The `TransformInterceptor` transforms the response.

---

## **Custom Use Cases for Interceptors**

### **1. Caching Responses**

<audio src="..\..\mp3\在 Nest.js 中，拦截器 (7).mp3"></audio>

You can use interceptors to implement caching for specific routes.

#### **Example: Caching Interceptor**
```typescript
import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

const cache = new Map<string, any>();

@Injectable()
export class CacheInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const key = request.url;

    if (cache.has(key)) {
      return of(cache.get(key)); // Return cached response
    }

    return next.handle().pipe(
      tap(response => cache.set(key, response)), // Cache the response
    );
  }
}
```

---

### **2. Performance Profiling**

<audio src="..\..\mp3\在 Nest.js 中，拦截器 (8).mp3"></audio>

You can measure the execution time of route handlers using interceptors.

#### **Example: Performance Interceptor**
```typescript
import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class PerformanceInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const start = Date.now();
    return next.handle().pipe(
      tap(() => {
        const duration = Date.now() - start;
        console.log(`Request took ${duration}ms`);
      }),
    );
  }
}
```

---

## **Where Interceptors Fit in the Nest.js Lifecycle**

<audio src="..\..\mp3\Interceptors wr.mp3"></audio>

Interceptors wrap around the route handler and can modify both the incoming request and outgoing response. They work alongside other features like middleware, guards, and pipes.

### **Comparison with Other Features**:

| Feature          | Execution Stage                       | Purpose                                         |
| ---------------- | ------------------------------------- | ----------------------------------------------- |
| **Middleware**   | Before guards and interceptors        | Pre-route logic like logging or authentication. |
| **Guards**       | After middleware, before interceptors | Authorization and access control.               |
| **Interceptors** | Around the route handler              | Request/response transformation, logging, etc.  |
| **Pipes**        | Before the route handler              | Data validation and transformation.             |

---

## **Summary**

<audio src="..\..\mp3\- __Interceptor.mp3"></audio>

- **Interceptors** in Nest.js allow you to perform logic **before** and **after** route handlers.
- Common use cases include **response transformation**, **exception handling**, **caching**, and **performance profiling**.
- Interceptors can be applied globally, at the controller level, or at the route level.
- They wrap the route handler, making them ideal for **cross-cutting concerns**.

By mastering interceptors, you gain fine-grained control over request and response handling, enabling you to implement reusable and powerful features in your Nest.js application.