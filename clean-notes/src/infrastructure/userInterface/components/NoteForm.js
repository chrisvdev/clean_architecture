import React, { useState, useMemo } from 'react'
import NoteAdapter from '../../../adapters/NoteAdapter'
import NoteUseCase from '../../../useCases/NoteUseCase'
import NoteRepository from '../../repositories/NoteRepository'

const NoteForm = () => {
  const noteRepository = useMemo(() => { return new NoteRepository(window.localStorage) }, [])
  const noteUseCase = useMemo(() => { return new NoteUseCase(noteRepository) }, [])
  const noteAdapter = useMemo(() => { return new NoteAdapter(noteUseCase, noteRepository) }, [])
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleAddNote = (e) => {
    e.preventDefault()
    noteAdapter.addNoteFromUI(title, content)
    setTitle('')
    setContent('')
  }

  return (
    <div>
      <h2>Agregar Nueva Nota</h2>
      <form onSubmit={handleAddNote}>
        <label>
          Título:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <br />
        <label>
          Contenido:
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">
          Agregar Nota
        </button>
      </form>
    </div>
  )
}

export default NoteForm
