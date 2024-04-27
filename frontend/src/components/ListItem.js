import React from 'react';
import { Link } from 'react-router-dom';

const ListItem = ({ note }) => {
  return (
    <Link to={`/my_note/${note.id}`}>
      <div className='notes-list-item'>
        <h3>{note.title}</h3>
        <p>Date: {new Date(note.updated_at).toLocaleDateString()} Time: {new Date(note.updated_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
      </div>
    </Link>
  );
};

export default ListItem;
