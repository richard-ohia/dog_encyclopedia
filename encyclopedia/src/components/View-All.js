import React, { useState } from "react";
import { Link } from "react-router-dom";
import DogDetails from "./DogDetails";
import '../styles/view.scss'

export default function ViewAllComponent({ dogList }) {
  const [input, setInput] = useState('');

  function handleChange(event) {
    const { value } = event.target;
    return setInput(value);
  }
  const filteredDogImages = dogList.filter(dog =>
    dog.name.toLowerCase().includes(input.toLowerCase())
  );

  const dogBox = filteredDogImages.map(dog => (
    <DogDetails key={dog.id} dog={dog} />
  ));

  return (
    <div className="view-all">
      <div class="Card">
        <div class="CardInner">
          <label>Search by Dog Name</label>
          <div class="container">
            <div class="Icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#657789" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            </div>
            <div class="InputContainer">
              <input name="search-input" value={input} placeholder="Can you find your dogs?..." onChange={(e) => handleChange(e)}/>
            </div>
          </div>
        </div>
      </div>
      <div id='dog-box-container'>
        {dogBox}
      </div>
      <Link
        to="/"
        id="view-back-btn"
      >
      &larr; Back
      </Link>
    </div>
  );
}
