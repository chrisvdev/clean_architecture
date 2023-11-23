import Note from "../domain/entities/Note";

class NoteUseCase {
    constructor (noteRepository) {
        this.noteRepository = noteRepository
    }

    getAllNotes () {
        const noteDataList = this.noteRepository.getAllNotes()
        return noteDataList.map(noteData => new Note(noteData.id, noteData.title, noteData.content))
    }

    addNote (title, content) {
        const newNoteData = { id: Date.now(), title, content }
        return new Note(newNoteData.id, newNoteData.title, newNoteData.content)
    }
}

export default NoteUseCase
