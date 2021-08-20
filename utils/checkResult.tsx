type winnerPlayer = 'X' | 'O' | null 
type rows = Array<winnerPlayer>
type board = Array<rows>

function checkGameOver(squares: board) {
    let winner: winnerPlayer = null

    // check rows
    squares.forEach(row => {
        if (row.every(value => value != null)) {
            if (row.every(value => value === row[0])) {
                winner = row[0]
            }
        }
    })

    // check columns
    for (let i = 0; i++; i <= 2) {
        let column = squares.map(row => row[i])

        if (column.every(value => value != null)) {
            if (column.every(value => value === column[0])) {
                winner = column[0]
            }
        }
    }

    // check diagonals


    return winner
}

export default checkGameOver