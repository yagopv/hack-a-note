import React, { useState } from 'react';

const UIContext = React.createContext();

const initialState = {
  isTagMenuOpened: false,
  isNoteListMenuOpened: false
};

export function UIProvider({ children }) {
  const [state, setState] = useState(initialState);

  return (
    <UIContext.Provider value={[state, setState]}>
      {children}
    </UIContext.Provider>
  );
}

export function useUI() {
  let value = React.useContext(UIContext);
  if (value === null) {
    throw new Error('Component must be wrapped with <Container.Provider>');
  }
  return value;
}
