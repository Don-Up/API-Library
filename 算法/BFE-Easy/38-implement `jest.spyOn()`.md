## [38. implement `jest.spyOn()` | BFE.dev - prepare for Front-End job interviews.](https://bigfrontend.dev/problem/implement-spyOn)

这道题要求实现一个 `spyOn` 函数，类似于 `jest.spyOn()` 的功能，用于监视对象方法的调用。`spyOn` 接收一个对象 `obj` 和一个方法名字符串 `methodName`，返回一个包含 `calls` 属性的对象。`calls` 是一个数组，用于记录被监视方法的每次调用参数。同时，当调用被监视的方法时，原始方法仍然会被执行并保持其原有的行为。

<audio src="..\..\mp3\这道题要求实现一个spyOn函.mp3"></audio>

This task requires implementing a `spyOn` function, similar to the functionality of `jest.spyOn()`, for monitoring calls to a method of an object. The `spyOn` function takes an object `obj` and a method name as a string `methodName`, and returns an object with a `calls` property. The `calls` property is an array that records the arguments passed to the monitored method during each call. Additionally, when the monitored method is invoked, the original method should still be executed, retaining its original behavior.

<audio src="../..\..\mp3\This task requi.mp3"></audio>

```js
/**
 * @param {object} obj
 * @param {string} methodName
 */
function spyOn(obj, methodName) {
  const calls = []
  const originMethod = obj[methodName]
  
  if (typeof originMethod !== 'function') {
    throw new Error('not function')
  }
  
  obj[methodName] = function(...args) {
    calls.push(args)
    return originMethod.apply(this, args)
  }
  
  return {
    calls
  }
}
```

<audio src="..\..\mp3\解题方案通过函数替换和闭包实现.mp3"></audio>