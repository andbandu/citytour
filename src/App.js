import React from 'react';
import './App.scss';
import NavBar from './components/navbar/Navbar'
import CityList from './components/CityList';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <CityList></CityList>
    </div>
  );
}

export default App;
