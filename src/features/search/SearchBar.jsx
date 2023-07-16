import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectSearchInput, setSearchInput } from "./searchInputManagerSlice";
import { getRecipes } from "../recipes/recipeAPI";
import { validate } from "../../validation/index";
import forwardArrow from "../../assets/forwardArrow.svg";

const SearchBar = () => {
  const searchInput = useSelector(selectSearchInput);
  const [errors, setErrors] = useState("");

  const dispatch = useDispatch();

  //Search box
  const onSearchInput = async (e) => {
    e.preventDefault();

    const input = e.target.value;
    const result = await validate({searchInput:input}, "searchRecipe");

    if (!result) {
      dispatch(setSearchInput(input));
      //console.log(input);
    }
    setErrors(result);
    //console.log(result);
  };
  return (
    <> 
    <div className="searchBarContainer">
      <input
        className="searchBar"
        type="text"
        placeholder="Search Recipes..."
        autoFocus={true}
        value={searchInput}
        onInput={onSearchInput}
      />

      <button
        className="searchButton"
        onClick={() => {
          getRecipes(searchInput);
        }}
      >
        <img className="forwardArrow" src={forwardArrow} alt="forwardArrow" />
      </button>
     
    </div>
    <div className="errorMessage"> { 
     errors && 
    <p>{errors.searchInput}</p>}</div>
    </>
  );
};

export default SearchBar;
