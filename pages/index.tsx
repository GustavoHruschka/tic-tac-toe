import React, { useState } from 'react'
import checkResult from '../utils/checkResult'

function Home() {
    type board = Array<Array<null | 'X' | 'O'>>
    type player = 'X' | 'O'


    const [squares, setSquares] = useState<board>([
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ])
    const [currentPlayer, setCurrentPlayer] = useState<player>('X')
    const [isGameOver, setIsGameover] = useState(false)

    function handlePlay(currentState: null | string, rowNumber: number, columnNumber: number) {
        if (isGameOver) {
            return
        }

        if (currentState === null) {
            const squaresCopy = squares

            if (squaresCopy[rowNumber][columnNumber] === null) {
                squaresCopy[rowNumber][columnNumber] = currentPlayer

                setSquares(squaresCopy)

                const result = checkResult(squaresCopy)            
                if (result != null) {
                    setIsGameover(true)
                    return
                }

                if (currentPlayer === 'X') {
                    setCurrentPlayer('O')
                } else {
                    setCurrentPlayer('X')
                }
            }
        }
    }

    return (
        <main>
            <div className="game-container">
                {squares.map((row, rowNumber) => {
                    return (
                        row.map((currentState, columnNumber) => {
                            return (
                                <div
                                    className="squares"
                                    key={`${rowNumber}${columnNumber}`}
                                    onClick={() => handlePlay(currentState, rowNumber, columnNumber)}
                                >
                                    {currentState}
                                </div>
                            )
                        })
                    )
                })}
            </div>
            {
                isGameOver ?
                    <section className="result">
                        The player {currentPlayer} won!!!
                    </section>
                    : null
            }
        </main>
    )
}

export default Home