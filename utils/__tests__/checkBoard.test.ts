import checkBoard from "../checkBoard";

describe('Board positions are beeing interpreted correctly', () => {
    test('A board that has no wins returns false?', () => {
        expect(checkBoard([
            'X', 'O', 'X',
            'O', 'X', 'X',
            'O', 'X', 'O'
        ])).toBe(false)
    })

    test('A board that has a win on a diagonal returns true?', () => {
        expect(checkBoard([
            'X', 'O', 'O',
            'O', 'X', 'X',
            'X', 'O', 'X'
        ])).toBe(true)

        expect(checkBoard([
            'X', 'O', 'X',
            'O', 'X', 'X',
            'X', 'O', 'O'
        ])).toBe(true)
    })

    test('A board that has a win on a row returns true?', () => {
        expect(checkBoard([
            'X', 'O', 'O',
            'X', 'X', 'X',
            'O', 'O', 'X'
        ])).toBe(true)

        expect(checkBoard([
            'O', 'O', 'O',
            'O', 'X', 'X',
            'X', 'X', 'O'
        ])).toBe(true)

        expect(checkBoard([
            'X', 'O', 'O',
            'O', 'X', 'X',
            'X', 'X', 'X'
        ])).toBe(true)
    })

    test('A board that has a win on a columns returns true?', () => {
        expect(checkBoard([
            'X', 'O', 'O',
            'X', 'X', 'O',
            'X', 'O', 'X'
        ])).toBe(true)

        expect(checkBoard([
            'X', 'O', 'O',
            'O', 'O', 'X',
            'X', 'O', 'X'
        ])).toBe(true)

        expect(checkBoard([
            'X', 'O', 'X',
            'O', 'X', 'X',
            'O', 'O', 'X'
        ])).toBe(true)
    })
})