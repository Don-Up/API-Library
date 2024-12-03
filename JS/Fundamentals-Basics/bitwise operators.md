### Bitwise Operators in JavaScript

Bitwise operators in JavaScript perform operations on binary representations of numbers (32-bit integers). They process each bit individually, making them useful for low-level operations like flags or masks.

**Key Operators**:  
1. **AND (`&`)**: Returns `1` if both bits are `1`.  
2. **OR (`|`)**: Returns `1` if either bit is `1`.  
3. **XOR (`^`)**: Returns `1` if bits are different.  
4. **NOT (`~`)**: Inverts all bits.  
5. **Left Shift (`<<`)**: Shifts bits to the left.  
6. **Right Shift (`>>`)**: Shifts bits to the right, preserving sign.  
7. **Zero-fill Right Shift (`>>>`)**: Shifts bits to the right, filling with `0`.

> **JavaScript 中的位运算符**  
> JavaScript 中的位运算符对数字的二进制表示（32 位整数）进行操作，每次处理一个位，适用于标志、掩码等底层操作。  
> **主要运算符**：  
> 1. **AND (`&`)**：两个位都为 `1` 时返回 `1`。  
> 2. **OR (`|`)**：任意位为 `1` 时返回 `1`。  
> 3. **XOR (`^`)**：两位不同返回 `1`。  
> 4. **NOT (`~`)**：按位取反。  
> 5. **左移 (`<<`)**：将位向左移动。  
> 6. **右移 (`>>`)**：将位向右移动，保留符号位。  
> 7. **无符号右移 (`>>>`)**：将位向右移动，空位补 `0`。

---

### Code Examples:

#### **AND (`&`)**
```javascript
console.log(5 & 3); // Output: 1
// Binary: 5 (101) & 3 (011) -> 1 (001)
```

#### **OR (`|`)**
```javascript
console.log(5 | 3); // Output: 7
// Binary: 5 (101) | 3 (011) -> 7 (111)
```

#### **XOR (`^`)**
```javascript
console.log(5 ^ 3); // Output: 6
// Binary: 5 (101) ^ 3 (011) -> 6 (110)
```

#### **NOT (`~`)**
```javascript
console.log(~5); // Output: -6
// Binary: ~5 (000...0101) -> (111...1010) -> -6 in two's complement
```

#### **Left Shift (`<<`)**
```javascript
console.log(5 << 1); // Output: 10
// Binary: 5 (101) << 1 -> 10 (1010)
```

#### **Right Shift (`>>`)**
```javascript
console.log(-5 >> 1); // Output: -3
// Binary: -5 (two's complement) >> 1 -> -3
```

#### **Zero-fill Right Shift (`>>>`)**
```javascript
console.log(-5 >>> 1); // Output: 2147483645
// Binary: -5 (two's complement) >>> 1 -> large positive number
```

---

### Key Notes:
1. **Bitwise operators** work on 32-bit signed integers.  
2. Use them for tasks like setting or checking flags, masks, or low-level optimizations.  
3. Negative numbers are represented using **two's complement**, which affects results for right shifts.