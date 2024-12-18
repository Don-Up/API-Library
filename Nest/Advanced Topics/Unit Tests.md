### **Writing Unit Tests with Jest in Nest.js**

<audio src="../../mp3/Unit testing is.mp3"></audio>

Unit testing is an essential part of software development, ensuring that individual components (services, controllers, modules) work as expected. Nest.js provides built-in support for **Jest**, a popular JavaScript testing framework, and includes tools like `TestingModule` to streamline the testing process.

### **1. Setting Up Jest in Nest.js**

Nest.js comes with Jest pre-configured when you create a project using the Nest CLI. If you need to set it up manually, follow these steps:

#### **Installing Jest**

Install the required dependencies:

```bash
npm install --save-dev jest @nestjs/testing ts-jest @types/jest
```

#### **Configure Jest**

If not already present, create a `jest.config.ts` file in your root directory:

```typescript
export default {
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: 'src',
  testRegex: '.*\\.spec\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  collectCoverageFrom: ['**/*.(t|j)s'],
  coverageDirectory: '../coverage',
  testEnvironment: 'node',
};
```

Now, you're ready to write tests for services, controllers, and modules.

---

### **2. Writing Unit Tests for Services**

#### **Service Example**

Let's assume you have the following `AppService`:

<audio src="../../mp3/AppService 是一个简.mp3"></audio>

```typescript
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  addNumbers(a: number, b: number): number {
    return a + b;
  }
}
```

#### **Unit Test for `AppService`**

To test this service, create a `app.service.spec.ts` file:

<audio src="../../mp3/编写单元测试的步骤. 1, 设.mp3"></audio>

<audio src="../../mp3/总结与建议. 1, 单一职责测.mp3"></audio>

```typescript
import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from './app.service';

describe('AppService', () => {
  let appService: AppService;
  // 设置测试模块
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    appService = module.get<AppService>(AppService);
  });
  // 定义测试用例
  it('should be defined', () => {
    expect(appService).toBeDefined();
  });

  it('should return "Hello World!"', () => {
    expect(appService.getHello()).toBe('Hello World!');
  });

  it('should add two numbers correctly', () => {
    expect(appService.addNumbers(2, 3)).toBe(5);
  });
});
```

#### **Explanation**
- **`Test.createTestingModule`**: Creates a testing module with the service to be tested.
- **`appService.get<AppService>()`**: Retrieves the service instance for testing.
- **Test Cases**:
  - **Check Service Definition**: Verifies that the service is properly instantiated.
  - **Test Business Logic**: Tests specific methods like `getHello()` and `addNumbers()`.

Run the test with:

```bash
npm test
```

---

### **3. Writing Unit Tests for Controllers**

#### **Controller Example**

<audio src="../../mp3/控制器是 NestJS 中的核.mp3"></audio>

Here's a simple `AppController`:

```typescript
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
```

#### **Unit Test for `AppController`**

<audio src="../../mp3/单元测试的目标.  1, 验证.mp3"></audio>

<audio src="../../mp3/测试的编写步骤. 1, 设置测.mp3"></audio>

Create a `app.controller.spec.ts` file:

```typescript
import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;
  // 设置测试模块
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        {
          provide: AppService,
          useValue: {
            // 定义 Mock 服务
            getHello: jest.fn(() => 'Hello World!'), // Mock the service
          },
        },
      ],
    }).compile();

    appController = module.get<AppController>(AppController);
    appService = module.get<AppService>(AppService);
  });
  // 编写测试用例
  it('should be defined', () => {
    expect(appController).toBeDefined();
  });

  it('should return "Hello World!"', () => {
    expect(appController.getHello()).toBe('Hello World!');
    expect(appService.getHello).toHaveBeenCalled(); // Verify service method was called
  });
});
```

#### **Explanation**

<audio src="../../mp3/- __Mocking Ser.mp3"></audio>

- **Mocking Services**: The `useValue` option is used to mock the `AppService` dependency. This is crucial for isolating the controller logic during testing.
- **Test Cases**:
  - **Service Dependency**: Ensure the controller calls the mocked service method.
  - **Response**: Verify the controller returns the expected value.

---

### **4. Writing Unit Tests for Modules**

Modules are containers for services, controllers, and other providers. Testing modules ensures that all dependencies are correctly wired.

#### **Module Example**

<audio src="../../mp3/在 NestJS 中，模块是应.mp3"></audio>

```typescript
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```

#### **Unit Test for `AppModule`**

<audio src="../../mp3/测试目标. 模块的单元测试旨在.mp3"></audio>

