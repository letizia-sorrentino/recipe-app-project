import React from "react";
import { Routes, Route } from "react-router-dom";
import Onboarding from "../Pages/Onboarding";
import Homepage from "../Pages/Homepage";
import SearchPage from "../Pages/SearchPage";
import FavouriteRecipes from "../Pages/FavouriteRecipes";
import Settings from "../Pages/Settings";
import SearchResults from "../Pages/SearchResults";
import RecipeCard from "../Pages/RecipeCard";
import CreateAccountPage from "../Pages/CreateAccountPage.jsx";

const Interface = () => {

  return (
    <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="createAccount" element={<CreateAccountPage/>}/>
        <Route path="home" element={<Homepage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="favourites" element={<FavouriteRecipes />} />
        <Route path="settings" element={<Settings />} />
        <Route path="searchResults" element={<SearchResults />} />
        <Route path="recipe/:id" element={<RecipeCard />} />
     
    </Routes>
  );
};
export default Interface;

//      const [screenMode, setScreenMode] = useState(0);

// const onNavClick = (e) => {
//     e.preventDefault();
//     setScreenMode({screenMode: Number(e.target.id)})
// };

//       return (
//           <>
//           {screenMode === 0 && <Onboarding/> }
//           {screenMode === 1 && <Homepage/>}
//           {screenMode === 2 && <SearchPage/>}
//           {screenMode === 3 && <Favourites/>}
//           {screenMode === 4 && <Settings/>}
//           </>
//       )
