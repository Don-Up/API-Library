# Authentication and Authorization in Next.js

<audio src="..\mp3\2024年12月19日18点47分.mp3"></audio>

Authentication and authorization are crucial for securing your application and ensuring that users have access to the correct resources. **Authentication** verifies a user's identity (e.g., logging in), while **authorization** determines what a user is allowed to do (e.g., accessing specific pages, performing actions).

Next.js provides a flexible foundation for implementing both authentication and authorization, enabling you to use strategies like **session-based authentication**, **JWTs (JSON Web Tokens)**, **OAuth**, **Third-party providers (e.g., Google, Facebook)**, and more.

---

## **Objective**

<audio src="..\mp3\2024年12月19日18点49分.mp3"></audio>

The goal of this section is to:

1. Understand the difference between authentication and authorization.
2. Learn about different authentication strategies in Next.js.
3. Discover how to protect pages and API routes.
4. Explore tools like **NextAuth.js**, **JWTs**, and custom authentication flows.
5. Learn how to integrate authentication securely and efficiently.

By the end, you'll be equipped to handle user authentication and authorization in your Next.js applications.

---

## **1. Authentication vs. Authorization**

<audio src="..\mp3\2024年12月19日18点57分.mp3"></audio>

### **Authentication**
- Focuses on verifying **who the user is**.
- Examples:
  - Logging in with a username and password.
  - Signing in with third-party providers like Google or GitHub.

### **Authorization**
- Focuses on determining **what the authenticated user can do**.
- Examples:
  - Granting access to admin-only pages.
  - Restricting API endpoints to authorized users.

---

## **2. Authentication Strategies in Next.js**

<audio src="..\mp3\2024年12月19日19点04分.mp3"></audio>

Next.js allows you to implement various authentication strategies depending on your requirements. Some common strategies include:

### **2.1 Session-Based Authentication**
- Stores user session data (e.g., user ID) in a cookie or on the server.
- Requires a backend to manage sessions.
- Best for applications where user data is sensitive or persistent sessions are required.

---

### **2.2 Token-Based Authentication**
- Uses tokens (e.g., JSON Web Tokens - JWTs) to authenticate users.
- Tokens are stored in cookies or in localStorage.
- Stateless: No need for server-side session management.

---

### **2.3 OAuth Authentication**
- Allows users to log in using third-party providers like Google, Facebook, or GitHub.
- Tokens are issued by the provider and used to authenticate users.
- Can be implemented using libraries like **NextAuth.js**.

---

### **2.4 Custom Authentication**
- You can implement your own authentication system using API routes in Next.js.
- Typically involves a database to store user credentials and custom logic for login, signup, and session management.

---

## **3. Implementing Authentication in Next.js**

### **3.1 Using NextAuth.js**

