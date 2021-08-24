import allEqual from './allEqual'

type player = 'X' | 'O'
type square = '' | player
type board = [
    square, square, square,
    square, square, square,
    square, square, square,
]

function checkBoard(currentBoard: board) {
    // returns true if the game is over and false otherwise

    // check rows
    for (let c = 0; c <= 8; c += 3) {
        if (currentBoard[c] != '' && allEqual(currentBoard.slice(c, c + 3))) {
            return [c, c + 1, c + 2]
        }
    }

    // check columns
    for (let c = 0; c <= 2; c++) {
        if (currentBoard[c] != '' && allEqual([currentBoard[c], currentBoard[c + 3], currentBoard[c + 6]])) {
            return [c, c + 3, c + 6]
        }
    }

    // check main diagonal
    if (currentBoard[0] != '' && allEqual([currentBoard[0], currentBoard[4], currentBoard[8]])) {
        return [0, 4, 8]
    }

    // check secondary diagonal
    if (currentBoard[2] != '' && allEqual([currentBoard[2], currentBoard[4], currentBoard[6]])) {
        return [2, 4, 6]
    }

    return false
}

export default checkBoard