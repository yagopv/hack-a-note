import React from 'react';

// Naming the forwardRef function we can see it named in Devtools
const CategoryList = React.forwardRef(function CategoryList(
  { items, selected, onCategorySelected },
  ref
) {
  return (
    <ul ref={ref} className="category-list p-t-md">
      <li
        key={'all'}
        onClick={() => onCategorySelected(null)}
        className={`${selected === null ? 'selected' : ''}`}
      >
        <p className="category-list-tag">All notes</p>
      </li>
      {items &&
        items.map((item, index) => (
          <li
            key={item}
            onClick={() => onCategorySelected(index)}
            className={`${selected === index ? 'selected' : ''}`}
          >
            <p className="category-list-tag"># {item}</p>
          </li>
        ))}
    </ul>
  );
});

export { CategoryList };
