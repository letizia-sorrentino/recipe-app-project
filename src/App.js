import React, { useEffect } from 'react';
import getData from './features/recipe/recipeAPI';
import { Routes, Route } from 'react-router-dom';
// import Loading from './features/components/Loading';
import Nav from './components/Nav';
import Homepage from './components/Homepage';
import Search from './components/Search';
import Favourites from './components/Favourites';
import Settings from './components/Settings';
import './App.css';


const App = () => {
  useEffect(() => {
    getData();
  }, []); //[] means it runs once

  // //below is the return
  // if (!data) return <Loading />;
  // if (data.length === 0) return <p>Try again!</p>;

  return (
    <div className="App">
 
      <Routes>

        <Route path="/" element={<Homepage />} />
        <Route path="search" element={<Search />} />
        <Route path="favourites" element={<Favourites />} />
        <Route path="settings" element={<Settings />} />

      </Routes>

      <Nav/>

    </div>
  );
}

export default App;
