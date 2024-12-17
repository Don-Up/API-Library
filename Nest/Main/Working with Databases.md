### **Working with Databases in Nest.js**

<audio src="../../mp3/When building a.mp3"></audio>

When building applications in **Nest.js**, integrating with a database is one of the most critical steps. Nest.js provides flexibility for working with various databases through different tools and ORMs (Object-Relational Mappers) such as **Prisma**, **TypeORM**, and **Mongoose**. In this context, we’ll focus on using **Prisma** and its capabilities for connecting to databases, defining entities and relationships, and performing database operations.

---

### **1. What is Prisma?**

<audio src="../../mp3/__Prisma__ is a.mp3"></audio>

**Prisma** is a modern **ORM** (Object-Relational Mapping) tool that simplifies database access by providing:

- A **type-safe, auto-generated query API**.
- Support for both relational databases (e.g., PostgreSQL, MySQL, SQLite) and non-relational databases like MongoDB.
- Easy-to-manage **schema-based migrations**.
- A declarative way to define your database schema using the `Prisma Schema`.

Prisma integrates seamlessly with Nest.js, making it a popular choice for database management in modern applications.

---

### **2. Setting up Prisma in a Nest.js Application**

#### **Step 1: Install Prisma and its CLI**

<audio src="../../mp3/Step 1_ Install.mp3"></audio>

First, you need to install the required Prisma packages:

```bash
npm install prisma --save-dev
npm install @prisma/client
```

- **`prisma`**: The Prisma CLI for managing schemas and migrations.
- **`@prisma/client`**: The auto-generated client to interact with your database.

#### **Step 2: Initialize Prisma**

<audio src="../../mp3/__Step 2_ Initi.mp3"></audio>

Run the following command to initialize Prisma in your project:

```bash
npx prisma init
```

This command creates a new `prisma` folder in your project with the following files:

- **`schema.prisma`**: The main Prisma schema file where you define your database models, relationships, and configurations.
- **`.env`**: The environment file to store the database connection URL.

#### **Step 3: Configure the Database Connection**

<audio src="../../mp3/__Step 3_ Confi.mp3"></audio>

In the `.env` file, add your database connection string. For example, if you are using **MongoDB**:

```env
DATABASE_URL="mongodb+srv://username:password@cluster.mongodb.net/mydatabase?retryWrites=true&w=majority"
```

Update the `datasource` section in the `schema.prisma` file to reflect the database provider (e.g., `mongodb`):

<audio src="../../mp3/这段代码展示了 schema .mp3"></audio>

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mongodb"
  url      = env("DATABASE_URL")
}
```

---

### **3. Connecting to MongoDB**

<audio src="../../mp3/To connect Pris.mp3"></audio>

To connect Prisma to **MongoDB**, ensure the `DATABASE_URL` in the `.env` file points to your MongoDB instance. Prisma will automatically handle the connection when you run the `prisma generate` command.

#### **Step 1: Defining Models**

<audio src="../../mp3/Step 1_ Definin.mp3"></audio>

In the `schema.prisma` file, define your models (entities). For example:

<audio src="../../mp3/这段代码展示了如何在 sche.mp3"></audio>

```prisma
model User {
  id    String @id @default(auto()) @map("_id") @db.ObjectId
  name  String
  email String @unique
  posts Post[]
}

