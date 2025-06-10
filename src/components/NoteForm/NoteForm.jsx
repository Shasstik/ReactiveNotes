import React, { useState } from 'react';
import './NoteForm.css';

const NoteForm = ({ onAdd }) => {
  const [text, setText] = useState('');
  const [color, setColor] = useState('yellow');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text, color);
      setText('');
    }
  };

  return (
    <form className="note-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Введите текст заметки..."
        className="note-input"
      />
      <select 
        value={color} 
        onChange={(e) => setColor(e.target.value)}
        className="color-select"
      >
        <option value="yellow">Желтый</option>
        <option value="blue">Голубой</option>
        <option value="pink">Розовый</option>
        <option value="green">Зеленый</option>
      </select>
      <button type="submit" className="add-button">Добавить</button>
    </form>
  );
};

export default NoteForm;