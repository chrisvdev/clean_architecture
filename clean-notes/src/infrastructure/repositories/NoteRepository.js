import NoteRepositoryInterface from '../../domain/interfaces/NoteRepositoryInterface.js'

class NoteRepository extends NoteRepositoryInterface {
    constructor(localStorage) {
        super()
        this.localStorage = localStorage 
    }

    getAllNotes() {
        const notesData = JSON.parse(this.localStorage.getItem('notes')) || []
        return notesData
    }

    addNote(newNoteData) {
        const existingNotes = this.getAllNotes()
        const updatedNotes = [...existingNotes, newNoteData]
        this.localStorage.setItem('notes', JSON.stringify(updatedNotes))
    }
}

export default NoteRepository
