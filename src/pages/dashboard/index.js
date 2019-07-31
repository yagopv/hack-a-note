import React, { useContext } from 'react';
import Split from 'react-split';
import { CategoryList } from '../../components/categories/CategoryList';
import { NoteList } from '../../components/notes/NoteList';
import { Note } from '../../components/notes/Note';
import { Menu } from '../../components/ui/Menu';
import { ThemeContext } from 'styled-components';

function Dashboard() {
  const theme = useContext(ThemeContext);

  return (
    <React.Fragment>
      <Split
        style={{ display: 'flex', height: '100%', overflow: 'hidden' }}
        expandToMin={true}
        sizes={[15, 35, 50]}
        minSize={[100, 200, 200]}
        cursor="col-resize"
        direction="horizontal"
        snapOffset={0}
        gutterStyle={(dimension, gutterSize, index) => {
          return {
            width: '1px',
            backgroundColor: theme.colors.separator
          };
        }}
      >
        <Menu size="(max-width: 768px)" isOpen={false}>
          <CategoryList />
        </Menu>
        <Menu size="(max-width: 576px)" isOpen={false}>
          <NoteList />
        </Menu>
        <Note />
      </Split>
    </React.Fragment>
  );
}

export { Dashboard };
