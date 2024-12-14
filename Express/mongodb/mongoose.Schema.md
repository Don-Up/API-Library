### `mongoose.Schema`

In Mongoose, a **Schema** defines the structure of documents in a MongoDB collection. It specifies the fields, their data types, and any validation rules or default values. A schema acts as a blueprint for creating **models**, which interact with the database.  

1. **Key Features**:  
   - Define field types (e.g., `String`, `Number`, `Date`).  
   - Add validation rules (e.g., `required`, `unique`).  
   - Support methods, virtuals, and middleware.  

2. **Usage**:  
   - Use `new mongoose.Schema()` to create a schema, then compile it into a model using `mongoose.model()`.  

> **mongoose.Schema**  
>
> <audio src="..\..\mp3\在 Mongoose 中，Sc.mp3"></audio>
>
> 在 Mongoose 中，**Schema** 定义了 MongoDB 集合中文档的结构。它指定了字段、数据类型以及任何验证规则或默认值。Schema 是创建 **模型** 的蓝图，模型用于与数据库交互。  
>
> 1. **主要功能**：  
>    - 定义字段类型（如 `String`、`Number`、`Date`）。  
>    - 添加验证规则（如 `required`、`unique`）。  
>    - 支持方法、虚拟属性和中间件。  
> 2. **使用方法**：  
>    - 使用 `new mongoose.Schema()` 创建 Schema，然后通过 `mongoose.model()` 将其编译为模型。  

---

### Code Examples:

#### **Basic Schema Example**

<audio src="..\..\mp3\这段代码使用 `mongoos (1).mp3"></audio>

```javascript
const mongoose = require('mongoose');

// Define a schema for a "User" collection
const userSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Name is required
  email: { type: String, unique: true },  // Email must be unique
  age: { type: Number, min: 18 },         // Age must be at least 18
  createdAt: { type: Date, default: Date.now }, // Default value
});

// Compile schema into a model
const User = mongoose.model('User', userSchema);

module.exports = User;
```

---

#### **Adding Methods and Virtuals**

<audio src="..\..\mp3\这段代码向 `userSche.mp3"></audio>

```javascript
// Add a schema method
userSchema.methods.greet = function () {
  return `Hello, ${this.name}!`;
};

// Add a virtual field (computed property)
userSchema.virtual('isAdult').get(function () {
  return this.age >= 18;
});
```

---

### Key Notes:  
1. **Data Types**: Supported types include `String`, `Number`, `Date`, `Boolean`, `Array`, and `ObjectId`.  
2. **Validation**: Schemas support built-in validators (e.g., `required`, `min`, `max`) and custom validation functions.  
3. **Middleware**: Add pre/post hooks for operations like saving or querying.  

#### Example Middleware:
```javascript
userSchema.pre('save', function (next) {
  console.log('Saving user...');
  next();
});
```