class NoteAdapter {
    constructor(noteUseCase, noteRepository) {
        this.noteUseCase = noteUseCase
        this.noteRepository = noteRepository
    }

    getAllNotesForUI() {
        return this.noteUseCase.getAllNotes()
    }

    addNoteFromUI(title, content) {
        const newNoteData = this.noteUseCase.addNote(title, content)
        this.noteRepository.addNote(newNoteData)
    }
}

export default NoteAdapter
