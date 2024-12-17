### **Providers (Services) in Nest.js**

<audio src="C:\Users\10691\Downloads\In Nest js, pro.mp3"></audio>

In **Nest.js**, **providers** (commonly referred to as **services**) are classes that encapsulate **business logic** and provide reusable functionality throughout the application. Providers are at the core of Nest.js's **Dependency Injection (DI)** system, which allows them to be injected into other components like controllers, other services, or even other modules.

Providers are typically used to handle application logic, interact with databases, external APIs, or perform operations that go beyond simple request/response handling in controllers.

---

### **Key Responsibilities of Providers**

1. **Encapsulating Business Logic**:
   - Providers contain the application's core functionality and logic, keeping controllers lightweight and focused on handling HTTP requests and responses.

2. **Reusability**:
   - Providers can be reused across multiple parts of the application.

3. **Dependency Injection**:
   - Providers are managed by Nest.js's **DI container**, which allows them to be easily injected into other services, controllers, or modules.

4. **Interfacing with External Systems**:
   - Providers are commonly used to interact with databases, APIs, caches, or other external systems.

---

### **How Providers Work**

Providers are **classes** annotated with the `@Injectable()` decorator. This tells Nest.js that the class can be managed by the **DI container** and injected wherever needed.

---

### **Creating a Simple Service (Provider)**

#### **Step 1: Define the Service**

<audio src="C:\Users\10691\Downloads\在 NestJS 中，服务（S.mp3"></audio>

<audio src="C:\Users\10691\Downloads\关键点讲解. @Injecta.mp3"></audio>

```typescript
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Smith' }];

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    return this.users.find((user) => user.id === id);
  }
}
```

- The `@Injectable()` decorator marks the `UsersService` class as a provider.
- The `findAll()` and `findOne()` methods handle the logic to retrieve users.

---

#### **Step 2: Register the Service in a Module**

To make the service available in the application, it must be registered in a module's `providers` array.

##### 如何注册服务到模块中

<audio src="C:\Users\10691\Downloads\要在模块中使用服务，我们需要将.mp3"></audio>

##### 模块结构

<audio src="C:\Users\10691\Downloads\在模块中，使用 @Module.mp3"></audio>

##### 服务注册

<audio src="C:\Users\10691\Downloads\通过将 UsersServic.mp3"></audio>

##### 总结

<audio src="C:\Users\10691\Downloads\在 UsersModule 中.mp3"></audio>

```typescript
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
  providers: [UsersService], // Register the service here
  controllers: [UsersController],
})
export class UsersModule {}
```

- The `UsersService` is now part of the DI context for the `UsersModule`.

---

#### **Step 3: Inject the Service into a Controller**

The service can now be injected into a controller using the constructor.

<audio src="C:\Users\10691\Downloads\NestJS 使用依赖注入（D.mp3"></audio>

```typescript
import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }
}
```

- The `UsersService` is injected into the `UsersController` using **Dependency Injection**.
- The controller delegates user retrieval logic to the service.

---

### **Dependency Injection in Nest.js**

<audio src="C:\Users\10691\Downloads\Nest js uses __.mp3"></audio>

Nest.js uses **Dependency Injection (DI)** to manage the lifecycle and dependencies of providers. DI makes it easy to:
- Use services in different parts of your application.
- Mock dependencies for testing.
- Reduce tight coupling between components.

#### **How DI Works in Nest.js**

<audio src="C:\Users\10691\Downloads\1. __Injectable.mp3"></audio>

1. **Injectable Classes**: Classes marked with `@Injectable()` are registered in the DI container.
2. **Constructor Injection**: Dependencies are injected into the constructor of a class.
3. **Provider Registration**: Providers must be registered in the `providers` array of a module.

---

### **Custom Providers**

In addition to regular classes, providers in Nest.js can be defined in several ways:

#### **1. Value Providers**

You can provide static values or constants using the `useValue` syntax.

```typescript
const API_KEY = '12345-ABCDE';

@Module({
  providers: [
    {
      provide: 'API_KEY',
      useValue: API_KEY, // Registers the static value
    },
  ],
  exports: ['API_KEY'],
})
export class ConfigModule {}
```

