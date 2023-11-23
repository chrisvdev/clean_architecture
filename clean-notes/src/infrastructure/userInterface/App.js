import React from 'react'
import NoteList from './components/NoteList'
import NoteForm from './components/NoteForm'

function App() {
    return (
        <div>
            <h1>Aplicación de Notas</h1>
            <NoteList />
            <NoteForm />
        </div>
    )
}

export default App
