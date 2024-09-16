import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import SoloDoggy from "./pages/SoloDoggy";
import ViewAll from "./pages/View-All";

function App() {
  const [dogList, setDogList] = useState([]);

  const headers = new Headers({
    "Content-Type": "application/json",
    "x-api-key": "live_IvFrQVLDPNzIm14cM5nhSOPzQWiR9k4Fnwp0xeL9mWqSsjoa52hJcE9rPoyACX2y"
  });
  
  const requestOptions = {
    method: 'GET',
    headers: headers,
    redirect: 'follow'
  };

  React.useEffect(() => {
    fetch("https://api.thedogapi.com/v1/breeds", requestOptions)
    .then(response => response.json())
    .then(result => setDogList(result))
    .catch(error => console.log('error', error));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home /> }></Route>
        <Route path="/:name" element={ <SoloDoggy dogList={dogList}/> }></Route>
        <Route path="/view-all" element={ <ViewAll dogList={dogList}/> }></Route>
      </Routes>
    </div>
  );
}

export default App;
