import Note from '../Note'

describe('Note Class', () => {
    test('should create a new Note instance', () => {
        const note = new Note(1, 'Test Title', 'Test Content')

        expect(note).toBeInstanceOf(Note)
        expect(note.id).toBe(1)
        expect(note.title).toBe('Test Title')
        expect(note.content).toBe('Test Content')
    })
})
