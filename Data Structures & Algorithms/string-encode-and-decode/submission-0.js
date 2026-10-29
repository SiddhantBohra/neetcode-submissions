class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        return strs.map(item => {
            return `${item.length}#${item}`
        }).join('')
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let arr = []
        let i = 0
        while(i < str.length){
            let j = i
            while(str[j] !== '#'){
                j++
            }
            const length = parseInt(str.substring(i,j))
            console.log(i,j)
            i = j + 1
            j = i + length
            let d = str.substring(i,j)
            arr.push(d)
            i = j
        }
        return arr
    }
}
