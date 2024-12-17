### **Error Handling in Nest.js**

<audio src="C:\Users\10691\Downloads\2024年12月18日01点16分.mp3"></audio>

Error handling is an essential part of any application. In Nest.js, error handling is designed to be both **flexible** and **centralized**, making it easier to manage and respond to errors consistently across your application.

Nest.js provides tools like **exception filters**, the **built-in `HttpException` class**, and hooks for custom error responses and centralized error handling.

---

### **Global Error Handling**

#### **1. Implementing Global Exception Filters**

<audio src="C:\Users\10691\Downloads\Implementing Gl.mp3"></audio>

**Exception Filters** in Nest.js intercept thrown exceptions and transform them into appropriate HTTP responses. Using a global exception filter ensures that all unhandled errors in your application are processed uniformly.

#### **Creating a Custom Global Exception Filter**

**Step 1: Implement the `ExceptionFilter` Interface**

<audio src="C:\Users\10691\Downloads\2024年12月18日01点19分.mp3"></audio>

To create a custom exception filter, implement the `ExceptionFilter` interface and use the `@Catch()` decorator to target specific exceptions (or all exceptions).

<audio src="C:\Users\10691\Downloads\1, 什么是 Exceptio.mp3"></audio>

```typescript
import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { Response } from 'express';

💡@Catch() // Catch all exceptions
export class GlobalExceptionFilter implements ExceptionFilter {
  💡catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    // 💡Handle HttpException (e.g., 404, 400, etc.)
    if (exception instanceof HttpException) {
      const status = exception.getStatus();
      const errorResponse = exception.getResponse();

      response.status(status).json({
        statusCode: status,
        message:
          typeof errorResponse === 'string'
            ? errorResponse
            : (errorResponse as any).message,
        timestamp: new Date().toISOString(),
      });
    } else {
      // 💡Handle non-HttpException errors (e.g., unexpected errors)
      response.status(500).json({
        statusCode: 500,
        message: 'Internal server error',
        timestamp: new Date().toISOString(),
      });
    }
  }
}
```

---

**Step 2: Apply the Exception Filter Globally**

You can register the filter globally either programmatically or with metadata.

##### **Programmatic Registration (Preferred)**

Register the exception filter in the `main.ts` file when bootstrapping the application.

<audio src="C:\Users\10691\Downloads\1, 为什么选择编程方式注册过.mp3"></audio>

```typescript
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { GlobalExceptionFilter } from './filters/global-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Apply the global exception filter
  app.useGlobalFilters(new GlobalExceptionFilter());

  await app.listen(3000);
}
bootstrap();
```

##### **Using Metadata**

If you're using class-based exceptions, you can set the global filter using `@UseFilters()` in the `AppModule`. However, this is less common for global filters.

---

#### **Advantages of Global Exception Filters**

<audio src="C:\Users\10691\Downloads\Advantages of G.mp3"></audio>

1. Centralized error handling: All unhandled errors pass through the filter.
2. Consistent error responses: All errors follow the same format.
3. Flexibility: You can target specific exceptions (e.g., `HttpException`) or handle all exceptions.

---

---

### **2. Using `HttpException` for Custom Error Responses**

<audio src="C:\Users\10691\Downloads\Nest js provide.mp3"></audio>

Nest.js provides the built-in **`HttpException` class**, which allows developers to throw HTTP errors with custom messages and status codes. This is useful for creating custom error responses in services, controllers, or other parts of your application.

#### **Throwing an `HttpException`**

<audio src="C:\Users\10691\Downloads\Throwing an `Ht.mp3"></audio>

To throw a custom HTTP error, use the `HttpException` class. It accepts:
- A **response** (message or object) as the first argument.
- A **status code** as the second argument.

```typescript
import { HttpException, HttpStatus } from '@nestjs/common';

throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
```

#### **Example: Custom Error Response**

<audio src="C:\Users\10691\Downloads\当你需要返回一个自定义的错误响.mp3"></audio>

```typescript
throw new HttpException(
  {
    statusCode: HttpStatus.FORBIDDEN,
    message: 'You are not allowed to access this resource',
    error: 'Forbidden',
  },
  HttpStatus.FORBIDDEN,
);
```

---

#### **Using `HttpException` in Services and Controllers**

You can use `HttpException` in both services and controllers to handle errors gracefully.

<audio src="C:\Users\10691\Downloads\1, 如何在服务中使用 Htt.mp3"></audio>

