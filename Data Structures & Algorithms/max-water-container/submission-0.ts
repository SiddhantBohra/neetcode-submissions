class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let result = 0
        let l = 0
        let r = heights.length - 1
        while (l < r) {
            const res = (r - l) * Math.min(heights[l], heights[r])
            result = Math.max(res, result)
            if (heights[l] < heights[r]) {
                l++
            } else {
                r--
            }
        }
        return result
    }
}
