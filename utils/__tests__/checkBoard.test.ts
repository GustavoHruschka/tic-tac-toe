import checkBoard from "../checkBoard";

describe('Board positions are beeing interpreted correctly', () => {
    test('An empty board returns false?', () => {
        expect(checkBoard([
            '', '', '',
            '', '', '',
            '', '', ''
        ])).toBe(false)
    })

    test('A board that has no wins returns false?', () => {
        expect(checkBoard([
            'X', 'O', 'X',
            'O', 'X', 'X',
            'O', 'X', 'O'
        ])).toBe(false)
    })

    test('A board that has a win on a diagonal returns a list with the winning indexes?', () => {
        expect(checkBoard([
            'X', 'O', 'O',
            'O', 'X', 'X',
            'X', 'O', 'X'
        ])).toStrictEqual([0, 4, 8])

        expect(checkBoard([
            'X', 'O', 'X',
            'O', 'X', 'X',
            'X', 'O', 'O'
        ])).toStrictEqual([2, 4, 6])
    })

    test('A board that has a win on a row returns true?', () => {
        expect(checkBoard([
            'O', 'X', 'O',
            'X', 'X', 'X',
            'O', 'O', 'X'
        ])).toStrictEqual([3, 4, 5])

        expect(checkBoard([
            'O', 'O', 'O',
            'O', 'X', 'X',
            'X', 'X', 'O'
        ])).toStrictEqual([0, 1, 2])

        expect(checkBoard([
            'X', 'O', 'O',
            'O', 'X', 'X',
            'X', 'X', 'X'
        ])).toStrictEqual([6, 7, 8])
    })

    test('A board that has a win on a column returns true?', () => {
        expect(checkBoard([
            'X', 'O', 'O',
            'X', 'X', 'O',
            'X', 'O', 'X'
        ])).toStrictEqual([0, 3, 6])

        expect(checkBoard([
            'X', 'O', 'O',
            'O', 'O', 'X',
            'X', 'O', 'X'
        ])).toStrictEqual([1, 4, 7])

        expect(checkBoard([
            'X', 'O', 'X',
            'O', 'X', 'X',
            'O', 'O', 'X'
        ])).toStrictEqual([2, 5, 8])
    })
})