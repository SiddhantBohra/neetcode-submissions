class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        const stack: string[] = [];
        for (let val of tokens) {
            if (val === "*") {
                const b = Number(stack.pop()!);
                const a = Number(stack.pop()!);
                const res = a * b;
                stack.push(res.toString());
            }
            else if (val === "/") {
                const b = Number(stack.pop()!);
                const a = Number(stack.pop()!);
                const res = Math.trunc(a / b);
                stack.push(res.toString());
            }
            else if (val === "+") {
                const b = Number(stack.pop()!);
                const a = Number(stack.pop()!);
                const res = a + b;
                stack.push(res.toString());
            }
            else if (val === "-") {
                const b = Number(stack.pop()!);
                const a = Number(stack.pop()!);
                const res = a - b;
                stack.push(res.toString());
            } else {
                stack.push(val)
            }
        }
        return Number(stack[0])
    }
}
