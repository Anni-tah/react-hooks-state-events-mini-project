import React from "react";

function Task({category, text,onDeleteClick} ){

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={()=>onDeleteClick(text)}>X</button>
    </div>
  );
}

export default Task;
