### Handling HTTP Methods (`GET`, `POST`, `PUT`, `DELETE`, `PATCH`)

<audio src="C:\Users\10691\Downloads\HTTP methods de.mp3"></audio>

HTTP methods define the type of operation performed on a resource:

1. **`GET`**: Retrieve data (e.g., fetch user details).  
2. **`POST`**: Create a new resource (e.g., add a user).  
3. **`PUT`**: Update or replace an entire resource.  
4. **`PATCH`**: Partially update a resource.  
5. **`DELETE`**: Remove a resource.

These methods are widely used in **RESTful APIs** for CRUD operations. Servers handle these methods differently based on the resource’s action.

> **处理 HTTP 方法 (`GET`, `POST`, `PUT`, `DELETE`, `PATCH`)**  
>
> <audio src="C:\Users\10691\Downloads\HTTP 方法定义对资源的操作.mp3"></audio>
>
> HTTP 方法定义对资源的操作类型：  
>
> 1. **`GET`**：获取数据（如获取用户信息）。  
> 2. **`POST`**：创建新资源（如添加用户）。  
> 3. **`PUT`**：更新或替换整个资源。  
> 4. **`PATCH`**：部分更新资源。  
> 5. **`DELETE`**：删除资源。  
>
> 这些方法在 **RESTful API** 中用于实现 CRUD 操作，服务器根据方法执行不同的资源操作。

---

### Code Examples:

#### **Node.js (Express) Handling HTTP Methods**

<audio src="C:\Users\10691\Downloads\这段代码展示了一个基于`Exp.mp3"></audio>

```javascript
const express = require("express");
const app = express();

app.use(express.json()); // Parse JSON body

// GET - Retrieve resource
app.get("/users", (req, res) => {
  res.send("Retrieve all users");
});

// POST - Create resource
app.post("/users", (req, res) => {
  res.send(`User created with data: ${JSON.stringify(req.body)}`);
});

// PUT - Replace resource
app.put("/users/:id", (req, res) => {
  res.send(`User ${req.params.id} replaced with data: ${JSON.stringify(req.body)}`);
});

// PATCH - Partially update resource
app.patch("/users/:id", (req, res) => {
  res.send(`User ${req.params.id} partially updated with data: ${JSON.stringify(req.body)}`);
});

// DELETE - Remove resource
app.delete("/users/:id", (req, res) => {
  res.send(`User ${req.params.id} deleted`);
});

app.listen(3000, () => console.log("Server running on port 3000"));
```

---

### Key Notes:

<audio src="C:\Users\10691\Downloads\1.  Use __`GET`.mp3"></audio>

1. Use **`GET`** for safe, read-only operations.  
2. **`POST`** and **`PUT`** should include a request body for creating/updating resources.  
3. **`PATCH`** is used for partial updates, while **`DELETE`** removes resources.  
4. Properly handle status codes (e.g., `200`, `201`, `204`, `404`).