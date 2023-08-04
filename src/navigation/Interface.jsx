import React from "react";
import { Routes, Route } from "react-router-dom";
import Onboarding from "../pages/Onboarding";
import Homepage from "../pages/Homepage";
import SearchPage from "../pages/SearchPage";
import FavouriteRecipes from "../pages/FavouriteRecipes";
import Settings from "../pages/Settings";
import SearchResults from "../pages/SearchResults";
import RecipeCard from "../pages/RecipeCard";
import AccountPage from "../pages/AccountPage.jsx";
import DeleteAccountPage from "../pages/DeleteAccountPage";
import LoginPage from "../pages/LoginPage";
import LogoutPage from "../pages/LogoutPage";

const Interface = () => {
  return (
    <Routes>
      <Route path="/" element={<Onboarding />} />
      <Route path="account" element={<AccountPage />} />
      <Route path="deleteaccount" element={<DeleteAccountPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="logout" element={<LogoutPage />} />
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
