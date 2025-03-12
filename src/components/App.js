import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });



function App() {
  const [tasks, setTasks]=useState(TASKS)
  const [filteredTasks, setFilteredTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

//remove the "All" category from the task displayed on newTask form
  const filteredCategories=CATEGORIES.filter((cat)=>cat !=="All")

  function handleNewTask(newTask){
   const updatedTasks=[...tasks,newTask];
   setTasks(updatedTasks);

   setFilteredTasks(
    selectedCategory==="All"?updatedTasks
    : updatedTasks.filter((task)=>task.category===selectedCategory
 
)
   )
  }

  function displayCategory(category){
    setSelectedCategory(category);
    setFilteredTasks(
      category==="All"?tasks 
      : tasks.filter((task)=>task.category===category
    )
  );

  }

  function handleDelete(taskText){
    const updateTasks=tasks.filter((task)=>task.text!==taskText);
  setTasks(updateTasks);
  setFilteredTasks(
    selectedCategory === "All"
      ? updateTasks
      : updateTasks.filter((task) => task.category === selectedCategory)
  );

  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onCategoryClick={displayCategory} />
      <NewTaskForm categories={filteredCategories} onTaskFormSubmit={handleNewTask}/>
      
        <TaskList tasks={filteredTasks} onDeleteClick={handleDelete}/>
     
    </div>
  );
}

export default App;
