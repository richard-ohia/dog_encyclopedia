import React from "react";
import { Link } from 'react-router-dom';

const DogDetails = ({ dog }) => {
	return (
		<div className="dog-card">
			<Link to={`/${dog.name}`} key={dog.name} style={{ textDecoration: 'none' }}>
				<img id='dog-image' src={dog?.image?.url} alt={dog?.name} />
				<h3>{dog?.name}</h3>
				{dog?.bred_for && <p><b>Bred For: {dog?.bred_for}</b></p>}
			</Link>
		</div>
	);
  }
  
  export default DogDetails;