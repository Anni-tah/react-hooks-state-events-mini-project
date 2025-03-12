import React from "react";
import Task from "./Task";


function TaskList({tasks, onDeleteClick}) {
  return (
    <div className="tasks">
     
      {
        tasks.map((tsk)=>(
          <Task key={tsk.tsk} 
          category={tsk.category} 
          text={tsk.text} 
          onDeleteClick={onDeleteClick}/>
        ))
      }
     
    </div>
  );
}

export default TaskList;
