import React, { useEffect, useState } from 'react';
import ListItem from '../components/ListItem';
import AddButton from '../components/AddButton';

const NotesList = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const getNotes = async () => {
      try {
        let response = await fetch('http://127.0.0.1:8000/notes/');
        let data = await response.json();
        if (response.ok) {
          setNotes(data);
        } else {
          console.error('Error fetching notes');
        }
      } catch (error) {
        console.error('Error fetching notes');
      }
    };
    getNotes();
  }, []);

  return (
    <div className='notes'>
      <h1 className='welcome'>Welcome</h1>
      <div className='notes-header'>
        <h2 className='notes-title'>&#9782; Notes</h2>
        <p className='notes-count'>{notes.length}</p>
      </div>
      <div className='notes-list'>
        {notes.map((note) => (
          <ListItem key={note.id} note={note} />
        ))}
      </div>
      <AddButton />
    </div>
  );
};

export default NotesList;
