The line of code:

<audio src="C:\Users\10691\Downloads\The line of cod.mp3"></audio>

```typescript
app.useGlobalPipes(new ValidationPipe());
```

sets up a **global validation pipe** in your Nest.js application. Its role is to enable automatic validation and transformation of incoming request payloads (e.g., from `POST` or `PATCH` requests) across the entire application. This ensures that every request is validated according to the defined rules in your **DTOs (Data Transfer Objects)**.

---

### **Roles and Purpose of `app.useGlobalPipes(new ValidationPipe())`**

#### **1. Automatic Validation**

<audio src="C:\Users\10691\Downloads\1. Automatic Va.mp3"></audio>

- It applies validation rules to incoming data based on the decorators (e.g., `@IsNotEmpty`, `@IsString`, `@IsIn`, etc.) defined in your DTO classes.
- If the incoming data does not meet the validation constraints, it automatically throws a `400 Bad Request` error with details about what failed.

#### **Example: Validating Incoming Data**

For instance, if you have the following DTO:

```typescript
import { IsNotEmpty } from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;
}
```

And you send an invalid `POST` request like this (missing the `title` field):

```http
POST /tasks
Content-Type: application/json

{
  // lack title
  
  "description": "This is a task"
}
```

The `ValidationPipe` will validate the data against the `CreateTaskDto` and return an error response like:

```json
{
  "statusCode": 400,
  "message": ["title should not be empty"],
  "error": "Bad Request"
}
```

Without the `ValidationPipe`, the request would pass through, and you'd have to manually validate the input in your controller or service.

---

#### **2. Reduces Boilerplate**

<audio src="C:\Users\10691\Downloads\2. Reduces Boil.mp3"></audio>

Using `ValidationPipe` globally eliminates the need to manually validate data in every controller method. Instead of writing custom validation logic, you can simply define validation rules in your DTOs.

For example:
```typescript
@Post()
createTask(@Body() createTaskDto: CreateTaskDto) {
  // No need to manually validate createTaskDto here,
  // because ValidationPipe already ensures it's valid.
  return this.tasksService.createTask(createTaskDto);
}
```

---

#### **3. Error Handling**

<audio src="C:\Users\10691\Downloads\3. Error Handli.mp3"></audio>

The `ValidationPipe` automatically handles invalid data and responds with a standardized error message. This ensures consistency in how validation errors are returned across your application.

---

### **Features of `ValidationPipe`**

The `ValidationPipe` provides several useful features out of the box:

#### **1. Whitelisting Properties (`whitelist`)**
- Removes any extra or unexpected properties from the incoming payload.
- For example, if your DTO only defines `title` and `description` but the client sends an extra field like `isAdmin`, it will be automatically removed.

Enable this by passing options:
```typescript
app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
```

#### **2. Forbidding Extra Properties (`forbidNonWhitelisted`)**
- If the client sends extra properties that are not defined in the DTO, it throws an error instead of silently ignoring them.
- Example error:
  ```json
  {
    "statusCode": 400,
    "message": ["property isAdmin should not exist"],
    "error": "Bad Request"
  }
  ```

Enable this with:
```typescript
app.useGlobalPipes(new ValidationPipe({ forbidNonWhitelisted: true }));
```

#### **3. Auto-Transform (`transform`)**
- Automatically converts incoming payloads into DTO instances or transforms data types (e.g., a string `"123"` to a number `123`).
- Useful when you have strict typing in your application.

Enable this with:
```typescript
app.useGlobalPipes(new ValidationPipe({ transform: true }));
```

Example:
If your DTO expects a number:
```typescript
export class GetTaskByIdDto {
  @IsNotEmpty()
  @IsNumber()
  id: number;
}
```

Sending a request with `id` as a string:
```http
GET /tasks?id=123
```

The `ValidationPipe` with `transform: true` will automatically convert `id` to a number.

---

### **Why Use `ValidationPipe` Globally?**
By applying the `ValidationPipe` globally using `app.useGlobalPipes()`, you:
1. Ensure consistent validation rules across your application.
2. Avoid having to set up validation on every route or controller manually.
3. Centralize input validation, reducing code duplication.
4. Improve security by ensuring only valid and expected data enters your application.

---

### **Complete Example**

Here’s how `ValidationPipe` works in practice:

#### **Controller**
```typescript
import { Controller, Post, Body } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto): string {
    return `Task created: ${createTaskDto.title}`;
  }
}
```

#### **DTO**
```typescript
import { IsNotEmpty } from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;
}
```

#### **`main.ts`**
```typescript
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
```

#### **Request Example**
**Request**:
```http
POST /tasks
Content-Type: application/json

{
  "description": "This is a task"
}
```

**Response**:
```json
{
  "statusCode": 400,
  "message": ["title should not be empty"],
  "error": "Bad Request"
}
```

---

### **Summary**

The line `app.useGlobalPipes(new ValidationPipe())`:
1. Enables automatic validation of incoming requests.
2. Uses the validation rules defined in your DTOs.
3. Simplifies input validation and improves security by rejecting invalid data.
4. Can be configured to transform and sanitize data with options like `whitelist`, `forbidNonWhitelisted`, and `transform`.

By enabling it globally, you ensure consistent and centralized validation across your entire application.