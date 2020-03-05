import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const Item = props => {
  
  // Remove from cart function
  const { cart, setCart } = useContext(CartContext);

  const removeItem = (id) => {
    console.log(cart.findIndex(item => item.id === id))
    // console.log(cart.splice(cart.findIndex(item => item.id === id)))
    setCart([...cart])
  }

	return (
		<div className="shopping-cart_item">
			<img src={props.image} alt={`${props.title} book`} />
			<div>
				<h1>{props.title}</h1>
				<p>$ {props.price}</p>
				<button onClick={() => removeItem(props.id)}>Remove from cart</button>
			</div>
		</div>
	);
};

export default Item;
