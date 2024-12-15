To demonstrate the use of **Guards** with `CanActivate` for **JWT authentication**, we will extend your existing Nest.js project. Guards in Nest.js are used to determine whether or not a user is allowed to access a particular route. In this example, we'll create a guard that validates a **JWT (JSON Web Token)** to protect specific routes.

---

### **Steps to Implement JWT Authentication with Guards**

1. Install the required packages for JWT authentication.
2. Create an `AuthGuard` using `CanActivate` to validate JWTs.
3. Protect specific routes using the `AuthGuard`.
4. Test the implementation.

---

### **Step 1: Install Required Packages**

Install the following packages for JWT authentication:

```bash
npm install @nestjs/jwt @nestjs/passport passport passport-jwt
npm install --save-dev @types/passport-jwt
```

---

### **Step 2: Create an Auth Module**

Generate a new `auth` module to handle authentication:

```bash
nest generate module auth
nest generate service auth
nest generate guard auth
```

> As I said before, a module can be compared to a company, whereas a service is an employee of the company, and a guard is a security guard that prevents unqualified outsiders from accessing a particular employee.

This will create the following files:

- `src/auth/auth.module.ts`
- `src/auth/auth.service.ts`
- `src/auth/auth.guard.ts`

---

### **Step 3: Configure JWT Authentication**

#### **1. Define JWT Strategy**

The JWT strategy will **verify the token** in incoming requests.

#### **`src/auth/jwt.strategy.ts`**

[Explain in detail](code/jwt.strategy.md)

```typescript
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      // Extract token from Authorization header
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), 
      ignoreExpiration: false, // Reject expired tokens
      secretOrKey: 'SECRET_KEY', // Secret key to validate the token
    });
  }

  async validate(payload: any) {
    // Return the payload data (e.g., user ID, email, roles)
    return { userId: payload.sub, username: payload.username };
  }
}
```

---

#### **2. Update Auth Module**

Include the `JwtModule` and register the `JwtStrategy` in the `auth.module.ts`.

#### **`src/auth/auth.module.ts`**
```typescript
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: 'SECRET_KEY', // Secret key for signing tokens
      signOptions: { expiresIn: '1h' }, // Token expiration time
    }),
  ],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
```

---

#### **3. Add AuthService to Generate Tokens**

Create a service to generate JWT tokens for authenticated users.

#### **`src/auth/auth.service.ts`**
```typescript
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  // Mock user authentication logic
  validateUser(username: string, password: string): any {
    // In a real app, you'd query the database here
    if (username === 'test' && password === 'password') {
      return { userId: 1, username }; // Return user payload
    }
    return null;
  }

  // Generate a JWT token for the user
  login(user: any) {
    const payload = { username: user.username, sub: user.userId }; // Add user data to the payload
    return {
      access_token: this.jwtService.sign(payload), // Sign and return the token
    };
  }
}
```

---

### **Step 4: Implement the AuthGuard**

The `AuthGuard` will use the **JWT strategy** to validate incoming requests and protect routes.

#### **`src/auth/auth.guard.ts`**
```typescript
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') implements CanActivate {
  constructor(private reflector: Reflector) {
    super();
  }

  canActivate(context: ExecutionContext): boolean | Promise<boolean> {
    // Call the parent guard to validate the request
    return super.canActivate(context);
  }
}
```

---

### **Step 5: Create an AuthController**

The `AuthController` will provide an endpoint to authenticate users and return a JWT token.

#### **`src/auth/auth.controller.ts`**
```typescript
import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() body: { username: string; password: string }) {
    const user = this.authService.validateUser(body.username, body.password);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return this.authService.login(user);
  }
}
```

---

### **Step 6: Protect Routes**

Use the `JwtAuthGuard` to protect specific routes in your application.

#### **Modify the TasksController**

Update the `TasksController` to use the `JwtAuthGuard`.

#### **`src/tasks/tasks.controller.ts`**
```typescript
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
  UseGuards,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task, TaskStatus } from './task.model';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskStatusDto } from './dto/update-task-status.dto';
import { JwtAuthGuard } from '../auth/auth.guard';

@Controller('tasks')
@UseGuards(JwtAuthGuard) // Protect all routes in this controller
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  getAllTasks(): Task[] {
    return this.tasksService.getAllTasks();
  }

  @Get('/:id')
  getTaskById(@Param('id') id: string): Task {
    return this.tasksService.getTaskById(id);
  }

  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto): Task {
    return this.tasksService.createTask(createTaskDto);
  }

  @Patch('/:id/status')
  updateTaskStatus(
    @Param('id') id: string,
    @Body() updateTaskStatusDto: UpdateTaskStatusDto,
  ): Task {
    const { status } = updateTaskStatusDto;
    return this.tasksService.updateTaskStatus(id, status);
  }

  @Delete('/:id')
  deleteTask(@Param('id') id: string): void {
    this.tasksService.deleteTask(id);
  }
}
```

---

### **Step 7: Test the Implementation**

#### **1. Login to Get a Token**
Send a `POST` request to `/auth/login` with valid credentials:
```http
POST /auth/login
Content-Type: application/json

{
  "username": "test",
  "password": "password"
}
```

Response:
```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

#### **2. Access Protected Routes**
Use the `access_token` in the `Authorization` header to access protected routes.

Example:
```http
GET /tasks
Authorization: Bearer <access_token>
```

If the token is valid, you'll receive a response. If invalid or missing, you'll get a `401 Unauthorized` error.

---

### **Summary**

1. **Guards**:
   - The `JwtAuthGuard` protects routes by validating JWT tokens using the `passport-jwt` strategy.

2. **Auth Flow**:
   - The `AuthController` provides a `/auth/login` endpoint to authenticate users and issue JWT tokens.

3. **Route Protection**:
   - Routes in the `TasksController` are protected with the `JwtAuthGuard`.

---

This implementation demonstrates how to use **Guards** with `CanActivate` to secure routes using **JWT authentication** in a Nest.js application.