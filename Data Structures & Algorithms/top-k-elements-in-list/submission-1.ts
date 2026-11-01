class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const arr = []
        for (let i = 0; i <= nums.length; i++) {
            const a = []
            arr.push([])
        }
        let result = []
        const map = new Map()
        for (let i = 0; i < nums.length; i++) {
            map.set(nums[i], (map.get(nums[i]) || 0) + 1)
        }
        for (let [num, freq] of map.entries()) {
            arr[freq].push(num)
        }
        let j = arr.length - 1
        while (result.length < k) {
            if (arr[j].length !== 0) {
                result.push(...arr[j])
            }
            j--
        }
        return result
    };
}
