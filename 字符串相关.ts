// 反转字符串
const reverse = (str: string) => str.split('').reverse().join('')
console.log(reverse('abc')); // cba

// 判断回文字符串 ('yessey')
const judge1 = (str: string) => str.split('').reverse().join('') === str ? true : false
console.log(judge1('yessey')); // true

const judge2 = (str: string) => {
    const len = str.length
    for (let ind = 0; ind < len / 2; ind++) {
        if (str[ind] !== str[len - 1 - ind]) return false
    }
    return true
}
console.log(judge2('as')); // false


/**
 给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。
 示例 1: 输入: "aba"
输出: True
示例 2:
输入: "abca"
输出: True
解释: 你可以删除c字符。
注意: 字符串只包含从 a-z 的小写字母。字符串的最大长度是50000。
 */
// 回文题关键  对称性+对向双指针
const judge3 = (str: string) => {
    const isPalindrome = (prev: number, next: number) => {
        while (prev < next) {
            if (str[prev] !== str[next]) return false
            prev++
            next--
        }
        return true
    }
    const len = str.length
    let left = 0, right = len - 1
    while (left < right && str[left] === str[right]) {
        left++
        right--
    }
    if (isPalindrome(left + 1, right)) return true
    if (isPalindrome(left, right - 1)) return true
    return false
}
console.log(judge3("abca")); // true


/**
 真题描述： 设计一个支持以下两种操作的数据结构：
void addWord(word)
bool search(word)
search(word) 可以搜索文字或正则表达式字符串，字符串只包含字母 . 或 a-z 。
. 可以表示任何一个字母。
 */
class WordDictionary {
    private words: Map<number, string[]> = new Map()
    public addWords(str: string) {
        const len = str.length
        const founded = this.words.get(len)
        if (!founded) return this.words.set(len, [str])
        founded.push(str)
    }
    public search(keyword: string) {
        const len = keyword.length
        const founded = this.words.get(len)
        if (!founded) return false
        if (!keyword.includes('.')) return founded.includes(keyword)
        // 否则是正则表达式，要先创建正则表达式对象
        const reg = new RegExp(keyword)
        // 只要数组中有一个匹配正则表达式的字符串，就返回true
        return founded.some((item: string) => reg.test(item))

    }
}

const dict = new WordDictionary()
dict.addWords('gray')
dict.addWords('mike')
console.log(dict.search('mike')) // true
console.log(dict.search('.ray')) // true

// 请你来实现一个 atoi 函数，使其能将字符串转换成整数
const cusAtoi = (str: string) => {
    const reg = /\s*([-\+]?[0-9]*).*/
    const groups = str.match(reg)
    const max = Math.pow(2, 31) - 1
    const min = -max - 1
    let target = 0
    if (groups) {
        // match() 第0项为返回的第一个完整匹配，第一项为捕获组(string类型)
        target = +groups[1]
        // 注意，即便成功，也可能出现非数字的情况，比如单一个'+'
        if (isNaN(target)) target = 0
    }
    if (target > max) return max
    if (target < min) return min
    return target
}