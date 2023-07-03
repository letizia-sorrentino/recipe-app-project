import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectSearchInput, setSearchInput } from "./searchInputManagerSlice";
import { getRecipes } from "../recipes/recipeAPI";
import Controls from "./Controls";

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
    <div>
      <input
        className="searchBar"
        type="text"
        placeholder="Search Recipes..."
        autoFocus={true}
        value={searchInput}
        onInput={onSearchInput}
      />

      <Controls />

      <button
        onClick={() => {
          getRecipes(searchInput);
        }}
      >
        click me
      </button>
    </div>
  );
};

export default SearchBar;
