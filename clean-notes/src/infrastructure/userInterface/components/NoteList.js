import React, { useMemo } from 'react'
import NoteAdapter from '../../../adapters/NoteAdapter'
import NoteUseCase from '../../../useCases/NoteUseCase'
import NoteRepository from '../../repositories/NoteRepository'

const NoteList = () => {
    const noteRepository = useMemo(() => { return new NoteRepository(window.localStorage) }, [])
    const noteUseCase = useMemo(() => { return new NoteUseCase(noteRepository) }, [])
    const noteAdapter = useMemo(() => { return new NoteAdapter(noteUseCase, noteRepository) }, [])
    const notes = noteAdapter.getAllNotesForUI()

    return (
        <div>
            <h2>Lista de Notas</h2>
            <ul>
                {notes.map((note, index) => (
                    <li key={index}>
                        <strong>{note.title}</strong>: {note.content}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default NoteList
