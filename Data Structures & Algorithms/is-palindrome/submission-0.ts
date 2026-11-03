class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const regex = /[a-z0-9]/i
        let l = 0
        let r = s.length - 1
        while (l < r) {
            while (l < r && !regex.test(s[l])) {
                l++
            }
            while (l < r && !regex.test(s[r])) {
                r--
            }
            if (s[l].toLowerCase() !== s[r].toLowerCase()) {
                return false
            }
            l++
            r--
        }
        return true
    }
}
