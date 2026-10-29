class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const freqMap = new Map()
        let arr = []
        for(let str of strs){
            const freqString = this.getFrequencyString(str)
            if(!freqMap.has(freqString)){
                arr.push(str)
                freqMap.set(freqString, arr)
            } else {
                arr = freqMap.get(freqString)
                arr.push(str)
                freqMap.set(freqString,arr)
            }
            arr = []
        }
        return Array.from(freqMap.values())
    }
     /**
     * @param {string} str
     */
    getFrequencyString(str){
        const hash = new Map()
        let freqString = ''
        for(let i = 97; i <= 122 ;i++){
            hash.set(String.fromCharCode(i), 0)
        }
        for(let i = 0; i < str.length ;i++){
          hash.set(str[i], (hash.get(str[i]) || 0) + 1)  
        }
        hash.forEach((value,key) => {
            if(value !== 0){
                freqString += `${key}${value}`
            }
        })
        return freqString
    }
}
