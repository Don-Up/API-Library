Here’s a list of commonly used commands and concepts for working with **Nest.js**:

------

### 1. **Nest CLI Commands**

The Nest CLI simplifies the development process by automating common tasks. Install the CLI with:

```bash
npm install -g @nestjs/cli
```

#### **General Commands**

- **Create a new project**

  ```bash
  nest new project-name
  ```

  Initializes a new Nest.js project.

- **Generate an application resource**

  ```bash
  nest g <resource> <name>
  ```

  Examples:

  ```bash
  nest g controller users
  nest g service users
  nest g module users
  nest g class dto/create-user.dto
  nest g interface interfaces/user.interface
  ```

- **Build the application**

  ```bash
  nest build
  ```

- **Run the application**

  ```bash
  npm run start
  npm run start:dev   # Enable hot-reloading for development
  npm run start:prod  # Run in production mode
  ```

- **Test the application**

  ```bash
  npm run test         # Run unit tests
  npm run test:e2e     # Run end-to-end tests
  npm run test:cov     # Check test coverage
  ```

------

### 2. **Command Options**

Most CLI commands support options to customize the behavior:

- **Dry Run**:
   Add `--dry-run` to preview the command output without making changes.
   Example:

  ```bash
  nest g module orders --dry-run
  ```

- **Skip Tests**:
   Add `--no-spec` to skip generating a test file.
   Example:

  ```bash
  nest g service orders --no-spec
  ```

- **Flat Structure**:
   Add `--flat` to prevent creating a subdirectory for the generated file.
   Example:

  ```bash
  nest g class orders --flat
  ```

------

### 3. **Scripts in `package.json`**

Nest.js projects typically include the following scripts:

- **Start in watch mode**:

  ```bash
  npm run start:dev
  ```

- **Start in production mode**:

  ```bash
  npm run start:prod
  ```

- **Format code**:

  ```bash
  npm run format
  ```

------

### 4. **Advanced Commands**

- **Generate a middleware**:

  ```bash
  nest g middleware logging
  ```

- **Generate a guard**:

  ```bash
  nest g guard auth
  ```

- **Generate an interceptor**:

  ```bash
  nest g interceptor transform
  ```

- **Generate a pipe**:

  ```bash
  nest g pipe validation
  ```

- **Generate a decorator**:

  ```bash
  nest g decorator roles
  ```

- **Generate a filter**:

  ```bash
  nest g filter http-exception
  ```

- **Generate a library**:

  ```bash
  nest g library shared
  ```

------

### 5. **Utility Commands**

- **Add a package to your project**:

  ```bash
  nest add <package>
  ```

  Example:

  ```bash
  nest add @nestjs/graphql
  ```

- **Update CLI dependencies**:

  ```bash
  nest update
  ```

------

This list covers most of the common commands used in Nest.js development. Let me know if you need further assistance!