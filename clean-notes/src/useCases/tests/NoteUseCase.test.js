import NoteUseCase from '../NoteUseCase'
import NoteRepositoryInterface from '../../domain/interfaces/NoteRepositoryInterface'
import Note from '../../domain/entities/Note'

// Mock para el repository
class MockNoteRepository extends NoteRepositoryInterface {
  getAllNotes() {
    return [{ id: 1, title: 'Test Note 1', content: 'Test Content 1' }]
  }

  addNote(newNoteData) {
    return new Note(newNoteData.title, newNoteData.content)
  }
}

describe('NoteUseCase', () => {
  test('getAllNotes returns mapped Note objects', () => {
    const noteRepository = new MockNoteRepository()
    const noteUseCase = new NoteUseCase(noteRepository)

    const notes = noteUseCase.getAllNotes()

    expect(notes).toHaveLength(1)
    expect(notes[0]).toBeInstanceOf(Note)
    expect(notes[0].id).toBe(1)
    expect(notes[0].title).toBe('Test Note 1')
    expect(notes[0].content).toBe('Test Content 1')
  });

  test('addNote returns a new Note object', () => {
    const noteRepository = new MockNoteRepository()
    const noteUseCase = new NoteUseCase(noteRepository)

    const newNote = noteUseCase.addNote('New Test Note', 'New Test Content')

    expect(newNote).toBeInstanceOf(Note)
    expect(newNote.id).toBeDefined()
    expect(newNote.title).toBe('New Test Note')
    expect(newNote.content).toBe('New Test Content')
  });
})
