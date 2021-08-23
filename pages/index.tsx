import React, { useState } from 'react'
import checkBoard from '../utils/checkBoard'

function Home() {
    type player = 'X' | 'O'
    type square = '' | player
    type board = [
        square, square, square,
        square, square, square,
        square, square, square,
    ]

    const [currentBoard, setCurrentBoard] = useState<board>([
        '', '', '',
        '', '', '',
        '', '', ''
    ])
    const [currentPlayer, setCurrentPlayer] = useState<player>('X')
    const [isGameOver, setIsGameover] = useState(false)

    function handlePlay(squareNumber: number) {
        if (isGameOver) {
            return
        }

        if (currentBoard[squareNumber] === '') {
            const currentBoardCopy = currentBoard
            currentBoardCopy[squareNumber] = currentPlayer

            setCurrentBoard(currentBoardCopy)

            if (currentPlayer === 'X') {
                setCurrentPlayer('O')
            } else {
                setCurrentPlayer('X')
            }
        }
    }

    return (
        <main>
            <div className="game-container">
                {currentBoard.map((squareValue, squareNumber) => {
                    return (
                        <div 
                            className="square"
                            key={squareNumber}
                            onClick={() => {handlePlay(squareNumber)}}
                        >
                            {squareValue}
                        </div>
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