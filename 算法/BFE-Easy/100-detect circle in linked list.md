## [100. detect circle in linked list | BFE.dev - prepare for Front-End job interviews.](https://bigfrontend.dev/problem/detect-circle-in-linked-list)

这道题要求检测一个单链表是否存在环。如果链表中的某个节点指向它之前的一个节点，就会形成环。输入是链表的头节点 `head`，输出是一个布尔值，`true` 表示链表存在环，`false` 表示链表没有环。

解题方案使用了著名的 **快慢指针法（Floyd 判圈算法）**。该算法通过两个指针来遍历链表：`slow` 指针每次移动一步，而 `fast` 指针每次移动两步。如果链表中存在环，`fast` 指针最终会与 `slow` 指针相遇（因为 `fast` 会在环中不断追赶 `slow`）；如果链表中没有环，`fast` 指针会先到达链表的末尾（即 `null`）。具体实现中，首先将两个指针都初始化为链表头节点。在循环中，检查 `fast` 和 `fast.next` 是否为空，如果为空则链表无环，返回 `false`；否则同时移动两个指针，`slow` 移动一步，`fast` 移动两步。如果在移动过程中两指针相遇，说明链表有环，返回 `true`。这种方法时间复杂度为 O(n)，因为每个节点最多被访问两次；空间复杂度为 O(1)，因为只使用了两个指针变量，非常高效。



```js
/**
 * @param {Node} head
 * @return {boolean}
 */
function hasCircle(head) {
  // fast slow pointer
  let fast = head
  let slow = head
  while (fast && slow) {
    fast = fast.next?.next
    slow = slow.next
    if (fast === slow) {
      return true
    }
  }
  return false
}
```

