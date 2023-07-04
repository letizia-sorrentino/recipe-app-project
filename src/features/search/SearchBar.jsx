import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectSearchInput, setSearchInput } from "./searchInputManagerSlice";
import { getRecipes } from "../recipes/recipeAPI";
import forwardArrow from "../../assets/forwardArrow.svg";
import { setQuantity } from "./searchInputManagerSlice";

const SearchBar = () => {
  const searchInput = useSelector(selectSearchInput);
  const dispatch = useDispatch();

  //Search box
  const onSearchInput = (e) => {
    e.preventDefault();
    dispatch(setSearchInput(e.target.value));
  };
  console.log(searchInput);

  return (
    <div className="searchBarContainer">
      <input
        className="searchBar"
        type="text"
        placeholder="Search Recipes..."
        autoFocus={true}
        value={searchInput}
        onInput={onSearchInput}
      />

      {/* <select
        className="selectQuantity"
        onChange={(e) => {
          setQuantity(e.target.value);
        }}
      >
        {[1, 2, 3, 4, 5].map((item) => {
          return <option value={item}>{item}</option>;
        })}
      </select> */}

      <button
        className="searchButton"
        onClick={() => {
          getRecipes(searchInput);
        }}
      >
        <img className="forwardArrow" src={forwardArrow} alt="forwardArrow" />
      </button>
    </div>
  );
};

export default SearchBar;
