class MinStack {
    private stack: number[] = [];
    private minStack: number[] = [];

    constructor() {}

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        if (this.stack.length == 0 && this.minStack.length == 0) {
            this.stack.push(val);
            this.minStack.push(val);
        } else {
            this.stack.push(val);
            this.minStack.push(Math.min(this.getMin(), val));
        }
    }

    /**
     * @return {void}
     */
    pop(): void {
        this.stack.pop();
        this.minStack.pop();
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.minStack[this.minStack.length - 1];
    }
}
