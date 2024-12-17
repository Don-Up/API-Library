### **Guards in Nest.js**

<audio src="..\..\mp3\Guards in __Nes.mp3"></audio>

Guards in **Nest.js** are a feature designed to control access to routes or specific parts of an application. They act as gatekeepers and determine whether a request should proceed to the route handler or be denied. Guards are typically used for **authentication** and **authorization** but can be applied for other purposes like feature flag checks or custom access logic.

---

## **Key Features of Guards**

<audio src="..\..\mp3\1. __Control Ac.mp3"></audio>

1. **Control Access**: Guards can restrict or allow access to certain routes based on custom logic.
2. **Execution Before Request Handling**: Guards are executed after middleware but before route handlers or interceptors.
3. **Boolean Return**: Guards return a boolean (`true` or `false`) or a `Promise<boolean>`. If `false`, the request is denied, and a `403 Forbidden` response is sent.
4. **Reusable and Modular**: Guards can be applied globally, at the controller level, or at the method level.

---

## **How Guards Work in Nest.js**

<audio src="..\..\mp3\Guards implemen.mp3"></audio>

Guards implement the `CanActivate` interface, which has a single method: `canActivate(context: ExecutionContext): boolean | Promise<boolean>`.

- **`ExecutionContext`**: Provides details about the current execution, such as the request object and the type of handler (HTTP, WebSocket, etc.).
- Guards return:
  - `true`: Grants access to the resource.
  - `false`: Denies access, resulting in a `403 Forbidden` response.

---

## **When Guards Are Executed**

<audio src="..\..\mp3\Guards are part.mp3"></audio>

Guards are part of the request lifecycle and are executed **after middleware** but **before interceptors** and the route handler.

### Request Lifecycle in Nest.js:

1. Middleware (if any)
2. Guards
3. Interceptors
4. Pipes
5. Route Handler

---

## **Creating a Guard**

There are two main ways to create a guard:

### **1. Functional Guard**

<audio src="..\..\mp3\在 Nest.js 中，功能型.mp3"></audio>

A functional guard is a simple function that implements the `CanActivate` logic.

#### **Example: Functional Guard**
```typescript
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const token = request.headers['authorization'];

    // Authentication logic (e.g., token validation)
    return token === 'valid-token'; // Allow access if the token matches
  }
}
```

---

### **2. Class-Based Guard**

<audio src="..\..\mp3\在 Nest.js 中，基于类.mp3"></audio>

Class-based guards are more structured and reusable. They are implemented by creating a class that implements the `CanActivate` interface.

#### **Example: Class-Based Guard**
```typescript
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';

@Injectable()
export class RolesGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    
    // Authorization logic (e.g., role-based access)
    return user && user.role === 'admin'; // Allow access if the user is an admin
  }
}
```

---

## **Applying Guards**

Guards can be applied globally, at the controller level, or at the method level.

---

### **1. Applying Guards Globally**

<audio src="..\..\mp3\在 Nest.js 中，全局守.mp3"></audio>

Global guards apply to all routes in the application. You can set a guard globally in the `main.ts` file.

#### **Example: Global Guard**
```typescript
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AuthGuard } from './auth.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalGuards(new AuthGuard()); // Apply guard globally

  await app.listen(3000);
}
bootstrap();
```

---

### **2. Applying Guards to a Controller**

<audio src="..\..\mp3\在 Nest.js 中，可以通.mp3"></audio>

You can apply guards to specific controllers using the `@UseGuards()` decorator.

#### **Example: Controller-Level Guard**
```typescript
import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from './auth.guard';

@Controller('tasks')
@UseGuards(AuthGuard) // Apply guard to all routes in this controller
export class TasksController {
  @Get()
  getAllTasks() {
    return 'This route is protected by AuthGuard';
  }
}
```

---

### **3. Applying Guards to a Method**

<audio src="..\..\mp3\在 Nest.js 中，守卫可.mp3"></audio>

Guards can also be applied to individual methods within a controller.

