# Routing

### **Routing in Nest.js**

<audio src="../../mp3/2024年12月16日15点30分.mp3"></audio>

Routing in **Nest.js** refers to the mechanism of **mapping** incoming HTTP **requests** to the appropriate **controllers** and handler methods. It is a core concept in building APIs as it defines how different parts of an application respond to various endpoints and HTTP methods.

Nest.js leverages **decorators** (like `@Controller` and `@Get`) to define routes in a clean and declarative way. It also supports powerful features like route parameters, query parameters, request bodies, middleware, guards, filters, and more.

---

## **Key Concepts in Routing**

### **1. Controllers**
Controllers in Nest.js are responsible for handling incoming requests and returning responses. Each controller is associated with a specific route (or set of routes) using the `@Controller()` decorator.

#### **Example: Basic Controller**

<audio src="../../mp3/2024年12月16日15点40分.mp3"></audio>

```typescript
import { Controller, Get } from '@nestjs/common';

@Controller('users') // Base route for this controller
export class UsersController {
  @Get() // Handles GET /users
  getAllUsers() {
    return 'This will retur     n all users';
  }

  @Get(':id') // Handles GET /users/:id
  getUserById() {
    return 'This will return a single user by ID';
  }
}
```

---

### **2. HTTP Methods**
Nest.js supports all the standard HTTP methods, which are defined using decorators in controllers:

| HTTP Method | Decorator    | Example Use Case                    |
| ----------- | ------------ | ----------------------------------- |
| GET         | `@Get()`     | Retrieve resources                  |
| POST        | `@Post()`    | Create a new resource               |
| PUT         | `@Put()`     | Replace an existing resource        |
| PATCH       | `@Patch()`   | Update part of an existing resource |
| DELETE      | `@Delete()`  | Remove a resource                   |
| OPTIONS     | `@Options()` | Get communication options           |
| HEAD        | `@Head()`    | Retrieve metadata about a resource  |

#### **Example: Using Multiple HTTP Methods**
```typescript
import { Controller, Get, Post, Delete } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
  @Get()
  getAllTasks() {
    return 'Retrieve all tasks';
  }

  @Post()
  createTask() {
    return 'Create a new task';
  }

  @Delete(':id')
  deleteTask() {
    return 'Delete a task by ID';
  }
}
```

---

### **3. Route Parameters**
Route parameters allow you to capture dynamic values from the URL.

#### **Example: Capturing Route Parameters**
```typescript
import { Controller, Get, Param } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
  @Get(':id') // Define a dynamic route parameter `id`
  getTaskById(@Param('id') id: string) {
    return `Task with ID: ${id}`;
  }
}
```

- The `@Param()` decorator is used to extract the route parameter.
- You can also extract multiple parameters by passing an object:
  ```typescript
  @Get(':id/:status')
  getTaskInfo(@Param() params: { id: string; status: string }) {
    return `Task ${params.id} is ${params.status}`;
  }
  ```

---

### **4. Query Parameters**
Query parameters are used to pass optional data to the server in the format `?key=value`.

#### **Example: Using Query Parameters**
```typescript
import { Controller, Get, Query } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
  @Get()
  getTasks(@Query('status') status: string) {
    return `Tasks with status: ${status}`;
  }
}
```

- Use the `@Query()` decorator to extract query parameters.
- To extract multiple query parameters:
  ```typescript
  @Get()
  getTasks(@Query() query: { status: string; priority: string }) {
    return `Tasks with status: ${query.status} and priority: ${query.priority}`;
  }
  ```

---

### **5. Request Body**
To handle incoming request bodies (e.g., for `POST` or `PUT` requests), use the `@Body()` decorator.

#### **Example: Handling Request Body**
```typescript
import { Controller, Post, Body } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
  @Post()
  createTask(@Body() body: { title: string; description: string }) {
    return `Task created with title: ${body.title}`;
  }
}
```

- The `@Body()` decorator extracts the incoming request body.
- You can use DTOs (Data Transfer Objects) for better structure and validation.

---

