### expect().toBeGreaterThan(), toBeGreaterThanOrEqual(), toBeLessThan(), toBeLessThanOrEqual()

- **`expect().toBeGreaterThan(value)`**: Asserts that the received value is greater than the specified value.
- **`expect().toBeGreaterThanOrEqual(value)`**: Asserts that the received value is greater than or equal to the specified value.
- **`expect().toBeLessThan(value)`**: Asserts that the received value is less than the specified value.
- **`expect().toBeLessThanOrEqual(value)`**: Asserts that the received value is less than or equal to the specified value.

> **`expect().toBeGreaterThan(value)`**：断言接收到的值大于指定值。  
> **`expect().toBeGreaterThanOrEqual(value)`**：断言接收到的值大于或等于指定值。  
> **`expect().toBeLessThan(value)`**：断言接收到的值小于指定值。  
> **`expect().toBeLessThanOrEqual(value)`**：断言接收到的值小于或等于指定值。

```js
test('compares numbers', () => {
  const value = 10;

  expect(value).toBeGreaterThan(5);           // Passes, 10 > 5
  expect(value).toBeGreaterThanOrEqual(10);   // Passes, 10 >= 10
  expect(value).toBeLessThan(20);             // Passes, 10 < 20
  expect(value).toBeLessThanOrEqual(10);      // Passes, 10 <= 10
});
```

These matchers are used for numerical comparisons, ensuring values meet specific thresholds.