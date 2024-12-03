### `Array.isArray()`, `isNaN()`, and `Number.isNaN()`

<audio src="C:\Users\10691\Downloads\1. __`Array.isA.mp3"></audio>

1. **`Array.isArray()`**:
   - Checks if a value is an **array**.
   - Returns `true` for arrays and `false` otherwise.

2. **`isNaN()`**:
   - Checks if a value is **NaN** (Not-a-Number) or coercible to NaN.
   - May give false positives due to type coercion.

3. **`Number.isNaN()`**:
   - Checks if a value is **strictly NaN** (not coercible).
   - Does not perform type coercion, making it more reliable.

> **`Array.isArray()`、`isNaN()` 和 `Number.isNaN()`** 
>
>  <audio src="C:\Users\10691\Downloads\1. `Array.isArr.mp3"></audio>
>
> 1. **`Array.isArray()`**：检查值是否为数组。若是数组返回 `true`，否则返回 `false`。  
> 2. **`isNaN()`**：检查值是否为 **NaN** 或能被强制转换为 NaN。可能因类型强制导致误判。  
> 3. **`Number.isNaN()`**：严格检查值是否为 **NaN**，不进行类型强制，因此更可靠。

---

### Code Examples:

#### **`Array.isArray()`**
```javascript
console.log(Array.isArray([1, 2, 3])); // true
console.log(Array.isArray("Hello")); // false
console.log(Array.isArray({})); // false
```

#### **`isNaN()` vs `Number.isNaN()`**
```javascript
console.log(isNaN("Hello")); // true (coerced to NaN)
console.log(isNaN(123)); // false
console.log(isNaN(NaN)); // true

console.log(Number.isNaN("Hello")); // false (no coercion)
console.log(Number.isNaN(123)); // false
console.log(Number.isNaN(NaN)); // true
```

---

### Key Notes:
1. Use **`Array.isArray()`** to reliably check for arrays.  
2. Prefer **`Number.isNaN()`** over `isNaN()` to avoid coercion issues.  
3. **`Number.isNaN()`** ensures only actual `NaN` values are identified.