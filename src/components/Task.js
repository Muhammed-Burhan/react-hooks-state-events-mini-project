import React from "react";

function Task({ text, category, deleteIt }) {
  function deleteHandler(text) {
    deleteIt(text);
  }
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={() => deleteHandler(text)}>
        X
      </button>
    </div>
  );
}

export default Task;
