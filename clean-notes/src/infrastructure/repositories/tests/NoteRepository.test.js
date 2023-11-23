import NoteRepository from '../NoteRepository'

class MockLocalStorage {
  constructor() {
    this.storage = {}
  }

  getItem(key) {
    return this.storage[key] || null
  }

  setItem(key, value) {
    this.storage[key] = value
  }

  clear() {
    this.storage = {}
  }
}

describe('NoteRepository', () => {
  let mockLocalStorage
  let noteRepository

  beforeEach(() => {
    mockLocalStorage = new MockLocalStorage();
    noteRepository = new NoteRepository(mockLocalStorage)
  })

  test('getAllNotes returns empty array when localStorage is empty', () => {
    const notes = noteRepository.getAllNotes()
    expect(notes).toHaveLength(0)
  })

  test('addNote stores a new note in localStorage', () => {
    const newNoteData = { title: 'Test Note', content: 'Test Content' }

    noteRepository.addNote(newNoteData)

    const notesInStorage = JSON.parse(mockLocalStorage.getItem('notes'))
    expect(notesInStorage).toHaveLength(1)
    expect(notesInStorage[0]).toEqual(expect.objectContaining(newNoteData))
  })

  test('getAllNotes returns all notes stored in localStorage', () => {
    const note1 = { title: 'Note 1', content: 'Content 1' }
    const note2 = { title: 'Note 2', content: 'Content 2' }

    noteRepository.addNote(note1)
    noteRepository.addNote(note2)

    const notes = noteRepository.getAllNotes()
    
    expect(notes).toHaveLength(2)
    expect(notes).toEqual(expect.arrayContaining([note1, note2]))
  })
})
