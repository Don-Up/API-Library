### expect().toBeTruthy() & expect().toBeFalsy()

- **`expect().toBeTruthy()`**: Asserts that the received value is truthy (i.e., evaluates to `true` in a boolean context).
- **`expect().toBeFalsy()`**: Asserts that the received value is falsy (i.e., evaluates to `false` in a boolean context).

> **`expect().toBeTruthy()`**：断言接收到的值是“真值”（即在布尔上下文中为 `true`）。
>
> **`expect().toBeFalsy()`**：断言接收到的值是“假值”（即在布尔上下文中为 `false`）。

```js
test('checks truthy and falsy values', () => {
  const truthyValue = 'non-empty string';
  const falsyValue = 0;
  
  expect(truthyValue).toBeTruthy();  // Passes because non-empty strings are truthy
  expect(falsyValue).toBeFalsy();    // Passes because 0 is falsy
});
```

`toBeTruthy()` checks for truthy values, while `toBeFalsy()` checks for falsy values like `0`, `null`, `undefined`, `false`, and `''`.