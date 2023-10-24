// 两数之和

// O(n*n)
const sum = (arr: number[], target: number) => {
    for (let index = 0; index < arr.length - 1; index++) {
        if (arr[index] > target) return
        for (let ind = index + 1; ind < arr.length; ind++) {
            if (arr[index] + arr[ind] === target)
                return [index, ind]
        }
    }
}

console.log(sum([1, 2, 3, 4], 4));

// O(n)
const sum2 = (arr: number[], target: number) => {
    const map = new Map()
    const len = arr.length
    for (let index = 0; index < len; index++) {
        const diff = target - arr[index]
        if (map.has(diff)) {
            return [map.get(diff), index]
        }
        map.set(arr[index], index)
    }
    return []
}
console.log(sum2([1, 2, 3, 4], 4));

/**
 思考：所有求和问题都可以转化为求差问题。
 如果代码中出现了两层循环，就可以考虑空间换时间，优化成一层循环。
 */