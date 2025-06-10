import React, { useState, useCallback } from 'react';
import NoteForm from './components/NoteForm/NoteForm';
import Toolbar from './components/Toolbar/Toolbar';
import NoteList from './components/NoteList/NoteList';
import ThemeToggle from './components/ThemeToggle/ThemeToggle';
import useLocalStorage from './hooks/useLocalStorage';
import { filterNotes, sortNotes } from './utils/helpers';
import { ThemeProvider } from './context/ThemeContext';
import './App.css';

function AppContent() {
  const [notes, setNotes] = useLocalStorage('notes', []);
  const [search, setSearch] = useState('');
  const [colorFilter, setColorFilter] = useState('all');
  const [sortOrder, setSortOrder] = useState('newest');

  const addNote = useCallback((text, color) => {
    const newNote = {
      id: Date.now(),
      text,
      color,
      date: new Date().toISOString()
    };
    setNotes(prevNotes => [newNote, ...prevNotes]);
  }, [setNotes]);

  const deleteNote = useCallback((id) => {
    setNotes(prevNotes => prevNotes.filter(note => note.id !== id));
  }, [setNotes]);

  const filteredNotes = filterNotes(notes, search, colorFilter);
  const sortedNotes = sortNotes(filteredNotes, sortOrder);

  return (
    <div className="app">
      <header>
        <h1>Reactive Notes</h1>
        <ThemeToggle />
      </header>
      
      <NoteForm onAdd={addNote} />
      
      <Toolbar 
        search={search}
        onSearchChange={setSearch}
        colorFilter={colorFilter}
        onColorFilterChange={setColorFilter}
        sortOrder={sortOrder}
        onSortChange={setSortOrder}
      />
      
      <NoteList notes={sortedNotes} onDelete={deleteNote} />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;