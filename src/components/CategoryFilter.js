import React, {useState} from "react";

function CategoryFilter({categories,onCategoryClick}) {
  const [selectedCategory, setSelectedCategory]=useState("All");

  function handleCategoryClick(category){
    setSelectedCategory(category)
    onCategoryClick(category)
  }
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category, index)=>(
        <button key={index}
        className={selectedCategory===category? "selected": ""}  
        onClick={()=>handleCategoryClick(category)}>{category}</button>

      ))}
    </div>
  );
}

export default CategoryFilter;