<audio src="../../mp3/测试步骤. 1, 设置测试环境.mp3"></audio>

Create a `app.module.spec.ts` file:

```typescript
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from './app.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppModule', () => {
  let module: TestingModule;
  // 设置测试环境
  beforeEach(async () => {
    module = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
  });
  // 定义测试用例
  it('should load AppModule with dependencies', async () => {
    const appController = module.get<AppController>(AppController);
    const appService = module.get<AppService>(AppService);

    expect(appController).toBeDefined();
    expect(appService).toBeDefined();
  });
});
```

#### **Explanation**

<audio src="../../mp3/- __Test the En.mp3"></audio>

- **Test the Entire Module**: The test ensures that all components (controllers, services, etc.) are properly registered and instantiated in the module.
- **Dependency Injection**: Verifies that the dependencies within the module are properly injected.

---

### **5. Advanced Testing Techniques**

#### **Mocking Dependencies**

##### 目标与背景

<audio src="../../mp3/在单元测试中，我们通常需要隔离.mp3"></audio>

For more complex dependencies (e.g., database access), you can use mocks for isolation.

Example: Mocking a repository:

<audio src="../../mp3/例如，在测试一个需要访问数据库.mp3"></audio>

```typescript
const mockRepository = {
  find: jest.fn().mockResolvedValue([]), // Mock async database query
  save: jest.fn().mockResolvedValue({ id: 1, name: 'Test' }),
};
```

Inject the mock into your service:

<audio src="../../mp3/接下来，我们需要将模拟的依赖注.mp3"></audio>

```typescript
providers: [
  {
    provide: 'Repository',
    useValue: mockRepository,
  },
];
```

##### 模拟的优势

<audio src="../../mp3/1, 隔离测试环境：通过模拟外.mp3"></audio>

***

#### **Using Spies**

##### Spies概述

<audio src="../../mp3/在Jest中，spies（间谍.mp3"></audio>

Jest spies allow you to monitor function calls.

Example:

<audio src="../../mp3/我们监控appService的.mp3"></audio>

```typescript
it('should call the service method once', () => {
  const spy = jest.spyOn(appService, 'getHello');
  appController.getHello();
  expect(spy).toHaveBeenCalledTimes(1);
});
```

---

#### **Using `beforeAll` and `afterAll`**

Use `beforeAll` and `afterAll` for setup/teardown logic, such as initializing databases or closing connections.

Example:

<audio src="../../mp3/Jest提供了beforeAl.mp3"></audio>

```typescript
beforeAll(() => {
  console.log('Run before all test cases');
});

afterAll(() => {
  console.log('Run after all test cases');
});
```

---

#### **Testing Edge Cases and Errors**

##### 边界情况和错误处理的重要性

<audio src="../../mp3/在编写单元测试时，测试边界情况.mp3"></audio>

Always test for edge cases and error handling.

Example: Testing error handling in a service:

<audio src="../../mp3/以下的示例用于测试addNum.mp3"></audio>

<audio src="../../mp3/总结. 测试边界情况和错误处理.mp3"></audio>

```typescript
it('should throw an error if inputs are invalid', () => {
  try {
    appService.addNumbers(null, 3);
  } catch (e) {
    expect(e.message).toBe('Invalid inputs');
  }
});
```

---

### **6. Best Practices for Unit Testing**

<audio src="../../mp3/1. __Isolate Co.mp3"></audio>

1. **Isolate Components**: Use mocks to isolate the component being tested.
2. **Test Only Public APIs**: Focus on testing the public methods of services or controllers.
3. **Avoid Duplication**: Reuse mock setups across tests.
4. **Follow AAA Pattern**: Arrange, Act, Assert:
   - Arrange: Set up the environment.
   - Act: Call the method or perform the operation.
   - Assert: Verify the output or behavior.
5. **Use Descriptive Test Names**: Clearly describe what each test is verifying.
6. **Test Edge Cases**: Include tests for invalid inputs and exceptions.
7. **Run Tests Frequently**: Run tests during development to catch issues early.

---

### **Summary**

<audio src="../../mp3/- __Testing Ser.mp3"></audio>

- **Testing Services**: Focus on business logic and ensure methods behave as expected.
- **Testing Controllers**: Mock service dependencies to isolate controller logic.
- **Testing Modules**: Ensure all dependencies are correctly registered and injected.
- **Advanced Techniques**: Use mocks, spies, and lifecycle hooks for comprehensive testing.

By writing thorough unit tests, you can ensure your Nest.js application is robust, maintainable, and free of regressions.