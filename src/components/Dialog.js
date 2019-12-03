import React from 'react';
import ReactDOM from 'react-dom';

function Dialog({ children, onCancel, onAccept }) {
  return ReactDOM.createPortal(
    <div className="dialog">
      <div className="dialog-wrapper">
        <h4 className="dialog-title">{children}</h4>
        <div className="dialog-buttons">
          <button className="btn bright" onClick={onCancel}>
            Cancel
          </button>
          <button className="btn error" onClick={onAccept}>
            Accept
          </button>
        </div>
      </div>
    </div>,
    document.getElementById('root')
  );
}

Dialog.displayName = 'Dialog';

export { Dialog };
