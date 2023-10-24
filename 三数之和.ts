// 真题描述：给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。
// 注意：答案中不可以包含重复的三元组。 代码里需要做判断
// 示例： 给定数组 nums = [-1, 0, 1, 2, -1, -4]， 满足要求的三元组集合为： [ [-1, 0, 1], [-1, -1, 2] ]

const sum3 = (nums: number[]) => {
    const sortedNums = nums.sort((a, b) => a - b) // 数组排序
    const res: Array<number[]> = []
    const len = sortedNums.length
    for (let index = 0; index < len - 2; index++) { // 只需要遍历到倒数第三个固定数字，因为最后两个就是左右指针
        let left = index + 1, right = len - 1 // 指针的定位在每次重新选择固定数字时都要执行一次
        if (index > 1 && sortedNums[index] === sortedNums[index - 1]) continue // 后一个固定数字和前一个重复时跳过
        while (left < right) {
            // 思路 指针定下的两数和固定数字之和如果小于0证明左指针的数字小了，反之右指针的数字大了
            if (sortedNums[index] + sortedNums[left] + sortedNums[right] < 0) {
                left++
                while (left < right && sortedNums[left] === sortedNums[left - 1]) {
                    left++ // 排除重复数字
                }
            } else if (sortedNums[index] + sortedNums[left] + sortedNums[right] > 0) {
                right--
                while (left < right && sortedNums[right] === sortedNums[right + 1]) {
                    right--
                }
            } else {
                // 找到三数和为0则加到res数组中，并且左右指针同时移动
                res.push([sortedNums[index], sortedNums[left], sortedNums[right]])
                left++
                right--
                // 排除重复数字
                while (left < right && sortedNums[left] === sortedNums[left - 1]) {
                    left++
                }
                while (left < right && sortedNums[right] === sortedNums[right + 1]) {
                    right--
                }
            }
        }
    }
    return res
}
console.log(sum3([-1, 0, 1, 2, -1, -4]));


// 总结: 涉及到有序、数组等，需要想到双指针，包括同向和对向指针，即便数组不是有序，也可以调整为有序思考双指针的可行性。