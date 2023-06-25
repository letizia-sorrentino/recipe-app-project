import { Routes, Route } from 'react-router-dom';
import Homepage from './components/Screens/Homepage';
import SearchPage from './components/Screens/SearchPage';
import Favourites from './components/Screens/Favourites';
import Settings from './components/Screens/Settings';
import Nav from './components/Nav';
import './App.css';

const App = () => {

  return (
<div className="App">
      <main className='appMain'>
        <Routes>

          <Route path="/" element={<Homepage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="favourites" element={<Favourites />} />
          <Route path="settings" element={<Settings />} />

        </Routes>

      </main>
      <footer className='appFooter'
      ><Nav /> </footer>

    </div>
    
  );
};

export default App;
