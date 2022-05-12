import { Fragment, useContext, useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';

import DreamCatcher from '../../assets/dreamcatcher1.png';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import { dreamsProductsData } from '../../utils/firebase/products3';

import SearchBox from '../../components/search-box/search-box.component';
import CardList from '../../components/card-list/card-list.component';

import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
} from './navigation.styles';

const Navigation = () => {
	const { currentUser } = useContext(UserContext);
	const { isCartOpen } = useContext(CartContext);
	const [searchField, setSearchField] = useState('');
	const [ dreams, setDreams] = useState([]);
	const [filteredDreams, setFilterDreams] = useState(dreams);

	useEffect( () => {
		fetch('https://jsonplaceholder.typicode.com/albums')
			.then( (response) => response.json() )
			.then( (albums) => setDreams( dreamsProductsData ) );
	}, [] );

	useEffect( () => {
		const newFilteredDreams = dreams.filter( (dream) => {
			return dream.title.toLocaleLowerCase().includes(searchField);
		});

		setFilterDreams(newFilteredDreams);
	}, [dreams, searchField]);

	console.log( "Dreams: ", dreams );

	const onSearchChange = (event) => {
		const searchFieldString = event.target.value.toLocaleLowerCase();
		console.log( searchFieldString );
		console.log( "Filtered Dreams: ", filteredDreams );
		setSearchField(searchFieldString);
	};

	//	let onSearchChange;

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <img src={ DreamCatcher } />
			GooDreamShop
        </LogoContainer>
		<SearchBox
			className='dreams-search-box'
			onChangeHandler={onSearchChange}
			placeholder='search dreams'
		/>
        <NavLinks>
			<NavLink to='/shop' style={{color: 'white'}} >SHOP</NavLink>

          {currentUser ? (
			  <NavLink as='span' onClick={signOutUser} style={{color: 'white'}}>
              SIGN OUT
            </NavLink>
          ) : (
			  <NavLink to='/auth' style={{color: 'white'}}>SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
		<div className='dreams-list'>
			{ 
				searchField && filteredDreams !== [] ? <CardList dreams={ filteredDreams } /> : null
			} 
		</div>
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
