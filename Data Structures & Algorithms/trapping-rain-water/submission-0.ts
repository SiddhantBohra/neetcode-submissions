class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {
        const maxLeft = new Array(height.length).fill(0);
        const maxRight = new Array(height.length).fill(0);
        maxLeft[0] = height[0]
        let water = 0
        maxRight[height.length - 1] = height[height.length - 1]
        for (let i = 1; i < height.length; i++) {
            let curr = maxLeft[i - 1];
            maxLeft[i] = Math.max(curr, height[i]);
        }
        for (let i = height.length - 2; i >= 0; i--) {
            let curr = maxRight[i + 1]
            maxRight[i] = Math.max(curr, height[i]);
        }
        for(let i = 0;i < height.length;i++){
            water = water + Math.min(maxLeft[i], maxRight[i]) - height[i]
        }
        return water
    }
}
