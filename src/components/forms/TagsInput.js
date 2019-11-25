import React, { useRef } from 'react';

// https://medium.com/@jerrylowm/build-a-tags-input-react-component-from-scratch-1524f02acb9a
// Included on the above link - https://daveceddia.com/why-not-modify-react-state-directly/

export function TagsInput({ value = [], onChange }) {
  const inputRef = useRef(null);

  const handleKeyDown = event => {
    if (event.key === 'Enter' && event.target.value) {
      if (
        value.find(
          tag => tag.toLowerCase() === event.target.value.toLowerCase()
        )
      ) {
        return;
      }
      onChange([...value, event.target.value]);
      inputRef.current.value = null;
    } else if (event.key === 'Backspace' && !value) {
      removeTag(value.length - 1);
    }
  };

  const removeTag = index => {
    const newTags = [...value];
    newTags.splice(index, 1);
    onChange(newTags);
  };

  return (
    <div className="tags-container">
      <ul>
        {value.map((tag, index) => (
          <li key={tag}>
            {tag}
            <button onClick={() => removeTag(index)}>x</button>
          </li>
        ))}
        <div className="tags-input-container">
          <input
            type="text"
            ref={inputRef}
            onKeyDown={handleKeyDown}
            placeholder="Enter tag"
          />
        </div>
      </ul>
    </div>
  );
}
