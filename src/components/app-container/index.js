import React from 'react';
import Split from 'react-split';

function AppContainer() {
  return (
    <Split
      style={{ display: 'flex', height: '100%' }}
      expandToMin={true}
      sizes={[15, 15, 70]}
      minSize={[100, 100, 200]}
      cursor="col-resize"
      direction="horizontal"
      snapOffset={0}
      gutterStyle={(dimension, gutterSize, index) => {
        return {
          width: '2px',
          backgroundColor: 'white'
        };
      }}
    >
      <div>A</div>
      <div>B</div>
      <div>C</div>
    </Split>
  );
}

export { AppContainer };