```typescript
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [{ id: 1, name: 'John Doe' }];

  findOne(id: number) {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      throw new HttpException(
        {
          statusCode: HttpStatus.NOT_FOUND,
          message: `User with ID ${id} not found`,
          error: 'Not Found',
        },
        HttpStatus.NOT_FOUND,
      );
    }
    return user;
  }
}
```

In the controller:

```typescript
import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.usersService.findOne(id);
  }
}
```

If the user is not found, the `HttpException` will be thrown, and the client will receive a structured error response with the appropriate status code.

---

#### **Custom Exceptions**

You can extend the `HttpException` class to create your own custom exceptions.

<audio src="C:\Users\10691\Downloads\在 NestJS 中，您可以创.mp3"></audio>

```typescript
import { HttpException, HttpStatus } from '@nestjs/common';

export class ForbiddenException extends HttpException {
  constructor() {
    super('Forbidden', HttpStatus.FORBIDDEN);
  }
}
```

Use it in your code:

```typescript
throw new ForbiddenException();
```

#### **Advantages of Using `HttpException`**

<audio src="C:\Users\10691\Downloads\Advantages of U.mp3"></audio>

- Provides a standardized way to return HTTP errors.
- Fully integrates with Nest.js's exception handling system.
- Allows custom error messages and structured responses.

---

### **Combining Exception Filters and `HttpException`**

<audio src="C:\Users\10691\Downloads\2024年12月18日01点46分.mp3"></audio>

The combination of **exception filters** and **`HttpException`** provides a robust error handling strategy.

1. **Use `HttpException`**:
   - For throwing errors within your application.
   - To define meaningful error messages and status codes.

2. **Use Global Exception Filters**:
   - To intercept and format error responses before they are sent to the client.
   - To handle unexpected errors (e.g., uncaught exceptions).

---

### **Error Handling Best Practices**

<audio src="C:\Users\10691\Downloads\1. __Centralize.mp3"></audio>

1. **Centralize Error Handling**:
   - Use global exception filters to handle all unhandled errors consistently.

2. **Leverage `HttpException`**:
   - Use `HttpException` for throwing custom HTTP errors with relevant status codes and messages.

3. **Use Custom Exceptions**:
   - Create custom exception classes for common errors in your application (e.g., `NotFoundException`, `ForbiddenException`).

4. **Avoid Leaking Internal Details**:
   - Never expose sensitive information in error responses (e.g., stack traces, database errors).

5. **Log Errors**:
   - Log exceptions for debugging and monitoring purposes (e.g., use `Logger` or external services like Sentry).

6. **Use Validation Pipes**:
   - Combine error handling with validation pipes to handle invalid input gracefully.

---

### **Example: Full Error Handling Implementation**

#### **Global Exception Filter**

<audio src="C:\Users\10691\Downloads\在 NestJS 中，全局异常.mp3"></audio>

```typescript
import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';

💡@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  💡catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    💡if (exception instanceof HttpException) {
      const status = exception.getStatus();
      const errorResponse = exception.getResponse();

      response.status(status).json({
        statusCode: status,
        message: typeof errorResponse === 'string' ? errorResponse : (errorResponse as any).message,
        timestamp: new Date().toISOString(),
      });
    💡} else {
      response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: 'Internal server error',
        timestamp: new Date().toISOString(),
      });
    }
  }
}
```

#### **Custom Exception**

```typescript
import { HttpException, HttpStatus } from '@nestjs/common';

export class ResourceNotFoundException extends HttpException {
  constructor(resource: string) {
    super(
      {
        statusCode: HttpStatus.NOT_FOUND,
        message: `${resource} not found`,
        error: 'Not Found',
      },
      HttpStatus.NOT_FOUND,
    );
  }
}
```

#### **Service and Controller**

```typescript
// users.service.ts
import { Injectable } from '@nestjs/common';
import { ResourceNotFoundException } from './exceptions/resource-not-found.exception';

@Injectable()
export class UsersService {
  private users = [{ id: 1, name: 'John Doe' }];

  findOne(id: number) {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      throw new ResourceNotFoundException('User');
    }
    return user;
  }
}
```

```typescript
// users.controller.ts
import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.usersService.findOne(id);
  }
}
```

---

<audio src="C:\Users\10691\Downloads\With this setup.mp3"></audio>

With this setup:

- Errors thrown by services or controllers are intercepted by the global exception filter.
- Structured error responses are sent to the client.
- The application remains clean, maintainable, and provides a great developer and user experience.