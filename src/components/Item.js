import React, { useState } from "react";

function Item(props) {
  const [inCart, setInCart] = useState(false);

  return (
    <li className={inCart ? 'in-cart' : ''}>
      <span>{props.name}</span>
      <span className="category">{props.category}</span>
      <button className="add" onClick={() => setInCart(!inCart)}>
        {inCart ? 'Remove From Cart' : 'Add to Cart'}
      </button>
    </li>
  );
}

export default Item;
