import React from 'react';
import './Toolbar.css';

const Toolbar = ({ 
  search, 
  onSearchChange, 
  colorFilter, 
  onColorFilterChange,
  sortOrder,
  onSortChange
}) => {
  return (
    <div className="toolbar">
      <input
        type="text"
        placeholder="Поиск заметок..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        className="search-input"
      />
      
      <select 
        value={colorFilter} 
        onChange={(e) => onColorFilterChange(e.target.value)}
        className="filter-select"
      >
        <option value="all">Все цвета</option>
        <option value="yellow">Желтые</option>
        <option value="blue">Голубые</option>
        <option value="pink">Розовые</option>
        <option value="green">Зеленые</option>
      </select>
      
      <button 
        onClick={() => onSortChange(sortOrder === 'newest' ? 'oldest' : 'newest')}
        className="sort-button"
      >
        {sortOrder === 'newest' ? 'Сначала новые ▼' : 'Сначала старые ▲'}
      </button>
    </div>
  );
};

export default Toolbar;