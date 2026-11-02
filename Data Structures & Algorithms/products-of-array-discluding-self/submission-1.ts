class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const pre = new Array(nums.length).fill(0)
        const suff = new Array(nums.length).fill(0)
        const res = []
        pre[0] = 1
        suff[suff.length - 1] = 1
        for (let i = 1; i < nums.length; i++) {
            pre[i] = nums[i - 1] * pre[i - 1]
        }

        for (let i = nums.length - 2; i >= 0; i--) {
            suff[i] = suff[i + 1] * nums[i + 1]
        }
        for (let i = 0; i < nums.length; i++) {
            res.push(pre[i] * suff[i])
        }
        return res
    }
}
