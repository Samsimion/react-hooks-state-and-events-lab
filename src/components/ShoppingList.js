import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setselectedCategory]= useState("All")
  const itemToDisplay = selectedCategory ==="All"? items: items.filter(item=> item.category===selectedCategory)
 
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={e=>setselectedCategory(e.target.value)} value={selectedCategory}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
