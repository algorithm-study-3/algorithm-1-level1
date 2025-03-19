function exist(board: string[][], word: string): boolean {
    let ans = false;

    const m = board.length;
    const n = board[0].length;

    const dfs = (row, col, cur) => {
        if (cur === word.length) {
            ans = true
            return
        }

        if (row >= m || col >= n || row < 0 || col < 0) return
        if (board[row][col] !== word[cur]) return

        const pre = board[row][col]
        board[row][col] = '-'

        dfs(row + 1, col, cur + 1)
        dfs(row, col + 1, cur + 1)
        dfs(row - 1, col, cur + 1)
        dfs(row, col - 1, cur + 1)

        board[row][col] = pre
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            dfs(i, j, 0);
        }
    }

    return ans;
};