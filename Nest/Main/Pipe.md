### **Pipes in Nest.js**

<audio src="../../mp3/Pipes in __Nest.mp3"></audio>

Pipes in **Nest.js** are a powerful feature used to **transform** and **validate** data in the request lifecycle. They operate on the incoming request data and can either:

1. **Transform**: Change the shape or format of the data before it reaches the route handler.
2. **Validate**: Ensure the data meets certain criteria, throwing an exception (typically `400 Bad Request`) if validation fails.

Pipes are primarily used for **input validation** and **data transformation** when working with route handlers or controller methods.

---

## **Key Features of Pipes**

1. **Data Transformation**:
   - Automatically transform incoming data into the desired structure or format (e.g., converting a string to a number).

2. **Validation**:
   - Check if the incoming data meets specific requirements (e.g., no missing fields, valid data types, etc.).
   - If validation fails, an exception is thrown, and an error response is sent to the client.

3. **Scoped Application**:
   - Pipes can be applied globally, at the controller level, or to specific route handler parameters.

4. **Integration with Validation Libraries**:
   - Pipes can leverage libraries like `class-validator` and `class-transformer` for powerful validation rules and transformations.

---

## **How Pipes Work in Nest.js**

<audio src="../../mp3/Pipes implement.mp3"></audio>

Pipes implement the `PipeTransform` interface, which has a single method: `transform(value: any, metadata: ArgumentMetadata): any`.

### **PipeTransform Interface**

```typescript
export interface PipeTransform<T = any, R = any> {
  transform(value: T, metadata: ArgumentMetadata): R;
}
```

- **`value`**:
  - The value of the request parameter being processed.
  - For example, if the route handler accepts a `@Body()` parameter, `value` will contain the parsed body of the request.

- **`metadata`**:
  - Provides information about the parameter being processed, such as its type (`body`, `query`, `param`) and its metatype (e.g., `String`, `Number`, or a DTO).

---

## **Types of Pipes**

<audio src="../../mp3/1. __Built-in P.mp3"></audio>

1. **Built-in Pipes**: Nest.js provides several built-in pipes for common use cases like data conversion and validation.
2. **Custom Pipes**: You can define custom pipes to handle specific transformation or validation logic.

---

### **1. Built-in Pipes**

Nest.js includes the following built-in pipes:

#### **1.1 ValidationPipe**

<audio src="../../mp3/ValidationPipe..mp3"></audio>

- Used for validating incoming request data against a specified DTO (Data Transfer Object).
- Works with the `class-validator` library for declarative validation.

<audio src="../../mp3/这段代码展示了一个用户创建功能.mp3"></audio>

```typescript
import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';

class CreateUserDto {
  username: string;
  password: string;
}

@Controller('users')
export class UsersController {
  @Post()
  createUser(@Body(new ValidationPipe()) createUserDto: CreateUserDto) {
    return `User created: ${createUserDto.username}`;
  }
}
```

#### **1.2 ParseIntPipe**
- Converts a string parameter into an integer. Throws an exception if the value cannot be parsed.

<audio src="../../mp3/这段代码展示了如何在 Nest.mp3"></audio>

```typescript
import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get(':id')
  getUser(@Param('id', ParseIntPipe) id: number) {
    return `User ID is: ${id}`;
  }
}
```

#### **1.3 ParseBoolPipe**
- Converts a string parameter to a boolean value (`'true'` → `true`, `'false'` → `false`).

<audio src="../../mp3/这段代码展示了如何使用 Par.mp3"></audio>

```typescript
import { Controller, Get, Query, ParseBoolPipe } from '@nestjs/common';

@Controller('settings')
export class SettingsController {
  @Get()
  getSettings(@Query('isEnabled', ParseBoolPipe) isEnabled: boolean) {
    return `Is Enabled: ${isEnabled}`;
  }
}
```

#### **1.4 ParseUUIDPipe**
- Validates and parses a UUID string.

<audio src="../../mp3/这段代码展示了如何使用 Par (1).mp3"></audio>

```typescript
import { Controller, Get, Param, ParseUUIDPipe } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get(':id')
  getProduct(@Param('id', ParseUUIDPipe) id: string) {
    return `Product ID: ${id}`;
  }
}
```

---

### **2. Custom Pipes**

Custom pipes allow you to implement your own logic for transforming and validating data.

#### **Example: Custom Pipe for String to Uppercase**

<audio src="../../mp3/这段代码展示了如何在 Nest (1).mp3"></audio>

```typescript
import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';

@Injectable()
export class UppercasePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata): any {
    if (typeof value !== 'string') {
      throw new Error('Value must be a string');
    }
    return value.toUpperCase();
  }
}
```

#### **Using the Custom Pipe**

<audio src="../../mp3/这段代码展示了如何在 Nest (2).mp3"></audio>

```typescript
import { Controller, Get, Param } from '@nestjs/common';
import { UppercasePipe } from './uppercase.pipe';

@Controller('users')
export class UsersController {
  @Get(':name')
  getUser(@Param('name', UppercasePipe) name: string) {
    return `Hello, ${name}`;
  }
}
```

