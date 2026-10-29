class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = {}
        for(const n of nums){
            map[n] = (map[n] || 0) + 1;
        }
        const freq = Array.from({length : nums.length + 1}, () => [])
        
        for(const n in map){
          freq[map[n]].push(parseInt(n))
        }
        const res = [];
        for (let i = freq.length - 1; i > 0; i--) {
            res.push(...freq[i]);
            if(res.length === k){
                  return res
            }
        }
    }
}
