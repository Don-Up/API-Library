# Decorators
In **Nest.js**, **decorators** are a fundamental feature that allows you to attach metadata to classes, methods, properties, or parameters. They are a powerful tool for defining the behavior of your application by marking specific elements with additional functionality.

Decorators in Nest.js are based on **TypeScript decorators**, which are part of the ES6 proposal for metadata reflection.

<audio src="../../mp3/2024年12月16日14点26分.mp3"></audio>

---

## **What Are Decorators?**

<audio src="../../mp3/Decorators are .mp3"></audio>

Decorators are special functions that can be applied to various parts of your application to modify or enhance their behavior. In Nest.js, decorators are heavily used for:

1. **Dependency Injection** (e.g., `@Injectable`, `@Inject`).
2. **Routing** (e.g., `@Controller`, `@Get`, `@Post`).
3. **Validation and Transformation** (e.g., `@Body`, `@Param`, `@Query`).
4. **Custom Metadata** (e.g., `@Roles` for role-based access control).

---

## **Types of Decorators in Nest.js**

Nest.js supports several types of decorators. Let’s break them down by category:

---

### **1. Class Decorators**

<audio src="../../mp3/2024年12月16日14点30分.mp3"></audio>

Class decorators are used to mark classes with metadata and define their role in the application.

#### **Examples:**

- **`@Controller`**:
  Used to define a controller in a Nest.js application, which is responsible for handling incoming HTTP requests.

  ```typescript
  import { Controller, Get } from '@nestjs/common';
  
  @Controller('users') // Prefix for all routes in this controller
  export class UsersController {
    @Get()
    getAllUsers() {
      return 'This will return all users';
    }
  }
  ```

- **`@Injectable`**:
  Marks a class as a provider that can be injected into other classes.

  ```typescript
  import { Injectable } from '@nestjs/common';
  
  @Injectable()
  export class UsersService {
    getUsers() {
      return ['John', 'Jane'];
    }
  }
  ```

---

### **2. Method Decorators**

<audio src="../../mp3/2024年12月16日14点32分.mp3"></audio>

Method decorators are used to define metadata and behavior for specific methods in a class.

#### **Examples:**

- **HTTP Route Decorators**:
  These are used in controllers to define HTTP endpoints (e.g., `GET`, `POST`, `PUT`, `DELETE`).

  ```typescript
  import { Controller, Get, Post } from '@nestjs/common';
  
  @Controller('tasks')
  export class TasksController {
    @Get()
    getAllTasks() {
      return 'This will return all tasks';
    }
  
    @Post()
    createTask() {
      return 'This will create a task';
    }
  }
  ```

- **Custom Decorators**:
  You can create your own method decorators to add custom behavior, such as role-based access.

  <audio src="../../mp3/2024年12月16日15点07分.mp3"></audio>
  
  ```typescript
  import { SetMetadata } from '@nestjs/common';
  
  export const Roles = (...roles: string[]) => SetMetadata('roles', roles);
  
  @Roles('admin')
  someProtectedMethod() {
    // Only accessible by admin
  }
  ```

---

### **3. Parameter Decorators**

<audio src="../../mp3/2024年12月16日14点39分.mp3"></audio>

Parameter decorators are used to extract specific values from a request and pass them as arguments to the method handler.

<audio src="../../mp3/2024年12月16日15点03分.mp3"></audio>

#### **Examples:**

- **`@Param`**:
  Extracts a route parameter from the URL.

  ```typescript
  import { Controller, Get, Param } from '@nestjs/common';
  
  @Controller('tasks')
  export class TasksController {
    @Get(':id')
    getTaskById(@Param('id') id: string) {
      return `Task with ID: ${id}`;
    }
  }
  ```

- **`@Body`**:
  Extracts the request body.

  ```typescript
  import { Controller, Post, Body } from '@nestjs/common';
  
  @Controller('tasks')
  export class TasksController {
    @Post()
    createTask(@Body() body: { title: string }) {
      return `Created task with title: ${body.title}`;
    }
  }
  ```

- **`@Query`**:
  Extracts query parameters from the URL.

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

---

### **4. Property Decorators**
Property decorators are used to add metadata to class properties. They are commonly used in **entity definitions** when working with ORMs like TypeORM or Mongoose.

#### **Examples:**

