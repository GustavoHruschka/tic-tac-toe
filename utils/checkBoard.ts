import allEqual from './allEqual'

type player = 'X' | 'O'
type square = '' | player
type board = [
    square, square, square,
    square, square, square,
    square, square, square,
]
type sequence = Array<square>

function checkBoard(currentBoard: board) {
    // returns true if the game is over, and false otherwise

    let currentSequence: sequence = ['', '', '']

    for (let c = 0; c += 3; c <= 9) { 
        // check rows
        currentSequence = currentBoard.slice(c, c + 3)
        if (allEqual(currentSequence)) {
            return true
        }

        // check columns
        currentSequence = [currentBoard[c], currentBoard[c + 3], currentBoard[c + 6]]
        if (allEqual(currentSequence)) {
            return true
        }
    }

    // check diagonals
    currentSequence = [currentBoard[0], currentBoard[4], currentBoard[8]]
    if (allEqual(currentSequence)) {
        return true
    }

    currentSequence = [currentBoard[2], currentBoard[4], currentBoard[6]] 
    if (allEqual(currentSequence)) {
        return true
    } else {
        return false
    } 
}

export default checkBoard