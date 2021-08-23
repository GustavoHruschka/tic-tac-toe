type player = 'X' | 'O'
type square = '' | player
type sequence = Array<square>

function allEqual(currentSequence: sequence) {
    return currentSequence.every(value => value === currentSequence[0]) 
}

export default allEqual