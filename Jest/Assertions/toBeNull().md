### expect().toBeNull()

- **`expect().toBeNull()`**: Asserts that the received value is exactly `null`. It only passes if the value is strictly `null`.

> **`expect().toBeNull()`**：断言接收到的值严格等于 `null`，仅当值为 `null` 时通过。

```js
test('checks if value is null', () => {
  const value = null;
  expect(value).toBeNull();  // Passes because the value is exactly null
  expect(value).not.toBeUndefined();  // Also checks that it's not undefined
});
```

`expect().toBeNull()` is used when you need to verify that a value is explicitly `null`, not undefined or any other falsy value.