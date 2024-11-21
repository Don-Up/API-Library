### expect().toBeUndefined()

- **`expect().toBeUndefined()`**: Asserts that the received value is exactly `undefined`. It only passes if the value is strictly `undefined`.

> **`expect().toBeUndefined()`**：断言接收到的值严格等于 `undefined`，仅当值为 `undefined` 时通过。

```js
test('checks if value is undefined', () => {
  let value;
  expect(value).toBeUndefined();  // Passes because the value is undefined
  expect(value).not.toBeNull();   // Ensures it's not null
});
```

`expect().toBeUndefined()` is used to verify that a variable or property is explicitly `undefined`.