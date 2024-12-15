Here’s how to build a simple **CRUD API** for a **Task Manager** using **Nest.js**. This example will cover the following:

1. **Routes for CRUD operations** (`GET`, `POST`, `PUT`, `DELETE`).
2. Use **DTOs** with `class-validator` for request payload validation.
3. Implement a **Service** to handle the business logic.
4. Use an in-memory array to store tasks for simplicity.

---

### **Step 1: Set Up Your Nest.js Project**
1. Create a new Nest.js project:
   ```bash
   nest new task-manager
   ```
2. Install the required packages for validation:
   ```bash
   npm install class-validator class-transformer
   ```

---

### **Step 2: Generate Task Module, Controller, and Service**
Generate the `tasks` module, controller, and service:
```bash
nest generate module tasks
nest generate controller tasks
nest generate service tasks
```

This will create the following files:
- `src/tasks/tasks.module.ts`
- `src/tasks/tasks.controller.ts`
- `src/tasks/tasks.service.ts`

---

### **Step 3: Define the Task Entity**
Create a `Task` interface to represent a task:

#### **`src/tasks/task.model.ts`**
```typescript
export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}

export enum TaskStatus {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}
```

---

### **Step 4: Create DTOs for Validation**
Define DTOs (Data Transfer Objects) to validate incoming request data.

#### **`src/tasks/dto/create-task.dto.ts`**
```typescript
import { IsNotEmpty } from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;
}
```

#### **`src/tasks/dto/update-task-status.dto.ts`**
```typescript
import { IsIn, IsNotEmpty } from 'class-validator';
import { TaskStatus } from '../task.model';

export class UpdateTaskStatusDto {
  @IsNotEmpty()
  @IsIn([TaskStatus.OPEN, TaskStatus.IN_PROGRESS, TaskStatus.DONE])
  status: TaskStatus;
}
```

---

### **Step 5: Implement the Service**
The service will handle all business logic, such as creating, retrieving, updating, and deleting tasks.

#### **`src/tasks/tasks.service.ts`**
```typescript
import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v4 as uuid } from 'uuid'; // To generate unique IDs
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = []; // In-memory storage for tasks

  getAllTasks(): Task[] {
    return this.tasks;
  }

  getTaskById(id: string): Task {
    return this.tasks.find((task) => task.id === id);
  }

  createTask(createTaskDto: CreateTaskDto): Task {
    const { title, description } = createTaskDto;

    const task: Task = {
      id: uuid(),
      title,
      description,
      status: TaskStatus.OPEN,
    };

    this.tasks.push(task);
    return task;
  }

  updateTaskStatus(id: string, status: TaskStatus): Task {
    const task = this.getTaskById(id);
    task.status = status;
    return task;
  }

  deleteTask(id: string): void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
```

---

### **Step 6: Implement the Controller**
The controller will define the routes and handle incoming HTTP requests.

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
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task, TaskStatus } from './task.model';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskStatusDto } from './dto/update-task-status.dto';

@Controller('tasks')
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

### **Step 7: Add Validation Pipes**
Apply validation globally or at specific endpoints to validate incoming data.

#### **Enable Global Validation in `main.ts`**
```typescript
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable validation globally
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}
bootstrap();
```

---

### **Step 8: Test the API**

#### **Available Endpoints**

| HTTP Method | Route               | Description               |
| ----------- | ------------------- | ------------------------- |
| `GET`       | `/tasks`            | Get all tasks             |
| `GET`       | `/tasks/:id`        | Get a specific task by ID |
| `POST`      | `/tasks`            | Create a new task         |
| `PATCH`     | `/tasks/:id/status` | Update a task's status    |
| `DELETE`    | `/tasks/:id`        | Delete a task by ID       |

#### **Example Requests**

**1. Create a Task**
- **Request**:
  ```http
  POST /tasks
  Content-Type: application/json
  
  {
    "title": "Learn NestJS",
    "description": "Understand how to build APIs with NestJS"
  }
  ```
- **Response**:
  ```json
  {
    "id": "abc123",
    "title": "Learn NestJS",
    "description": "Understand how to build APIs with NestJS",
    "status": "OPEN"
  }
  ```

**2. Get All Tasks**
- **Request**:
  ```http
  GET /tasks
  ```
- **Response**:
  ```json
  [
    {
      "id": "abc123",
      "title": "Learn NestJS",
      "description": "Understand how to build APIs with NestJS",
      "status": "OPEN"
    }
  ]
  ```

**3. Update Task Status**
- **Request**:
  ```http
  PATCH /tasks/abc123/status
  Content-Type: application/json
  
  {
    "status": "IN_PROGRESS"
  }
  ```
- **Response**:
  ```json
  {
    "id": "abc123",
    "title": "Learn NestJS",
    "description": "Understand how to build APIs with NestJS",
    "status": "IN_PROGRESS"
  }
  ```

**4. Delete a Task**
- **Request**:
  ```http
  DELETE /tasks/abc123
  ```
- **Response**:
  ```http
  204 No Content
  ```

---

### **Summary**
This simple CRUD API demonstrates:
1. **Routes** for managing tasks.
2. **DTOs** for validating request payloads using the `class-validator` package.
3. A **Service** to handle business logic.
4. A modular structure that follows Nest.js best practices.

You can now extend this API by integrating a database (e.g., PostgreSQL, MongoDB) or adding more features like authentication.