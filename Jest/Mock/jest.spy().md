### jest.spyOn()

- **`jest.spyOn()`**: Creates a mock that spies on an existing object method, allowing you to track calls and optionally modify its implementation.

> **`jest.spyOn()`**：为现有对象方法创建一个间谍函数，允许跟踪其调用，并可选择性地修改其实现。

```js
const myObj = {
  greet: () => 'Hello, World!',
};

test('tracks calls to an object method', () => {
  const spy = jest.spyOn(myObj, 'greet');  // Spy on the 'greet' method

  myObj.greet();  // Call the method

  expect(spy).toHaveBeenCalled();  // Passes: 'greet' was called
  expect(spy).toHaveReturnedWith('Hello, World!');  // Passes: 'greet' returned 'Hello, World!'
  
  spy.mockRestore();  // Restore original method after spying
});
```

`jest.spyOn()` is useful for observing and controlling how an object's method is used during tests.