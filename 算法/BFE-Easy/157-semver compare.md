## [157. semver compare | BFE.dev - prepare for Front-End job interviews.](https://bigfrontend.dev/problem/semver-compare)

这道题要求实现一个函数 `compare`，用于比较两个语义化版本号（semver）字符串的大小。语义化版本号通常由三部分组成：主版本号（major）、次版本号（minor）和补丁号（patch），格式为 `X.Y.Z`，其中 `X`、`Y` 和 `Z` 都是非负整数。函数需要比较两个版本号并返回三个可能的结果：如果第一个版本号大于第二个，返回 `1`；如果第一个版本号小于第二个，返回 `-1`；如果两者相等，返回 `0`。

解题方案是将版本号字符串按照 `.` 分隔成主版本号、次版本号和补丁号三部分，并将它们转换为数字以便于比较。然后按照优先级从高到低依次比较主版本号、次版本号和补丁号：如果某一级别的数字不同，则直接返回比较结果（`1` 或 `-1`）；如果相同，则继续比较下一级别。若所有级别都相等，则返回 `0`。这种逐级比较的逻辑保证了版本号的正确排序。时间复杂度为 O(1)，因为版本号始终是固定的三部分数字；空间复杂度为 O(1)，只需要存储分割后的数字。此方法逻辑简单清晰，适用于标准语义化版本号的比较。

```js
/**
 * @param {string} v1
 * @param {string} v2
 * @returns 0 | 1 | -1
 */
function compare(v1, v2) {
  let [major1, minor1, patch1] = v1.split('.').map(Number);
  let [major2, minor2, patch2] = v2.split('.').map(Number);
  if(major1 > major2) return 1;
  if(major1 < major2) return -1;
  if(minor1 > minor2) return 1;
  if(minor1 < minor2) return -1;
  if(patch1 > patch2) return 1;
  if(patch1 < patch2) return -1;
  return 0;
}
```

