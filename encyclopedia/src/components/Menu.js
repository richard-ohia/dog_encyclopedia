import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/menu.scss'
const Menu = () => {
	return (
		<nav class="nav">
		<input type="checkbox" class="nav__cb" id="menu-cb"/>
		<div class="nav__content">
		  <ul class="nav__items">
			<li class="nav__item">
			  <span class="nav__item-text">
			  <Link to="/view-all" style={{textDecoration: 'none', color: '#6C7784'}}>View All</Link>
			  </span>
			</li>
		  </ul>
		</div>
		<label class="nav__btn" for="menu-cb"></label>
	  </nav>
	);
  }
  
  export default Menu;