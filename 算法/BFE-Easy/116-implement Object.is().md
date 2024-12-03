## [116. implement Object.is() | BFE.dev - prepare for Front-End job interviews.](https://bigfrontend.dev/problem/implement-Object.is)

这道题要求实现一个自定义的 `Object.is()` 方法，与严格相等（`===`）比较类似，但在以下特殊情况下有不同的行为：`Object.is(0, -0)` 返回 `false`，而 `0 === -0` 返回 `true`；`Object.is(NaN, NaN)` 返回 `true`，而 `NaN === NaN` 返回 `false`。输入是两个值 `a` 和 `b`，输出是一个布尔值，表示两者是否“相同”。

解题方案需要逐步处理这些特殊情况。首先，判断 `a` 是否为 `NaN`，因为在 JavaScript 中，`NaN` 是唯一一个不等于自身的值。因此，如果 `a !== a` 为真，则 `a` 是 `NaN`，此时只需检查 `b !== b` 是否也为真，若是则返回 `true`，表示 `b` 也是 `NaN`；否则返回 `false`。接着处理 `0` 和 `-0` 的特殊情况。虽然 `0 === -0` 为真，但它们在 `1 / 0` 和 `1 / -0` 的计算结果中可以区分，分别为 `Infinity` 和 `-Infinity`。因此，如果 `a === 0` 且 `b === 0`，则检查 `1 / a === 1 / b`，如果相等返回 `true`，否则返回 `false`。最后，处理以上两种特殊情况之外的所有值时，直接使用严格相等比较（`a === b`）即可。整体时间复杂度为 O(1)，因为只涉及常量级比较和简单运算。这种实现方式完全符合 `Object.is()` 的规范，且逻辑清晰易懂。

```js
/**
 * @param {any} a
 * @param {any} b
 * @return {boolean}
 */
function is(a, b) {
  if (a !== a) { // Only NaN is not equal to itself
    return b !== b; // returns true if the second parameter is NaN too
  }
  if (a === 0 && b === 0) { // -0 === 0 is true, so when both parameters equals to 0
    return 1 / a === 1 / b; // 1 / -0 is -Infinity and -Infinity === -Infinity
  }
  return a === b; // All other cases with regular === comparison
}
```

