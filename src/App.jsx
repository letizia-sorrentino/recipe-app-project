import { Routes, Route } from 'react-router-dom';
import Homepage from './components/Pages/Homepage';
import SearchPage from './components/Pages/SearchPage';
import FavouriteRecipes from './components/Pages/FavouriteRecipes';
import Settings from './components/Pages/Settings';
import SearchResults from './components/Pages/SearchResults';
import Nav from './components/navigation/Nav';
import RecipeCard from './components/Pages/RecipeCard';
import './App.css';


const App = () => {

  return (
    <div className="App">
      <header className="appHeader"> </header>
      <main className='appMain'>

        <Routes>

          <Route path="/" element={<Homepage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="favourites" element={<FavouriteRecipes />} />
          <Route path="settings" element={<Settings />} />
          <Route path='searchResults' element={<SearchResults/>}/>
          <Route path="recipe/:id" element={<RecipeCard/>}/>


        </Routes>

      </main>
      <footer className='appFooter' >
        <Nav /> 
        </footer>

    </div>

  );
};

export default App;
