import { Routes, Route } from 'react-router-dom';
//import Loading from './components/Loading';
import Nav from './components/Nav';
import Homepage from './components/Homepage';
import SearchPage from './components/SearchPage';
import Favourites from './components/Favourites';
import Settings from './components/Settings';
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
}

export default App;
