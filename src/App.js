import React, { useEffect } from 'react';
import getData from './features/storeRecipes/recipeAPI';
import { Routes, Route } from 'react-router-dom';
// import Loading from './features/components/Loading';
import Nav from './components/Nav';
import Homepage from './components/Homepage';
import Search from './components/Search';
import Favourites from './components/Favourites';
import Settings from './components/Settings';
import { selectRecipes } from './features/storeRecipes/storeRecipesSlice';
import { useSelector } from 'react-redux';
import './App.css';

const App = () => {

  //state hooks (destructure data from slice using useSelector)
  const allRecipes = useSelector(selectRecipes);
  //const searchInput = useSelector(selectSearchInput);
  
  //const dispatch = useDispatch();

  useEffect(() => {
    getData();
  }, []); //[] means it runs once

  console.log(allRecipes);

  // //below is the return
  // if (!data) return <Loading />;
  // if (data.length === 0) return <p>Try again!</p>;

  return (
    <div className="App">
      <main className='appMain'>
        <Routes>

          <Route path="/" element={<Homepage />} />
          <Route path="search" element={<Search />} />
          <Route path="favourites" element={<Favourites />} />
          <Route path="settings" element={<Settings />} />

        </Routes>

      </main>
      <footer className='appFooter'
      ><Nav /> </footer>

    </div>
  );
}

export default App;
