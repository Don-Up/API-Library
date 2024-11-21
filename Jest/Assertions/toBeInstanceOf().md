### expect().toBeInstanceOf()

- **`expect().toBeInstanceOf()`**: Asserts that the received value is an instance of a specified class or constructor.

> **`expect().toBeInstanceOf()`**：断言接收到的值是指定类或构造函数的实例。

```js
test('checks if object is instance of class', () => {
  class Car {}
  const myCar = new Car();

  expect(myCar).toBeInstanceOf(Car);  // Passes: myCar is an instance of Car
  expect([]).toBeInstanceOf(Array);   // Passes: [] is an instance of Array
});
```

`expect().toBeInstanceOf()` is useful for verifying that an object is created from a specific class or constructor.