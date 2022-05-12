import Card from '../card/card.component';
import './card-list.styles.css';

const CardList = ({ dreams }) => (
	<div className='card-list'>
		{dreams.map((dream) => {
			return <Card key={dream.id} dream={dream} />;
		})}
	</div>
);

export default CardList;
