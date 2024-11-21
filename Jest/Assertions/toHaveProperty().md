### expect().toHaveProperty()

- **`expect().toHaveProperty()`**: Asserts that an object has a specific property, and optionally checks its value. Supports nested properties.

> **`expect().toHaveProperty()`**：断言对象具有指定属性，并可选地检查其值，支持嵌套属性。

```js
test('checks object property', () => {
  const person = { name: 'Alice', age: 25, address: { city: 'Paris' } };

  expect(person).toHaveProperty('name');                // Passes: 'name' exists
  expect(person).toHaveProperty('age', 25);             // Passes: 'age' is 25
  expect(person).toHaveProperty('address.city', 'Paris'); // Passes: nested 'city' is 'Paris'
});
```

`expect().toHaveProperty()` is useful for verifying the existence and value of properties, including nested ones, in objects.