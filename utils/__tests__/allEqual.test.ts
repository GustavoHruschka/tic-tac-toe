import allEqual from "../allEqual";

describe('Every 3 square sequence is beeing checked correctly', () => {
    test('A sequence with different squareValues returns false?', () => {
        expect(allEqual(['O', 'X', 'O'])).toBe(false)
    })
    test('A sequence with equal squareValues returns true?', () => {
        expect(allEqual(['O', 'O', 'O'])).toBe(true)
    })
})