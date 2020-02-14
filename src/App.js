import React from 'react';

import './App.css';
import Cards from './components/Cards/CardsContainer';
import SideBar from './components/SideBar/SideBarContainer';

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
