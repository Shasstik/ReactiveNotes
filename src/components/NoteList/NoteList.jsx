import React from 'react';
import Note from '../Note/Note';
import './NoteList.css';

const NoteList = ({ notes, onDelete }) => {
  return (
    <div className="note-list">
      {notes.length > 0 ? (
        notes.map((note) => (
          <Note
            key={note.id}
            id={note.id}
            text={note.text}
            color={note.color}
            date={note.date}
            onDelete={onDelete}
          />
        ))
      ) : (
        <p className="empty-message">Заметок не найдено</p>
      )}
    </div>
  );
};

export default NoteList;