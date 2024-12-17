### **Writing End-to-End (E2E) Tests for Your Nest.js Application**

End-to-end (E2E) tests verify that the entire application works as expected, from sending an HTTP request to receiving the correct response. Unlike unit tests (which focus on isolated components), E2E tests simulate real-world user interactions with your application and ensure that all parts (controllers, services, database, etc.) function together correctly.

Nest.js comes preconfigured with **Jest** for E2E testing, making it easy to set up and run tests for your application.

---

### **1. Setting Up E2E Testing in Nest.js**

#### **Folder Structure**

By default, the Nest CLI creates an E2E test folder when generating a new project:

```
src/
test/
  └── app.e2e-spec.ts    # Example E2E test file
  └── jest-e2e.json      # Jest configuration for E2E tests
```

If this folder does not exist, you can create it manually.

#### **Jest E2E Configuration**

The `jest-e2e.json` file contains the configuration for running E2E tests. Here's an example configuration:

```json
{
  "moduleFileExtensions": ["js", "json", "ts"],
  "rootDir": "./",
  "testRegex": ".e2e-spec.ts$",
  "transform": {
    "^.+\\.(t|j)s$": "ts-jest"
  },
  "testEnvironment": "node",
  "preset": "@shelf/jest-mongodb"
}
```

This tells Jest to look for files ending in `.e2e-spec.ts` and to use `ts-jest` to compile TypeScript files.

#### **Run E2E Tests**

To run E2E tests, execute:

```bash
npm run test:e2e
```

The `test:e2e` script is preconfigured in the `package.json` file as:

```json
"test:e2e": "jest --config ./test/jest-e2e.json"
```

---

### **2. Writing an E2E Test**

E2E tests in Nest.js typically involve:
- **Bootstrapping the application**: Start the app in a test environment.
- **Simulating HTTP requests**: Use the `supertest` library to send requests to your app.
- **Asserting responses**: Verify that the responses match expected values.

---

#### **Step 1: Install Supertest**

Supertest is a popular library for testing HTTP servers.

```bash
npm install --save-dev supertest
```

---

#### **Step 2: Write a Basic E2E Test**

Here's an example `app.e2e-spec.ts` file that tests the default "Hello World!" endpoint:

```typescript
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });
});
```

---

#### **Explanation**

1. **`beforeAll`**:
   - Bootstraps the application before running tests.
   - The `Test.createTestingModule` method loads the `AppModule` and compiles it.
   - The `app.init()` method initializes the app.

2. **`afterAll`**:
   - Closes the application after all tests are complete to release resources.

3. **Simulate HTTP Requests**:
   - `request(app.getHttpServer())`: Sends HTTP requests to the app.
   - `.get('/')`: Simulates a `GET` request to the root endpoint.
   - `.expect(200)`: Asserts that the response status is `200 OK`.
   - `.expect('Hello World!')`: Asserts that the response body matches `'Hello World!'`.

---

### **3. Writing E2E Tests for CRUD Endpoints**

To test a basic CRUD application, let’s assume you have a `UsersModule` with standard CRUD endpoints:

#### **Example User Entity**

```typescript
export class User {
  id: number;
  name: string;
  email: string;
}
```

#### **Endpoints in the Controller**

```typescript
import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
  private users: User[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
  ];

  @Get()
  findAll(): User[] {
    return this.users;
  }

  @Post()
  create(@Body() user: User): User {
    this.users.push(user);
    return user;
  }

  @Get(':id')
  findOne(@Param('id') id: number): User {
    return this.users.find((user) => user.id === Number(id));
  }
}
```

---

#### **E2E Tests for the `UsersController`**

Create a `users.e2e-spec.ts` file:

```typescript
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('UsersController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('/users (GET)', () => {
    return request(app.getHttpServer())
      .get('/users')
      .expect(200)
      .expect([
        { id: 1, name: 'John Doe', email: 'john@example.com' },
      ]);
  });

  it('/users (POST)', () => {
    const newUser = { id: 2, name: 'Jane Doe', email: 'jane@example.com' };
    return request(app.getHttpServer())
      .post('/users')
      .send(newUser)
      .expect(201)
      .expect(newUser);
  });

  it('/users/:id (GET)', () => {
    return request(app.getHttpServer())
      .get('/users/1')
      .expect(200)
      .expect({ id: 1, name: 'John Doe', email: 'john@example.com' });
  });

  it('/users/:id (GET) - Not Found', () => {
    return request(app.getHttpServer())
      .get('/users/999')
      .expect(404);
  });
});
```

---

#### **Explanation**

1. **GET `/users`**:
   - Tests retrieving the list of users.
   - Asserts the response body matches the predefined array of users.

2. **POST `/users`**:
   - Tests creating a new user.
   - Sends a `POST` request with a `User` object in the request body.
   - Verifies that the response matches the newly created user.

3. **GET `/users/:id`**:
   - Tests fetching a specific user by ID.
   - Verifies that the correct user object is returned.

4. **GET `/users/:id` - Not Found**:
   - Tests fetching a non-existent user.
   - Verifies that the response status is `404 Not Found`.

---

### **4. Testing with Databases**

For applications that interact with a database, use an **in-memory database** or **mock database** to avoid modifying production data during tests.

#### **Using an In-Memory Database**

For example, use **SQLite** in memory mode with TypeORM.

1. **Install SQLite**:
   ```bash
   npm install --save sqlite3
   ```

2. **Configure TypeORM for Testing**:
   Update the `Test.createTestingModule` to use an in-memory SQLite database:

   ```typescript
   imports: [
     TypeOrmModule.forRoot({
       type: 'sqlite',
       database: ':memory:',
       entities: [User],
       synchronize: true, // Auto-create tables
     }),
   ]
   ```

3. **Seed Data**:
   Initialize the database with test data during `beforeAll`:

   ```typescript
   beforeAll(async () => {
     const moduleFixture: TestingModule = await Test.createTestingModule({
       imports: [AppModule],
     }).compile();
   
     app = moduleFixture.createNestApplication();
     await app.init();
   
     const userRepository = moduleFixture.get<UserRepository>(getRepositoryToken(User));
     await userRepository.save({ id: 1, name: 'John Doe', email: 'john@example.com' });
   });
   ```

---

### **5. Best Practices for E2E Testing**

1. **Isolate Test Environment**:
   - Use in-memory databases or mock services to ensure tests do not affect production data.

2. **Clear State Between Tests**:
   - Reset the database or mock data between test cases to avoid state leakage.

3. **Test Happy and Edge Cases**:
   - Cover both successful and failing scenarios (e.g., invalid inputs, unauthorized access).

4. **Keep Tests Fast**:
   - Avoid long-running operations in your tests.

5. **Mock External APIs**:
   - Use libraries like `nock` to mock third-party API calls.

6. **Automate E2E Tests**:
   - Integrate E2E tests into your CI/CD pipeline to catch regressions early.

---

### **Summary**

- **Bootstrapping**: Use `Test.createTestingModule` to initialize the app for testing.
- **Simulating Requests**: Use `supertest` to interact with your app as an HTTP client.
- **Database Testing**: Use in-memory databases for clean, isolated testing.
- **Best Practices**: Isolate tests, clear state, and automate E2E testing.

E2E testing ensures your application works seamlessly as a whole, providing confidence in its reliability and functionality.