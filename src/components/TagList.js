import React from 'react';

// Naming the forwardRef function we can see it named in Devtools
function List({ items, selected, onTagSelected }, ref) {
  return (
    <ul ref={ref} className="tag-list p-t-md">
      <li
        key={'all'}
        onClick={() => onTagSelected(null)}
        className={`${selected === null ? 'selected' : ''}`}
      >
        <p className="tag-list-item">All notes</p>
      </li>
      {items &&
        items.map((item, index) => (
          <li
            key={item}
            onClick={() => onTagSelected(index)}
            className={`${selected === index ? 'selected' : ''}`}
          >
            <p className="tag-list-item"># {item}</p>
          </li>
        ))}
    </ul>
  );
}

List.displayName = 'TagList';

const TagList = React.forwardRef(List);

export { TagList };
