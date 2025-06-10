import React from 'react';
import './Note.css';

const Note = ({ id, text, color, date, onDelete }) => {
  return (
    <div className={`note ${color}`}>
      <p className="note-text">{text}</p>
      <div className="note-footer">
        <span className="note-date">{new Date(date).toLocaleString()}</span>
        <button 
          onClick={() => onDelete(id)} 
          className="delete-button"
          aria-label="Удалить заметку"
        >
          🗑️
        </button>
      </div>
    </div>
  );
};

export default Note;