### **6. Nested Routes**
Nest.js allows nested routes by creating sub-controllers or using hierarchical routing.

#### **Example: Sub-Controllers**
```typescript
import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getAllUsers() {
    return 'List of users';
  }
}

@Controller('users/:userId/tasks')
export class UserTasksController {
  @Get()
  getUserTasks() {
    return 'Tasks for a specific user';
  }
}
```

- You can nest controllers to create hierarchical routes (e.g., `/users/:userId/tasks`).

---

### **7. Route Prefixing**
You can use the `@Controller()` decorator to define a base route for a controller. This base route acts as a prefix for all the methods in the controller.

#### **Example: Route Prefixing**
```typescript
@Controller('tasks')
export class TasksController {
  @Get()
  getAllTasks() {
    return 'Get all tasks'; // Route: /tasks
  }

  @Get(':id')
  getTaskById() {
    return 'Get a task by ID'; // Route: /tasks/:id
  }
}
```

---

### **8. Global Prefix**
You can define a global prefix for all routes in your application (e.g., `/api`).

#### **Example: Setting a Global Prefix**
In `main.ts`:
```typescript
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api'); // Sets the global prefix
  await app.listen(3000);
}
bootstrap();
```

- With the global prefix, all routes will now start with `/api` (e.g., `/api/tasks`).

---

### **9. Middleware in Routing**
Middleware can be applied to routes to perform operations like logging, authentication, etc.

#### **Example: Applying Middleware**

<audio src="../../mp3/2024年12月16日16点04分.mp3"></audio>

In `app.module.ts`:
```typescript
import { MiddlewareConsumer, Module } from '@nestjs/common';
import { LoggerMiddleware } from './logger.middleware';
import { TasksController } from './tasks.controller';

@Module({
  controllers: [TasksController],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(TasksController);
  }
}
```

---

### **10. Guards for Route Protection**
Guards can be used to restrict access to certain routes based on user roles, authentication status, etc.

#### **Example: Route Protection with Guards**

<audio src="../../mp3/2024年12月16日16点12分.mp3"></audio>

```typescript
import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('tasks')
export class TasksController {
  @Get()
  @UseGuards(AuthGuard('jwt')) // Protect this route with JWT authentication
  getAllTasks() {
    return 'Protected route: Get all tasks';
  }
}
```

---

### **11. Route Versioning**
Nest.js supports **API versioning** to manage multiple versions of your API.

#### **Example: Versioning with URI**

> ##### 什么是路由版本控制？
>
> <audio src="../../mp3/2024年12月16日16点18分.mp3"></audio>

```typescript
import { Controller, Get } from '@nestjs/common';

@Controller({ path: 'tasks', version: '1' })
export class TasksControllerV1 {
  @Get()
  getTasks() {
    return 'Tasks from version 1';
  }
}

@Controller({ path: 'tasks', version: '2' })
export class TasksControllerV2 {
  @Get()
  getTasks() {
    return 'Tasks from version 2';
  }
}
```

In `main.ts`:
```typescript
app.enableVersioning();
```

---

### **12. Redirect Routes**
You can redirect a route to another using the `@Redirect()` decorator.

#### **Example: Redirect Route**
```typescript
import { Controller, Get, Redirect } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Redirect('https://nestjs.com', 301) // Redirect to the Nest.js homepage
  redirectToDocs() {}
}
```

---

## **Example: Full Routing Implementation**

```typescript
import { Controller, Get, Post, Body, Param, Query, Delete } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
  @Get()
  getTasks(@Query('status') status: string) {
    return `Get tasks with status: ${status}`;
  }

  @Get(':id')
  getTaskById(@Param('id') id: string) {
    return `Task with ID: ${id}`;
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

### **Summary**

- **Routing in Nest.js** uses decorators like `@Controller`, `@Get`, `@Post`, etc., to define routes in a clean, declarative way.
- Features like **route parameters**, **query parameters**, **request bodies**, and **middleware** make routing flexible.
- Advanced features like **guards**, **versioning**, and **global prefixes** make it powerful and extensible.
- By following these principles, you can build scalable and well-organized APIs effortlessly.