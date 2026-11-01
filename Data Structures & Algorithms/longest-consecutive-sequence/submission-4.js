class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length === 0){
            return 0
        }
        if(nums.length === 1 ){
            return 1
        }
        const set = new Set(nums)
        let count = 0
        for(const num of set){
            if(!set.has(num - 1)){
                let currentNum = num
                let currentStreak = 1
                while(set.has(currentNum + 1)){
                    currentNum++
                    currentStreak++
                }
                count = Math.max(count, currentStreak)
            }
        }
        return count
    }
}
