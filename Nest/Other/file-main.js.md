The `main.ts` file in a **Nest.js** application serves as the **entry point** for the application. It is the first file executed when the application starts, and its primary purpose is to bootstrap (initialize) the Nest.js application.

<audio src="..\..\mp3\2024年12月15日20点12分.mp3"></audio>

Here’s a breakdown of the provided code:

---

### **Code Explanation**

```typescript
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
```

---

### **1. Importing Required Modules**
```typescript
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
```

- **`NestFactory`**:

  - This is a utility provided by Nest.js to create and manage the application instance.
  - It provides methods to create a new Nest.js application, set up middleware, and configure the application.
  - <audio src="..\..\mp3\2024年12月15日20点14分.mp3"></audio>

- **`AppModule`**(Corporate Headquarters):

  - This is the root module of the application, defined in `app.module.ts`.

  - It serves as the entry point to the application's module system and organizes the application's structure. It contains imports, controllers, and providers for the app.

  - <audio src="..\..\mp3\2024年12月15日20点16分.mp3"></audio>

---

### **2. The `bootstrap` Function**
The `bootstrap` function is an `async` function that initializes the application.

#### **Steps Inside `bootstrap`**:

1. **Create the Application Instance**:
   ```typescript
   const app = await NestFactory.create(AppModule);
   ```
   - `NestFactory.create(AppModule)`:
     - This creates a new Nest.js application instance based on the `AppModule`.
     - The `AppModule` defines the controllers, services, and other application modules that the app will use.

   - `await` ensures that the application is fully initialized before proceeding to the next step.

2. **Start the Application**:
   ```typescript
   await app.listen(process.env.PORT ?? 3000);
   ```
   - `app.listen(port)`:
     - This starts the HTTP server and makes the application listen for incoming requests on the specified port.
   - `process.env.PORT ?? 3000`:
     - The application will use the port specified in the `PORT` environment variable (if available). Otherwise, it defaults to port `3000`.

3. **Call the `bootstrap` Function**:
   ```typescript
   bootstrap();
   ```
   - This invokes the `bootstrap` function, kicking off the application initialization process.

---

### **3. Purpose of `main.ts`**
The `main.ts` file is central to the initialization and startup of a Nest.js application. Its responsibilities include:

1. **Creating the Nest.js Application**:
   - It uses the `AppModule` as the root module to instantiate the application.

2. **Configuring the Application** (optional):
   - Middleware, global pipes, guards, interceptors, or other configurations can be added here before the app starts.
     Example:
     ```typescript
     app.useGlobalPipes(new ValidationPipe());
     ```

3. **Starting the HTTP Server**:
   - The application listens for incoming HTTP requests on the specified port.

---

### **4. Example Output**
When you run the application (e.g., using `npm run start`), the `main.ts` file executes, and the application starts listening for requests:

- If `PORT=4000` is set as an environment variable:
  ```
  Application is running on: http://localhost:4000
  ```
  
- If no `PORT` is set:
  ```
  Application is running on: http://localhost:3000
  ```

---

### **5. Adding Custom Logic (Optional Enhancements)**

You can customize the bootstrap logic to add features like CORS, global middleware, or validation. For example:

```typescript
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS
  app.enableCors();

  // Add a global validation pipe for DTO validation
  app.useGlobalPipes(new ValidationPipe());

  // Listen on a specific port
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
```

---

### **Summary**

<audio src="..\..\mp3\2024年12月15日20点20分.mp3"></audio>

- The `main.ts` file is the entry point of a Nest.js application.
- It bootstraps the application by creating an instance of the app using `AppModule` and starts listening for requests on the specified port.
- You can add custom configurations (e.g., enable CORS, add middleware) before starting the server.

This file integrates all the application modules, services, and controllers into a running HTTP server.