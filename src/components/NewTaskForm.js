import React,{useState} from "react";


function NewTaskForm({categories, onTaskFormSubmit}) {
  const [formData, setFormData]= useState({
    details:"",
    category:""
  });
  function handleChange(e){
    const name=e.target.name;
    let value=e.target.value;

    setFormData({
      ...formData,[name]:value,
    });
  }

  function handleSubmit(e){
    e.preventDefault();
    console.log(formData);
    onTaskFormSubmit(formData)

  }


  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text"onChange={handleChange} value={formData.text} />
      </label>
      <label>
        Category
        <select name="category" onChange={handleChange} value={formData.category}>
          {categories && categories.map((catego,index)=>(
            <option key={index} value={catego}>{catego}</option>

          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
