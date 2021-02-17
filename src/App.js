import React from 'react';

import './App.css';
import Cards from './components/Cards/CardsContainer';
import SideBar from './components/SideBar/SideBarContainer';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckSquare, faCoffee, faAngry, faBaseballBall, faBasketballBall, faBible, faBowlingBall, 
        faBus, faBookDead, faCar, faCarSide, faDemocrat, faAddressBook, faAddressCard, faBell } from '@fortawesome/free-solid-svg-icons';

library.add(faCheckSquare, faCoffee, faAngry, faBaseballBall, faBasketballBall, faBible, faBowlingBall, 
            faBus, faBookDead, faCar, faCarSide, faDemocrat, faAddressBook, faAddressCard, faBell);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Memory Game!</h1>
      </header>
      <SideBar />
      <Cards />
    </div>
  );
}

export default App;
