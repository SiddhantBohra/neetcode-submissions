class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const rows = Array.from({ length: board.length }, () => new Set())
        const cols = Array.from({ length: board.length }, () => new Set())
        const box = Array.from({ length: board.length }, () => new Set())
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board.length; j++) {
                const d = board[i][j]
                const b = Math.floor(i / 3) * 3 + Math.floor(j / 3)

                if (d !== '.') {
                    if (rows[i].has(d) || cols[j].has(d) || box[b].has(d)) {
                        return false
                    }
                    rows[i].add(d)
                    cols[j].add(d)
                    box[b].add(d)

                }
            }
        }
        return true
    }
}