[NextAuth.js](https://next-auth.js.org/) is a popular library for authentication in Next.js. It supports multiple authentication methods, including social login, email/password, and custom credentials.

#### **Step 1: Install NextAuth.js**
```bash
npm install next-auth
```

#### **Step 2: Create an API Route for NextAuth**
Create a file at `pages/api/auth/[...nextauth].js`:

<audio src="..\mp3\2024年12月19日19点14分.mp3"></audio>

```javascript
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      session.user.id = token.sub;
      return session;
    },
  },
});
```

#### **Step 3: Protect Pages**

<audio src="..\mp3\2024年12月19日19点23分.mp3"></audio>

Use the `useSession` hook from NextAuth to check the user's login status:

```javascript
import { useSession, signIn, signOut } from 'next-auth/react';

export default function Home() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div>
        <p>You are not signed in.</p>
        <button onClick={() => signIn()}>Sign In</button>
      </div>
    );
  }

  return (
    <div>
      <p>Welcome, {session.user.name}</p>
      <button onClick={() => signOut()}>Sign Out</button>
    </div>
  );
}
```

#### **Step 4: Protect API Routes**
You can protect API routes using `getServerSession`:

<audio src="..\mp3\2024年12月19日19点26分.mp3"></audio>

```javascript
import { getServerSession } from 'next-auth';
import { authOptions } from './auth/[...nextauth]';

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  res.status(200).json({ message: 'Protected data' });
}
```

---

### **3.2 Custom Authentication (Using JWTs)**

If you prefer a custom authentication strategy, you can implement JWT-based authentication using API routes.

#### **Step 1: Create Signup and Login Endpoints**
Create `pages/api/auth/signup.js` and `pages/api/auth/login.js`:

**Signup Endpoint:**

<audio src="..\mp3\2024年12月19日19点29分.mp3"></audio>

```javascript
import bcrypt from 'bcrypt';
import { query } from '../../lib/db'; // Example for database queries

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end(); // Method Not Allowed
  }

  const { email, password } = req.body;

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Save user in the database
  await query('INSERT INTO users (email, password) VALUES (?, ?)', [email, hashedPassword]);

  res.status(201).json({ message: 'User created' });
}
```

**Login Endpoint:**

<audio src="..\mp3\2024年12月19日19点32分.mp3"></audio>

```javascript
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { query } from '../../lib/db'; // Example for database queries

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { email, password } = req.body;

  // Fetch user from database
  const user = await query('SELECT * FROM users WHERE email = ?', [email]);

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  // Generate JWT
  const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });

  res.status(200).json({ token });
}
```

---

#### **Step 2: Protect Pages**
Use the `getServerSideProps` function to verify the user's JWT and protect server-rendered pages:

<audio src="..\mp3\2024年12月19日19点34分.mp3"></audio>

```javascript
import jwt from 'jsonwebtoken';

export async function getServerSideProps({ req }) {
  const token = req.cookies.token; // Assuming token is stored in cookies

  if (!token) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return { props: {} };
}

export default function ProtectedPage() {
  return <h1>This is a protected page</h1>;
}
```

---

### **3.3 Middleware for Route Protection**
You can use middleware in Next.js to protect routes dynamically.

**Example: Authentication Middleware**

<audio src="..\mp3\2024年12月19日19点37分.mp3"></audio>

```javascript
import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export function middleware(req) {
  const token = req.cookies.get('token')?.value;

  if (!token) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/protected/:path*'], // Apply middleware to specific routes
};
```

---

## **4. Authorization in Next.js**

Once a user is authenticated, you can implement **role-based** or **permission-based** access control to manage authorization.

### **Role-Based Authorization**
Assign roles to users (e.g., `admin`, `user`) and restrict access based on their roles.

**Example: Restricting Admin Pages**

<audio src="..\mp3\2024年12月19日19点40分.mp3"></audio>

```javascript
export async function getServerSideProps({ req }) {
  const token = req.cookies.token;
  const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

  if (decodedToken.role !== 'admin') {
    return {
      redirect: {
        destination: '/unauthorized',
        permanent: false,
      },
    };
  }

  return { props: {} };
}

export default function AdminPage() {
  return <h1>Admin Dashboard</h1>;
}
```

---

### **Permission-Based Authorization**
Instead of roles, assign specific permissions to users and check for those permissions.

**Example: Permission Check**

<audio src="..\mp3\2024年12月19日19点42分.mp3"></audio>

```javascript
const userPermissions = ['read', 'write']; // Fetched from the database

if (!userPermissions.includes('admin')) {
  return res.status(403).json({ message: 'Forbidden' });
}
```

---

## **5. Best Practices for Authentication**

<audio src="..\mp3\2024年12月19日19点44分.mp3"></audio>

1. **Use Secure Password Storage**:
   - Always hash passwords using a library like `bcrypt`.

2. **Use HTTPS**:
   - Ensure your application is served over HTTPS to protect sensitive data.

3. **Token Expiration**:
   - Use short-lived tokens and refresh them periodically.

4. **Store Tokens Securely**:
   - Use `httpOnly` cookies for storing tokens to prevent XSS attacks.

5. **Protect API Routes**:
   - Validate user tokens or sessions before processing requests.

6. **Rate Limiting**:
   - Implement rate limiting to prevent brute force attacks.

---

## **6. Summary**

<audio src="..\mp3\2024年12月19日19点45分.mp3"></audio>

Next.js provides a flexible foundation for implementing authentication and authorization. Whether you choose a library like **NextAuth.js** for simplicity or build a custom solution with **JWTs** and API routes, Next.js makes it easy to secure your application. By combining authentication with role-based or permission-based authorization, you can create robust, secure, and user-friendly applications tailored to your specific requirements. Always follow best practices to ensure the security and scalability of your authentication system.