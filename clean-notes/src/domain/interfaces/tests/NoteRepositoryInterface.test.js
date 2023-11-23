import NoteRepositoryInterface from '../NoteRepositoryInterface'

describe('NoteRepositoryInterface', () => {
    test('should throw an error when getAllNotes is not implemented', () => {
        expect(() => {
            const noteRepository = new NoteRepositoryInterface()
            noteRepository.getAllNotes()
        }).toThrowError('Not implemented: getAllNotes')
    })

    test('should throw an error when addNote is not implemented', () => {
        expect(() => {
            const noteRepository = new NoteRepositoryInterface()
            noteRepository.addNote()
        }).toThrowError('Not implemented: addNote')
    })
})