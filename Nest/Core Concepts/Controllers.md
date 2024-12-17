### **Controllers in Nest.js**

<audio src="C:\Users\10691\Downloads\2024年12月17日18点42分.mp3"></audio>

In **Nest.js**, controllers are responsible for handling **incoming requests** and returning **responses** to the client. They act as the interface between the **application's services (business logic)** and the **outside world** (e.g., HTTP requests, WebSocket events). Controllers are a fundamental part of Nest.js's **MVC (Model-View-Controller)** architecture.

A controller defines **routes** (endpoints) that clients can call. It processes the request, delegates tasks to services, and sends back the appropriate response.

---

### **Key Responsibilities of Controllers**

1. **Route Handling**:
   - Define and handle HTTP routes (e.g., `GET`, `POST`, `PUT`, `DELETE`).

2. **Request Processing**:
   - Accept and process the request payload, query parameters, route parameters, or headers.

3. **Delegation to Services**:
   - Delegate complex business logic to services/providers and focus solely on handling requests and responses.

4. **Response to Client**:
   - Return data (or errors) to the client in the appropriate format (e.g., JSON).

---

### **How Controllers Work**

Controllers in Nest.js are **classes** decorated with the `@Controller()` decorator. Each method in the controller is typically associated with a specific HTTP request method (e.g., `GET`, `POST`, etc.) and a route path.

---

### **Creating a Basic Controller**

#### **Example: Basic Controller**

<audio src="C:\Users\10691\Downloads\2024年12月17日18点47分.mp3"></audio>

```typescript
import { Controller, Get } from '@nestjs/common';

@Controller('users') // Base route: /users
export class UsersController {
  @Get() // Handles GET requests to /users
  findAll(): string {
    return 'This action returns all users';
  }
}
```

In this example:
- The `@Controller()` decorator specifies the base route (`/users`).
- The `@Get()` decorator defines a handler for `GET /users` requests.
- The `findAll()` method handles requests and returns a simple string response.

---

### **Route Handlers**

Route handlers in controllers are methods decorated with **HTTP method decorators**, such as:

- `@Get()`: Handles HTTP GET requests.
- `@Post()`: Handles HTTP POST requests.
- `@Put()`: Handles HTTP PUT requests.
- `@Delete()`: Handles HTTP DELETE requests.
- `@Patch()`: Handles HTTP PATCH requests.
- `@Options()`: Handles HTTP OPTIONS requests.
- `@Head()`: Handles HTTP HEAD requests.

#### **Example: Multiple Routes**

<audio src="C:\Users\10691\Downloads\2024年12月17日18点51分.mp3"></audio>

```typescript
import { Controller, Get, Post, Param, Body, Query } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get() // Handles GET /users
  findAll(): string {
    return 'This action returns all users';
  }

  @Get(':id') // Handles GET /users/:id
  findOne(@Param('id') id: string): string {
    return `This action returns the user with ID: ${id}`;
  }

  @Post() // Handles POST /users
  create(@Body() createUserDto: any): string {
    return `This action creates a new user with data: ${JSON.stringify(createUserDto)}`;
  }

  @Get('search') // Handles GET /users/search?name=John
  search(@Query('name') name: string): string {
    return `Search for users with name: ${name}`;
  }
}
```

---

### **Route Parameters**

You can extract **route parameters**, **query parameters**, or **body data** using decorators.

#### **1. Route Parameters**

Route parameters are specified in the path (e.g., `/users/:id`). Use the `@Param()` decorator to extract them.

<audio src="C:\Users\10691\Downloads\2024年12月17日18点56分.mp3"></audio>

```typescript
@Get(':id') // e.g., GET /users/123
findOne(@Param('id') id: string) {
  return `User ID: ${id}`;
}
```

---

#### **2. Query Parameters**

Query parameters are part of the URL query string (e.g., `/users?name=John`). Use the `@Query()` decorator to extract them.

<audio src="C:\Users\10691\Downloads\2024年12月17日19点02分.mp3"></audio>

```typescript
@Get('search') // e.g., GET /users/search?name=John
search(@Query('name') name: string) {
  return `Search for name: ${name}`;
}
```

---

#### **3. Request Body**

The request body is typically sent with POST or PUT requests. Use the `@Body()` decorator to extract the data.

<audio src="C:\Users\10691\Downloads\2024年12月17日19点04分.mp3"></audio>

```typescript
@Post()
create(@Body() createUserDto: any) {
  return `User created with data: ${JSON.stringify(createUserDto)}`;
}
```

---

#### **4. Headers**

You can access custom headers using the `@Headers()` decorator.

<audio src="C:\Users\10691\Downloads\2024年12月17日19点07分.mp3"></audio>

```typescript
@Get()
getWithHeaders(@Headers('custom-header') customHeader: string) {
  return `Custom header value: ${customHeader}`;
}
```

