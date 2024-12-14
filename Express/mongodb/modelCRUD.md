### Common CRUD Methods in the Mongoose `User` Model  

The `User` model, created from the `userSchema`, provides methods for performing **CRUD** (Create, Read, Update, Delete) operations on the MongoDB collection.

---

#### **1. Create**
Use the `.create()` or `.save()` method to add new documents to the collection.

<audio src="..\..\mp3\这段代码展示了两种在 Mong.mp3"></audio>

```javascript
const newUser = new User({ name: 'Alice', email: 'alice@example.com', age: 25 });
await newUser.save(); // Saves the document to the database

// Alternatively
const createdUser = await User.create({ name: 'Bob', email: 'bob@example.com', age: 30 });
console.log(createdUser); // Logs the newly created user
```

---

#### **2. Read**
Retrieve documents using `.find()`, `.findOne()`, or `.findById()`.

<audio src="..\..\mp3\这段代码展示了使用 `mong.mp3"></audio>

```javascript
// Find all users
const users = await User.find(); 

// Find a single user by email
const user = await User.findOne({ email: 'alice@example.com' }); 

// Find a user by ID
const userById = await User.findById('63a1d1234abc567def890123');
```

---

#### **3. Update**
Update documents using `.updateOne()`, `.updateMany()`, or `.findByIdAndUpdate()`.

<audio src="..\..\mp3\这段代码展示了使用 `mong (1).mp3"></audio>

```javascript
// Update a user by email
await User.updateOne({ email: 'alice@example.com' }, { age: 26 });

// Update a user and return the updated document
const updatedUser = await User.findByIdAndUpdate(
  '63a1d1234abc567def890123',
  { name: 'Alice Updated' },
  { new: true } // Return the updated document
);
console.log(updatedUser);
```

---

#### **4. Delete**
Remove documents using `.deleteOne()`, `.deleteMany()`, or `.findByIdAndDelete()`.

<audio src="..\..\mp3\这段代码展示了使用 `mong (2).mp3"></audio>

```javascript
// Delete a user by ID
await User.findByIdAndDelete('63a1d1234abc567def890123');

// Delete multiple users matching a condition
await User.deleteMany({ age: { $lt: 18 } });
```

---

### Key Notes:
1. **Promises**: All methods return Promises, so you can use `async/await` or `.then()`.  
2. **Validation**: Mongoose enforces schema validation during `create()` and `.save()` but not during `updateOne()`. Use `findOneAndUpdate()` with `runValidators: true` for validation during updates.  
3. **Query Filters**: MongoDB query operators (e.g., `$lt`, `$gt`) can be used in `find` queries.
