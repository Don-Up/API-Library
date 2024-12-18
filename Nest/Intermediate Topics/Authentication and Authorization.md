### **Authentication and Authorization in Nest.js**

<audio src="../../../../../Downloads/Authentication .mp3"></audio>

Authentication and authorization are critical components in securing an application. Nest.js provides built-in support for **authentication** and **authorization** through the `@nestjs/passport` package and **Guards**. This allows developers to implement strategies like **JWT-based authentication**, **role-based access control (RBAC)**, and **permission-based access control (PBAC)** efficiently.

---

### **Key Concepts**

<audio src="../../../../../Downloads/1. __Authentica.mp3"></audio>

1. **Authentication**: Verifies the identity of a user (e.g., login with credentials or tokens).
2. **Authorization**: Determines what actions a user is permitted to perform (e.g., based on roles or permissions).
3. **JWT (JSON Web Token)**: A stateless token standard used for securely transmitting information between parties.

---

### **1. Implementing JWT-Based Authentication with `passport-jwt`**

#### **Step 1: Install Required Packages**

Install the necessary packages for JWT authentication:

```bash
npm install @nestjs/passport passport passport-jwt @nestjs/jwt
npm install --save-dev @types/passport-jwt
```

---

#### **Step 2: Configure the `JwtModule`**

The `JwtModule` provides tools for generating and verifying JWT tokens. Configure it in your module.

##### 功能概述

<audio src="../../../../../Downloads/在 NestJS 中，JwtM.mp3"></audio>

##### 代码工作流程

<audio src="../../../../../Downloads/1, 导入模块. JwtMod.mp3"></audio>

##### 如何在认证中使用 JWT

<audio src="../../../../../Downloads/生成JWT：JwtModule.mp3"></audio>

##### 总结

<audio src="../../../../../Downloads/通过配置 JwtModule，.mp3"></audio>

```typescript
import { Module } from '@nestjs/common';
import { 💡(1.1)JwtModule } from '@nestjs/jwt';
import { 💡(1.2)PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    PassportModule,
    💡(2)JwtModule.register({
      secret: 'yourSecretKey', // Replace with a strong secret in production
      signOptions: { expiresIn: '1h' }, // Token expiration time
    }),
  ],
  💡(3.1)providers: [AuthService, JwtStrategy],
  💡(3.2)controllers: [AuthController],
})
export class 💡(3)AuthModule {}
```

---

#### **Step 3: Create the Authentication Service**

This service handles user validation and token generation.

##### 功能概述

<audio src="../../../../../Downloads/AuthService 是我们.mp3"></audio>

##### 代码工作流程

<audio src="../../../../../Downloads/1, 依赖注入. 我们通过构造.mp3"></audio>

##### 工作流程总结

<audio src="../../../../../Downloads/1, 用户通过发送 usern.mp3"></audio>

```typescript
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  💡(1)
  constructor(private readonly jwtService: JwtService) {}
  
  💡(2) 
  // Validate a user (replace with your actual user validation logic)
  async validateUser(username: string, password: string): Promise<any> {
    const user = { username, id: 1 }; // Simulated user for demonstration
    if (username === 'test' && password === 'password') {
      return user;
    }
    return null;
  }
  
  💡(3) 
  // Generate a JWT for the authenticated user
  async login(user: any) {
    const payload = { username: user.username, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
```

---

#### **Step 4: Create the JWT Strategy**

The `JwtStrategy` is used to validate incoming tokens on protected routes.

##### 功能概述

<audio src="../../../../../Downloads/JwtStrategy 是使用.mp3"></audio>

##### 代码工作流程

<audio src="../../../../../Downloads/1, 继承 PassportS.mp3"></audio>

##### 工作流程总结

<audio src="../../../../../Downloads/1,  请求通过 JwtStr.mp3"></audio>

##### 总结(提取→验证→附加)

<audio src="../../../../../Downloads/JwtStrategy 的主要.mp3"></audio>

```typescript
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) { 💡(1)
  constructor() { 💡(2)
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'yourSecretKey', // Must match the secret used in JwtModule
    });
  }

  // Validate(确认...有效) the payload and attach it to the request object
  async validate(payload: any) { 💡(3)
    return { userId: payload.sub, username: payload.username };
  }
}
```

---

#### **Step 5: Create the Authentication Controller**

The controller handles login requests and serves the JWT to authenticated users.

##### 功能概述

<audio src="../../../../../Downloads/AuthController .mp3"></audio>

##### 代码工作流程

<audio src="../../../../../Downloads/1, 控制器装饰器 (@Con.mp3"></audio>

##### 工作流程总结

<audio src="../../../../../Downloads/1, 客户端向 _auth_l.mp3"></audio>

```typescript
import { Controller, Post, Body, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() body: any) {
    const { username, password } = body;
    const user = await this.authService.validateUser(username, password);
    if (!user) {
      throw new Error('Invalid credentials'); // Replace with HttpException for better error handling
    }
    return this.authService.login(user);
  }
}
```

---

#### **Step 6: Protect Routes with Guards**

Use the `@UseGuards()` decorator with the `AuthGuard` to protect routes.

##### 功能概述

<audio src="../../../../../Downloads/在 NestJS 中，守卫 (.mp3"></audio>

##### 代码工作流程

<audio src="../../../../../Downloads/1, 控制器装饰器 (@Con (1).mp3"></audio>

##### 工作流程总结

<audio src="../../../../../Downloads/1,  用户尝试访问 _pro.mp3"></audio>