Inject the value into a service or controller:

```typescript
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class ApiService {
  constructor(@Inject('API_KEY') private readonly apiKey: string) {}

  getApiKey() {
    return this.apiKey;
  }
}
```

---

#### **2. Factory Providers**

You can use factory functions to create and configure providers dynamically.

```typescript
@Module({
  providers: [
    {
      provide: 'API_CONFIG',
      useFactory: () => {
        return {
          baseUrl: 'https://api.example.com',
          timeout: 5000,
        };
      },
    },
  ],
  exports: ['API_CONFIG'],
})
export class ConfigModule {}
```

Inject and use the factory output:

```typescript
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class ApiService {
  constructor(@Inject('API_CONFIG') private readonly config: any) {}

  getApiConfig() {
    return this.config;
  }
}
```

---

#### **3. Class Providers**

You can use custom classes to provide specific implementations for a provider token.

```typescript
@Injectable()
export class CustomLogger {
  log(message: string) {
    console.log(`Custom Logger: ${message}`);
  }
}

@Module({
  providers: [
    {
      provide: 'LOGGER',
      useClass: CustomLogger, // Use CustomLogger as the implementation
    },
  ],
  exports: ['LOGGER'],
})
export class LoggerModule {}
```

Inject and use the class provider:

```typescript
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(@Inject('LOGGER') private readonly logger: CustomLogger) {}

  logMessage(message: string) {
    this.logger.log(message);
  }
}
```

---

#### **4. Async Providers**

For scenarios where a provider requires asynchronous initialization (e.g., loading configuration from a database), you can use `useFactory` with `async`.

```typescript
@Module({
  providers: [
    {
      provide: 'ASYNC_CONFIG',
      useFactory: async () => {
        const config = await fetchConfigFromDatabase(); // Simulated async operation
        return config;
      },
    },
  ],
  exports: ['ASYNC_CONFIG'],
})
export class ConfigModule {}
```

---

### **Scope of Providers**

By default, providers in Nest.js are **singleton**—a single instance is shared throughout the application. However, you can modify the scope to define the provider's lifecycle.

#### **1. Singleton Scope**
- Default behavior: One instance is shared across the entire application.

#### **2. Request Scope**
- A new instance is created for each incoming request.

```typescript
@Injectable({ scope: Scope.REQUEST })
export class RequestScopedService {
  constructor() {
    console.log('New instance created for each request');
  }
}
```

#### **3. Transient Scope**
- A new instance is created each time the provider is injected.

```typescript
@Injectable({ scope: Scope.TRANSIENT })
export class TransientService {
  constructor() {
    console.log('New instance created for each injection');
  }
}
```

---

### **Exporting and Sharing Providers**

To make a provider available in other modules, it must be exported in its module.

#### **Example: Exporting a Provider**

```typescript
@Module({
  providers: [UsersService],
  exports: [UsersService], // Makes UsersService available to other modules
})
export class UsersModule {}
```

#### **Example: Importing and Using the Provider**

```typescript
@Module({
  imports: [UsersModule], // Imports the module that exports UsersService
})
export class AppModule {}
```

---

### **Testing Providers**

Testing providers is straightforward since they are standalone classes. Use **mock dependencies** to isolate the provider logic.

#### **Example: Testing a Service**

```typescript
import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should return all users', () => {
    expect(service.findAll()).toEqual([{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Smith' }]);
  });
});
```

---

### **Summary**

<audio src="C:\Users\10691\Downloads\- __Providers s.mp3"></audio>

- **Providers (services)** encapsulate business logic and reusable functionality in Nest.js applications.
- They are decorated with `@Injectable()` and registered in the `providers` array of a module.
- Providers can be injected into controllers, other services, or even exported to other modules.
- **Custom Providers** allow you to define providers with static values, factories, or alternative implementations.
- The **DI system** in Nest.js enables easy dependency management, testing, and scalability.
- Providers are **singleton** by default but can be scoped to requests or transient lifecycles depending on the application's needs.

By effectively using providers, you can build scalable, reusable, and testable applications in Nest.js. They help separate business logic from controllers, ensuring clean and maintainable code.