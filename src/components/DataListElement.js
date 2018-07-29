import React from 'react';

const DataListElement = ({element, toggleFn, show }) => {
  return (
    <li>
      <div className="data-list">
        <div className="element-title element">
          <div>Title: {element.title}</div>
        </div>
        <div className="element-text element">
          <div>Text: {element.text}</div>
        </div>
        <div className="element-comment element">
          {show ? <div>Comment: {element.comment}</div> : <br/>}
          <button type="button" value={element.key} onClick={toggleFn(element.key)}>
            Hide Text
          </button>
        </div>
      </div>
    </li>
  );
};

export default DataListElement;