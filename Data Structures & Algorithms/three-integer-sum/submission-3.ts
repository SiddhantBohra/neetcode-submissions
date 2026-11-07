class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        const arr = nums.sort((a, b) => a - b)
        const res = []
        for (let k = 0; k < arr.length; k++) {
            if (k > 0 && arr[k] === arr[k - 1]) continue
            let value = -arr[k]
            let l = k + 1
            let r = arr.length - 1
            while (l < r) {
                if (arr[l] + arr[r] == value) {
                    res.push([arr[l], arr[r], -value])
                    l++
                    r--
                    while (l < r && arr[l] === arr[l - 1]) l++

                }
                else if (arr[l] + arr[r] < value) {
                    l++
                }
                else if (arr[l] + arr[r] > value) {
                    r--
                }
            }
        }
        return res
    }
}
