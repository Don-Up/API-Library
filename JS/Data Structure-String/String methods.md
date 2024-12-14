### String Methods in JavaScript

1. **`split(separator, limit)`**:
   - Splits a string into an array based on a separator.
   - **Example**: `"a,b,c".split(",")` → `["a", "b", "c"]`.

2. **`replace(searchValue, newValue)`**:
   - Replaces the first match of `searchValue` with `newValue`.
   - Use `/pattern/g` for global replacement.
   - **Example**: `"hello".replace("l", "w")` → `"hewlo"`.

3. **`substring(start, end)`**:
   - Extracts a portion of a string from `start` (inclusive) to `end` (exclusive).
   - **Example**: `"hello".substring(1, 4)` → `"ell"`.

4. **`indexOf(searchValue, fromIndex)`**:
   - Returns the first index of `searchValue`, or `-1` if not found.
   - **Example**: `"hello".indexOf("l")` → `2`.

5. **`includes(searchValue)`**:
   - Checks if a string contains `searchValue`. Returns `true` or `false`.
   - **Example**: `"hello".includes("he")` → `true`.

6. **`trim()`**:
   - Removes leading and trailing whitespace from a string.
   - **Example**: `"  hello  ".trim()` → `"hello"`.

> **字符串方法：`split`、`replace`、`substring`、`indexOf`、`includes`、`trim`**  
>
> <audio src="..\..\mp3\1, `split(separ.mp3"></audio>
>
> 1. **`split(separator, limit)`**：根据分隔符将字符串拆分为数组。  
>    **例**：`"a,b,c".split(",")` → `["a", "b", "c"]`。  
> 2. **`replace(searchValue, newValue)`**：将第一个匹配替换为新值，使用正则表达式 `/pattern/g` 进行全局替换。  
>    **例**：`"hello".replace("l", "w")` → `"hewlo"`。  
> 3. **`substring(start, end)`**：提取从 `start` 到 `end` 的子字符串（不包括 `end`）。  
>    **例**：`"hello".substring(1, 4)` → `"ell"`。  
> 4. **`indexOf(searchValue, fromIndex)`**：找到 `searchValue` 的第一个索引，没有则返回 `-1`。  
>    **例**：`"hello".indexOf("l")` → `2`。  
> 5. **`includes(searchValue)`**：检查字符串是否包含 `searchValue`，返回布尔值。  
>    **例**：`"hello".includes("he")` → `true`。  
> 6. **`trim()`**：移除字符串前后空格。  
>    **例**：`"  hello  ".trim()` → `"hello"`。

---

### Code Examples:

<audio src="..\..\mp3\`split`方法用于将字符串.mp3"></audio>

#### **Using `split`**
```javascript
const str = "apple,orange,banana";
const result = str.split(",");
console.log(result); // ["apple", "orange", "banana"]
```

#### **Using `replace`**
```javascript
const str = "hello world";
const result = str.replace("world", "JavaScript");
console.log(result); // "hello JavaScript"
```

#### **Using `substring`**
```javascript
const str = "hello";
const result = str.substring(1, 4);
console.log(result); // "ell"
```

#### **Using `indexOf`**
```javascript
const str = "hello";
console.log(str.indexOf("l")); // 2
console.log(str.indexOf("z")); // -1
```

#### **Using `includes`**
```javascript
const str = "hello";
console.log(str.includes("he")); // true
console.log(str.includes("z")); // false
```

#### **Using `trim`**
```javascript
const str = "  hello world  ";
console.log(str.trim()); // "hello world"
```

---

### Key Notes:

<audio src="..\..\mp3\1. Use __`split.mp3"></audio>

1. Use **`split`** for converting strings to arrays.  
2. Use **`replace`** with regex for global replacements.  
3. **`substring`** is useful for extracting portions of strings.  
4. **`indexOf`** and **`includes`** help locate or check substrings.  
5. **`trim`** cleans up unwanted whitespace.