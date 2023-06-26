import { Routes, Route } from 'react-router-dom';
import Homepage from './components/Pages/Homepage';
import SearchPage from './components/Pages/SearchPage';
import Favourites from './components/Pages/Favourites';
import Settings from './components/Pages/Settings';
import Nav from './components/Nav';
import './App.css';

const App = () => {

  return (
    <div className="App">
      <header className="appHeader"> </header>
      <main className='appMain'>

        <Routes>

          <Route path="/" element={<Homepage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="favourites" element={<Favourites />} />
          <Route path="settings" element={<Settings />} />


        </Routes>

      </main>
      <footer className='appFooter' >
        <Nav /> 
        </footer>

    </div>

  );
};

export default App;
