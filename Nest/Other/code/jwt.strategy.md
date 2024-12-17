```ts
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      // Extract token from Authorization header
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), 
      ignoreExpiration: false, // Reject expired tokens
      secretOrKey: 'SECRET_KEY', // Secret key to validate the token
    });
  }

  async validate(payload: any) {
    // Return the payload data (e.g., user ID, email, roles)
    return { userId: payload.sub, username: payload.username };
  }
}
```

The given code defines a **JWT strategy** for authentication in a **NestJS application**. Let's break it down:

### 1. **Imports**

<audio src="..\..\..\mp3\19点43分.mp3"></audio>

```ts
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
```

- **`@nestjs/common`**: Provides decorators and utilities for NestJS.
- **`@nestjs/passport`**: Integrates the Passport.js library with NestJS.
- `passport-jwt`: Passport.js module for handling JWT authentication.
  - `ExtractJwt`: Helper function to extract the JWT token from incoming requests.
  - `Strategy`: The JWT strategy implementation for Passport.js.

> **Passport.js** is an **authentication middleware** for Node.js, offering a simple, flexible way to handle user authentication. 
>
> It supports various strategies like **local**, **OAuth**, and **OpenID**, enabling integration with multiple authentication providers. 
>
> By separating application logic from authentication, Passport.js simplifies secure login, session handling, and user management in web applications.
>
> <audio src="../../mp3/../Downloads/__Passport js__.mp3"></audio>

------

### 2. **`@Injectable()` Decorator**

- Marks the `JwtStrategy` class as a provider, allowing it to be injected into other parts of the application using dependency injection.

> You can read @Injectable as an employee license.

------

### 3. **Class Definition: `JwtStrategy`**

<audio src="..\..\..\mp3\2024年12月15日19点56分.mp3"></audio>

```ts
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      // Extract token from Authorization header
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), 
      ignoreExpiration: false, // Reject expired tokens
      secretOrKey: 'SECRET_KEY', // Secret key to validate the token
    });
  }
  // ...
}
```

This class extends `PassportStrategy` and customizes the behavior of the Passport.js JWT strategy.

#### **Constructor**

- The constructor calls `super` with configuration options for the JWT strategy:

  1. `jwtFromRequest`

     : Specifies how the JWT token will be extracted from the request.

     - `ExtractJwt.fromAuthHeaderAsBearerToken()`: Extracts the token from the `Authorization` header in the format `Bearer <token>`.

  2. **`ignoreExpiration`**: If `false`, expired tokens will be rejected.

  3. **`secretOrKey`**: The secret key used to validate the JWT signature. Replace `'SECRET_KEY'` with a secure value in production (e.g., an environment variable).

------

### 4. **`validate(payload: any)`**

<audio src="..\..\..\mp3\2024年12月15日19点59分.mp3"></audio>

```ts
  async validate(payload: any) {
    // Return the payload data (e.g., user ID, email, roles)
    return { userId: payload.sub, username: payload.username };
  }
```

- This method is called automatically when a valid JWT is received.
- The `payload` is the decoded data from the JWT, typically containing claims such as:
  - **`sub`**: Subject of the token (commonly the user's ID).
  - **Other claims**: E.g., username, roles, etc.
- The method returns a simplified user object with `userId` and `username`, which is then made available in the request context (`req.user`).

------

### **How It Works in Authentication**

<audio src="..\..\..\mp3\1. Client sends.mp3"></audio>

1. Client sends a request with a JWT:
   - Authorization header: `Authorization: Bearer <JWT>`
2. JWT strategy extracts the token:
   - Validates it using the secret key and checks expiration.
3. If valid:
   - The `validate` method processes the payload.
   - Returns the user data (e.g., `userId`, `username`), which can be accessed in route handlers or guards.
4. If invalid or expired:
   - The request is rejected with an unauthorized error.

------

### **Typical Use Case**

<audio src="..\..\..\mp3\2024年12月15日20点05分.mp3"></audio>

This `JwtStrategy` class would be used in conjunction with **Guards** (e.g., `AuthGuard('jwt')`) to secure routes. 

```typescript
import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('protected')
export class ProtectedController {
  @Get()
  @UseGuards(AuthGuard('jwt')) // Use the JWT strategy
  getProtectedData() {
    return { message: 'You have access to protected data!' };
  }
}
```

In this setup:

- Requests to `/protected` must include a valid JWT token.
- The token is validated using the `JwtStrategy`.

------

### Key Points to Improve Security

<audio src="..\..\..\mp3\2024年12月15日20点05分 (2).mp3"></audio>

1. Store `SECRET_KEY` securely:
   - Use environment variables or a secret management system.
2. Token expiration:
   - Ensure tokens have a reasonable expiration time.
3. Handle errors:
   - Add proper error handling for expired or malformed tokens.