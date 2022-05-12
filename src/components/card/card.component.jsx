import './card.styles.css';

import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

const Card = ({ dream }) => {
	const { id, title, price } = dream;
	const { addItemToCart } = useContext( CartContext );

	const addProductToCart = () => addItemToCart(dream);

	return (
		<div className='card-container'>
			<img
				alt={`dream ${title}`}
				src={`https://picsum.photos/id/${id}/200/300`}
				//src={`https://robohash.org/${id}?set=set2&size=180x180`}
			/>
			<h2>{title}</h2>
			<h2 style={{margin: "5px"}} >{price}$</h2>
			<Button
				buttonType= { BUTTON_TYPE_CLASSES.inverted }
				onClick={ addProductToCart }
			>
				Add to card
			</Button>
		</div>
	);
};

export default Card;
