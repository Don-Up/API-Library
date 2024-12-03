## [17. Create a simple store for DOM element | BFE.dev - prepare for Front-End job interviews.](https://bigfrontend.dev/problem/create-a-simple-store-for-DOM-node)

这道题要求实现一个自定义的 `NodeStore` 类，用来模拟 `Map` 的功能，支持将 DOM 元素作为键存储对应的值。在旧的 JavaScript 环境（如 ES5）中，不支持 `Map`，因此需要自行实现类似的功能。`NodeStore` 类需要实现三个方法：`set(node, value)` 用于存储值，`get(node)` 用于根据 DOM 节点获取值，`has(node)` 用于检查某个 DOM 节点是否已经存储了值。输入是 DOM 节点和存储的值，输出是存储的值或布尔值。

解题方案通过在 DOM 节点对象上动态添加一个唯一的属性（如 `__nodeStoreKey__`）来实现节点与值的关联。具体步骤是：在 `set` 方法中，为每个 DOM 节点生成一个唯一的标识符（可以使用 `Symbol` 或其他方式），并将该标识符作为键，将值存储在一个内部的对象 `this.nodes` 中，同时将标识符绑定到节点对象上（`node.__nodeStoreKey__`）。在 `get` 方法中，根据节点的标识符从对象中查找对应的值。`has` 方法则检查节点的标识符是否存在于内部对象中。这种实现利用了对象属性的动态性，使得每个 DOM 节点都能唯一标识，且避免与其他属性冲突。时间复杂度为 O(1)（基于对象的直接查找），空间复杂度取决于存储的键值对数量。这种方法兼容旧环境，逻辑清晰，可正确实现类似 `Map` 的功能。

```js
class NodeStore {
   /**
   * @param {Node} node
   * @param {any} value
   */
  constructor() {
    this.nodes = {};
  }
  set(node, value) {
     node.__nodeStoreKey__ = Symbol();
    this.nodes[node.__nodeStoreKey__] = value;
  }
  /**
   * @param {Node} node
   * @return {any}
   */
  get(node) {
   return this.nodes[node.__nodeStoreKey__];
  }
  
  /**
   * @param {Node} node
   * @return {Boolean}
   */
  has(node) {
    return !!this.nodes[node.__nodeStoreKey__];
  }
}
```