- **TypeORM Example**:
  
  <audio src="../../mp3/2024年12月16日14点57分.mp3"></audio>

  ```typescript
  import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
  
  @Entity()
  export class Task {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    title: string;
  
    @Column({ default: 'OPEN' })
    status: string;
  }
  ```
  
- **Custom Example**:
  Create a custom decorator to log when a property is accessed.

  <audio src="../../mp3/2024年12月16日14点54分.mp3"></audio>
  
  ```typescript
  function LogProperty(target: any, propertyKey: string) {
    let value = target[propertyKey];
  
    const getter = () => {
      console.log(`Getting value of ${propertyKey}: ${value}`);
      return value;
    };
  
    const setter = (newValue: any) => {
      console.log(`Setting value of ${propertyKey} to: ${newValue}`);
      value = newValue;
    };
  
    Object.defineProperty(target, propertyKey, {
      get: getter,
      set: setter,
    });
  }
  
  class Example {
    @LogProperty
    name: string;
  }
  
  const example = new Example();
  example.name = 'Nest.js';
  console.log(example.name);
  ```

---

### **5. Custom Decorators**
Custom decorators allow you to define application-specific functionality.

<audio src="../../mp3/2024年12月16日15点21分.mp3"></audio>

#### **Example: Create a Custom Roles Decorator**
Custom decorators can be used to add metadata that can be accessed in guards or interceptors.

```typescript
import { SetMetadata } from '@nestjs/common';

// Define a custom decorator that sets metadata for roles
export const Roles = (...roles: string[]) => SetMetadata('roles', roles');
```

#### **Usage in a Controller:**
```typescript
import { Controller, Get, UseGuards } from '@nestjs/common';
import { Roles } from './roles.decorator';
import { RolesGuard } from './roles.guard';

@Controller('users')
export class UsersController {
  @Get()
  @Roles('admin') // Custom decorator
  @UseGuards(RolesGuard) // Guard to enforce roles
  getUsers() {
    return ['John', 'Jane'];
  }
}
```

#### **Access Metadata in a Guard:**
```typescript
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!roles) {
      return true; // No roles required
    }
    const request = context.switchToHttp().getRequest();
    const user = request.user;

    // Check if the user's role matches the required roles
    return roles.includes(user.role);
  }
}
```

---

### **6. Lifecycle Event Decorators**
These decorators are used to **hook into** the application lifecycle.

#### **Examples:**

<audio src="../../mp3/2024年12月16日15点15分.mp3"></audio>

- **`@OnModuleInit`**:
  Called when the module is **initialized**.

  ```typescript
  import { Injectable, OnModuleInit } from '@nestjs/common';
  
  @Injectable()
  export class AppService implements OnModuleInit {
    onModuleInit() {
      console.log('Module initialized');
    }
  }
  ```

- **`@OnApplicationShutdown`**:
  Called when the application is **shutting down**.

  ```typescript
  import { Injectable, OnApplicationShutdown } from '@nestjs/common';
  
  @Injectable()
  export class AppService implements OnApplicationShutdown {
    onApplicationShutdown() {
      console.log('Application shutting down');
    }
  }
  ```

---

### **How Nest.js Uses Decorators**

<audio src="../../mp3/2024年12月16日14点42分.mp3"></audio>

1. **Dependency Injection**:
   - `@Injectable`, `@Inject` are used to define and inject services into other components.

2. **Routing**:
   - `@Controller`, `@Get`, `@Post`, `@Param`, `@Body`, etc., are used to define routes and extract request-specific data.

3. **Guards, Interceptors, Pipes**:
   - Custom decorators like `@Roles`, `@UseGuards`, `@UsePipes` allow you to attach guards, pipes, and interceptors to specific routes or methods.

4. **Validation and Transformation**:
   - `@Body`, `@Query`, and `@Param` work with validation pipes to validate and transform incoming data.

---

### **Conclusion**

<audio src="../../mp3/2024年12月16日14点43分.mp3"></audio>

Decorators in Nest.js are essential for defining the behavior of your application in a declarative and concise way. They allow you to:

- Define metadata for classes, methods, and parameters.
- Simplify dependency injection.
- Create reusable and composable behaviors (e.g., custom decorators like `@Roles`).
- Integrate with validation, transformation, and route protection mechanisms.

By mastering decorators, you'll unlock the full power of Nest.js to build scalable and maintainable applications.