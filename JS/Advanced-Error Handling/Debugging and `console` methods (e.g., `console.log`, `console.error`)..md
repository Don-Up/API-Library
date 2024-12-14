### Debugging and `console` Methods

<audio src="..\..\mp3\JavaScript's `c.mp3"></audio>

JavaScript's `console` object provides various methods for debugging:

1. **`console.log`**: Outputs general information.
2. **`console.error`**: Logs errors in red (useful for debugging issues).
3. **`console.warn`**: Logs warnings in yellow.
4. **`console.table`**: Displays tabular data in table format.
5. **`console.debug`**: Logs detailed debugging information.
6. **`console.group` / `console.groupEnd`**: Groups related logs together.
7. **`console.time` / `console.timeEnd`**: Measures execution time.

These methods are essential for inspecting variables, tracking issues, and measuring performance during development.

> **调试与 `console` 方法**  
> JavaScript 的 `console` 对象提供多种调试方法：
>
>   <audio src="..\..\mp3\Outline`console.mp3"></audio>
>
> 1. **`console.log`**：输出一般信息。  
> 2. **`console.error`**：以红色显示错误（用于调试问题）。  
> 3. **`console.warn`**：以黄色显示警告信息。  
> 4. **`console.table`**：以表格形式显示数据。  
> 5. **`console.debug`**：输出详细的调试信息。  
> 6. **`console.group` / `console.groupEnd`**：将相关日志分组显示。  
> 7. **`console.time` / `console.timeEnd`**：测量代码执行时间。  
> 这些方法对变量检查、问题跟踪和性能测量非常有用。

---

### Code Examples:

#### **Basic Logging**
```javascript
console.log("This is an informational message."); // General log
console.error("This is an error message."); // Red error log
console.warn("This is a warning message."); // Yellow warning log
```

#### **Tabular Data**
```javascript
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
];
console.table(users); // Displays data in a table format
```

#### **Grouping Logs**
```javascript
console.group("User Details");
console.log("Name: Alice");
console.log("Age: 25");
console.groupEnd(); // Ends the group
```

#### **Measuring Execution Time**
```javascript
console.time("Loop Timer");
for (let i = 0; i < 100000; i++) {} // Simulates a process
console.timeEnd("Loop Timer"); // Logs the time taken for the loop
```

---

### Key Notes:
1. Use **`console.log`** for general debugging and **`console.error`** for critical issues.  
2. **`console.table`** is ideal for structured data visualization.  
3. Grouping and timers help organize and measure logs during debugging.