```typescript
import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('protected') 💡(1)
export class ProtectedController {
  @UseGuards(JwtAuthGuard) 💡(2)
  @Get()
  getProtectedData() { 💡(3)
    return { message: 'This is protected data' };
  }
}
```

**Create a Guard for JWT Authentication**:

##### 功能概述

<audio src="../../../../../Downloads/JwtAuthGuard 是一.mp3"></audio>

##### 代码解析

<audio src="../../../../../Downloads/1, 守卫类 (JwtAuth.mp3"></audio>

##### 工作流程(守卫启动→验证令牌)

<audio src="../../../../../Downloads/1, 守卫启动. 当请求到达一.mp3"></audio>

##### 总结

<audio src="../../../../../Downloads/JwtAuthGuard 是一 (1).mp3"></audio>

```typescript
import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}
```

---

### **2. Using `Passport` Strategies for Login and User Sessions**

<audio src="../../../../../Downloads/Nest js support.mp3"></audio>

Nest.js supports **Passport.js**, a popular library for implementing authentication strategies. In addition to JWT, you can use strategies like **Local**, **OAuth**, or **Sessions**.

#### **Example: Local Authentication Strategy**

<audio src="../../../../../Downloads/1, LocalStrateg.mp3"></audio>

**Step 1: Create the `LocalStrategy`**

<audio src="../../../../../Downloads/LocalStrategy 是.mp3"></audio>

```typescript
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    const user = await this.authService.validateUser(username, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
```

**Step 2: Create a Guard for Local Strategy**

<audio src="../../../../../Downloads/LocalAuthGuard .mp3"></audio>

```typescript
import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {}
```

**Step 3: Use the Guard in the Controller**

<audio src="../../../../../Downloads/AuthController  (1).mp3"></audio>

```typescript
import { Controller, Post, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
```

---

### **3. Role-Based and Permission-Based Access Control with Guards**

Nest.js uses **Guards** to implement authorization logic. Guards are used to restrict access to routes or resources based on roles or permissions.

#### **Role-Based Access Control (RBAC)**

<audio src="../../../../../Downloads/1, RolesGuard 用.mp3"></audio>

**Step 1: Create a `RolesGuard`**

<audio src="../../../../../Downloads/创建 RolesGuard. .mp3"></audio>

```typescript
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!roles) {
      return true; // No roles required, allow access
    }
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    return roles.includes(user.role); // Check if user has the required role
  }
}
```

**Step 2: Create a `@Roles` Decorator**

<audio src="../../../../../Downloads/@Roles 装饰器用于指定控.mp3"></audio>

```typescript
import { SetMetadata } from '@nestjs/common';

export const Roles = (...roles: string[]) => SetMetadata('roles', roles);
```

**Step 3: Use the Guard and Decorator**

<audio src="../../../../../Downloads/AdminController.mp3"></audio>

```typescript
import { Controller, Get, UseGuards } from '@nestjs/common';
import { Roles } from './roles.decorator';
import { RolesGuard } from './roles.guard';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('admin')
@UseGuards(JwtAuthGuard, RolesGuard)
export class AdminController {
  @Roles('admin') // Only users with the "admin" role can access this route
  @Get()
  getAdminData() {
    return { message: 'Admin data' };
  }
}
```

---

#### **Permission-Based Access Control (PBAC)**

<audio src="../../../../../Downloads/Permissions can.mp3"></audio>

Permissions can be implemented similarly to roles, using custom decorators and guards. Instead of roles, you would define and check for specific permissions.

<audio src="../../../../../Downloads/1, PermissionsG.mp3"></audio>

**Example: Permission Guard**

<audio src="../../../../../Downloads/权限守卫. Permissio.mp3"></audio>

```typescript
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class PermissionsGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const permissions = this.reflector.get<string[]>('permissions', context.getHandler());
    if (!permissions) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    return permissions.every((permission) => user.permissions.includes(permission));
  }
}
```

**Permission Decorator**:

<audio src="../../../../../Downloads/@Permissions 装饰.mp3"></audio>

```typescript
import { SetMetadata } from '@nestjs/common';

export const Permissions = (...permissions: string[]) =>
  SetMetadata('permissions', permissions);
```

**Usage**:

<audio src="../../../../../Downloads/在控制器中使用 Permiss.mp3"></audio>

```typescript
import { Controller, Get, UseGuards } from '@nestjs/common';
import { Permissions } from './permissions.decorator';
import { PermissionsGuard } from './permissions.guard';

@Controller('resources')
@UseGuards(PermissionsGuard)
export class ResourcesController {
  @Permissions('read:resources') // Only users with the "read:resources" permission can access
  @Get()
  getResources() {
    return { message: 'Resources data' };
  }
}
```

---

### **Best Practices**

<audio src="../../../../../Downloads/1. __Use JWT fo.mp3"></audio>

1. **Use JWT for Stateless Authentication**:
   - Avoid session-based storage for scalability.
   - Use access and refresh tokens for better security.

2. **Secure Your Secrets**:
   - Store JWT secrets in environment variables.
   - Use strong keys for signing JWTs.

3. **Combine Guards**:
   - Use multiple guards (e.g., `JwtAuthGuard` + `RolesGuard`) for layered security.

4. **Use Decorators for Reusability**:
   - Use custom decorators like `@Roles` or `@Permissions` for cleaner code.

5. **Validate Input**:
   - Use validation pipes to validate login credentials and **protect against**(使免受/防御) injection attacks.

6. **Use Refresh Tokens**:
   - Implement refresh tokens for long-lived sessions without compromising security.

---

With these tools and practices, you can implement a secure and flexible authentication and authorization system in your Nest.js application.