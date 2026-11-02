class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let key = ''
        for (let s of strs) {
            key = key + s.length + '#' + s
        }
        return key
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const result = []
        let i = 0
        let j = 0
        while (i < str.length) {
            j = i
            while(str[j] !== '#'){
                j++
            }
            const len = Number(str.slice(i,j))
            const word = str.slice(j + 1, j + 1 + len)
            result.push(word)
            i = j + 1 + len
        }
        return result
    }
}
