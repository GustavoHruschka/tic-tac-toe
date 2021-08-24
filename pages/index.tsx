import React, { useState } from 'react'
import TicTacToeGame from '../components/ticTacToeGame'

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


    function handleRestart() {
        setCurrentBoard([
            '', '', '',
            '', '', '',
            '', '', ''
        ])
        setIsGameOver(false)
        setCurrentPlayer('X')
    }

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
                        <h1>The player {currentPlayer} won!!!</h1>
                        <button onClick={handleRestart} >Replay</button>
                    </section>
                    : null
            }
        </main>
    )
}

export default Home