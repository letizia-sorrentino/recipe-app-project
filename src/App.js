import React, {useEffect} from 'react';
import getData from './features/recipes/recipesAPI';
//import Loading from './features/components/Loading';
import './App.css';
//import logo from './logo.svg';

const App = () => {
  useEffect(() => {
    getData();
}, []); //[] means it runs once

//below is the return
// if (!data) return <Loading />;
// if (data.length === 0) return <p>Try again!</p>;

  return (
    <div className="App">
    <h1>My Recipe App</h1>  
    </div>
  );
}

export default App;
