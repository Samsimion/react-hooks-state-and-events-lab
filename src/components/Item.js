import React, { useState } from "react";

function Item({ name, category }) {
  const [incart ,setIncart] = useState(false);
  function handleAddCartClick(){
    setIncart(!incart);
  }

  return (
    <li className={incart? "in-cart": ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddCartClick}>{incart?"Remove From":"Add to"} Cart</button>
    </li>
  );
}

export default Item;
