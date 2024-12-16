### **Middleware in Nest.js**

<audio src="..\..\mp3\2024年12月16日19点40分.mp3"></audio>

Middleware in **Nest.js** is a function that is executed *before* the route handler. It acts as an intermediate layer between the incoming request and the route handler, allowing you to modify request/response objects, perform logging, authentication, validation, or other cross-cutting concerns.

Nest.js middleware is inspired by Express.js middleware and integrates seamlessly with the framework's modular architecture.

---

## **Key Characteristics of Middleware**

<audio src="..\..\mp3\2024年12月16日19点42分.mp3"></audio>

- **Execution Before Route Handlers**: Middleware is executed before the route handler or controller logic.
- **Request/Response Manipulation**: Middleware can modify the incoming `Request` object and the outgoing `Response` object.
- **Chaining**: Middleware can pass control to the next middleware in the pipeline using the `next()` function.
- **Scoped or Global**: Middleware can be applied globally to all routes or scoped to specific routes/controllers.

---

## **Types of Middleware in Nest.js**

<audio src="..\..\mp3\2024年12月16日19点45分.mp3"></audio>

1. **Application Middleware**: Middleware that applies to the entire application or specific modules.
2. **Functional Middleware**: Plain middleware functions that follow the `(req, res, next)` signature.
3. **Class-Based Middleware**: Middleware implemented as a class with a `use()` method.

---

## **How to Use Middleware**

### **1. Functional Middleware**

<audio src="..\..\mp3\在 Nest.js 中，Fun.mp3"></audio>

Functional middleware is a simple function that takes three arguments: `req`, `res`, and `next`.

#### **Example: Functional Middleware**
```typescript
import { Request, Response, NextFunction } from 'express';

export function LoggerMiddleware(req: Request, res: Response, next: NextFunction) {
  console.log(`[Request] ${req.method} ${req.url}`);
  next(); // Pass control to the next middleware or route handler
}
```

---

### **2. Class-Based Middleware**

<audio src="..\..\mp3\在 Nest.js 中，Cla.mp3"></audio>

Class-based middleware is more structured and is implemented by creating a class that implements the `NestMiddleware` interface.

#### **Example: Class-Based Middleware**
```typescript
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(`[Request] ${req.method} ${req.url}`);
    next(); // Pass control to the next middleware or route handler
  }
}
```

---

## **Applying Middleware**

Nest.js provides multiple ways to apply middleware in your application.

---

### **1. Applying Middleware to Specific Routes**

<audio src="..\..\mp3\2024年12月16日19点57分.mp3"></audio>

You can apply middleware to specific routes using the `configure()` method in a module.

#### **Example: Applying Middleware to Specific Routes**
```typescript
import { MiddlewareConsumer, Module } from '@nestjs/common';
import { LoggerMiddleware } from './logger.middleware';
import { TasksController } from './tasks.controller';

@Module({
  controllers: [TasksController],
})
export class TasksModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware) // Apply the middleware
      .forRoutes('tasks'); // Specify the route
  }
}
```

- **`forRoutes()`**: Specifies the routes or controllers where the middleware should be applied.
- **`exclude()`**: Excludes specific routes from the middleware.

#### **Advanced Example: Excluding Routes**
```typescript
consumer
  .apply(LoggerMiddleware)
  .exclude('tasks/:id') // Exclude specific route
  .forRoutes('tasks');
```

---

### **2. Applying Middleware Globally**

<audio src="..\..\mp3\在 Nest.js 中，全局中.mp3"></audio>

Global middleware applies to all routes in the application. You can define global middleware in the `main.ts` file.

#### **Example: Global Middleware**
```typescript
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LoggerMiddleware } from './logger.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(LoggerMiddleware); // Apply middleware globally

  await app.listen(3000);
}
bootstrap();
```

---

### **3. Middleware for Specific Modules**

<audio src="..\..\mp3\2024年12月16日20点03分.mp3"></audio>

