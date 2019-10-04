import React, { useRef } from 'react';
import styled from 'styled-components';
import { color, fontFamily } from '../../shared/theme';

// https://medium.com/@jerrylowm/build-a-tags-input-react-component-from-scratch-1524f02acb9a
// Included on the above link - https://daveceddia.com/why-not-modify-react-state-directly/

function TagsInput({ value = [], onChange }) {
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
    <TagContainer>
      <TagList>
        {value.map((tag, index) => (
          <TagListItem key={tag}>
            {tag}
            <TagRemoveButtom type="button" onClick={() => removeTag(index)}>
              x
            </TagRemoveButtom>
          </TagListItem>
        ))}
        <TagInputContainer className="input-tag__tags__input">
          <TagInput
            ref={inputRef}
            onKeyDown={handleKeyDown}
            placeholder="Enter tag"
          />
        </TagInputContainer>
      </TagList>
    </TagContainer>
  );
}

const TagContainer = styled.div`
  border-radius: 2px;
  display: flex;
  flex-wrap: wrap;
  padding: 5px 5px 0;
`;

const TagList = styled.ul`
  display: inline-flex;
  list-style: none;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  width: 100%;
`;

const TagListItem = styled.li`
  align-items: center;
  background: ${color('primary')};
  border-radius: 10px;
  color: ${color('bright')};
  display: flex;
  font-weight: 300;
  list-style: none;
  margin-bottom: 5px;
  margin-right: 5px;
  padding: 3px 5px;
  font-family: ${fontFamily('primary')};
`;

const TagRemoveButtom = styled.button`
  align-items: center;
  background: ${color('dark')};
  color: ${color('bright')};
  font-family: ${fontFamily('primary')};
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: inline-flex;
  font-size: 12px;
  height: 15px;
  justify-content: center;
  line-height: 0;
  margin-left: 8px;
  width: 15px;
  outline: none;
`;

const TagInputContainer = styled.li`
  flex-grow: 1;
  padding: 0;
`;

const TagInput = styled.input.attrs({
  type: 'text'
})`
  border: none;
  width: 100%;
  background: transparent;
  outline: none;
  color: ${color('primary')};
`;

export { TagsInput };
