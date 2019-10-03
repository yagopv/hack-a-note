import React, { useState, useRef } from 'react';
import styled from 'styled-components';

// https://medium.com/@jerrylowm/build-a-tags-input-react-component-from-scratch-1524f02acb9a
function TagsInput() {
  const [tags, setTags] = useState([]);
  const inputRef = useRef(null);

  const handleKeyDown = event => {
    const value = event.target.value;
    if (event.key === 'Enter' && value) {
      if (tags.find(tag => tag.toLowerCase() === value.toLowerCase())) {
        return;
      }
      setTags([...tags, value]);
      inputRef.current.value = null;
    } else if (event.key === 'Backspace' && !value) {
      removeTag(tags.length - 1);
    }
  };

  const removeTag = index => {
    const newTags = [...tags];
    newTags.splice(index, 1);
    setTags(newTags);
  };

  return (
    <TagContainer>
      <TagList>
        {tags.map((tag, index) => (
          <TagListItem key={tag}>
            {tag}
            <TagRemoveButtom type="button" onClick={() => removeTag(index)}>
              x
            </TagRemoveButtom>
          </TagListItem>
        ))}
        <TagInputContainer className="input-tag__tags__input">
          <TagInput ref={inputRef} onKeyDown={handleKeyDown} />
        </TagInputContainer>
      </TagList>
    </TagContainer>
  );
}

const TagContainer = styled.div`
  background: white;
  border: 1px solid #d6d6d6;
  border-radius: 2px;
  display: flex;
  flex-wrap: wrap;
  padding: 5px 5px 0;
`;

const TagList = styled.ul`
  display: inline-flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  width: 100%;
`;

const TagListItem = styled.li`
  align-items: center;
  background: #85a3bf;
  border-radius: 2px;
  color: white;
  display: flex;
  font-weight: 300;
  list-style: none;
  margin-bottom: 5px;
  margin-right: 5px;
  padding: 5px 10px;
`;

const TagRemoveButtom = styled.button`
  align-items: center;
  appearance: none;
  background: #333333;
  border: none;
  border-radius: 50%;
  color: white;
  cursor: pointer;
  display: inline-flex;
  font-size: 12px;
  height: 15px;
  justify-content: center;
  line-height: 0;
  margin-left: 8px;
  transform: rotate(45deg);
  width: 15px;
`;

const TagInputContainer = styled.li`
  background: none;
  flex-grow: 1;
  padding: 0;
`;

const TagInput = styled.input.attrs({
  type: 'text'
})`
  border: none;
  width: 100%;
`;

export { TagsInput };
