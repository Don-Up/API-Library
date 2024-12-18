### **Configuration Management in Nest.js**

<audio src="../../mp3/Configuration m.mp3"></audio>

Configuration management is a critical part of any application, especially when dealing with environment-specific settings like database credentials, API keys, or application secrets. Nest.js provides the `@nestjs/config` package to simplify configuration management and allow seamless access to environment variables across your application.

---

### **Key Features of `@nestjs/config`**

<audio src="../../mp3/1. __Centralize.mp3"></audio>

1. **Centralized Configuration**: Manage all environment variables and settings in one place.
2. **Environment-Specific Settings**: Load different configurations for different environments (`.env` files).
3. **Validation**: Validate environment variables to ensure necessary settings are defined.
4. **Type-Safe Access**: Safely access variables using TypeScript features.

---

### **Setup and Usage**

#### **1. Install the `@nestjs/config` Package**

To start using the `@nestjs/config` package, install it along with `dotenv` (for parsing `.env` files):

```bash
npm install @nestjs/config
```

---

#### **2. Create `.env` Files**

<audio src="../../mp3/Environment var.mp3"></audio>

Environment variables are typically stored in a `.env` file in the root of your project. These files should not be committed to version control systems (add them to `.gitignore`).

Example `.env` file:

```env
# Application settings
APP_PORT=3000
APP_ENV=development

# Database credentials
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=admin
DB_PASSWORD=secret
DB_NAME=mydatabase
```

---

#### **3. Import the `ConfigModule`**

<audio src="../../mp3/The `ConfigModu.mp3"></audio>

The `ConfigModule` from `@nestjs/config` handles loading and parsing the `.env` file. Import and configure it in your app's root module (`AppModule`).

##### 什么是 ConfigModule？

<audio src="../../mp3/ConfigModule 是 .mp3"></audio>

##### 主要步骤

<audio src="../../mp3/1, 引入 ConfigMod.mp3"></audio>

```typescript
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Makes configuration globally available across the app
      envFilePath: '.env', // Specify the path to your .env file (default is .env)
    }),
  ],
})
export class AppModule {}
```

---

#### **4. Access Configuration Values**

<audio src="../../mp3/You can access .mp3"></audio>

You can access environment variables using the `ConfigService`, which is provided by the `@nestjs/config` package. Inject the `ConfigService` wherever you need it.

##### Example: Using `ConfigService` in a Service

##### 什么是 ConfigService？

<audio src="../../mp3/ConfigService 是.mp3"></audio>

##### 如何在 Service 中使用 `ConfigService`？

<audio src="../../mp3/1, 依赖注入 ConfigS.mp3"></audio>

```typescript
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private readonly configService: ConfigService) {}

  getPort(): number {
    return this.configService.get<number>('APP_PORT'); // Access the APP_PORT variable
  }

  getDatabaseConfig() {
    return {
      host: this.configService.get<string>('DB_HOST'),
      port: this.configService.get<number>('DB_PORT'),
      username: this.configService.get<string>('DB_USERNAME'),
      password: this.configService.get<string>('DB_PASSWORD'),
      database: this.configService.get<string>('DB_NAME'),
    };
  }
}
```

##### Example: Using `ConfigService` in a Controller

##### 如何在 Controller 中使用 ConfigService？

<audio src="../../mp3/1, 依赖注入 ConfigS (1).mp3"></audio>

```typescript
import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Controller()
export class AppController {
  constructor(private readonly configService: ConfigService) {}

  @Get('/config')
  getConfig() {
    return {
      appPort: this.configService.get<number>('APP_PORT'),
      environment: this.configService.get<string>('APP_ENV'),
    };
  }
}
```

---

### **Advanced Configuration**

#### **1. Load Multiple `.env` Files**

<audio src="../../mp3/You can load di.mp3"></audio>

You can load different `.env` files for different environments (e.g., `development`, `production`, `test`) by specifying the file in `envFilePath`.

<audio src="../../mp3/在 ConfigModule .mp3"></audio>

```typescript
ConfigModule.forRoot({
  isGlobal: true,
  envFilePath: `.env.${process.env.NODE_ENV || 'development'}`, // Load environment-specific .env files
});
```

For example:
- `.env.development` for development
- `.env.production` for production

---

#### **2. Define Default Values**

<audio src="../../mp3/If an environme.mp3"></audio>

If an environment variable is not defined, you can provide a default value using the `get()` method.

```typescript
const appPort = this.configService.get<number>('APP_PORT', 3000); // Default to 3000
```

---

#### **3. Validate Environment Variables**

Use the `validate()` method with **Joi** (a popular validation library) to ensure that **your environment variables meet certain criteria**.

