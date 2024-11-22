### expect().toEqual()

- **`expect().toEqual()`**: Asserts that the received value is **deeply equal** to the expected value. It recursively checks the equality of objects, arrays, and nested data structures.

- <audio src="..\..\mp3\_Asserts that t.mp3"></audio>

> **`expect().toEqual()`**：断言接收到的值与预期值**深度相等**，递归检查对象、数组和嵌套数据结构的相等性。

```js
test('checks deep equality of objects', () => {
  const obj1 = { name: 'Alice', age: 25 };
  const obj2 = { name: 'Alice', age: 25 };
  
  expect(obj1).toEqual(obj2);  // Passes because objects have the same structure and values
});
```

`expect().toEqual()` is used for comparing complex data structures like objects or arrays, ensuring deep equality.