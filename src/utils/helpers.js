// Фильтрация заметок по тексту и цвету
export const filterNotes = (notes, search, colorFilter) => {
  return notes.filter(note => {
    const matchesSearch = note.text.toLowerCase().includes(search.toLowerCase());
    const matchesColor = colorFilter === 'all' || note.color === colorFilter;
    return matchesSearch && matchesColor;
  });
};

// Сортировка заметок по дате
export const sortNotes = (notes, sortOrder) => {
  return [...notes].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    
    return sortOrder === 'newest' 
      ? dateB - dateA
      : dateA - dateB;
  });
};

// Форматирование даты (опционально)
export const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('ru-RU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};