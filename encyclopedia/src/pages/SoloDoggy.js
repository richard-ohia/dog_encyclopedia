import React, { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import '../styles/solo-dog.css'

const SoloDoggy = ({ dogList }) => {
	const [dog, setDog] = useState('');
	const { name } = useParams();

	useEffect(() => {
		setDog(dogList.filter(dog => dog.name === name));
	}, [name, dogList])
  return (
    <>
      <section className="solo-dog-container">
        {dog && dog?.map((currDog) => (
          <div
            key={currDog.id}
            className="inner-container"
          >
            <article>
              <img
                src={currDog.image.url}
                alt={currDog.name}
				className="solo-img"
              />
            </article>
            <article>
              <h1 className="name-text">
                {currDog.name}
              </h1>
              <ul className="info-container">
                {currDog?.bred_for && <li style={{listStyleType: 'none'}}>
                  <span style={{fontWeight: '700',color: '#e2e2e2'}}>Bred For:</span>{" "}
                  {currDog.bred_for}
                </li>}
				{currDog?.origin && <li style={{listStyleType: 'none'}}>
                  <span style={{fontWeight: '700',color: '#e2e2e2'}}>Origin:</span>{" "}
                  {currDog.origin}
                </li>}
                {currDog?.height?.metric && <li style={{listStyleType: 'none'}}>
                  <span style={{fontWeight: '700',color: '#e2e2e2'}}>Height:</span>{" "}
                  {currDog.height.metric} cm
                </li>}
                {currDog?.weight?.metric && <li style={{listStyleType: 'none'}}>
                  <span style={{fontWeight: '700',color: '#e2e2e2'}}>Weight:</span>{" "}
                  {currDog.weight.metric} kgs
                </li>}
                {currDog?.breed_group && <li style={{listStyleType: 'none'}}>
                  <span style={{fontWeight: '700',color: '#e2e2e2'}}>Breed Group:</span>{" "}
                  {currDog.breed_group}
                </li>}
                {currDog?.life_span && <li style={{listStyleType: 'none'}}>
                  <span style={{fontWeight: '700',color: '#e2e2e2'}}>Lifespan:</span>{" "}
                  {currDog.life_span}
                </li>}
                {currDog?.temperament && <li style={{listStyleType: 'none'}}>
                  <span style={{fontWeight: '500',color: '#e2e2e2'}}>Temperament:</span>{" "}
                  {currDog.temperament}
                </li>}
              </ul>

              <Link
                to="/view-all"
                className="solo-doggy-btn"
              >
                &larr; Back
              </Link>
            </article>
          </div>
        ))}
      </section>
    </>
  )
};

export default SoloDoggy;
