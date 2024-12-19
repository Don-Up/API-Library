### **WebSockets in NestJS**

<audio src="C:\Users\10691\Downloads\WebSockets enab.mp3"></audio>

WebSockets enable real-time, bidirectional communication between clients and servers, making them ideal for applications like chat systems, notifications, live updates, or multiplayer games. NestJS provides built-in support for WebSockets through the `@nestjs/websockets` package, along with decorators and tools to make implementation smooth and scalable.

---

### **1. Setting Up WebSockets with `@nestjs/websockets`**

To implement WebSocket functionality in a NestJS app, you'll use the `@nestjs/websockets` package, which comes **pre-installed** with the NestJS framework.

---

#### **1.1 Example Use Case: Chat Application**

Let’s build a basic **chat application** where users can send and receive messages in real-time.

---

### **2. Create a WebSocket Gateway**

A WebSocket gateway in NestJS acts as a bridge between WebSocket events and the server-side logic.

#### **Step 1: Generate a Gateway**

Use the Nest CLI to generate a WebSocket gateway:

```bash
nest generate gateway chat
```

This creates a file like `chat.gateway.ts` with a basic structure.

---

#### **Step 2: Implement the Gateway**

Here’s how you can implement a WebSocket Gateway for a chat app:

<audio src="C:\Users\10691\Downloads\2024年12月20日02点12分.mp3"></audio>

```typescript
import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*', // Allow all origins for simplicity (adjust for production)
  },
})
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server; // Reference to the WebSocket server

  private connectedUsers: Set<string> = new Set(); // Store connected user IDs

  async handleConnection(socket: Socket) {
    console.log(`Client connected: ${socket.id}`);
    this.connectedUsers.add(socket.id);
    this.server.emit('users', Array.from(this.connectedUsers)); // Notify clients of connected users
  }

  async handleDisconnect(socket: Socket) {
    console.log(`Client disconnected: ${socket.id}`);
    this.connectedUsers.delete(socket.id);
    this.server.emit('users', Array.from(this.connectedUsers)); // Notify clients of updated user list
  }

  @SubscribeMessage('message') // Handle "message" events from clients
  handleMessage(
    @MessageBody() data: { sender: string; message: string },
    @ConnectedSocket() socket: Socket,
  ) {
    console.log(`Received message from ${data.sender}: ${data.message}`);
    this.server.emit('message', data); // Broadcast the message to all clients
  }
}
```

#### **Explanation**

<audio src="C:\Users\10691\Downloads\2024年12月20日02点14分.mp3"></audio>

1. **`@WebSocketGateway`**:
   - Decorator for defining a WebSocket gateway.
   - The `cors` option allows cross-origin WebSocket connections (useful for frontend apps).

2. **`@WebSocketServer()`**:
   - Gives access to the underlying WebSocket server (`socket.io` in this case).

3. **`handleConnection`**:
   - Triggered when a client connects to the WebSocket server.
   - Adds the connected client to a list of users and notifies all clients about the updated list.

4. **`handleDisconnect`**:
   - Triggered when a client disconnects.
   - Removes the client from the connected users list and notifies all clients.

5. **`@SubscribeMessage()`**:
   - Listens for specific events from the client (e.g., `message` in this case).
   - Processes the event and broadcasts it to all connected clients.

6. **Broadcast Messages**:
   - `this.server.emit('eventName', data)` broadcasts messages to all connected clients.

---

### **3. Frontend Implementation**

To interact with the WebSocket server, you can use a frontend library like `socket.io-client`.

#### **Install `socket.io-client`**

```bash
npm install socket.io-client
```

#### **Basic Frontend for Chat**

<audio src="C:\Users\10691\Downloads\2024年12月20日02点23分.mp3"></audio>

Here’s an example of how to connect to the WebSocket server and send/receive messages in a React app:

```javascript
import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const socket = io('http://localhost:3000'); // Connect to WebSocket server

const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Listen for "message" events
    socket.on('message', (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    // Listen for "users" events (connected users)
    socket.on('users', (userList) => {
      setUsers(userList);
    });

    // Cleanup on component unmount
    return () => {
      socket.off('message');
      socket.off('users');
    };
  }, []);

  const sendMessage = () => {
    socket.emit('message', { sender: 'User', message }); // Send message to server
    setMessage(''); // Clear input
  };

  return (
    <div>
      <h1>Chat App</h1>
      <div>
        <h2>Connected Users</h2>
        <ul>
          {users.map((user, index) => (
            <li key={index}>{user}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Messages</h2>
        <ul>
          {messages.map((msg, index) => (
            <li key={index}>
              <strong>{msg.sender}: </strong>
              {msg.message}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter your message"
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatApp;
```

---

### **4. Enhancements for Real-World Applications**

#### **4.1 Authentication**

- Use WebSocket middleware to authenticate users during the connection phase.

<audio src="C:\Users\10691\Downloads\2024年12月20日02点26分.mp3"></audio>

```typescript
import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    const token = req.headers['authorization'];
    // Validate the token (JWT or other mechanism)
    if (!token || !isValidToken(token)) {
      throw new UnauthorizedException('Invalid token');
    }
    next();
  }
}
```

Attach this middleware to your WebSocket gateway during initialization.

---

#### **4.2 Namespaces**

Namespaces allow you to create separate communication channels for different features.

<audio src="C:\Users\10691\Downloads\2024年12月20日02点29分.mp3"></audio>

```typescript
@WebSocketGateway({ namespace: '/chat' })
export class ChatGateway {
  // Chat-specific logic
}

@WebSocketGateway({ namespace: '/notifications' })
export class NotificationsGateway {
  // Notification-specific logic
}
```

Clients can connect to specific namespaces:

```javascript
const chatSocket = io('http://localhost:3000/chat');
const notificationSocket = io('http://localhost:3000/notifications');
```

---

#### **4.3 Rooms**

<audio src="C:\Users\10691\Downloads\2024年12月20日02点31分.mp3"></audio>

Rooms allow grouping clients into specific channels for targeted communication (e.g., private chats or group chats).

```typescript
@SubscribeMessage('joinRoom')
handleJoinRoom(
  @ConnectedSocket() socket: Socket,
  @MessageBody() room: string,
) {
  socket.join(room); // Join a specific room
}

@SubscribeMessage('message')
handleMessage(
  @ConnectedSocket() socket: Socket,
  @MessageBody() data: { room: string; message: string },
) {
  this.server.to(data.room).emit('message', data.message); // Send to specific room
}
```

---

### **5. Building a Notification System**

A WebSocket-based notification system is similar to a chat system but focuses on sending real-time updates to users.

#### **Example: Notifications Gateway**

```typescript
@WebSocketGateway()
export class NotificationsGateway {
  @WebSocketServer()
  server: Server;

  sendNotification(userId: string, notification: any) {
    this.server.to(userId).emit('notification', notification); // Send to specific user
  }

  @SubscribeMessage('subscribeToNotifications')
  handleSubscribe(
    @ConnectedSocket() socket: Socket,
    @MessageBody() userId: string,
  ) {
    socket.join(userId); // Join a room for the user
  }
}
```

---

### **6. Best Practices for WebSocket Development**

<audio src="C:\Users\10691\Downloads\2024年12月20日02点16分.mp3"></audio>

1. **Authentication**:
   - Use middleware or tokens to verify user identity during connection.

2. **Error Handling**:
   - Use proper error handling for WebSocket events to avoid crashes.

3. **Scalability**:
   - Use tools like **Redis** to enable WebSocket scaling across multiple instances using `socket.io-redis`.

4. **Security**:
   - Use SSL/TLS for secure WebSocket connections (`wss://`).
   - Validate all incoming data to prevent injection attacks.

5. **Performance**:
   - Use rooms and namespaces to limit broadcast scopes and reduce unnecessary traffic.

---

### **Summary**

<audio src="C:\Users\10691\Downloads\2024年12月20日02点17分.mp3"></audio>

- Use `@nestjs/websockets` to build real-time features like chat applications or notification systems.
- Build WebSocket gateways to handle events (e.g., `message`, `notification`).
- Enhance with features like authentication, namespaces, and rooms.
- Optimize for scalability and security in production environments.

With these tools, you can create powerful real-time applications in NestJS!