You can scope middleware to specific modules by applying it in the `configure()` method of the module.

#### **Example: Middleware Scoped to a Module**
```typescript
import { MiddlewareConsumer, Module } from '@nestjs/common';
import { LoggerMiddleware } from './logger.middleware';
import { UsersController } from './users.controller';

@Module({
  controllers: [UsersController],
})
export class UsersModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(UsersController);
  }
}
```

Here, the `LoggerMiddleware` is only applied to the `UsersController`.

---

## **Middleware Use Cases**

<audio src="..\..\mp3\2024年12月16日20点04分.mp3"></audio>

Middleware is commonly used for:

1. **Logging**: Logging each incoming request.
2. **Authentication and Authorization**: Verifying tokens or user sessions.
3. **Input Validation**: Checking the validity of incoming data before it reaches the controller.
4. **Performance Metrics**: Measuring request/response times.
5. **Error Handling**: Catching and handling errors before they reach the controller.

---

## **Advanced Features**

### **1. Combining Multiple Middleware**
You can apply multiple middleware in sequence to the same routes.

#### **Example: Multiple Middleware**
```typescript
consumer
  .apply(LoggerMiddleware, AnotherMiddleware)
  .forRoutes('tasks');
```

---

### **2. Middleware with Parameters**
You can create middleware that accepts parameters by returning a closure.

#### **Example: Middleware with Parameters**
```typescript
export function LoggerMiddlewareWithParams(options: { logLevel: string }) {
  return (req: Request, res: Response, next: NextFunction) => {
    console.log(`[${options.logLevel}] ${req.method} ${req.url}`);
    next();
  };
}
```

Apply it like this:
```typescript
consumer
  .apply(LoggerMiddlewareWithParams({ logLevel: 'DEBUG' }))
  .forRoutes('tasks');
```

---

### **3. Middleware Order**
The order in which middleware is applied matters. Middleware is executed in the order it is defined in the `configure()` method.

---

### **4. Combining Middleware with Guards and Interceptors**
Middleware works alongside **guards** and **interceptors** but executes at different stages:

- **Middleware**: Executes *before* guards and interceptors.
- **Guards**: Executes *after middleware* to check access control.
- **Interceptors**: Executes *after guards* to transform the response or handle exceptions.

#### **Order of Execution:**
1. Middleware
2. Guards
3. Interceptors
4. Route Handler

---

## **Complete Example**

Below is an example of implementing middleware for logging and applying it to a specific route.

#### **Logger Middleware**
```typescript
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const start = Date.now();
    console.log(`[Request] ${req.method} ${req.url}`);
    
    res.on('finish', () => {
      const duration = Date.now() - start;
      console.log(`[Response] ${req.method} ${req.url} - ${res.statusCode} (${duration}ms)`);
    });

    next();
  }
}
```

#### **Tasks Module**
```typescript
import { MiddlewareConsumer, Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { LoggerMiddleware } from './logger.middleware';

@Module({
  controllers: [TasksController],
})
export class TasksModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('tasks');
  }
}
```

#### **Tasks Controller**
```typescript
import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
  @Get()
  getAllTasks() {
    return 'Get all tasks';
  }

  @Post()
  createTask(@Body() body: { title: string; description: string }) {
    return `Task created with title: ${body.title}`;
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string) {
    return `Task with ID ${id} deleted`;
  }
}
```

---

## **Summary**

<audio src="..\..\mp3\2024年12月16日20点13分.mp3"></audio>

- Middleware in Nest.js operates at the **request-response cycle** level and is executed *before* route handlers.
- It can be **functional** (simple functions) or **class-based** (structured with the `NestMiddleware` interface).
- Middleware is applied globally, to specific routes, or scoped to modules.
- Middleware is a versatile tool for handling tasks like **logging**, **authentication**, **validation**, and more.

By understanding how middleware fits into the Nest.js lifecycle, you can build powerful and reusable middleware to handle cross-cutting concerns in your application.