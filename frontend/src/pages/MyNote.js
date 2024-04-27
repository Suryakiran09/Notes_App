import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const MyNote = () => {
  let { id } = useParams()

  let [note, setNote] = useState({ title: '', content: '' })
  let [error, setError] = useState(null)

  useEffect(() => {
    const getNote = async () => {
      if (id === 'create') return
      let response = await fetch(`http://127.0.0.1:8000/notes/${id}`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json'
        }
      })
      let data = await response.json()
      if (response.status === 200) {
        setNote(data)
      } else {
        setError(response.statusText)
      }
    }
    getNote()
  }, [id])

  let updateNote = async () => {
    if (id === 'create') return
    await fetch(`http://127.0.0.1:8000/notes/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(note)
    })
  }

  let deleteNote = async () => {
    await fetch(`http://127.0.0.1:8000/notes/${id}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  let createNote = async () => {
    await fetch("http://127.0.0.1:8000/notes/", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(note)
    })
  }

  let handleSubmit = () => {
    if (id !== 'create' && (!note.title || !note.content)) {
      setError('Title and content are required')
      return
    }
    if (id !== 'create') {
      updateNote()
    } else {
      createNote()
    }
  }

  return (
    <div className='note'>
      <div className='note-header'>
        <h3>
          <Link to='/'>Back</Link>
        </h3>
        { id === 'create' ?
          <div>
            <Link to= '/' className='buttonsubmit' onClick={handleSubmit}>Save</Link>
          </div>
          :
          <div>
            <Link to='/' onClick={deleteNote}>Delete</Link>
          </div>
        }
      </div>
      <div>
        <label>Title:</label>
        <input className='inputarea' type="text" value={note.title} onChange={(e) => setNote({...note, title: e.target.value})} />
      </div>
      <div>
        <label>Content:</label>
        <textarea className='inputarea' value={note.content} onChange={(e) => setNote({...note, content: e.target.value})} />
      </div>
      {error && <div className='error'>{error}</div>}

    </div>
  )
}

export default MyNote