##### Step 1: Install Joi

```bash
npm install joi
```

##### Step 2: Add Validation to `ConfigModule`

<audio src="../../mp3/如何实现环境变量验证？通过 C.mp3"></audio>

```typescript
import * as Joi from 'joi';

ConfigModule.forRoot({
  isGlobal: true,
  envFilePath: `.env.${process.env.NODE_ENV || 'development'}`,
  validationSchema: Joi.object({
    APP_PORT: Joi.number().default(3000),
    APP_ENV: Joi.string().valid('development', 'production', 'test').default('development'),
    DB_HOST: Joi.string().required(),
    DB_PORT: Joi.number().required(),
    DB_USERNAME: Joi.string().required(),
    DB_PASSWORD: Joi.string().required(),
    DB_NAME: Joi.string().required(),
  }),
});
```

If the `.env` file is missing a required variable or a variable is invalid, an error will be thrown at runtime.

---

#### **4. Use Configuration Namespaces**

You can define configuration namespaces for grouping related settings (e.g., database settings, app settings).

##### 什么是配置命名空间？

<audio src="../../mp3/配置命名空间是一种组织和分类环.mp3"></audio>

##### Step 1: Create a Configuration File

<audio src="../../mp3/创建配置文件. 将配置分组逻辑.mp3"></audio>

Create a file (e.g., `database.config.ts`) to define the database configuration.

```typescript
export default () => ({
  database: {
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    name: process.env.DB_NAME,
  },
});
```

##### Step 2: Register the Configuration File

<audio src="../../mp3/注册配置文件. 在 AppMo.mp3"></audio>

Register the configuration file using `ConfigModule.forRoot()`.

```typescript
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import databaseConfig from './config/database.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfig], // Load configuration from the file
    }),
  ],
})
export class AppModule {}
```

##### Step 3: Access Namespaced Configuration

<audio src="../../mp3/访问命名空间中的配置.  使用.mp3"></audio>

Access the nested configuration values using `ConfigService`.

```typescript
const dbConfig = this.configService.get('database'); // Get the entire "database" namespace
const dbHost = this.configService.get('database.host'); // Get a specific property
```

---

### **Best Practices**

<audio src="../../mp3/1. __Use Enviro.mp3"></audio>

1. **Use Environment-Specific `.env` Files**:
   - Use different `.env` files for different environments (e.g., `.env.development`, `.env.production`).

2. **Validate Environment Variables**:
   - Ensure that required variables are defined using validation schemas.

3. **Avoid Hardcoding Configuration**:
   - Always use the `ConfigService` to access environment variables. This abstracts the source of the configuration and makes your app more flexible.

4. **Use Namespaces for Large Configurations**:
   - Group related settings (e.g., database, API, storage) into namespaces for better organization.

5. **Avoid Committing `.env` Files**:
   - Add `.env` to `.gitignore` to prevent sensitive information (e.g., API keys, database credentials) from being committed to version control.

6. **Use Secrets Management for Production**:
   - Use tools like AWS Secrets Manager, HashiCorp Vault, or Kubernetes Secrets for managing sensitive configuration in production.

---

### **Example: Full Configuration Setup**

#### **.env**

```env
APP_PORT=3000         # 应用监听的端口
APP_ENV=development   # 应用运行的环境（如开发、生产）
DB_HOST=localhost     # 数据库主机地址
DB_PORT=5432          # 数据库端口
DB_USERNAME=admin     # 数据库用户名
DB_PASSWORD=secret    # 数据库密码
DB_NAME=mydatabase    # 数据库名称
```

#### **AppModule**

<audio src="../../mp3/AppModule是应用的主模.mp3"></audio>

```typescript
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import databaseConfig from './config/database.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Make configuration globally available
      envFilePath: `.env.${process.env.NODE_ENV || 'development'}`, // Load environment-specific .env file
      load: [databaseConfig], // Load custom configuration
      validationSchema: Joi.object({
        APP_PORT: Joi.number().default(3000),
        APP_ENV: Joi.string().valid('development', 'production', 'test').default('development'),
        DB_HOST: Joi.string().required(),
        DB_PORT: Joi.number().required(),
        DB_USERNAME: Joi.string().required(),
        DB_PASSWORD: Joi.string().required(),
        DB_NAME: Joi.string().required(),
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```

#### **Access Configuration**

<audio src="../../mp3/AppService 使用 C.mp3"></audio>

```typescript
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private readonly configService: ConfigService) {}

  getDatabaseInfo() {
    return this.configService.get('database'); // Access namespaced configuration
  }
}
```

This setup ensures a clean, organized, and scalable configuration management strategy for your Nest.js application.