model Post {
  id       String   @id @default(auto()) @map("_id") @db.ObjectId
  title    String
  content  String
  author   User     @relation(fields: [authorId], references: [id])
  authorId String   @db.ObjectId
}
```

- **`User`** and **`Post`** are entities (models) in the application.
- **Relationships**:
  - A `User` can have multiple `Post`s.
  - Each `Post` is associated with one `User` (author).

#### **Step 2: Generating the Prisma Client**

<audio src="../../mp3/__Step 2_ Gener.mp3"></audio>

Run the following command to generate the Prisma client based on the schema:

```bash
npx prisma generate
```

This creates a set of type-safe database operations in the `node_modules/@prisma/client` directory, which you can use in your application for querying the database.

---

### **4. Defining Entities, Relationships, and Migrations**

#### **Entities**

<audio src="../../mp3/Entities in Pri.mp3"></audio>

Entities in Prisma are defined as models in the `schema.prisma` file. Each model maps to a collection (for MongoDB) or a table (for relational databases). Use the following annotations to define entities:

- **`@id`**: Marks a field as the primary key.
- **`@unique`**: Ensures a field's value is unique across all records.
- **`@relation`**: Specifies relationships between entities.
- **`@default`**: Sets default values for fields.

#### **Relationships**

Relationships are defined using the `@relation` attribute. For example:

- **One-to-Many Relationship** (e.g., one user has many posts):
  
  <audio src="../../mp3/这段代码展示了 Prisma .mp3"></audio>
  
  ```prisma
  model User {
    id    String @id @default(auto()) @map("_id") @db.ObjectId
    posts Post[]
  }
  
  model Post {
    id       String   @id @default(auto()) @map("_id") @db.ObjectId
    author   User     @relation(fields: [authorId], references: [id])
    authorId String   @db.ObjectId
  }
  ```
  
- **One-to-One Relationship**:
  
  <audio src="../../mp3/这段代码展示了 Prisma  (1).mp3"></audio>
  
  ```prisma
  model Profile {
    id     String @id @default(auto()) @map("_id") @db.ObjectId
    bio    String
    user   User   @relation(fields: [userId], references: [id])
    userId String @db.ObjectId
  }
  
  model User {
    id      String   @id @default(auto()) @map("_id") @db.ObjectId
    profile Profile?
  }
  ```

#### **Migrations**

<audio src="../../mp3/Migrations in P.mp3"></audio>

Migrations in Prisma are used to synchronize your Prisma schema with the actual database schema. To create a new migration, run:

```bash
npx prisma migrate dev --name init
```

This command:
- Creates a new migration file in the `prisma/migrations` directory.
- Applies the migration to the database.

---

### **5. Using Repositories for Database Queries**

In Nest.js, you can use the Prisma client as a repository for executing database queries. Here's how you can integrate Prisma with a typical service in Nest.js:

#### **Step 1: Create a Prisma Service**

Create a service to encapsulate Prisma's functionality.

```typescript
import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
```

- **`$connect`**: Establishes a connection to the database.
- **`$disconnect`**: Closes the database connection.

#### **Step 2: Use Prisma Service in a Module**

Register the Prisma service in your module:

```typescript
import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
  providers: [PrismaService, UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
```

#### **Step 3: Query the Database in a Service**

Use the Prisma client to perform CRUD operations in your service:

```typescript
import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async createUser(data: { name: string; email: string }) {
    return this.prisma.user.create({
      data,
    });
  }

  async getAllUsers() {
    return this.prisma.user.findMany();
  }

  async getUserById(id: string) {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }
}
```

#### **Step 4: Expose the Service through a Controller**

Expose the database queries through RESTful endpoints:

```typescript
import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  createUser(@Body() data: { name: string; email: string }) {
    return this.usersService.createUser(data);
  }

  @Get()
  getAllUsers() {
    return this.usersService.getAllUsers();
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    return this.usersService.getUserById(id);
  }
}
```

---

### **6. Benefits of Using Prisma**

- **Type Safety**: The Prisma client is auto-generated and provides full type safety for all database queries.
- **Ease of Use**: Simplifies database management with schema migrations and declarative schema definitions.
- **Cross-Database Support**: Works with relational and non-relational databases, including MongoDB, PostgreSQL, and MySQL.
- **Performance**: Prisma is optimized for performance, leveraging efficient query generation.

---

### **Conclusion**

When working with databases in **Nest.js**, **Prisma** provides a modern, type-safe, and developer-friendly way to manage your database. By defining your schema declaratively, using migrations to keep your database in sync, and leveraging the Prisma client for database queries, you can build scalable and maintainable applications. Whether you're using MongoDB, PostgreSQL, or another database, Prisma integrates seamlessly into your Nest.js application to simplify database operations.