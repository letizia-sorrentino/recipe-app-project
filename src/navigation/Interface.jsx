import React from "react";
import { Routes, Route } from "react-router-dom";
import Onboarding from "../pages/Onboarding";
import Homepage from "../pages/Homepage";
import SearchPage from "../pages/SearchPage";
import FavouriteRecipes from "../pages/FavouriteRecipes";
import Settings from "../pages/Settings";
import SearchResults from "../pages/SearchResults";
import RecipeCard from "../pages/RecipeCard";
import CreateAccount from "../components/CreateAccount.jsx";
import DeleteAccount from "../components/DeleteAccount";
import Login from "../components/Login";
import Logout from "../components/Logout";
import AccountPage from "../pages/AccountPage";
import LoginPage from "../pages/LoginPage";
import NewAccount from "../components/NewAccount";
import LoggedIn from "../components/LoggedIn";
import LoggedOut from "../components/LoggedOut";
import AccountDeleted from "../components/AccountDeleted";
import NotFound from "../pages/NotFound";

const Interface = () => {
  return (
    <Routes>
      <Route path="/" element={<Onboarding />} />
      <Route path="account-page" element={<AccountPage />} />
      <Route path="login-page" element={<LoginPage />} />
      <Route path="create-account" element={<CreateAccount />} />
      <Route path="new" element={<NewAccount />} />
      <Route path="delete-account" element={<DeleteAccount />} />
      <Route path="deleted" element={<AccountDeleted />} />
      <Route path="login" element={<Login />} />
      <Route path="loggedin" element={<LoggedIn />} />
      <Route path="logout" element={<Logout />} />
      <Route path="loggedout" element={<LoggedOut />} />
      <Route path="home" element={<Homepage />} />
      <Route path="search" element={<SearchPage />} />
      <Route path="favourites" element={<FavouriteRecipes />} />
      <Route path="settings" element={<Settings />} />
      <Route path="searchResults" element={<SearchResults />} />
      <Route path="recipe/:id" element={<RecipeCard />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
export default Interface;
