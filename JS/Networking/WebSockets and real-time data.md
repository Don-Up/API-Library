### WebSockets and Real-Time Data

<audio src="C:\Users\10691\Downloads\__WebSockets__ .mp3"></audio>

**WebSockets** enable full-duplex, persistent communication between a client and a server, making them ideal for real-time applications (e.g., chat apps, live notifications). Unlike HTTP, WebSockets maintain an open connection, allowing data to flow both ways without repeated requests. 

1. **Use Cases**: Chat, live updates, multiplayer games.  
2. **Advantages**: Low latency, reduced overhead for frequent communications.  
3. **APIs**: Use the `WebSocket` API in browsers to connect, send, and receive data.

> **WebSockets 和实时数据**  
>
> <audio src="C:\Users\10691\Downloads\WebSockets 实现了客.mp3"></audio>
>
> **WebSockets** 实现了客户端和服务器之间的全双工、持久通信，非常适合实时应用（如聊天应用、实时通知）。与 HTTP 不同，WebSocket 维持一个开放的连接，允许双向数据流，无需重复请求。  
>
> 1. **使用场景**：聊天、实时更新、多玩家游戏。  
> 2. **优点**：低延迟，减少频繁通信的开销。  
> 3. **API**：浏览器中使用 `WebSocket` API 来连接、发送和接收数据。

---

### Code Examples:

#### **Basic WebSocket Example**

<audio src="C:\Users\10691\Downloads\这段代码展示了一个使用`Web.mp3"></audio>

```javascript
// Connect to WebSocket server
const socket = new WebSocket("wss://example.com/socket");

// Connection opened
socket.addEventListener("open", () => {
  console.log("WebSocket connection established");
  socket.send(JSON.stringify({ type: "greet", message: "Hello Server!" })); // Send data
});

// Listen for messages
socket.addEventListener("message", (event) => {
  const data = JSON.parse(event.data); // Parse incoming data
  console.log("Message from server:", data);
});

// Handle errors
socket.addEventListener("error", (error) => {
  console.error("WebSocket error:", error);
});

// Connection closed
socket.addEventListener("close", () => {
  console.log("WebSocket connection closed");
});
```

#### **WebSocket Server (Node.js with `ws`)**

<audio src="C:\Users\10691\Downloads\这段代码展示了如何使用`ws`.mp3"></audio>

```javascript
const WebSocket = require("ws");
const server = new WebSocket.Server({ port: 8080 });

server.on("connection", (socket) => {
  console.log("Client connected");

  // Send a message to the client
  socket.send(JSON.stringify({ type: "welcome", message: "Hello Client!" }));

  // Listen for messages from the client
  socket.on("message", (data) => {
    console.log("Message from client:", data);
    socket.send("Echo: " + data); // Echo the message back
  });

  // Handle connection close
  socket.on("close", () => {
    console.log("Client disconnected");
  });
});
```

---

### Key Notes:

<audio src="C:\Users\10691\Downloads\1. WebSockets a.mp3"></audio>

1. WebSockets are ideal for **real-time, bidirectional communication**.  
2. Use the `WebSocket` API in the browser and libraries like `ws` in Node.js for server-side support.  
3. Always handle connection errors and closures to ensure stability.