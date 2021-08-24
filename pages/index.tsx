import React, { useState } from 'react'
import TicTacToeGame from '../components/ticTacToeGame'
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
    const [isGameOver, setIsGameOver] = useState(false)

    return (
        <main>
            <TicTacToeGame
                currentBoard={currentBoard}
                currentPlayer= {currentPlayer}
                isGameOver={isGameOver}

                setCurrentBoard={setCurrentBoard}
                setCurrentPlayer={setCurrentPlayer}
                setIsGameOver={setIsGameOver}
            />
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