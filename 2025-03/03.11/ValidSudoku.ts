function isValidSudoku1(board: string[][]): boolean {
    const find = (cells: string[]): boolean => {
        const filledCell = cells.filter((cell) => cell !== ".");

        return new Set(filledCell).size === filledCell.length
    }

    const getSector = (startRow: number, startCol: number): string[] => {
        const sectorCell: string[] = [];
        for(let i = 0; i < 3; i++) {
            sectorCell.push(...board[startRow + i].slice(startCol, startCol + 3));
        }
        return sectorCell;
    }

    const transpose = (matrix: string[][]): string[][] => matrix.reduce<string[][]>(
        (result, row) => row.map((_, i) => [...(result[i] || []), row[i]]),
        []
    );

    // row 검사
    for (let i = 0; i < 9; i++) {
        if (!find(board[i])) return false;
    }

    const transposedBoard = transpose(board);

    // column 검사
    for (let i = 0; i < 9; i++) {
        if(!find(transposedBoard[i])) return false;
    }

    // sector 검사
    for(let i = 0; i < 9; i += 3) {
        for(let j = 0; j < 9; j += 3) {
            if(!find(getSector(i, j))) return false;
        }
    }

    return true;
};

function isValidSudoku2(board: string[][]): boolean {
    const set = new Set<string>();
    for(let row = 0; row < board.length; row += 1) {
        for(let col = 0; col < board[0].length; col += 1) {
            if(board[row][col] === ".") continue;

            const rowKey = `r-${row}-${board[row][col]}`;
            if(set.has(rowKey)) return false;
            set.add(rowKey);

            const colKey = `c-${col}-${board[row][col]}`;
            if(set.has(colKey)) return false;
            set.add(colKey);

            const sector = `${Math.floor(row / 3)}-${Math.floor(col / 3)}`;
            const sectorKey = `s-${sector}-${board[row][col]}`;
            if(set.has(sectorKey)) return false;
            set.add(sectorKey);
        }
    }

    return true;
};