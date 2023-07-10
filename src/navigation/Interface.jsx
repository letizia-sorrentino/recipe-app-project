import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Onboarding from "../pages/Onboarding";
import Homepage from "../pages/Homepage";
import SearchPage from "../pages/SearchPage";
import FavouriteRecipes from "../pages/FavouriteRecipes";
import Settings from "../pages/Settings";
import SearchResults from "../pages/SearchResults";
import RecipeCard from "../pages/RecipeCard";
import CreateAccountPage from "../pages/CreateAccountPage.jsx";

const Interface = () => {
// const navigate = useNavigate();
  return (
    //     <div>
    //     <button onClick={navigate(-1)}>Go Back</button>
    // </div>

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