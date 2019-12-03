import React from 'react';

function Search({ onSearchTextChanged, onAddNote }) {
  return (
    <div className="flex">
      <input
        className="search"
        type="search"
        onChange={event => onSearchTextChanged(event.target.value)}
      />
      <button className="icon-button add-note" onClick={onAddNote}></button>
    </div>
  );
}

Search.displayName = 'Search';

export { Search };
