// 给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。
// 说明: 初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。
/**
 示例: 输入:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6], n = 3
输出: [1,2,2,3,5,6]
 */

// js的 sort方法
const merge = (nums1: Array<number>, nums2: number[]) => {
    return [...nums1, ...nums2].sort((a, b) => a - b)
}
console.log(merge([0, 2, 3], [2, 5, 6]));


// 双指针法
// 双指针法用在涉及求和、比大小类的数组题目里时，大前提往往是：该数组必须有序。否则双指针根本无法帮助我们缩小定位的范围，压根没有意义。
// 可以想象成现实里的操作：上面三个球下面三个球，从下面三个球里抽出来往上面合成的过程，思路就是最大的和最大的比。
/**
 * 
 * @param nums1 主数组
 * @param nums2 副数组
 * @param m 主数组长度
 * @param n 副数组长度
 * @returns 合并后的数组
 */
const merge2 = (nums1: Array<number>, nums2: number[], m: number, n: number) => {
    let major = m - 1, minor = n - 1, sum = m + n - 1 // 双指针只在初始阶段创建一次
    while (major >= 0 && minor >= 0) {
        if (nums1[major] > nums2[minor]) {
            nums1[sum] = nums1[major]
            major--
            sum--
        } else {
            nums1[sum] = nums2[minor]
            minor--
            sum--
        }
    }
    while (minor >= 0) {
        nums1[sum] = nums2[minor]
        minor--
        sum--
    }
    return nums1
}
console.log(merge2([1, 2, 3], [2, 5, 6], 3, 3));
