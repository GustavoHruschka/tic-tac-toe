import allEqual from './allEqual'

type player = 'X' | 'O'
type square = '' | player
type board = [
    square, square, square,
    square, square, square,
    square, square, square,
]

function checkBoard(currentBoard: board) {
    // returns true if the game is over, and false otherwise

    // check rows
    for (let c = 0; c <= 8; c += 3) {
        if (allEqual(currentBoard.slice(c, c + 3))) {
            return true
        }
    }

    // check columns
    for (let c = 0; c <= 2; c++) {
        if (allEqual([currentBoard[c], currentBoard[c + 3], currentBoard[c + 6]])) {
            return true
        }
    }

    // check main diagonal
    if (allEqual([currentBoard[0], currentBoard[4], currentBoard[8]])) {
        return true
    }

    // check secondary diagonal
    if (allEqual([currentBoard[2], currentBoard[4], currentBoard[6]])) {
        return true
    }

    return false
}

export default checkBoard