---

### **Injecting Services into Controllers**

Controllers should not implement business logic directly. Instead, they should delegate tasks to **services**.

<audio src="C:\Users\10691\Downloads\2024年12月17日19点11分.mp3"></audio>

#### **Example: Using a Service in a Controller**

**Step 1: Create a Service**

```typescript
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  findAll(): string[] {
    return ['User 1', 'User 2', 'User 3'];
  }

  findOne(id: string): string {
    return `User with ID: ${id}`;
  }
}
```

**Step 2: Inject the Service into the Controller**

```typescript
import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  // private readonly 实现自动注入
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }
}
```

- The `UsersController` uses **Dependency Injection (DI)** to inject the `UsersService`.
- The service handles the logic, and the controller focuses on route handling and response.

---

### **Grouping Routes**

You can group related routes under a single controller by specifying a **base route** in the `@Controller()` decorator.

#### **Example: Grouping Routes**

```typescript
@Controller('products') // Base route: /products
export class ProductsController {
  @Get()
  findAll() {
    return 'This action returns all products';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns the product with ID: ${id}`;
  }
}
```

The above controller handles endpoints such as:
- `GET /products`
- `GET /products/:id`

---

### **Decorators for Handling Requests**

Nest.js provides several decorators to handle incoming requests:

| **Decorator** | **Purpose**                                                  |
| ------------- | ------------------------------------------------------------ |
| `@Body()`     | Extracts the body of the request.                            |
| `@Param()`    | Extracts route parameters.                                   |
| `@Query()`    | Extracts query string parameters.                            |
| `@Headers()`  | Extracts headers from the request.                           |
| `@Req()`      | Provides the entire request object (from Express/Fastify).   |
| `@Res()`      | Provides the entire response object (used less often, as it breaks Nest's response handling). |

#### **Example: Combining Decorators**

> 什么是装饰器？
>
> <audio src="C:\Users\10691\Downloads\装饰器是一个用于声明式编程的功.mp3"></audio>
>
> 代码分析
>
> <audio src="C:\Users\10691\Downloads\控制器装饰器. @Contro.mp3"></audio>

```typescript
import { Controller, Get, Post, Param, Query, Body, Headers } from '@nestjs/common';

@Controller('example')
export class ExampleController {
  @Get(':id')
  getExample(
    @Param('id') id: string,
    @Query('filter') filter: string,
    @Headers('custom-header') customHeader: string,
  ) {
    return {
      id,
      filter,
      customHeader,
    };
  }

  @Post()
  createExample(@Body() createDto: any) {
    return {
      message: 'Example created!',
      data: createDto,
    };
  }
}
```

---

### **Status Codes and Responses**

By default, Nest.js returns an HTTP 200 status code for successful responses. You can customize this using the `@HttpCode()` or `@Res()` decorator.

#### **Customizing Status Codes**

<audio src="C:\Users\10691\Downloads\NestJS 默认根据 HTT.mp3"></audio>

```typescript
import { Controller, Post, HttpCode } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Post()
  @HttpCode(201) // Custom status code
  createUser() {
    return 'User created successfully!';
  }
}
```

---

### **Using Response Objects**

You can access the raw response object using the `@Res()` decorator, but it is discouraged because it bypasses Nest.js's built-in response handling.

#### **Example: Using `@Res()`**

<audio src="C:\Users\10691\Downloads\@Res() 是 NestJS.mp3"></audio>

<audio src="C:\Users\10691\Downloads\注意事项. 1, 失去内置功能.mp3"></audio>

```typescript
import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('custom')
export class CustomController {
  @Get()
  customResponse(@Res() res: Response) {
    res.status(201).send('Custom response!');
  }
}
```

---

### **Global Controllers**

Controllers can be registered globally by including them in the `AppModule` or any imported feature module.

#### **Example: Registering a Controller in a Module**

<audio src="C:\Users\10691\Downloads\在 NestJS 中，注册控制.mp3"></audio>

<audio src="C:\Users\10691\Downloads\_总结. @Module 装饰.mp3"></audio>

```typescript
import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
```

---

### **Summary**

<audio src="C:\Users\10691\Downloads\- __Controllers.mp3"></audio>

- **Controllers** in Nest.js are responsible for handling **HTTP requests** and delegating business logic to services.
- They use the `@Controller()` decorator to define the base route and **HTTP method decorators** to define route handlers.
- Controllers focus on **handling requests and responses** while delegating complex logic to services/providers.
- Nest.js provides decorators like `@Param()`, `@Body()`, `@Query()`, and `@Headers()` to extract data from requests.
- Controllers are registered in modules, ensuring they are scoped and encapsulated within their respective domains.

By adhering to the principle of **separation of concerns**, controllers remain lightweight, and the application maintains a clean and scalable structure.