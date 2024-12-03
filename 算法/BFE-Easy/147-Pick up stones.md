## [147. Pick up stones | BFE.dev - prepare for Front-End job interviews.](https://bigfrontend.dev/problem/pickup-the-stones)

这道题要求解决一个两人博弈问题，规则是有一堆 `n` (n > 0) 个石头，两名玩家 A 和 B 轮流取走 1 或 2 个石头，A 先手。拿到最后一颗石头的玩家会输掉游戏。目标是判断是否存在一个玩家的必胜策略，如果有的话，返回该玩家的名字（'A' 或 'B'），如果没有必胜策略则返回 `null`。

解题方案基于递归和动态规划。核心思路是模拟玩家的每一步选择，判断当前局面是对当前玩家有利还是不利。如果当前玩家在某一步后能让对手进入一个必输的局面，则当前玩家获胜。首先定义一个递归函数 `whoWins(n, player, opposition)`，其中 `n` 是当前剩余石头数，`player` 是当前玩家，`opposition` 是对手玩家。如果只剩 1 个石头，当前玩家被迫拿最后一颗，输掉游戏，返回 `opposition`；如果剩 2 或 3 个石头，当前玩家可以直接让对手拿最后一颗，从而获胜，返回 `player`。对于更大的 `n`，通过递归判断当前玩家取 1 或 2 个石头后，对手是否进入一个输的局面。如果任意一种操作能让对手输，则当前玩家赢，否则对手赢。为避免重复计算，使用缓存（`cache`）存储每种局面的结果以优化性能。时间复杂度取决于递归深度和缓存命中率，最坏情况下为 O(n)，空间复杂度同样为 O(n)，用于存储缓存结果。此方法逻辑清晰，利用递归和缓存有效解决了该博弈问题。

```js
function canWinStonePicking(n: number): 'A' | 'B' | string {
  const cache: object = {};
  function whoWins(n: number, player: string, opposition: string): string{
    if(n === 1) return opposition
    if(n === 2 || n === 3) return player
    const key:string = `${n}_${player}_${opposition}`;
    if(key in cache) return cache[key]
    if(
      whoWins(n-1, opposition, player) === player || 
      whoWins(n-2, opposition, player) === player
      ) {
      cache[key] = player
    } else {
      cache[key] = opposition
    }
    return cache[key]
    
  }
  return whoWins(n, 'A', 'B');
}
```