#### **Example: Method-Level Guard**
```typescript
@Controller('tasks')
export class TasksController {
  @Get()
  getAllTasks() {
    return 'This route is public';
  }

  @Get('protected')
  @UseGuards(AuthGuard) // Apply guard only to this route
  getProtectedTasks() {
    return 'This route is protected by AuthGuard';
  }
}
```

---

## **Custom Metadata with Guards**

<audio src="..\..\mp3\Guards can work.mp3"></audio>

Guards can work with custom metadata defined using decorators. This is useful for implementing **role-based access control (RBAC)** or other custom authorization schemes.

---

### **Step 1: Create a Custom Decorator**

<audio src="..\..\mp3\在 Nest.js 中，自定义.mp3"></audio>

Define a decorator to set metadata:

```typescript
import { SetMetadata } from '@nestjs/common';

export const Roles = (...roles: string[]) => SetMetadata('roles', roles);
```

---

### **Step 2: Access Metadata in Guard**

<audio src="..\..\mp3\在 Nest.js 中，可以通 (1).mp3"></audio>

Use the `Reflector` class to access the custom metadata in your guard.

```typescript
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!roles) {
      return true; // No roles required, allow access
    }

    const request = context.switchToHttp().getRequest();
    const user = request.user;

    // Check if the user's role matches any of the required roles
    return roles.includes(user.role);
  }
}
```

---

### **Step 3: Apply the Custom Decorator**

<audio src="..\..\mp3\在 Nest.js 中，自定义 (1).mp3"></audio>

Use the `@Roles()` decorator to specify roles for specific routes.

```typescript
import { Controller, Get, UseGuards } from '@nestjs/common';
import { Roles } from './roles.decorator';
import { RolesGuard } from './roles.guard';

@Controller('users')
@UseGuards(RolesGuard) // Apply RolesGuard
export class UsersController {
  @Get('admin')
  @Roles('admin') // Only allow users with the 'admin' role
  getAdminUsers() {
    return 'This route is only accessible by admins';
  }

  @Get('user')
  @Roles('user') // Only allow users with the 'user' role
  getNormalUsers() {
    return 'This route is only accessible by normal users';
  }
}
```

---

## **Working with Authentication**

Guards are commonly used for **JWT authentication**. Here's an example of implementing an `AuthGuard` for JWT validation.

---

### **Example: JWT Guard**

#### **JWT Strategy**

<audio src="..\..\mp3\在 Nest.js 中，Jwt.mp3"></audio>

Define a strategy for validating JWT tokens:

```typescript
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'SECRET_KEY', // Replace with your secret key
    });
  }

  async validate(payload: any) {
    return { userId: payload.sub, username: payload.username };
  }
}
```

#### **AuthGuard**

<audio src="..\..\mp3\在 Nest.js 中，Aut.mp3"></audio>

Create a guard that uses the JWT strategy:

```typescript
import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}
```

#### **Applying the JWT Guard**
Use the `JwtAuthGuard` to protect routes:

```typescript
import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('tasks')
export class TasksController {
  @Get()
  @UseGuards(JwtAuthGuard) // Protect this route with JWT Guard
  getProtectedTasks() {
    return 'This route requires a valid JWT token';
  }
}
```

---

## **Where Guards Fit in the Nest.js Lifecycle**

Guards are executed **after middleware** but **before interceptors**, making them ideal for access control tasks.

### **Execution Sequence:**

1. Middleware
2. **Guards**
3. Interceptors
4. Pipes
5. Route Handler

---

## **Summary**

<audio src="..\..\mp3\1. Guards in Ne.mp3"></audio>

1. Guards in Nest.js are used for **authentication**, **authorization**, and **access control**.
2. They implement the `CanActivate` interface and determine whether a request can proceed.
3. Guards can be applied globally, at the controller level, or at the method level.
4. Guards work seamlessly with **custom metadata** (e.g., role-based access).
5. Guards operate after middleware but before route handlers, making them ideal for pre-handler logic.

By mastering guards, you can implement robust security and access control mechanisms in your Nest.js applications.