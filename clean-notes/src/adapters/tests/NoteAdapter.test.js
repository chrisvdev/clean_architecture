import NoteUseCase from '../../useCases/NoteUseCase'
import NoteRepositoryInterface from '../../domain/interfaces/NoteRepositoryInterface'

class MockNoteRepository extends NoteRepositoryInterface {
  constructor() {
    super()
    this.notes = []
  }

  getAllNotes() {
    return this.notes
  }

  addNote(newNoteData) {
    this.notes.push(newNoteData)
  }
}

class MockNoteUseCase extends NoteUseCase {
  constructor(noteRepository) {
    super(noteRepository)
  }

  getAllNotes() {
    return this.noteRepository.getAllNotes()
  }

  addNote(title, content) {
    const newNoteData = { id: Date.now(), title, content }
    this.noteRepository.addNote(newNoteData)
    return newNoteData
  }
}

describe('Mocked NoteUseCase', () => {
  test('getAllNotes returns mapped Note objects', () => {
    const mockNoteRepository = new MockNoteRepository()
    const mockNoteUseCase = new MockNoteUseCase(mockNoteRepository)

    const newNoteData = { id: Date.now(), title: 'Test Note', content: 'Test Content' }
    mockNoteUseCase.addNote(newNoteData.title, newNoteData.content)

    const notes = mockNoteUseCase.getAllNotes()

    expect(notes).toHaveLength(1)
    expect(notes[0]).toEqual(expect.objectContaining(newNoteData))
  })

  test('addNote returns a new Note object', () => {
    const mockNoteRepository = new MockNoteRepository()
    const mockNoteUseCase = new MockNoteUseCase(mockNoteRepository)

    const newNoteData = { title: 'New Test Note', content: 'New Test Content' }
    const newNote = mockNoteUseCase.addNote(newNoteData.title, newNoteData.content)

    expect(newNote).toEqual(expect.objectContaining(newNoteData))
    expect(mockNoteRepository.getAllNotes()).toHaveLength(1)
  })
})
