class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const stack: string[] = [];
        const map = new Map<string, string>([
            ["}", "{"],
            [")", "("],
            ["]", "["],
        ]);
        for (const char of s) {
            if (map.has(char)) {
                if (stack[stack.length - 1] == map.get(char)) {
                    stack.pop();
                } else {
                    return false;
                }
            } else {
                stack.push(char);
            }
        }
        if (stack.length == 0) {
            return true;
        } else {
            return false;
        }
    }
}
