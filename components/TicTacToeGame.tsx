import React from "react";
import checkBoard from '../utils/checkBoard'


type player = 'X' | 'O'
type square = '' | player
type board = [
    square, square, square,
    square, square, square,
    square, square, square,
]

interface myProps {
    currentBoard: board;
    currentPlayer: player;
    isGameOver: boolean;

    setCurrentBoard: React.Dispatch<React.SetStateAction<board>>;
    setCurrentPlayer: React.Dispatch<React.SetStateAction<player>>;
    setIsGameOver: React.Dispatch<React.SetStateAction<boolean>>;
}

function TicTacToeGame(props: myProps) {
    function handlePlay(squareNumber: number) {
        if (props.isGameOver) {
            return
        }

        if (props.currentBoard[squareNumber] === '') {
            const currentBoardCopy = props.currentBoard
            currentBoardCopy[squareNumber] = props.currentPlayer

            props.setCurrentBoard(currentBoardCopy)

            if(checkBoard(currentBoardCopy)) {
                props.setIsGameOver(true)
                return
            }

            if (props.currentPlayer === 'X') {
                props.setCurrentPlayer('O')
            } else {
                props.setCurrentPlayer('X')
            }
        }
    }

    return (
        <div className="game-container">
            {props.currentBoard.map((squareValue, squareNumber) => {
                return (
                    <div
                        className="square"
                        key={squareNumber}
                        onClick={() => {handlePlay(squareNumber) }}
                    >
                        {squareValue}
                    </div>
                )
            })}
        </div>
    )
}

export default TicTacToeGame