---

## **Applying Pipes**

Pipes can be applied at various levels:

### **1. Method Parameter Level**

Pipes can be applied to specific method parameters using decorators like `@Param()`, `@Body()`, `@Query()`, etc.

<audio src="../../mp3/这段代码展示了如何在 Nest (3).mp3"></audio>

```typescript
@Get(':id')
getUser(@Param('id', ParseIntPipe) id: number) {
  return `User ID: ${id}`;
}
```

---

### **2. Method Level**

Pipes can be applied to the entire method using the `@UsePipes()` decorator.

<audio src="../../mp3/这段代码展示了如何在 Nest (4).mp3"></audio>

```typescript
import { UsePipes, ValidationPipe } from '@nestjs/common';

@Post()
@UsePipes(new ValidationPipe())
createUser(@Body() createUserDto: CreateUserDto) {
  return `User created: ${createUserDto.username}`;
}
```

---

### **3. Controller Level**

<audio src="../../mp3/这段代码展示了如何在 Nest (5).mp3"></audio>

Pipes can be applied to all routes in a controller.

```typescript
@Controller('users')
@UsePipes(new ValidationPipe())
export class UsersController {
  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return `User created: ${createUserDto.username}`;
  }
}
```

---

### **4. Global Level**

Global pipes apply to all routes in the application. You can set global pipes in the `main.ts` file.

#### **Example: Applying Global Pipes**

<audio src="../../mp3/这段代码展示了如何在 Nest (6).mp3"></audio>

```typescript
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe()); // Apply globally

  await app.listen(3000);
}
bootstrap();
```

---

## **Validation with Pipes**

Pipes are commonly used for validation. Nest.js integrates with the `class-validator` and `class-transformer` libraries to validate and transform data against a DTO.

---

### **Example: Validation with ValidationPipe**

#### **Step 1: Install Required Packages**

<audio src="../../mp3/class-validator.mp3"></audio>

```bash
npm install class-validator class-transformer
```

#### **Step 2: Create a DTO**

Define a DTO (Data Transfer Object) with validation rules.

<audio src="../../mp3/这段代码展示了如何在 Nest (7).mp3"></audio>

```typescript
import { IsString, IsNotEmpty, IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
```

#### **Step 3: Use the DTO in a Controller**

<audio src="../../mp3/这段代码展示了如何在 Nest (8).mp3"></audio>

```typescript
import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Post()
  createUser(@Body(new ValidationPipe()) createUserDto: CreateUserDto) {
    return `User created: ${createUserDto.username}`;
  }
}
```

---

### **Advanced Validation Features**

#### **1. Auto-Transformation**
The `ValidationPipe` can automatically transform input data into the target type (e.g., converting query strings to numbers).

<audio src="../../mp3/这段代码展示了如何在 Nest (9).mp3"></audio>

```typescript
app.useGlobalPipes(new ValidationPipe({ transform: true }));
```

#### **2. Whitelisting**
You can enable whitelisting to strip out unwanted properties from the incoming data.

<audio src="../../mp3/这段代码展示了如何在 Nest (10).mp3"></audio>

```typescript
app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
```

#### **3. Forbidding Non-Whitelisted Properties**
You can throw an exception if non-whitelisted properties are present.

<audio src="../../mp3/这段代码展示了如何在 Nest (11).mp3"></audio>

```typescript
app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }));
```

---

## **Where Pipes Fit in the Nest.js Lifecycle**

Pipes are executed **after guards** and **before the route handler**. They transform or validate data that is passed to the handler.

### **Execution Sequence in Nest.js:**
1. Middleware
2. Guards
3. Interceptors (Pre-Processing)
4. **Pipes**
5. Route Handler
6. Interceptors (Post-Processing)

---

## **Comparison with Other Features**

| Feature          | Purpose                                         | Execution Stage                |
| ---------------- | ----------------------------------------------- | ------------------------------ |
| **Middleware**   | Pre-route logic like logging or request parsing | Before guards and pipes        |
| **Guards**       | Authorization and access control                | After middleware, before pipes |
| **Pipes**        | Input validation and transformation             | Before the route handler       |
| **Interceptors** | Request/response transformation or logging      | Around the route handler       |

---

## **Summary**

<audio src="../../mp3/1. __Pipes__ in.mp3"></audio>

1. **Pipes** in Nest.js are used for **data transformation** and **validation**.
2. They can be applied globally, at the controller level, or to specific method parameters.
3. Nest.js provides several **built-in pipes** (e.g., `ValidationPipe`, `ParseIntPipe`), but you can also create **custom pipes**.
4. Pipes work seamlessly with libraries like `class-validator` and `class-transformer` for declarative validation and transformation.
5. They are an essential part of the request lifecycle, ensuring that the data passed to route handlers is clean, valid, and in the correct format.

By leveraging pipes, you can enforce robust data validation and transformation in your Nest.js applications.