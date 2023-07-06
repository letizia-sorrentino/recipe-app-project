import Nav from "./components/navigation/Nav";
import { useEffect } from "react";
import { getRandomRecipes } from "./features/recipes/recipeAPI";
import Interface from "./components/navigation/Interface";
import "./App.css";

const App = () => {
    useEffect(() => {
      getRandomRecipes();
      console.log("useEffect run");
    }, []);

  return (
    <div className="App">

      <header className="appHeader"> </header>
      <main className="appMain">
        <Interface/>
      </main>
      <footer className="appFooter">
        <Nav/>
      </footer>
    </div>
  );
};

export default App;
