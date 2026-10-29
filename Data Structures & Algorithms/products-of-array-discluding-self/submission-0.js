class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const result = new Array(nums.length).fill(1)
        for(let i = 1;i < nums.length;i++){
            result[i] = nums[i - 1] * result[i - 1]
        }
        let suffixProduct = 1
        for(let i = nums.length - 1; i >= 0; i--){
            result[i] *= suffixProduct;
            suffixProduct *= nums[i];
        }
        return result
    }
}
