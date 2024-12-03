## [13. 罗马数字转整数 - 力扣（LeetCode）](https://leetcode.cn/problems/roman-to-integer/description/?envType=study-plan-v2&envId=top-interview-150)

<audio src="C:\Users\10691\Downloads\这道题要求将罗马数字转换为整数.mp3"></audio>

这道题要求将罗马数字转换为整数。罗马数字由七个符号（I、V、X、L、C、D、M）组成，不同的符号对应的数值从1到1000不等。罗马数字通常以从大到小的顺序排列，但在特殊情况下，较小的符号出现在较大的符号之前以表示减法规则，例如 IV 表示4，IX 表示9。目标是根据这些规则，将一个罗马数字字符串解析为对应的整数。

<audio src="C:\Users\10691\Downloads\解题方案采用逆序遍历和一个哈希.mp3"></audio>

```js
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanNumeralMap = new Map();
    romanNumeralMap.set('I', 1);
    romanNumeralMap.set('V', 5);
    romanNumeralMap.set('X', 10);
    romanNumeralMap.set('L', 50);
    romanNumeralMap.set('C', 100);
    romanNumeralMap.set('D', 500);
    romanNumeralMap.set('M', 1000);

    let result = 0
    let lastNum = 0
    for(let i = s.length-1; i>=0; i--){
        const currentNum = romanNumeralMap.get(s[i])
        if(currentNum >= lastNum){
            result+=currentNum
        } else {
            result-=currentNum
        }
        lastNum = currentNum
    }
    return result
};
```

