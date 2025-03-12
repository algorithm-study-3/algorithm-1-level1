function updateMatrix1(mat: number[][]): number[][] {
    const disMat: number[][] = mat.map((row) => row.map((cell) => cell === 0 ? 0 : Number.MAX_SAFE_INTEGER));

    const findMinDistance = (rowIndex: number, colIndex: number): number => {
        const disValues: number[] = [];
        if(rowIndex - 1 >= 0) disValues.push(disMat[rowIndex-1][colIndex]+1);
        if(colIndex - 1 >= 0) disValues.push(disMat[rowIndex][colIndex-1]+1);
        if(rowIndex + 1 < disMat.length) disValues.push(disMat[rowIndex+1][colIndex]+1);
        if(colIndex + 1 < disMat[0].length) disValues.push(disMat[rowIndex][colIndex+1]+1);

        return Math.min(...disValues);
    }

    for(let row = 0; row < disMat.length; row += 1) {
        for(let col = 0; col < disMat[0].length; col += 1) {
            if(disMat[row][col] === 0) continue;
            disMat[row][col] = findMinDistance(row, col);
        }
    }

    for(let row = disMat.length - 1; row >= 0; row -= 1) {
        for(let col = disMat[0].length - 1; col >= 0; col -= 1) {
            if(disMat[row][col] === 0) continue;
            disMat[row][col] = findMinDistance(row, col);
        }
    }

    return disMat;
};

function updateMatrix2(mat: number[][]): number[][] {
    const rows = mat.length;
    const cols = mat[0].length;
    const disMat: number[][] = Array.from({ length: rows }, () => Array(cols).fill(Number.MAX_SAFE_INTEGER));
    const queue: [number, number][] = [];

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (mat[r][c] === 0) {
                disMat[r][c] = 0;
                queue.push([r, c]);
            }
        }
    }

    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    while (queue.length > 0) {
        const [r, c] = queue.shift()!;
        for (const [dr, dc] of directions) {
            const nr = r + dr, nc = c + dc;
            if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && disMat[nr][nc] > disMat[r][c] + 1) {
                disMat[nr][nc] = disMat[r][c] + 1;
                queue.push([nr, nc]);
            }
        }
    }

    return disMat;
}
